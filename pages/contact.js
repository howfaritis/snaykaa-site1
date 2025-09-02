import SeoHead from "../components/SeoHead";

export default function Contact() {
  return (
    <>
      <SeoHead
        title="Contact"
        description="Contact SNAYKAA — luxury skincare support, partnerships, and press."
        keywords={["contact snaykaa","customer support","H2OSKIN"]}
      />
      <div className="container prose">
        <h1>Contact</h1>
        <p><strong>Email:</strong> <a href="mailto:snaykaabrand@gmail.com">snaykaabrand@gmail.com</a></p>
        <p><strong>Social:</strong>
          {" "}
          <a href="https://www.tiktok.com/@snaykaa" target="_blank" rel="noopener">TikTok</a> /
          {" "}
          <a href="https://www.instagram.com/the_snaykaa/" target="_blank" rel="noopener">Instagram</a> /
          {" "}
          <a href="https://www.facebook.com/Snaykaa/" target="_blank" rel="noopener">Facebook</a> /
          {" "}
          <a href="https://www.youtube.com/@Snaykaa" target="_blank" rel="noopener">YouTube</a> /
          {" "}
          <a href="https://x.com/the_snaykaa" target="_blank" rel="noopener">X</a>
        </p>
      </div>
    </>
  );
}


