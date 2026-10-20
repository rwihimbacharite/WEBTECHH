import { useState } from "react";
import { ArrowUpRight, BookOpen, Menu, X } from "lucide-react";
import { books } from "../data/libraryData.js";
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

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
      </div>
      {children && <div className="heading-aside">{children}</div>}
    </div>
  );
}

function BookCard({ book, index }) {
  return (
    <article className={`book-card book-${book.color}`}>
      <div className="book-cover-wrap">
        <span className="book-number">0{index + 1}</span>
        <img src={book.cover} alt="" loading="lazy" />
        <span className="book-category">{book.category}</span>
      </div>
      <div className="book-details">
        <div>
          <h2>{book.title}</h2>
          <p className="book-author">By {book.author}</p>
          <p className="book-description">{book.description}</p>
        </div>
        <a href="/contact" aria-label={`Ask about ${book.title}`}>
          <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}

export default function BooksPage() {
  return (
    <PageLayout>
      <section className="books-section section-space">
        <div className="page-shell">
          <SectionHeading eyebrow="Picked with love" title="On our reading table.">
            <p>
              Thoughtful reads for the curious.
              <br />
              Your next favorite might be here.
            </p>
          </SectionHeading>
          <div className="book-grid">
            {books.map((book, index) => (
              <BookCard book={book} index={index} key={book.title} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
