import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import CookieConsent from "./CookieConsent";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
