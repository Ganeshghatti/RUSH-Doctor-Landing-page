import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "RUSHDR - Reach Us Seek Help Doctor",
  description:
    "The One and Only Support System for Health – by Doctors, for Patient's.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "32x32",
      },
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-primary antialiased`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
