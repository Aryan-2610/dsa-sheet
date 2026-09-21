(() => {
  const KEY = "algoladder-v1";
  const $ = (s, r = document) => r.querySelector(s);

  // ---- persisted state ----
  let state = { done: {}, flag: {}, notes: {} };
  try { Object.assign(state, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  const filters = { q: "", status: "all", diff: "all" };
  let current = Math.min(Math.max(parseInt((location.hash.match(/track-(\d+)/) || [])[1] || "1", 10) - 1, 0), TRACKS.length - 1);

  // ---- model. IDs are LeetCode slugs, so reordering data never shifts saved progress ----
  const seen = new Set();
  const model = TRACKS.map((t, ti) => ({
    ...t, ti,
    topics: t.topics.map(tp => ({
      ...tp,
      items: tp.items.map(([title, diff, slug]) => {
        if (seen.has(slug)) console.warn("Duplicate problem id:", slug);
        seen.add(slug);
        return { id: slug, title, diff, url: `https://leetcode.com/problems/${slug}/` };
      }),
    })),
  }));
  const itemsOf = t => t.topics.flatMap(tp => tp.items);
  const all = model.flatMap(itemsOf);

  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const hi = s => {
    const q = filters.q.trim(); if (!q) return esc(s);
    const i = s.toLowerCase().indexOf(q.toLowerCase());
    return i < 0 ? esc(s) : esc(s.slice(0, i)) + "<mark>" + esc(s.slice(i, i + q.length)) + "</mark>" + esc(s.slice(i + q.length));
  };
  const filtering = () => !!filters.q.trim() || filters.status !== "all" || filters.diff !== "all";
  const passes = (it, topic) => {
    const q = filters.q.trim().toLowerCase();
    if (q && !it.title.toLowerCase().includes(q) && !topic.toLowerCase().includes(q)) return false;
    if (filters.status === "done" && !state.done[it.id]) return false;
    if (filters.status === "todo" && state.done[it.id]) return false;
    if (filters.status === "flag" && !state.flag[it.id]) return false;
    return filters.diff === "all" || it.diff === filters.diff;
  };
  const count = list => list.filter(i => state.done[i.id]).length;

  const ico = {
    ext: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    flag: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 3v18M6 4h12l-2 4 2 4H6"/></svg>',
    note: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/></svg>',
  };

  // ---- render ----
  function renderOverview() {
    const done = count(all), pct = all.length ? (done / all.length) * 100 : 0;
    const lvl = d => { const a = all.filter(i => i.diff === d); return [count(a), a.length]; };
    $("#overview").innerHTML = `
      <div class="ov-top"><strong>${done}<small style="font-size:14px;color:var(--muted);font-weight:600"> / ${all.length}</small></strong><span>${Math.round(pct)}% complete</span></div>
      <div class="meter"><i style="width:${pct}%"></i></div>
      ${["Easy", "Medium", "Hard"].map(d => { const [a, b] = lvl(d); return `<div class="lvl ${d}"><span>${d}</span><div class="meter"><i style="width:${b ? (a / b) * 100 : 0}%"></i></div><b>${a}/${b}</b></div>`; }).join("")}
      <div class="ov-foot"><span>${model.length} tracks</span><span>${Object.values(state.flag).filter(Boolean).length} to revisit</span></div>`;
  }

  function renderRail() {
    $("#trackList").innerHTML = model.map(t => {
      const it = itemsOf(t), d = count(it);
      return `<button class="track ${t.ti === current && !filtering() ? "on" : ""} ${d === it.length ? "full" : ""}" data-ti="${t.ti}">
        <span class="n">${t.ti + 1}</span><span class="t">${esc(t.title)}</span><span class="c">${d}/${it.length}</span></button>`;
    }).join("");
  }

  const rowHtml = i => {
    const d = !!state.done[i.id], f = !!state.flag[i.id], n = state.notes[i.id];
    return `<li class="prob ${d ? "done" : ""}" data-id="${i.id}">
      <label class="tick"><input type="checkbox" ${d ? "checked" : ""} aria-label="Mark ${esc(i.title)} as done"><span></span></label>
      <a class="name" href="${i.url}" target="_blank" rel="noopener">${hi(i.title)}${ico.ext}</a>
      <span class="chip ${i.diff}">${i.diff}</span>
      <button class="icon flag ${f ? "on" : ""}" data-act="flag" title="Mark to revisit" aria-pressed="${f}">${ico.flag}</button>
      <button class="icon note ${n ? "on" : ""}" data-act="note" title="${n ? esc(n) : "Add a note"}">${ico.note}</button>
    </li>`;
  };

  function trackBody(t) {
    let shown = 0;
    const html = t.topics.map(tp => {
      const rows = tp.items.filter(i => passes(i, tp.name));
      if (!rows.length) return "";
      shown += rows.length;
      return `<section class="topic"><h3>${hi(tp.name)}<span>${count(tp.items)}/${tp.items.length}</span></h3><ul class="plist">${rows.map(rowHtml).join("")}</ul></section>`;
    }).join("");
    return { html, shown };
  }

  function renderPanel() {
    let out = "", shown = 0;
    if (filtering()) {
      model.forEach(t => {
        const b = trackBody(t); shown += b.shown;
        if (b.html) out += `<div class="result-group"><h2>${t.ti + 1}. ${esc(t.title)}</h2>${b.html}</div>`;
      });
    } else {
      const t = model[current], it = itemsOf(t), d = count(it), b = trackBody(t); shown = b.shown;
      out = `<div class="track-head"><div class="eyebrow">Track ${current + 1} of ${model.length}</div><h2>${esc(t.title)}</h2>
        <div class="meter"><i style="width:${(d / it.length) * 100}%"></i></div><small>${d} of ${it.length} solved</small></div>${b.html}`;
    }
    $("#panel").innerHTML = out;
    $("#empty").hidden = shown > 0;
  }

  const render = () => { renderOverview(); renderRail(); renderPanel(); };

  // ---- events ----
  $("#trackList").addEventListener("click", e => {
    const b = e.target.closest(".track"); if (!b) return;
    current = +b.dataset.ti; history.replaceState(null, "", `#track-${current + 1}`);
    filters.q = ""; $("#q").value = "";
    render(); window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("#panel").addEventListener("change", e => {
    if (e.target.type !== "checkbox") return;
    state.done[e.target.closest(".prob").dataset.id] = e.target.checked; save(); render();
  });
  $("#panel").addEventListener("click", e => {
    const b = e.target.closest(".icon"); if (!b) return;
    const id = b.closest(".prob").dataset.id;
    if (b.dataset.act === "flag") state.flag[id] = !state.flag[id];
    else {
      const v = prompt("Note for this problem:", state.notes[id] || ""); if (v === null) return;
      v.trim() ? (state.notes[id] = v.trim()) : delete state.notes[id];
    }
    save(); render();
  });
  $("#q").addEventListener("input", e => { filters.q = e.target.value; render(); });
  const pills = (id, key) => $(id).addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    filters[key] = b.dataset.v;
    $(id).querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b)); render();
  });
  pills("#statusPills", "status"); pills("#diffPills", "diff");
  $("#resetBtn").addEventListener("click", () => {
    if (confirm("Reset all progress, revisit marks and notes?")) { state = { done: {}, flag: {}, notes: {} }; save(); render(); }
  });
  $("#themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("algoladder-theme", next); } catch (e) {}
  });

  render();
})();
