import { ArrowRight } from "lucide-react";
import AboutPage from "./pages/AboutPage.jsx";
import BooksPage from "./pages/BooksPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";

const pages = {
  "/": HomePage,
  "/home": HomePage,
  "/about": AboutPage,
  "/services": ServicesPage,
  "/events": EventsPage,
  "/books": BooksPage,
  "/contact": ContactPage,
};

export default function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const Page = pages[currentPath];

  return (
    Page ? (
      <Page />
    ) : (
      <main className="not-found page-shell section-space">
        <span className="eyebrow">Page not found</span>
        <h1>We couldn’t find that page.</h1>
        <a className="button button-dark" href="/">
          Go to the home page <ArrowRight size={16} />
        </a>
      </main>
    )
  );
}
