import { useState } from "react";
import {
  ArrowBendDownLeft,
  ArrowRight,
  CheckCircle,
  Crosshair,
  EnvelopeSimple,
  FlowerLotus,
  List,
  MapPin,
  Phone,
  Plant,
  Ruler,
  Scissors,
  SunHorizon,
  TreeEvergreen,
  X,
} from "@phosphor-icons/react";

const services = [
  { name: "Snoeiwerk", description: "Snoei van struiken, bomen en vaste planten.", icon: Scissors },
  { name: "Gazon", description: "Maaien, bemesten en een strak gazon.", icon: Plant },
  { name: "Borders", description: "Onderhoud van borders, wieden en verzorgen.", icon: FlowerLotus },
  { name: "Seizoensbeurt", description: "Voorjaars- en najaarsbeurt, opruimen en klaarzetten.", icon: SunHorizon },
  { name: "Hagen", description: "Vakkundig knippen en vormen van hagen.", icon: TreeEvergreen },
];

const navItems = [
  ["Tuinonderhoud", "#tuinonderhoud"],
  ["Projecten", "#projecten"],
  ["Over mij", "#over-mij"],
  ["Contact", "#contact"],
];

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "brand--footer" : ""}`} href="#top" aria-label="de HaagBarbier, naar boven">
      <img src="/assets/logo.png" alt="de HaagBarbier — knippen en scheren van uw haag" />
    </a>
  );
}

function PhoneLink({ compact = false }) {
  return (
    <a className={`phone-link ${compact ? "phone-link--compact" : ""}`} href="tel:+31631943907">
      <Phone weight="bold" aria-hidden="true" />
      <span>
        <strong>06 31 94 39 07</strong>
        {!compact && <small>Bel of app gerust</small>}
      </span>
    </a>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X weight="bold" /> : <List weight="bold" />}
        </button>
        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Hoofdnavigatie">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <PhoneLink compact />
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <Ruler className="hero__ruler" weight="thin" aria-hidden="true" />
            <Crosshair className="hero__crosshair hero__crosshair--one" weight="thin" aria-hidden="true" />
            <Crosshair className="hero__crosshair hero__crosshair--two" weight="thin" aria-hidden="true" />
            <p className="eyebrow-script hero__note hero__note--top">
              Voor een tuin<br />die klopt
              <ArrowBendDownLeft weight="thin" aria-hidden="true" />
            </p>
            <h1 id="hero-title">Uw tuin.<span>Altijd verzorgd.</span></h1>
            <p className="hero__intro">Persoonlijk tuinonderhoud,<br />van gazon en borders tot bomen en hagen.</p>
            <div className="hero__actions">
              <a className="button button--lime" href="#contact">
                Plan een kennismaking
                <ArrowRight weight="bold" aria-hidden="true" />
              </a>
              <PhoneLink />
            </div>
            <p className="eyebrow-script hero__note hero__note--bottom">
              Nette lijnen,<br />natuurlijk resultaat
              <ArrowBendDownLeft weight="thin" aria-hidden="true" />
            </p>
          </div>
          <div className="hero__image" role="img" aria-label="Een fraai onderhouden tuin met gazon, borders, bomen en hagen" />
        </section>

        <section className="services" id="tuinonderhoud" aria-labelledby="services-title">
          <div className="section-inner">
            <p className="eyebrow-script" id="services-title">Tuinonderhoud</p>
            <div className="services__grid">
              {services.map(({ name, description, icon: Icon }) => (
                <article className="service" key={name}>
                  <Icon weight="thin" aria-hidden="true" />
                  <h2>{name}</h2>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects" id="projecten" aria-labelledby="projects-title">
          <div className="section-inner">
            <div className="projects__heading">
              <div>
                <p className="eyebrow-script">Voor en na.</p>
                <h2 id="projects-title">Projecten in de tuin</h2>
              </div>
              <p>Elke tuin, elke wens is anders.<br />Bekijk hier een greep uit recent werk.</p>
              <a className="button button--outline" href="#project-fotos">
                Bekijk meer projecten
                <ArrowRight weight="bold" aria-hidden="true" />
              </a>
            </div>

            <div className="project-pair" id="project-fotos">
              <figure>
                <img src="/assets/project-before.png" alt="Tuin voor de onderhoudsbeurt" />
                <figcaption className="eyebrow-script">Voor →</figcaption>
              </figure>
              <figure>
                <img src="/assets/project-after.png" alt="Dezelfde tuin na de onderhoudsbeurt" />
                <figcaption className="eyebrow-script">Na →</figcaption>
              </figure>
              <Ruler className="project-pair__ruler" weight="thin" aria-hidden="true" />
            </div>

            <div className="project-meta" aria-label="Projectdetails">
              <span><MapPin weight="bold" aria-hidden="true" /> Rosmalen</span>
              <span>Werkzaamheden: compleet tuinonderhoud</span>
              <span>Seizoensbeurt, snoeiwerk, gazon, borders en hagen</span>
              <span>Duur: 2,5 dag</span>
            </div>
          </div>
        </section>

        <section className="about" id="over-mij" aria-labelledby="about-title">
          <div className="section-inner about__grid">
            <figure className="portrait-card">
              <img src="/assets/giel-portrait-garden.png" alt="Giel, De HaagBarbier, met tuingereedschap in een verzorgde tuin" />
              <figcaption className="eyebrow-script">Vakwerk<br />met plezier</figcaption>
            </figure>

            <div className="about__content">
              <p className="eyebrow-script">Even voorstellen</p>
              <h2 id="about-title">De man achter<br />het <span>onderhoud</span></h2>
              <p className="about__intro">
                Ik ben Giel, de HaagBarbier. Al jaren help ik particulieren in Rosmalen en
                omgeving aan een tuin die er het hele jaar door verzorgd uitziet.
                Ik werk netjes, denk mee en laat pas los als het helemaal klopt.
              </p>
              <ul className="about__benefits">
                <li><CheckCircle weight="thin" aria-hidden="true" /><span><strong>Persoonlijk &amp; betrouwbaar</strong>Korte lijnen, duidelijke afspraken.</span></li>
                <li><CheckCircle weight="thin" aria-hidden="true" /><span><strong>Alles voor uw tuin</strong>Van snoei en gazon tot borders en seizoensbeurt.</span></li>
                <li><CheckCircle weight="thin" aria-hidden="true" /><span><strong>Netjes, natuurlijk resultaat</strong>Strak waar nodig, relaxed waar het kan.</span></li>
              </ul>
            </div>
            <Crosshair className="about__crosshair" weight="thin" aria-hidden="true" />
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="section-inner contact__grid">
            <div className="contact__title">
              <p className="eyebrow-script">Laten we kennismaken</p>
              <h2 id="contact-title">Neem<br /><span>contact op</span></h2>
            </div>
            <div className="contact__body">
              <p>Wilt u ook een tuin die er altijd verzorgd uitziet?<br />Plan een kennismaking of neem direct contact op.</p>
            </div>
            <div className="contact__items">
              <a href="tel:+31631943907">
                <Phone weight="thin" aria-hidden="true" />
                <span><small>Bel of app</small><strong>06 31 94 39 07</strong><em>Bereikbaar ma–za 07:00 – 18:00</em></span>
              </a>
              <a href="mailto:giel@dehaagbarbier.nl">
                <EnvelopeSimple weight="thin" aria-hidden="true" />
                <span><small>E-mail</small><strong>giel@dehaagbarbier.nl</strong><em>Ik antwoord zo snel mogelijk</em></span>
              </a>
              <div>
                <MapPin weight="thin" aria-hidden="true" />
                <span><small>Werkgebied</small><strong>Rosmalen<br />en omgeving</strong><em>Tot ca. 20 km van Rosmalen</em></span>
              </div>
            </div>
            <img className="contact__sketch" src="/assets/tool-sketch-v2.png" alt="" aria-hidden="true" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Brand footer />
        <nav aria-label="Voetnavigatie">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <PhoneLink compact />
      </footer>
    </div>
  );
}
