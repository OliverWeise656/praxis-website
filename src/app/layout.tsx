import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-[#F7F8F6] text-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
