import Link from "next/link";

function HomePage() {
  return (
    <div className="home-page">
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/clients">Clients Page</Link>
        </li>
        <li>
          <Link href="/blog">Blogs Page</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
