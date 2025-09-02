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
        <p>
          At <strong>SNAYKAA™</strong>, we believe beauty should be luxury made simple. Women today face
          endless routines, conflicting products, and promises that rarely deliver. Our solution:
          powerful, science-backed formulas that solve multiple concerns in one step.
        </p>

        <h2>From Problems to Solutions – The SNAYKAA™ Way</h2>
        <ul>
          <li>Fine lines &amp; wrinkles → Peptides &amp; Niacinamide boost collagen and smooth.</li>
          <li>Dull, uneven tone → Mandelic Acid &amp; Niacinamide brighten and clarify.</li>
          <li>Dryness &amp; dehydration → Hyaluronic Acid &amp; Glycerin plump and hydrate.</li>
          <li>Loss of elasticity → Peptides &amp; Antioxidants rebuild strength and bounce.</li>
          <li>Busy lifestyle → 5-in-1 Serum &amp; H₂OSKIN Cream simplify your routine.</li>
        </ul>

        <h2>Our Goal</h2>
        <p>To give every woman absurdly shameless confidence with skincare that:</p>
        <ul>
          <li>Delivers visible results fast</li>
          <li>Combines 5+ benefits in one</li>
          <li>Is luxurious, clean, and cruelty-free</li>
          <li>Turns a 10-step routine into ONE</li>
        </ul>

        <h2>Why Choose SNAYKAA™?</h2>
        <ul>
          <li>Luxury skincare simplified — fewer steps, maximum effect</li>
          <li>High-performance actives — peptides, niacinamide, hyaluronic acid, antioxidants</li>
          <li>Inclusive beauty — for all skin types and tones</li>
          <li>USA-made quality — safe, tested, premium</li>
        </ul>
      </div>
    </>
  );
}
