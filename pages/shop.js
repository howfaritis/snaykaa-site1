import { useEffect } from "react";
import SeoHead from "../components/SeoHead";

export default function Shop() {
  useEffect(() => {
    window.location.href = "https://amazon.com/snaykaa";
  }, []);
  return (
    <>
      <SeoHead title="Shop" description="Shop SNAYKAA on Amazon." />
      <div className="container prose">
        <h1>Shop</h1>
        <p>Redirecting to our Amazon store… If nothing happens, <a href="https://amazon.com/snaykaa">click here</a>.</p>
      </div>
    </>
  );
}
