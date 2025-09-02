import SeoHead from "../../components/SeoHead";
import Link from "next/link";

export default function Account() {
  return (
    <>
      <SeoHead title="My Account" />
      <div className="container prose">
        <h1>My Account</h1>
        <p>Sign up to save preferences and orders (coming soon).</p>
        <p><Link href="/account/signup">Create Account</Link> · <Link href="/account/signin">Sign In</Link></p>
      </div>
    </>
  );
}
