type users = {
  id: number;
  name: string;
};

export default async function Home() {
  // FIX: Flip the logic. Localhost for development, Vercel URL for production.
  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  const res = await fetch(`${baseUrl}/api/users`);

  // Defensive check
  if (!res.ok) {
    return <div>Failed to load users. Status: {res.status}</div>;
  }

  const data: users[] = await res.json();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      {data.map((it) => (
        <div key={it.id}>
          <h1 className="text-xl font-bold">{it.name}</h1>
        </div>
      ))}
    </div>
  );
}
