"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Compass,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import innerImage from "@/assets/images/innerImage.webp";
import outerImage from "@/assets/images/outerImage.webp";
import shadowImage from "@/assets/images/shadowImage.webp";
import skyImage from "@/assets/images/skyImage.webp";
import cloudsImage from "@/assets/images/cloudsImage.webp";

gsap.registerPlugin(ScrollTrigger);

const whatsappLink =
  "https://wa.me/5511998120451?text=Ol%C3%A1%2C%20MSI%20Turismo!%20Quero%20planejar%20minha%20pr%C3%B3xima%20viagem.";
const vipWhatsappLink =
  "https://wa.me/5511998120451?text=Ol%C3%A1%2C%20MSI%20Turismo!%20Quero%20entrar%20no%20Grupo%20VIP%20MSI.";
const phoneLink = "tel:+5511998120451";
const instagramLink = "https://www.instagram.com/msi.turismo/";

const navLinks = [
  { label: "A MSI", href: "#a-msi" },
  { label: "Viagens", href: "#viagens" },
  { label: "Grupo VIP", href: "#grupo-vip" },
  { label: "Instagram", href: "#instagram" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "#contato" },
];

const travelOffers = [
  {
    icon: Users,
    number: "01",
    eyebrow: "Para compartilhar",
    title: "Viagens em grupo",
    text: "Viaje acompanhado, conheça novos lugares e aproveite a experiência de estar com quem também ama viajar.",
    action: "Quero viajar em grupo",
  },
  {
    icon: Compass,
    number: "02",
    eyebrow: "Para sair da rotina",
    title: "Bate e volta exclusivos",
    text: "Uma pausa na rotina, com experiências para viver em um só dia e voltar já planejando a próxima.",
    action: "Conhecer os bate e volta",
  },
  {
    icon: Sparkles,
    number: "03",
    eyebrow: "Para ficar por dentro",
    title: "Grupo VIP MSI",
    text: "Faça parte de uma comunidade especial e receba promoções exclusivas e novidades em primeira mão.",
    action: "Quero entrar no Grupo VIP",
  },
];

const programming2027 = [
  { slide: "02", title: "Trem da República", date: "16/01" },
  { slide: "03", title: "Parque Maeda", date: "30/01" },
  { slide: "04", title: "Makai Resort", date: "04 a 09/03" },
  { slide: "05", title: "Cruzeiro MSC Musica", date: "22 a 26/03" },
  { slide: "06", title: "São Thomé das Letras", date: "09 a 11/04" },
  { slide: "07", title: "Maceió", date: "13 a 18/04" },
];

function BrandMark({ light = false }) {
  return (
    <span className={`msi-brand ${light ? "msi-brand--light" : ""}`}>
      <Image
        src={light ? "/brand/msi-logo-light-crop.png" : "/brand/msi-logo.svg"}
        alt="MSI Turismo"
        width={74}
        height={58}
        className="msi-brand__image"
      />
    </span>
  );
}

export default function SmoothScrollHero() {
  const scopeRef = useRef(null);
  const mainContainer = useRef(null);
  const windowRef = useRef(null);
  const contentRef = useRef(null);
  const revealRef = useRef(null);
  const cloudsRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      gsap.to(cloudsRef.current, {
        xPercent: -50,
        duration: 72,
        repeat: -1,
        ease: "none",
      });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(revealRef.current, { opacity: 1 });
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          start: "top top",
          end: "+=185%",
          scrub: 0.85,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(
          windowRef.current,
          {
            scale: 5,
            rotation: 0.01,
            force3D: true,
            duration: 10,
            ease: "power2.in",
          },
          0,
        )
        .to(
          contentRef.current,
          {
            scale: 1.5,
            opacity: 0,
            duration: 5,
            ease: "power2.in",
          },
          0,
        )
        .to(".msi-scroll-indicator", { opacity: 0, duration: 2 }, 0)
        .fromTo(
          revealRef.current,
          {
            opacity: 0,
            y: 120,
            scale: 0.88,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 7,
            ease: "power3.out",
          },
          6,
        );
    },
    { scope: scopeRef },
  );

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div ref={scopeRef} className="msi-site">
      <nav className="msi-nav" aria-label="Navegação principal">
        <a className="msi-nav__logo" href="#inicio" aria-label="MSI Turismo, início">
          <BrandMark light />
        </a>

        <div className="msi-nav__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="msi-nav__link">
              {link.label}
            </a>
          ))}
        </div>

        <a className="msi-nav__phone" href={phoneLink}>
          <Phone size={14} strokeWidth={1.7} />
          (11) 99812-0451
        </a>

        <button
          type="button"
          className="msi-menu-button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} strokeWidth={1.6} />
        </button>
      </nav>

      <div className={`msi-mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="msi-mobile-menu__backdrop" onClick={closeMenu} />
        <div className="msi-mobile-menu__panel">
          <div className="msi-mobile-menu__top">
            <BrandMark />
            <button type="button" onClick={closeMenu} aria-label="Fechar menu">
              <X size={24} strokeWidth={1.6} />
            </button>
          </div>
          <div className="msi-mobile-menu__links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <a className="msi-button msi-button--gold" href={whatsappLink} target="_blank" rel="noreferrer">
            Planejar viagem <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <section ref={mainContainer} id="inicio" className="msi-hero" aria-label="MSI Turismo">
        <div className="msi-hero__sky">
          <Image src={skyImage} alt="Céu azul visto da janela de um avião" fill priority sizes="100vw" quality={82} />
        </div>
        <div className="msi-hero__clouds" aria-hidden="true">
          <div ref={cloudsRef} className="msi-hero__cloud-track">
            <Image src={cloudsImage} alt="" width={2800} height={380} className="msi-cloud-image" quality={72} />
            <Image src={cloudsImage} alt="" width={2800} height={380} className="msi-cloud-image msi-cloud-image--mirror" quality={72} />
          </div>
        </div>
        <div className="msi-hero__shade" aria-hidden="true" />

        <div ref={windowRef} className="msi-hero__window" aria-hidden="true">
          <Image src={innerImage} alt="" fill sizes="100vw" className="msi-layer msi-layer--inner" quality={76} />
          <Image src={shadowImage} alt="" fill sizes="100vw" className="msi-layer msi-layer--shadow" quality={72} />
          <Image src={outerImage} alt="" fill sizes="100vw" className="msi-layer msi-layer--outer" quality={76} />
        </div>

        <div ref={contentRef} className="msi-hero__content">
          <div className="msi-hero__eyebrow">
            <span className="msi-eyebrow-dot" />
            Caieiras · São Paulo
          </div>
          <div className="msi-hero__headline">
            <h1>
              Sua próxima
              <br />
              história
              <br />
              <em>começa aqui.</em>
            </h1>
          </div>
          <div className="msi-hero__side-copy">
            <p>Viagens em grupo, bate e volta exclusivos e um atendimento que entende o que você procura.</p>
            <a href="#contato" className="msi-text-link msi-text-link--light">
              Quero planejar minha viagem <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="msi-scroll-indicator">
          <div className="msi-scroll-indicator__line" />
          <div className="msi-scroll-indicator__content">
            <span>
              <ChevronDown size={15} />
              Role para descobrir
            </span>
            <span>Uma nova história começa aqui</span>
          </div>
        </div>

        <div ref={revealRef} className="msi-hero__reveal">
          <p className="msi-label msi-label--light">Viajar fica melhor com companhia</p>
          <h2>Há 14 anos realizando sonhos — do primeiro contato ao embarque.</h2>
          <p className="msi-hero__reveal-text">
            Escolha como você quer viajar: em grupo, em um bate e volta exclusivo ou com as vantagens do Grupo VIP MSI.
          </p>
        </div>
      </section>

      <main>
        <section id="a-msi" className="msi-intro msi-section">
          <div className="msi-section__label">
            <span>01</span>
            <span>Sobre a MSI</span>
          </div>
          <div className="msi-intro__content">
            <div>
              <p className="msi-label">14 anos realizando sonhos</p>
              <h2>Seu próximo destino merece um atendimento à altura do seu sonho.</h2>
            </div>
            <div className="msi-intro__aside">
              <p>
                Cada pessoa viaja de um jeito. Aqui, você encontra opções para viajar acompanhado, viver uma escapada exclusiva ou receber oportunidades especiais antes de todo mundo.
              </p>
              <a href="#viagens" className="msi-text-link">
                Encontrar minha próxima viagem <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="viagens" className="msi-offers msi-section">
          <div className="msi-section__label msi-section__label--light">
            <span>02</span>
            <span>Escolha sua próxima experiência</span>
          </div>
          <div className="msi-offers__heading">
            <p className="msi-label msi-label--light">Tem uma MSI para cada jeito de viajar</p>
            <h2>Do bate e volta ao Grupo VIP: escolha como sua próxima história começa.</h2>
          </div>
          <div className="msi-offers__grid">
            {travelOffers.map(({ icon: Icon, number, eyebrow, title, text, action }) => (
              <article key={number} className="msi-offer-card">
                <div className="msi-offer-card__top">
                  <span>{number}</span>
                  <Icon size={22} strokeWidth={1.3} />
                </div>
                <p className="msi-offer-card__eyebrow">{eyebrow}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contato" className="msi-offer-card__action">
                  {action} <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="grupo-vip" className="msi-vip msi-section">
          <div className="msi-vip__topline">
            <div className="msi-section__label">
              <span>03</span>
              <span>Exclusivo MSI</span>
            </div>
            <span className="msi-vip__topline-note"><Sparkles size={14} /> Novidades em primeira mão</span>
          </div>
          <div className="msi-vip__layout">
            <div className="msi-vip__content">
              <p className="msi-label">Exclusivo para quem acompanha de perto</p>
              <h2><span className="msi-vip__title-mark">GRUPO VIP</span><span className="msi-vip__title-copy">As melhores oportunidades chegam primeiro a você.</span></h2>
              <p className="msi-vip__lead">Entre para receber promoções exclusivas, novidades e informações para escolher sua próxima viagem.</p>
              <a className="msi-button msi-button--gold" href={vipWhatsappLink} target="_blank" rel="noreferrer">
                Quero entrar no Grupo VIP <MessageCircle size={18} />
              </a>
            </div>
            <div className="msi-vip__visual" aria-hidden="true">
              <span className="msi-vip__watermark">VIP</span>
              <span className="msi-vip__visual-orbit" />
              <div className="msi-vip__seal">
                <Sparkles size={20} />
                <span>Grupo</span>
                <strong>VIP</strong>
                <small>MSI</small>
              </div>
              <span className="msi-vip__visual-note">Promoções exclusivas<br />para quem acompanha de perto <ArrowUpRight size={14} /></span>
            </div>
          </div>
          <div className="msi-vip__benefits">
            <div className="msi-vip__benefit"><span className="msi-vip__benefit-number">01</span><span className="msi-vip__benefit-label"><Sparkles size={16} /> Promoções exclusivas</span></div>
            <div className="msi-vip__benefit"><span className="msi-vip__benefit-number">02</span><span className="msi-vip__benefit-label"><MessageCircle size={16} /> Atendimento pelo WhatsApp</span></div>
            <div className="msi-vip__benefit"><span className="msi-vip__benefit-number">03</span><span className="msi-vip__benefit-label"><ArrowUpRight size={16} /> Novidades em primeira mão</span></div>
          </div>
        </section>

        <section id="instagram" className="msi-instagram msi-section">
          <div className="msi-section__label">
            <span>04</span>
            <span>Acompanhe a MSI</span>
          </div>
          <div className="msi-instagram__layout">
            <div className="msi-instagram__identity">
              <div className="msi-instagram__identity-mark" aria-hidden="true"><Instagram size={42} strokeWidth={1.2} /></div>
              <div className="msi-instagram__identity-label"><Instagram size={21} strokeWidth={1.5} /><span>Instagram oficial</span></div>
            </div>
            <div className="msi-instagram__content">
              <p className="msi-label">Inspiração para o próximo embarque</p>
              <h2>O próximo destino pode começar no seu feed.</h2>
              <p className="msi-instagram__lead">Acompanhe novidades, viagens em grupo, bate e volta e oportunidades especiais.</p>
              <a className="msi-instagram__follow" href={instagramLink} target="_blank" rel="noreferrer">
                <span>@msi.turismo</span>
                <span className="msi-instagram__follow-arrow"><ArrowUpRight size={20} /></span>
              </a>
            </div>
          </div>
          <div className="msi-instagram__rail"><span>Viagens em grupo</span><span>Bate e volta</span><span>Grupo VIP</span><span>Caieiras · SP</span></div>
          <div id="programacao-2027" className="msi-instagram__programming">
            <div className="msi-instagram__programming-head">
              <div>
                <p className="msi-label">Segundo post fixado</p>
                <h3>Programação MSI 2027</h3>
              </div>
              <p className="msi-instagram__programming-note">Uma sequência de experiências para já deixar os próximos embarques no calendário.</p>
            </div>
            <div className="msi-instagram__schedule">
              {programming2027.map(({ slide, title, date }) => (
                <article key={slide} className="msi-instagram__schedule-item">
                  <div className="msi-instagram__schedule-top"><span>Slide {slide}</span><CalendarDays size={17} strokeWidth={1.4} /></div>
                  <h4>{title}</h4>
                  <p>{date}</p>
                </article>
              ))}
            </div>
            <div className="msi-instagram__programming-footer">
              <span>Slide 08 · Encerramento</span>
              <a href={instagramLink} target="_blank" rel="noreferrer">Ver no Instagram <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="msi-blog msi-section">
          <div className="msi-section__label msi-section__label--light">
            <span>05</span>
            <span>Conteúdo para viajar melhor</span>
          </div>
          <div className="msi-blog__heading">
            <p className="msi-label msi-label--light">Diário de viagem</p>
            <h2>Ideias para escolher o próximo destino.</h2>
          </div>
          <div className="msi-blog__teaser">
            <p>Guias de destinos, ideias para bate e volta e inspirações para planejar sua próxima viagem com mais leveza.</p>
            <a className="msi-button msi-button--gold" href="/blog">
              Explorar o blog <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section className="msi-manifesto msi-section">
          <div className="msi-manifesto__stamp">14<br /><span>anos</span></div>
          <p className="msi-label">Para lembrar</p>
          <blockquote>“O melhor da viagem começa muito antes do embarque.”</blockquote>
          <p className="msi-manifesto__note">Planejamento, cuidado e espaço para aproveitar o que realmente importa.</p>
        </section>

        <section id="contato" className="msi-contact msi-section">
          <div className="msi-section__label">
            <span>06</span>
            <span>Vamos conversar</span>
          </div>
          <div className="msi-contact__grid">
            <div className="msi-contact__heading">
              <p className="msi-label">Fale com quem entende de viagem</p>
              <h2>Vamos encontrar a experiência certa para você.</h2>
              <p className="msi-contact__lead">Diga se você quer viajar em grupo, conhecer os bate e volta ou entrar no Grupo VIP. A equipe MSI está pronta para orientar você.</p>
              <a className="msi-button msi-button--navy" href={whatsappLink} target="_blank" rel="noreferrer">
                Quero falar com a MSI <MessageCircle size={18} />
              </a>
            </div>
            <div className="msi-contact__details">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="msi-contact__detail">
                <span className="msi-contact__icon"><MessageCircle size={18} strokeWidth={1.5} /></span>
                <span><small>WhatsApp</small>Atendimento para planejar sua viagem</span>
              </a>
              <a href={phoneLink} className="msi-contact__detail">
                <span className="msi-contact__icon"><Phone size={18} strokeWidth={1.5} /></span>
                <span><small>Ligue para a equipe</small>(11) 99812-0451</span>
              </a>
              <a href="https://www.google.com/maps/search/?api=1&query=R.+S%C3%A3o+Francisco%2C+101%2C+Caieiras+-+SP" target="_blank" rel="noreferrer" className="msi-contact__detail">
                <span className="msi-contact__icon"><MapPin size={18} strokeWidth={1.5} /></span>
                <span><small>Onde estamos</small>R. São Francisco, 101<br />Jardim São Francisco · Caieiras — SP</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="msi-footer">
        <div className="msi-footer__top">
          <BrandMark light />
          <p>Há 14 anos realizando sonhos.</p>
          <a href="#inicio" className="msi-footer__back">Voltar ao topo <ArrowUpRight size={16} /></a>
        </div>
        <div className="msi-footer__bottom">
          <span>Caieiras · SP</span>
          <span>Excursões · viagens em grupo · atendimento personalizado</span>
          <a href={instagramLink} target="_blank" rel="noreferrer">@msi.turismo</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>

      <a
        className="msi-whatsapp-float"
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a MSI Turismo pelo WhatsApp no número (11) 99812-0451"
      >
        <span className="msi-whatsapp-float__notice">
          <span className="msi-whatsapp-float__status" />
          Atendimento MSI
          <strong>(11) 99812-0451</strong>
        </span>
        <span className="msi-whatsapp-float__button">
          <MessageCircle size={23} strokeWidth={1.8} />
          <span>WhatsApp</span>
          <span className="msi-whatsapp-float__badge">1</span>
        </span>
      </a>
    </div>
  );
}
