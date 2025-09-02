import Link from "next/link";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead
        title="Luxury Skincare, Simplified"
        description="Two products. Endless compliments. All-In Venom 5-in-1 Serum & H₂OSKIN Cream deliver firming, brightening, hydrating results without a 10-step routine."
        image="/hero.jpg"
        keywords={["Snaykaa","H2OSKIN","peptides","niacinamide","serum","cream","luxury skincare"]}
      />

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Luxury skincare for the fearless.</h1>
            <p>Meet <strong>All-In Venom 5-in-1 Serum</strong> and <strong>H₂OSKIN Face Cream</strong> — visible results in one step.</p>
            <div className="cta-row">
              <Link className="btn btn-primary" href="/shop">Shop on Amazon</Link>
              <Link className="btn btn-outline" href="/about">About Us</Link>
            </div>
          </div>
          <div className="hero-art">
            <img src="/hero.jpg" alt="SNAYKAA products" />
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container grid-3">
          <div className="card"><h3>Firm + Smooth</h3><p>Peptides support collagen for lifted, resilient skin.</p></div>
          <div className="card"><h3>Bright + Even</h3><p>Niacinamide & gentle acids refine tone and clarity.</p></div>
          <div className="card"><h3>Deep Hydration</h3><p>Hyaluronic Acid delivers plush, lasting moisture.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>From the Blog</h2>
          <p>Guides and ingredient deep-dives from SNAYKAA.</p>
          <Link className="btn btn-outline" href="/blog">Read the Blog</Link>
        </div>
      </section>
    </>
  );
}


