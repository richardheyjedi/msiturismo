import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass, MapPin, MessageCircle, Sparkles } from "lucide-react";

import travelArticles from "@/components/travelArticles";

const pageTitle = "Blog de viagens | Dicas de destinos e roteiros | MSI Turismo";
const pageDescription =
  "Inspire-se com dicas de destinos nacionais e internacionais, bate e volta e ideias para planejar sua próxima viagem com a MSI Turismo.";
const whatsappLink =
  "https://wa.me/5511998120451?text=Ol%C3%A1%2C%20MSI%20Turismo!%20Quero%20planejar%20minha%20pr%C3%B3xima%20viagem.";

export const metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "blog de viagens",
    "dicas de destinos",
    "viagens em grupo",
    "bate e volta",
    "destinos nacionais",
    "destinos internacionais",
    "MSI Turismo",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    siteName: "MSI Turismo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
  robots: { index: true, follow: true },
};

function BlogLabel({ number, children, light = false }) {
  return (
    <div className={`msi-blog-page__label ${light ? "msi-blog-page__label--light" : ""}`}>
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default function BlogPage() {
  const [featuredArticle, ...otherArticles] = travelArticles;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de viagens MSI Turismo",
    description: pageDescription,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: "MSI Turismo",
      telephone: "+55 11 99812-0451",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. São Francisco, 101 - Jardim São Francisco",
        addressLocality: "Caieiras",
        addressRegion: "SP",
        postalCode: "07700-075",
        addressCountry: "BR",
      },
    },
    blogPost: travelArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.excerpt,
      articleSection: article.category,
      keywords: article.keywords.join(", "),
      inLanguage: "pt-BR",
    })),
  };

  return (
    <div className="msi-blog-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="msi-blog-page__hero">
        <div className="msi-blog-page__nav">
          <Link href="/" className="msi-blog-page__back">
            <ArrowLeft size={16} /> Voltar para a home
          </Link>
          <Link href="/" className="msi-blog-page__brand" aria-label="Voltar para a página inicial">
            <Image src="/brand/msi-logo-light-crop.png" alt="" width={74} height={58} priority />
          </Link>
          <a href={whatsappLink} className="msi-blog-page__contact" target="_blank" rel="noreferrer">
            Falar sobre uma viagem <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="msi-blog-page__hero-grid">
          <div>
            <p className="msi-blog-page__eyebrow"><Sparkles size={15} /> Diário de viagem</p>
            <h1>Ideias para ir mais longe.</h1>
            <p className="msi-blog-page__intro">Destinos, roteiros e pequenas inspirações para transformar a vontade de viajar no seu próximo embarque.</p>
          </div>
          <div className="msi-blog-page__hero-mark" aria-hidden="true">
            <span>MSI</span>
            <strong>14</strong>
            <small>anos realizando sonhos</small>
          </div>
        </div>
      </header>

      <main>
        <section className="msi-blog-page__articles" aria-labelledby="artigos-title">
          <div className="msi-blog-page__section-head">
            <BlogLabel number="01">Para o próximo embarque</BlogLabel>
            <h2 id="artigos-title">Conteúdos para planejar melhor.</h2>
          </div>

          <article id={featuredArticle.slug} className="msi-blog-page__featured" itemScope itemType="https://schema.org/BlogPosting">
            <div className="msi-blog-page__featured-index">{featuredArticle.number}</div>
            <div className="msi-blog-page__featured-content">
              <div className="msi-blog-page__article-meta"><span>{featuredArticle.category}</span><span>Guia de viagem</span></div>
              <h2 itemProp="headline">{featuredArticle.title}</h2>
              <p className="msi-blog-page__article-excerpt" itemProp="description">{featuredArticle.excerpt}</p>
              <div className="msi-blog-page__article-body">
                {featuredArticle.body.map((paragraph) => <p key={paragraph} itemProp="articleBody">{paragraph}</p>)}
              </div>
              <a className="msi-blog-page__article-action" href={whatsappLink} target="_blank" rel="noreferrer">
                Planejar uma viagem assim <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="msi-blog-page__featured-aside" aria-hidden="true">
              <Compass size={42} strokeWidth={1} />
              <span>Escolha<br />seu ritmo</span>
            </div>
          </article>

          <div className="msi-blog-page__grid">
            {otherArticles.map((article) => (
              <article id={article.slug} key={article.slug} className="msi-blog-page__card" itemScope itemType="https://schema.org/BlogPosting">
                <div className="msi-blog-page__card-top"><span>{article.number}</span><MapPin size={17} strokeWidth={1.4} /></div>
                <p className="msi-blog-page__card-category">{article.category}</p>
                <h2 itemProp="headline">{article.title}</h2>
                <p className="msi-blog-page__article-excerpt" itemProp="description">{article.excerpt}</p>
                <div className="msi-blog-page__article-body">
                  {article.body.map((paragraph) => <p key={paragraph} itemProp="articleBody">{paragraph}</p>)}
                </div>
                <a className="msi-blog-page__article-action" href={whatsappLink} target="_blank" rel="noreferrer">
                  Conversar sobre este destino <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="msi-blog-page__cta" aria-labelledby="blog-cta-title">
          <BlogLabel number="02" light>Da inspiração ao planejamento</BlogLabel>
          <div className="msi-blog-page__cta-content">
            <div>
              <p className="msi-blog-page__eyebrow msi-blog-page__eyebrow--gold">Atendimento personalizado</p>
              <h2 id="blog-cta-title">Já sabe para onde quer ir?</h2>
              <p>Conte para a equipe o que você está imaginando. A MSI ajuda a encontrar o jeito mais leve de viver sua próxima viagem.</p>
            </div>
            <a href={whatsappLink} className="msi-button msi-button--gold" target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Falar pelo WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="msi-blog-page__footer">
        <span>Caieiras · São Paulo</span>
        <Link href="/">MSI Turismo</Link>
        <a href="tel:+5511998120451">(11) 99812-0451</a>
      </footer>
    </div>
  );
}
