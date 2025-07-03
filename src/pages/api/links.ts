import type { APIRoute } from 'astro';

interface Link {
  label: string;
  url: string;
  icon?: string;
}

// A simple in-memory store. In a real project, replace with KV/D1 or database.
let links: Link[] = [
  { label: 'GitHub', url: 'https://github.com/yourname' },
  { label: 'Blog', url: 'https://yourblog.com' },
  { label: 'Email', url: 'mailto:you@example.com' },
];

// Optional secret for admin POST requests. Configure via PUBLIC_ADMIN_SECRET env.
const SECRET = import.meta.env.PUBLIC_ADMIN_SECRET ?? 'changeme';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ links }), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request }) => {
  const auth = request.headers.get('Authorization');
  if (auth !== `Bearer ${SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const body = await request.json();
    if (!Array.isArray(body.links)) throw new Error('Invalid body');
    links = body.links;
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(String(err?.message ?? err), { status: 400 });
  }
};