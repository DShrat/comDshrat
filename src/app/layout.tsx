import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dshrat web",
  description: "Welcome to Don's personal Website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className={inter.className}>
            {/* Google Analytics Script */}
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=G-NQ5QHFQ1QQ`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-NQ5QHFQ1QQ');
                `,
              }}
            />
          {children}
        </body>
    </html>
  );
}
