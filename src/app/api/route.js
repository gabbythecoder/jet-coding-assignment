export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postcode = searchParams.get("postcode")?.trim().toUpperCase();

  const url = `${process.env.JET_API_URL}/${encodeURIComponent(postcode)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}