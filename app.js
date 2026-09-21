(() => {
  const KEY = "algoladder-v1";
  const $ = (s, r = document) => r.querySelector(s);

  // ---- persisted state ----
  let state = { done: {}, flag: {}, notes: {} };
  try { Object.assign(state, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  // ---- Supabase sync (optional: the app still works signed-out, using localStorage only) ----
  // The publishable key is designed to be public; access is enforced by row-level security.
  const SUPABASE_URL = "https://jyzvvpcedmjwkgxdtavz.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_zegioo18aJ5-Fs82LtZNDQ_JOjWKP8m";
  const sb = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;
  let user = null;

  const rowFor = id => ({ user_id: user.id, problem_id: id, done: !!state.done[id], flag: !!state.flag[id], note: state.notes[id] || null });
  const isEmptyRow = r => !r.done && !r.flag && !r.note;
  const logErr = ({ error }) => { if (error) console.error("Sync failed:", error.message); };

  function push(id) {
    if (!sb || !user) return;
    const r = rowFor(id);
    if (isEmptyRow(r)) sb.from("progress").delete().eq("user_id", user.id).eq("problem_id", id).then(logErr);
    else sb.from("progress").upsert(r, { onConflict: "user_id,problem_id" }).then(logErr);
  }

  async function pull() {
    const { data, error } = await sb.from("progress").select("problem_id, done, flag, note");
    if (error) return console.error("Load failed:", error.message);
    const remote = new Set(data.map(r => r.problem_id));
    // Cloud wins for anything it has; progress made while signed out is uploaded.
    data.forEach(r => {
      state.done[r.problem_id] = !!r.done; state.flag[r.problem_id] = !!r.flag;
      r.note ? (state.notes[r.problem_id] = r.note) : delete state.notes[r.problem_id];
    });
    const localIds = new Set([...Object.keys(state.done), ...Object.keys(state.flag), ...Object.keys(state.notes)]);
    const extra = [...localIds].filter(id => !remote.has(id) && !isEmptyRow(rowFor(id))).map(rowFor);
    if (extra.length) sb.from("progress").upsert(extra, { onConflict: "user_id,problem_id" }).then(logErr);
    save(); render();
  }

  function renderAuth() {
    const b = $("#authBtn"); if (!b) return;
    b.hidden = !sb;
    b.textContent = user ? "Sign out" : "Sign in with Google";
    b.title = user ? `Signed in as ${user.email}` : "Sync progress across devices";
  }

  const filters = { q: "", status: "all", diff: "all" };
  let current = Math.min(Math.max(parseInt((location.hash.match(/track-(\d+)/) || [])[1] || "1", 10) - 1, 0), TRACKS.length - 1);

  // ---- model. IDs are LeetCode slugs, so reordering data never shifts saved progress ----
  const seen = new Set();
  const model = TRACKS.map((t, ti) => ({
    ...t, ti,
    topics: t.topics.map(tp => ({
      ...tp,
      items: tp.items.map(([title, diff, slug, url]) => {
        if (seen.has(slug)) console.warn("Duplicate problem id:", slug);
        seen.add(slug);
        return { id: slug, title, diff, url: url || `https://leetcode.com/problems/${slug}/`, src: url ? "GfG" : "" };
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
      ${i.src ? `<span class="src" title="Hosted on GeeksforGeeks">${i.src}</span>` : ""}
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

  // ---- LeetCode problem of the day (served by a Netlify function; hidden if unavailable) ----
  let potd = null;
  function renderPotd() {
    const box = $("#potd"); if (!box) return;
    if (!potd) { box.hidden = true; return; }
    const done = !!state.done[potd.slug];
    const when = new Date(potd.date + "T00:00:00Z").toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
    box.hidden = false;
    box.innerHTML = `<div class="potd-main">
        <div class="eyebrow">LeetCode problem of the day · ${when}</div>
        <a class="potd-title" href="${potd.url}" target="_blank" rel="noopener">${esc(potd.title)}${ico.ext}</a>
        <div class="potd-meta"><span class="chip ${potd.difficulty}">${potd.difficulty}</span>${potd.tags.slice(0, 4).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>
      <div class="potd-actions">
        <a class="solve-btn" href="${potd.url}" target="_blank" rel="noopener">Solve now</a>
        <label class="potd-done"><input type="checkbox" ${done ? "checked" : ""}> Done</label>
      </div>`;
  }
  $("#potd").addEventListener("change", e => {
    if (e.target.type !== "checkbox" || !potd) return;
    state.done[potd.slug] = e.target.checked; save(); push(potd.slug); render();
  });
  fetch("/.netlify/functions/potd").then(r => r.ok ? r.json() : Promise.reject()).then(d => { potd = d; renderPotd(); }).catch(() => {});

  const render = () => { renderOverview(); renderRail(); renderPanel(); renderPotd(); };

  // ---- events ----
  $("#trackList").addEventListener("click", e => {
    const b = e.target.closest(".track"); if (!b) return;
    current = +b.dataset.ti; history.replaceState(null, "", `#track-${current + 1}`);
    filters.q = ""; $("#q").value = "";
    render(); window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("#panel").addEventListener("change", e => {
    if (e.target.type !== "checkbox") return;
    const id = e.target.closest(".prob").dataset.id;
    state.done[id] = e.target.checked; save(); push(id); render();
  });
  $("#panel").addEventListener("click", e => {
    const b = e.target.closest(".icon"); if (!b) return;
    const id = b.closest(".prob").dataset.id;
    if (b.dataset.act === "flag") state.flag[id] = !state.flag[id];
    else {
      const v = prompt("Note for this problem:", state.notes[id] || ""); if (v === null) return;
      v.trim() ? (state.notes[id] = v.trim()) : delete state.notes[id];
    }
    save(); push(id); render();
  });
  $("#q").addEventListener("input", e => { filters.q = e.target.value; render(); });
  const pills = (id, key) => $(id).addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    filters[key] = b.dataset.v;
    $(id).querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b)); render();
  });
  pills("#statusPills", "status"); pills("#diffPills", "diff");
  $("#resetBtn").addEventListener("click", () => {
    if (confirm("Reset all progress, revisit marks and notes?")) {
      state = { done: {}, flag: {}, notes: {} }; save(); render();
      if (sb && user) sb.from("progress").delete().eq("user_id", user.id).then(logErr);
    }
  });
  $("#themeBtn").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("algoladder-theme", next); } catch (e) {}
  });

  $("#authBtn").addEventListener("click", async () => {
    if (!sb) return;
    if (user) await sb.auth.signOut();
    else logErr(await sb.auth.signInWithOAuth({ provider: "google", options: { redirectTo: location.origin + location.pathname } }));
  });
  if (sb) sb.auth.onAuthStateChange((event, session) => {
    const prev = user; user = session ? session.user : null; renderAuth();
    // Deferred: supabase-js must not be awaited inside this callback.
    if (user && !prev) setTimeout(pull, 0);
    if (!user && prev) { state = { done: {}, flag: {}, notes: {} }; save(); render(); } // don't leave the last user's data on a shared device
  });

  renderAuth();
  render();
})();
