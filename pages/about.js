import SeoHead from "../components/SeoHead";

export default function About() {
  return (
    <>
      <SeoHead
        title="About SNAYKAA™"
        description="Luxury made simple. Powerful, science-backed formulas that replace a 10-step routine with one bold step."
        keywords={["About Snaykaa","brand story","simple luxury skincare"]}
      />
      <div className="container prose">
        <h1>About Us – SNAYKAA™</h1>
        <p>At <strong>SNAYKAA™</strong>, we believe beauty should be luxury made simple. Women today face endless routines, conflicting products, and promises that rarely deliver.</p>
        <p><strong>Our solution:</strong> powerful, science-backed formulas that solve multiple concerns in one step. Designed in the USA, crafted to replace clutter with one sleek solution.</p>

        <h2>From Problems to Solutions – The SNAYKAA™ Way</h2>
        <ul>
          <li>✨ Fine lines & wrinkles → <strong>Peptides & Niacinamide</strong> boost collagen and smooth.</li>
          <li>✨ Dull, uneven tone → <strong>Mandelic Acid & Niacinamide</strong> brighten and clarify.</li>
          <li>✨ Dryness & dehydration → <strong>Hyaluronic Acid & Glycerin</strong> plump and hydrate.</li>
          <li>✨ Loss of elasticity → <strong>Peptides & Antioxidants</strong> rebuild resilience.</li>
          <li>✨ Busy lifestyle → <strong>5-in-1 Serum & H₂OSKIN Cream</strong> simplify everything to one luxury step.</li>
        </ul>

        <h2>Why Choose SNAYKAA™?</h2>
        <ul>
          <li>Luxury skincare simplified — fewer steps, maximum effect</li>
          <li>High-performance actives — peptides, niacinamide, hyaluronic acid, antioxidants</li>
          <li>Inclusive beauty — for all skin types, tones, and ages</li>
          <li>USA-made quality — clean, cruelty-free, dermatologist-inspired</li>
        </ul>
      </div>
    </>
  );
}

