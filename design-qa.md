# Design QA — De HaagBarbier onepager

**Vergelijkingsdoel**

- Source visual truth: `C:/Users/ralfs/OneDrive/Documents/ChatGPT/haagbarbier/site/reference/selected-design.png`
- Browser-rendered implementation: `http://localhost:4173/`
- Laatste implementatiescreenshot: `C:/Users/ralfs/OneDrive/Documents/ChatGPT/haagbarbier/site/design-qa-compare-final-v2.png`
- Desktop viewport voor de live pagina in de vergelijking: `1425 × 3061` CSS-px, volledige statische onepager, lichte browsermodus.
- Bronpixels: `864 × 1821`; genormaliseerd naar `432 × 910.5` in de vergelijking (`scale(.5)`).
- Implementatie: `1425 × 3061` CSS-px; genormaliseerd naar `424 × 910.8` in de vergelijking (`scale(.29755)`).
- Vergelijkingscanvas: `1100 × 1000` CSS-px; browser `devicePixelRatio: 2`. De opgeslagen browsercapture is op CSS-pixelmaat zodat de twee genormaliseerde pagina's op gelijke zichtbare hoogte zijn beoordeeld.
- State: desktop, bovenkant van de pagina, alle secties in hun standaardtoestand; daarnaast mobiel `390 × 844` met het menu open en gesloten.

**Full-view comparison evidence**

- `C:/Users/ralfs/OneDrive/Documents/ChatGPT/haagbarbier/site/design-qa-compare-final-v2.png`
- Bron en implementatie staan in één vergelijkingsbeeld, met dezelfde volledige onepager-state en genormaliseerde paginahoogte.

**Focused region comparison evidence**

- Hero: `C:/Users/ralfs/OneDrive/Documents/ChatGPT/haagbarbier/site/design-qa-focus-hero.png`
- Hero-overgang desktop: `C:/Users/ralfs/OneDrive/Documents/ChatGPT/haagbarbier/site/implementation-hero-gradient-desktop-v2.png`
- Ingezoomde hero-naad: `C:/Users/ralfs/OneDrive/Documents/ChatGPT/haagbarbier/site/implementation-hero-gradient-seam-v2.png`
- Hero-overgang mobiel: `C:/Users/ralfs/OneDrive/Documents/ChatGPT/haagbarbier/site/implementation-hero-gradient-mobile-v2.png`
- Contact en footer: `C:/Users/ralfs/OneDrive/Documents/ChatGPT/haagbarbier/site/design-qa-focus-contact-v2.png`
- Nieuw tuinportret op desktop: `C:/Users/ralfs/OneDrive/Documents/ChatGPT/haagbarbier/site/implementation-about-garden-final.png`
- Nieuw tuinportret op mobiel: `C:/Users/ralfs/OneDrive/Documents/ChatGPT/haagbarbier/site/implementation-mobile-about-garden-final.png`
- Tablet: `C:/Users/ralfs/OneDrive/Documents/ChatGPT/haagbarbier/site/implementation-tablet-contact-02.png`

**Findings**

- Geen openstaande P0-, P1- of P2-afwijkingen.
- [P3] De service-iconen gebruiken de dichtst passende Phosphor-line-iconen en zijn inhoudelijk niet identiek aan alle maatwerkillustraties in de bron. Lijndikte, kleur, schaal en ritme sluiten wel aan en de afwijking blokkeert de visuele hiërarchie niet.

**Required fidelity surfaces**

- Fonts and typography: Manrope benadert de geometrische grotesk uit de bron; Caveat verzorgt de handgeschreven annotaties. Gewichten, schaal, regelhoogtes, hoofdwrap en kleine informatietekst zijn gecontroleerd op desktop, tablet en mobiel. De hero- en contactkoppen hebben nu dezelfde twee-regelige hiërarchie als de bron.
- Spacing and layout rhythm: header, split hero, vijf servicekolommen, projectgrid, donkere persoonlijke sectie, lime contactvlak en footer volgen dezelfde volgorde en vrijwel dezelfde relatieve hoogtes. Desktop is gecontroleerd op `1440 × 1000`, tablet op `768` px breed en mobiel op `390 × 844`; er is geen horizontale overflow.
- Colors and visual tokens: het donkere evergreen, limegroen, gebroken wit en gedempte tekstkleuren volgen de bron. Randen, lijniconen, annotaties en CTA's gebruiken dezelfde tokenfamilie en contrastverdeling. De hero gebruikt op desktop een horizontale en op mobiel een verticale evergreen-naar-transparant-overgang, overeenkomstig de aangeleverde detailreferentie.
- Image quality and asset fidelity: het transparante merklogo is de aangeleverde bronasset. Hero-, voor/na-projectfoto's en gereedschapsillustratie zijn echte rasterassets met passende crop en art direction. Het aangeleverde tuinportret toont Giel in zwarte werkkleding met tuingereedschap, sluit aan op de bronfotografie en blijft scherp bij de toegepaste desktop- en mobiele uitsnede.
- Copy and content: de site positioneert De HaagBarbier als aanbieder van volledig tuinonderhoud, met hagen als één van de vijf diensten. Persoonlijke tekst en alt-tekst noemen Giel consequent. Contact- en projectcopy zijn coherent en passen zonder gebroken regels in de gecontroleerde viewports.

**Comparison history**

- [P1] Herohoofdkop brak aanvankelijk in drie regels en verloor de bronhiërarchie. Fix: tekstbreedte, lettergrootte, padding en nowrap van de gemarkeerde tweede regel aangescherpt in `src/styles.css`. Post-fix evidence: `design-qa-focus-hero.png` en `design-qa-compare-final-v2.png`.
- [P1] De contactkop brak aanvankelijk in drie regels. Fix: kopbreedte en de tweede tekstregel afgestemd op de bron. Post-fix evidence: `design-qa-focus-contact-v2.png`.
- [P2] Het e-mailadres brak bij tabletbreedte onrustig af. Fix: de contactgegevens worden onder `900px` in twee kolommen gezet en daarna op mobiel in één kolom. Post-fix evidence: `implementation-tablet-contact-02.png`.
- [P2] De desktop-contactgegevens begonnen te ver naar rechts en waren te klein ten opzichte van de bron. Fix: de gegevensrij is over de eerste twee contactkolommen gelegd, typografie is vergroot en de gereedschapsillustratie is opnieuw geschaald en uitgelijnd. Post-fix evidence: `design-qa-focus-contact-v2.png`.
- [P2] De persoonlijke sectie toonde niet de door de gebruiker aangeleverde persoon. Fix: het definitieve tuinportret staat als `public/assets/giel-portrait-garden.png` in de sectie en naam/alt-tekst zijn gelijkgetrokken. Post-fix evidence: `implementation-about-garden-final.png` en `implementation-mobile-about-garden-final.png`.
- [P2] De overgang tussen het donkere hero-vlak en de tuinfoto was te hard en vertoonde in de eerste versie nog een smalle kleurbreuk. Fix: tekstvlak en dekkend begin van de fade gebruiken nu exact hetzelfde evergreen-token; de transparantie neemt direct vanaf de naad af. De overgang loopt horizontaal op desktop en verticaal op mobiel. Post-fix evidence: `implementation-hero-gradient-desktop-v2.png`, `implementation-hero-gradient-seam-v2.png` en `implementation-hero-gradient-mobile-v2.png`.

**Primary interactions tested**

- Desktop navigatielinks naar Projecten, Over mij en Contact scrollen naar de juiste sectie.
- De primaire CTA “Plan een kennismaking” linkt naar `#contact`.
- Het mobiele menu opent met `aria-expanded="true"`, sluit na een navigatiekeuze en de contactsectie landt onder de sticky header.
- Telefoon- en e-maillinks gebruiken `tel:` en `mailto:`.
- Browserconsole gecontroleerd op waarschuwingen en fouten: geen waarschuwingen of fouten.
- Productiebuild: geslaagd.
- Sites-packagingtests: 4/4 geslaagd.

**Implementation Checklist**

- [x] Bron en implementatie in één genormaliseerde full-view vergelijking beoordeeld.
- [x] Hero en contact/footer als gefocuste regio's beoordeeld.
- [x] P0/P1/P2-verschillen verholpen en opnieuw vastgelegd.
- [x] Desktop-, tablet- en mobiele responsiviteit gecontroleerd.
- [x] Navigatie, CTA, mobiel menu, contactlinks en browserconsole gecontroleerd.
- [x] Productiebuild en packagingtests uitgevoerd.

**Follow-up Polish**

- Geen verdere beeldcorrectie nodig voor het portret.

final result: passed
