import SeoHead from "../components/SeoHead";

export default function Shop() {
  return (
    <>
      <SeoHead
        title="Shop SNAYKAA"
        description="Shop SNAYKAA luxury skincare — All-In Venom Face Serum & H₂OSKIN Face Cream. Hydrate, firm, brighten, and simplify your routine."
        keywords={[
          "Snaykaa",
          "luxury skincare",
          "H2OSKIN",
          "All-In Venom Serum",
          "face cream",
          "anti-aging",
          "hydration",
          "brightening"
        ]}
      />

      <main className="shop-page">
        <h1 className="shop-title">Shop SNAYKAA™</h1>
        <p className="shop-sub">Luxury skincare designed to simplify your routine.</p>

        <div className="product-grid">
          {/* Serum */}
          <div className="product-card">
            <img src="/serum.jpg" alt="SNAYKAA Serum" className="product-img" />
            <h2>SNAYKAA™ ALL-IN VENOM Face Serum</h2>
            <p>
              5-in-1 Multi-Benefit Serum — hydration, anti-aging, brightening,
              firming & nourishment.
            </p>
            <a
              href="https://www.amazon.com/snaykaa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
            >
              Buy on Amazon
            </a>
          </div>

          {/* Cream */}
          <div className="product-card">
            <img src="/cream.jpg" alt="SNAYKAA Cream" className="product-img" />
            <h2>SNAYKAA™ ALL-IN VENOM Face Cream H₂OSKIN</h2>
            <p>
              Luxury cream that hydrates, firms, smooths, brightens, and nourishes
              — all in one.
            </p>
            <a
              href="https://www.amazon.com/snaykaa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
            >
              Buy on Amazon
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

