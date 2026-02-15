import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Background from "../components/Background";

export default function AppLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Background />
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-24 px-4">
        {children}
      </main>

      <Footer />
    </div>
  );
}
