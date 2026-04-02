import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});
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
      <body className="min-h-dvh bg-blueGray text-white overflow-x-hidden">
          <div
            className="h-full"
            style={{
              backgroundImage: `
            radial-gradient(500px circle at right center, rgb(6, 116, 133,0.2) , transparent 80%),
            radial-gradient(500px circle at left center, rgb(6, 116, 133,0.2) , transparent 80%)
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
