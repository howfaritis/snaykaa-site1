import { useState, useEffect } from "react";

export default function Hero() {
  // your uploaded images inside /public
  const images = ["/cream.jpg", "/creambox.jpg", "/serum.jpg", "/serumbox.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        textShadow: "0px 2px 6px rgba(0,0,0,0.7)",
        transition: "background-image 1s ease-in-out"
      }}
    >
      <div>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Luxury skincare for the fearless.
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
          Meet <strong>All-In Venom Serum</strong> & <strong>H₂OSKIN Cream</strong> — visible results in one step.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <a
            href="https://amazon.com/snaykaa"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#3F2A56",
              color: "#E9E5D3",
              padding: "0.75rem 1.5rem",
              borderRadius: "50px",
              fontWeight: "bold",
              textDecoration: "none",
              marginRight: "1rem"
            }}
          >
            Shop on Amazon
          </a>
          <a
            href="/about"
            style={{
              border: "2px solid #3F2A56",
              padding: "0.75rem 1.5rem",
              borderRadius: "50px",
              fontWeight: "bold",
              textDecoration: "none",
              color: "#3F2A56",
              background: "#E9E5D3"
            }}
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}


