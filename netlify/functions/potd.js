// Returns LeetCode's current Problem of the Day. LeetCode's GraphQL API doesn't allow browser
// (CORS) requests, so the site calls this function instead. The CDN caches the response briefly.
const QUERY = `query {
  activeDailyCodingChallengeQuestion {
    date
    link
    question { title titleSlug difficulty acRate topicTags { name } }
  }
}`;

exports.handler = async () => {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "content-type": "application/json", referer: "https://leetcode.com/problemset/" },
      body: JSON.stringify({ query: QUERY }),
    });
    if (!res.ok) throw new Error("LeetCode responded " + res.status);
    const d = (await res.json()).data.activeDailyCodingChallengeQuestion;
    const q = d.question;
    return {
      statusCode: 200,
      headers: { "content-type": "application/json", "cache-control": "public, max-age=600, s-maxage=600" },
      body: JSON.stringify({
        date: d.date,
        title: q.title,
        slug: q.titleSlug,
        difficulty: q.difficulty,
        acRate: q.acRate,
        tags: q.topicTags.map(t => t.name),
        url: "https://leetcode.com" + d.link,
      }),
    };
  } catch (e) {
    return { statusCode: 502, headers: { "content-type": "application/json" }, body: JSON.stringify({ error: "potd unavailable" }) };
  }
};
