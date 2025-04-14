import "./global.css";
import "@fontsource-variable/dm-sans";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cover AI",
  description: "AI Thumbnail Image Generator",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="business"
    >
      <body>
        {/* Header */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
