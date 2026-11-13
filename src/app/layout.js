import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { Cormorant_Garamond, Great_Vibes, Jost } from "next/font/google";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footers/Footer";
import "glightbox/dist/css/glightbox.min.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export const metadata = {
  title: "Bigday Visuals — Wedding & Event Films in Pathankot",
  description: "Cinematic wedding, birthday & event films by brothers Anil & Amit Kumar. Book your big day today.",
  keywords: "wedding films, event films, birthday films, cinematic films, Pathankot, Anil Kumar, Amit Kumar, wedding photographer Pathankot, wedding videographer Punjab, pre wedding shoot Pathankot, birthday photography, cinematic wedding film",
  authors: [{ name: 'Anil Kumar' }, { name: 'Amit Kumar' }],
  creator: 'Anil Kumar & Amit Kumar',
  openGraph: {
    title: "Bigday Visuals — Wedding & Event Films in Pathankot",
    description: "Cinematic wedding, birthday & event films by brothers Anil & Amit Kumar. Book your big day today.",
    url: 'https://www.bigdayvisuals.com',
    siteName: 'Bigday Visuals',
    images: [
      {
        url: 'https://www.bigdayvisuals.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${jost.variable} ${greatVibes.variable}`}
    >
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

