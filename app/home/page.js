export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) throw new Error("Failed to fetch");
  const posts = await response.json();
  return (
    <div className="grid grid-cols-3 gap-5">
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.id}</p>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
