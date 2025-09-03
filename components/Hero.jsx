// components/Hero.jsx
import { useEffect, useMemo, useRef, useState } from "react";

export default function Hero() {
  // Images you uploaded in /public
  const images = useMemo(
    () => ["/creambox.jpg", "/cream.jpg", "/serumbox.jpg", "/serum.jpg"],
    []
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const ROTATE_MS = 4000;

  const go = (n) => setIndex(((n % images.length) + images.length) % images.length);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // auto-rotate
  useEffect(() => {
    timerRef.current = setInterval(next, ROTATE_MS);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // pause on hover/focus for better UX
  const pause = () => timerRef.current && clearInterval(timerRef.current);
  const resume = () => {
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(next, ROTATE_MS);
  };

  return (
    <section
      className="hero"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      style={{
        position: "relative",
        minHeight: "620px",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        gap: "24px",
        alignItems: "center",
        padding: "32px 16px",
      }}
    >
      {/* LEFT: copy */}
      <div className="hero-copy">
        <h1 className="hero-title">Luxury skincare for the fearless.</h1>
        <p className="hero-sub">
          Meet <strong>All-In Venom 5-in-1 Serum</strong> &{" "}
          <strong>H₂OSKIN Face Cream</strong> — visible results in one step.
        </p>
        <div className="hero-cta">
          <a
            href="https://amazon.com/snaykaa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            Shop on Amazon
          </a>
          <a href="/about" className="btn btn-outline">About Us</a>
        </div>
      </div>

      {/* RIGHT: rotating panel */}
      <div className="hero-rotator" aria-roledescription="carousel">
        {/* image */}
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url(${images[index]})`,
          }}
          role="img"
          aria-label="Product image"
        />

        {/* arrows */}
        <button
          className="hero-arrow left"
          onClick={prev}
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          className="hero-arrow right"
          onClick={next}
          aria-label="Next image"
        >
          ›
        </button>

        {/* dots */}
        <div className="hero-dots" role="tablist" aria-label="Select slide">
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to image ${i + 1}`}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
