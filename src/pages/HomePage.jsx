import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Heart,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
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
            <span className="brand-name">
              BRIGHT FUTURE LIBRARY
              <small>A welcoming place to read, learn & grow together.</small>
            </span>
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
          <span className="brand-name">
            BRIGHT FUTURE LIBRARY
            <small>A welcoming place to read, learn & grow together.</small>
          </span>
        </a>
        <p>A brighter future, one story at a time.</p>
        <a href="/">Back to home ↑</a>
        <span>© 2026 Bright Future Library</span>
      </footer>
    </>
  );
}

function Hero() {
  return (
    <section className="hero page-shell">
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="eyebrow-dot" /> A little more possibility
        </span>
        <h1>
          Your next chapter
          <br />
          <em>starts here.</em>
        </h1>
        <p>
          A welcoming place to discover a story, learn something new, and feel
          right at home. There’s a seat for everyone at Bright Future.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="/about">
            Discover your library <ArrowRight size={16} />
          </a>
          <a className="text-link" href="/events">
            See what’s on <ArrowDown size={15} />
          </a>
        </div>
        <div className="hero-note">
          <span className="avatar-stack" aria-hidden="true">
            <span>J</span>
            <span>A</span>
            <span>M</span>
          </span>
          <span>
            A friendly place for <strong>every one of us.</strong>
          </span>
        </div>
      </div>
      <div className="hero-visual">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=90"
          alt="A bright, welcoming library lined with bookshelves"
        />
        <div className="image-label">
          <span className="label-icon">
            <Heart size={17} fill="currentColor" />
          </span>
          <span>
            <strong>Made for the neighborhood</strong>
            <small>Open doors. Open minds.</small>
          </span>
        </div>
        <div className="image-index">
          01 <span /> 04
        </div>
      </div>
    </section>
  );
}

function MissionStrip() {
  return (
    <section className="mission-strip" aria-label="Our mission">
      <div className="mission-inner">
        <span className="mission-kicker">
          <Sparkles size={15} /> OUR MISSION
        </span>
        <p>
          We make room for <em>curiosity, connection,</em> and the kind of
          learning that opens up a brighter future for everyone.
        </p>
        <a href="/about" aria-label="Learn more about our mission">
          <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <MissionStrip />
      <nav className="home-links page-shell" aria-label="Explore the library">
        <a href="/about">
          Meet the library <ArrowRight size={15} />
        </a>
        <a href="/services">
          Explore library services <ArrowRight size={15} />
        </a>
        <a href="/events">
          See upcoming events <ArrowRight size={15} />
        </a>
        <a href="/books">
          Browse featured books <ArrowRight size={15} />
        </a>
        <a href="/contact">
          Get in touch <ArrowRight size={15} />
        </a>
      </nav>
    </PageLayout>
  );
}
