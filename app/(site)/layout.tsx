import "../styles/globals.css";
import Script from "next/script";
import AmplitudeInitializer from "../components/AmplitudeInitializer";
import EzoicRouteHandler from "../components/EzoicRouteHandler";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ezoic-cmp"
          data-cfasync="false"
          src="https://cmp.gatekeeperconsent.com/min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="ezoic-cmp-2"
          data-cfasync="false"
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="ezoic-standalone"
          src="//www.ezojs.com/ezoic/sa.min.js"
          strategy="afterInteractive"
        />
        <Script id="ezoic-initializer" strategy="afterInteractive">
          {`window.ezstandalone = window.ezstandalone || {};
window.ezstandalone.cmd = window.ezstandalone.cmd || [];`}
        </Script>
        <Script
          id="ezoic-analytics"
          src="//ezoicanalytics.com/analytics.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-base-100 text-base-content">
        <EzoicRouteHandler />
        <AmplitudeInitializer />
        <Navbar />
        <main className="container mx-auto px-4 lg:px-8 py-8 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
