import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/navigation-bar";

const unbounded=Unbounded({
  variable:"--font-unbounded",
  subsets:["latin",]
})
export const metadata: Metadata = {
  title: { default: "Miracle", template: "Miracle | %s" },
  description:
    "god bless this fucking app that will be the app that gonna get me the job,why? idk it looks like anycopy app but i got a feeling this will be the one",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} h-full antialiased`}
    >
      <body className="h-dvh bg-blueGray">
        <div
          className="h-full"
          style={{
            backgroundImage: `
            radial-gradient(400px circle at right center, rgb(6, 116, 133,0.3) , transparent 75%),
            radial-gradient(400px circle at left center, rgb(6, 116, 133,0.3) , transparent 75%)
          `,
            backgroundSize: "100% 900px",
            backgroundRepeat: "repeat-y",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
