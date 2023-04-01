import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title:
    "Juandev - desarrollador web , diseñador digital, desarrollador aplicaciones web",
  description:
    "desarrollador web, diseñador web, contrata un desarrollador fron-end y back-end con gran experiencia digital de sitios web",
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Juandev desarrollador web y diseñador digital",
  url: "http://juansandovalfranco.com/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          property="og:title"
          content="Juandev - desarrollador web , diseñador digital, desarrollador aplicaciones web"
        />
        <meta
          property="og:site_name"
          content="https://juansandovalfranco.com"
        />
        <meta property="og:url" content="https://juansandovalfranco.com" />
        <meta
          property="og:description"
          content="desarrollador web, diseñador web, contrata un desarrollador fron-end y back-end con gran experiencia digital de sitios web"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
      </head>
      <body className="max-w-[1500px] mx-auto">{children}</body>
    </html>
  );
}
