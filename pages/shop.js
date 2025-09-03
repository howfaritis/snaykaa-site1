// pages/shop.js
import Image from "next/image";
import Link from "next/link";
import SeoHead from "../components/SeoHead";
import products from "../data/products.json";

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
          "brightening",
        ]}
      />

      <main className="container shop">
        <h1 className="shop-title">Shop SNAYKAA™</h1>
        <p className="shop-sub">Luxury skincare designed to simplify your routine.</p>

        <div className="grid">
          {products.map((p) => (
            <article key={p.slug} className="card">
              <div className="thumb">
                <Image
                  src={`${p.image}?v=2`} // cache-bust new uploads
                  alt={p.name}
                  width={700}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority={p.slug === "all-in-venom-serum"}
                />
              </div>

              <h2>{p.name}</h2>
              {p.price && <p className="price">${p.price}</p>}

              <div className="actions">
                <Link
                  href={p.buyUrl}
                  className="btn btn-solid"
                  target="_blank"
                  rel="noopener"
                >
                  Buy on Amazon
                </Link>
                <Link href={`/product/${p.slug}`} className="btn btn-outline">
                  Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 2rem;
        }
        .card {
          border: 2px solid #3F2A56;
          border-radius: 18px;
          background: #E9E5D3;
          padding: 16px;
          text-align: center;
        }
        .thumb {
          margin-bottom: 12px;
        }
        .shop-title {
          color: #3F2A56;
          font-weight: 800;
        }
        .price {
          color: #3F2A56;
          font-weight: 700;
          margin: 6px 0 12px;
        }
        .actions {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}
