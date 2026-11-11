import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <p className="section-eyebrow">404 / PAGE NOT FOUND</p>

        <h1>
          Lost in
          <br />
          <span className="accent-text">the wrong direction.</span>
        </h1>

        <p>
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back to the portfolio.
        </p>

        <Link href="/" className="button-primary">
          Back to home <span>↗</span>
        </Link>

        <span className="not-found-code">ERROR CODE · 404</span>
      </div>
    </main>
  );
}