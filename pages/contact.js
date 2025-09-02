import SeoHead from "../components/SeoHead";

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Contact"
        description="Contact SNAYKAA — luxury skincare support, partnerships, and press."
        keywords={["contact snaykaa","customer support","luxury skincare"]}
      />
      <div className="container prose">
        <h1>Contact</h1>
        <p>Email: <a href="mailto:snaykaabrand@gmail.com">snaykaabrand@gmail.com</a></p>
        <p>Social:
          {" "}
          <a href="https://www.tiktok.com/@snaykaa" target="_blank" rel="noopener noreferrer">TikTok</a> /
          {" "}
          <a href="https://www.instagram.com/snaykaa" target="_blank" rel="noopener noreferrer">Instagram</a> /
          {" "}
          <a href="https://www.facebook.com/snaykaa" target="_blank" rel="noopener noreferrer">Facebook</a> /
          {" "}
          <a href="https://www.youtube.com/@snaykaa" target="_blank" rel="noopener noreferrer">YouTube</a> /
          {" "}
          <a href="https://x.com/the_snaykaa" target="_blank" rel="noopener noreferrer">X</a>
        </p>
      </div>
    </>
  );
}

