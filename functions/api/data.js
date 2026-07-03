export async function onRequestGet(context) {
  const saved = await context.env.COUNTDOWN.get("main");

  return Response.json(saved ? JSON.parse(saved) : null, {
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

export async function onRequestPost(context) {
  const data = await context.request.json();

  await context.env.COUNTDOWN.put("main", JSON.stringify(data));

  return Response.json({ ok: true }, {
    headers: {
      "Cache-Control": "no-store"
    }
  });
}
