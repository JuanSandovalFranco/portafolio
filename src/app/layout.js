import "./globals.css";
import { Poppins } from "next/font/google";
import { foto_me } from "assets";

const canonicalUrl =
  process.env.NODE_ENV_LOCAL === "production"
    ? process.env.HOSTNAME_PRODUCTION
    : "https://localhost:3000";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title:
    "Juan Franco desarrollador web , diseñador digital, desarrollador aplicaciones web",
  description:
    "desarrollador web, diseñador web, contrata un desarrollador fron-end y back-end con gran experiencia digital de sitios web",
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Juan Franco desarrollador web y diseñador digital, desarrollador Node y React js",
  url: canonicalUrl,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta name="robots" content="index" />
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          property="og:title"
          content="Juan Franco - desarrollador web , diseñador digital, desarrollador aplicaciones web"
        />
        <meta property="og:site_name" content={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:description"
          content="desarrollador web, diseñador web, contrata un desarrollador fron-end y back-end con gran experiencia digital de sitios web"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={foto_me.src} />
      </head>
      <body className="max-w-[1500px] mx-auto">{children}</body>
    </html>
  );
}
