import { useState } from "react";
import { ArrowUpRight, BookOpen, Menu, X } from "lucide-react";
import { navigation } from "../data/libraryData.js";

function PageLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";

  return (
    <>
      <div className="topline">
        <span>YOUR NEIGHBORHOOD PLACE TO READ, LEARN & CONNECT</span>
        <a href="/contact">Come on in <ArrowUpRight size={13} /></a>
      </div>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="/" aria-label="Bright Future Library home">
            <span className="brand-icon" aria-hidden="true"><BookOpen size={23} /><span /></span>
            <span className="brand-name">BRIGHT FUTURE LIBRARY<small>A welcoming place to read, learn & grow together.</small></span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} className={currentPath === item.href || (item.href === "/" && currentPath === "/home") ? "nav-home" : ""} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer page-shell">
        <a className="brand" href="/" aria-label="Bright Future Library home">
          <span className="brand-icon" aria-hidden="true"><BookOpen size={21} /><span /></span>
          <span className="brand-name">BRIGHT FUTURE LIBRARY<small>A welcoming place to read, learn & grow together.</small></span>
        </a>
        <p>A brighter future, one story at a time.</p>
        <a href="/">Back to home ↑</a>
        <span>© 2026 Bright Future Library</span>
      </footer>
    </>
  );
}

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="intro-section page-shell section-space">
        <div className="intro-heading">
          <span className="eyebrow">
            <span className="eyebrow-dot" /> Welcome to our library
          </span>
          <h1>Hi, neighbor!<br />Come on in.</h1>
        </div>
        <div className="intro-copy">
          <p>
            Bright Future Library is a friendly place for people of all ages to
            read, learn, and spend time together. You can borrow a book, use a
            computer, find a quiet place to study, or join one of our activities.
          </p>
          <p>
            Libraries matter because everyone deserves a chance to learn and
            connect. We bring useful resources and welcoming spaces to our
            community, and we’re happy to have you here.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
