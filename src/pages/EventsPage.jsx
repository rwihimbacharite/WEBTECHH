import { useState } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, CalendarDays, Clock3, Menu, X } from "lucide-react";
import { events } from "../data/libraryData.js";
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

export default function EventsPage() {
  return (
    <PageLayout>
      <section className="events-section page-shell section-space">
        <SectionHeading eyebrow="Put it in your diary" title="Good things are happening.">
          <a className="text-link" href="/contact">Ask about events <ArrowRight size={15} /></a>
        </SectionHeading>
        <div className="events-list">
          {events.map((event) => (
            <article className="event-row" key={event.title}>
              <div className="event-date"><strong>{event.day}</strong><span>{event.month}</span></div>
              <div className="event-info">
                <span className="event-category">{event.category}</span>
                <h2>{event.title}</h2>
                <p className="event-full-date"><CalendarDays size={13} /> {event.date}</p>
                <p>{event.detail}</p>
              </div>
              <div className="event-time"><Clock3 size={15} /> {event.time}</div>
              <a className="event-arrow" href="/contact" aria-label={`Ask us about ${event.title}`}>
                <ArrowUpRight size={18} />
              </a>
            </article>
          ))}
        </div>
        <div className="events-footnote">
          <CalendarDays size={16} /> New events are added all the time. There’s always something to look forward to.
        </div>
      </section>
    </PageLayout>
  );
}
