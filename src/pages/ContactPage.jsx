import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  Heart,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { navigation } from "../data/libraryData.js";

const initialForm = { name: "", email: "", message: "" };

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

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please enter a message.";
    }

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <PageLayout>
      <section className="visit-section page-shell">
        <div className="visit-card">
        <div className="visit-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" /> Your place is waiting
          </span>
          <h1>
            Come as you are.
            <br />
            <em>Leave inspired.</em>
          </h1>
          <p>
            Questions, book recommendations, or just want to say hello? We’d
            love to hear from you.
          </p>
          <div className="visit-details">
            <div className="detail-row">
              <MapPin size={18} />
              <div>
                <strong>Find us</strong>
                <span>KG 24 Kigali<br />Kigali, Rwanda</span>
              </div>
            </div>
            <div className="detail-row">
              <Clock3 size={18} />
              <div>
                <strong>Drop by</strong>
                <span>Monday–Friday, 9 am–6 pm<br />Saturday, 10 am–4 pm</span>
              </div>
            </div>
            <div className="detail-row">
              <Heart size={18} />
              <div>
                <strong>Get in touch</strong>
                <a href="tel:+250788888888">(250) 788-888888</a>
                <a href="mailto:hello@brightfuturelibrary.org">
                  hello@brightfuturelibrary.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>Send us a message</h2>
          <p className="form-intro">All fields are required.</p>
          <div className="form-field">
            <label htmlFor="contact-name">Full name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <span className="form-error" id="contact-name-error" role="alert">
                {errors.name}
              </span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && (
              <span className="form-error" id="contact-email-error" role="alert">
                {errors.email}
              </span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
            />
            {errors.message && (
              <span
                className="form-error"
                id="contact-message-error"
                role="alert"
              >
                {errors.message}
              </span>
            )}
          </div>
          <button className="button button-light form-submit" type="submit">
            Send message <ArrowRight size={16} />
          </button>
          {submitted && (
            <p className="form-success" role="status">
              Thanks, {form.name.trim()}! Your form is complete. This demo does
              not send messages yet.
            </p>
          )}
        </form>
        <span className="visit-decoration" aria-hidden="true">B</span>
        </div>
      </section>
    </PageLayout>
  );
}
