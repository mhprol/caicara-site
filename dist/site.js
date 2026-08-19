/* ── Caiçara Site · site.js ────────────────────────────────────────────────────
   Site institucional Caiçara Marketing Digital — React app servida via jsDelivr.
   Sem build step: escrito em React.createElement puro (sem JSX), depende do
   bundle do Design System (window.CaiAraDesignSystem_096654) e do pacote
   Lucide (window.lucide) carregados externamente.

   Source: https://github.com/mhprol/caicara-site
   Versão: 1.0.0
   ─────────────────────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  // ── 0. Configuração ──────────────────────────────────────────────────────────
  // O BASE é a URL raiz do repo (sem trailing slash) — onde estão os assets e o
  // bundle do Design System. O atributo data-base do #caicara-page sobrescreve.
  var FALLBACK_BASE = "https://cdn.jsdelivr.net/gh/mhprol/caicara-site@v1.0.1";
  var DS_NS = "CaiAraDesignSystem_096654";

  // ── 1. Helpers ──────────────────────────────────────────────────────────────
  var h = React.createElement;

  function getBase() {
    var host = document.getElementById("caicara-page") || document.getElementById("caicara-nav");
    return (host && host.getAttribute("data-base")) || FALLBACK_BASE;
  }
  function asset(p) {
    return getBase() + (p.charAt(0) === "/" ? p : "/" + p);
  }
  function el(tag, props, children) {
    var args = [tag, props || null];
    if (arguments.length > 2) {
      var rest = [];
      for (var i = 2; i < arguments.length; i++) rest.push(arguments[i]);
      args.push(rest.length === 1 ? rest[0] : rest);
    }
    return h.apply(null, args);
  }
  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) {
      var a = arguments[i];
      if (!a) continue;
      if (typeof a === "string") out.push(a);
      else if (typeof a === "object") {
        for (var k in a) if (a[k]) out.push(k);
      }
    }
    return out.join(" ");
  }
  function slug(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }
  function navigate(href) {
    if (!href) return;
    window.location.href = href;
  }
  function navigateToPage(page) {
    var href = (page === "home") ? "/" : "/" + page;
    navigate(href);
  }

  // ── 2. Icon (Lucide wrapper) ─────────────────────────────────────────────────
  function Icon(props) {
    var name = props.name, size = props.size || 20, stroke = props.stroke || 1.75;
    var color = props.color || "currentColor";
    var style = props.style || {};
    var ref = React.useRef(null);
    React.useEffect(function () {
      var L = window.lucide, host = ref.current;
      if (!L || !host) return;
      var key = name.split("-").map(function (p) { return p.charAt(0).toUpperCase() + p.slice(1); }).join("");
      host.innerHTML = "";
      var node = L.icons && (L.icons[key] || L.icons[name]);
      if (node && L.createElement) {
        var e = L.createElement(node);
        e.setAttribute("width", size);
        e.setAttribute("height", size);
        e.setAttribute("stroke-width", stroke);
        host.appendChild(e);
      } else if (L.createIcons) {
        var ph = document.createElement("i");
        ph.setAttribute("data-lucide", name);
        ph.setAttribute("width", size);
        ph.setAttribute("height", size);
        host.appendChild(ph);
        L.createIcons({ attrs: { width: size, height: size, "stroke-width": stroke } });
      }
    }, [name, size, stroke]);
    return h("span", {
      ref: ref,
      "aria-hidden": "true",
      style: { display: "inline-flex", lineHeight: 0, color: color, ...style }
    });
  }

  // ── 3. SiteLogo (BASE-aware) ─────────────────────────────────────────────────
  var LOGO_FILES = {
    "horizontal-dark": "assets/logo/caicara-horizontal-preto.png",
    "horizontal-light": "assets/logo/caicara-horizontal-branco.png",
    "horizontal-mono-dark": "assets/logo/caicara-horizontal-preto-mono.png",
    "horizontal-mono-light": "assets/logo/caicara-horizontal-branco-mono.png",
    "symbol": "assets/logo/caicara-simbolo-1024.png",
    "symbol-round": "assets/logo/caicara-simbolo-redondo.png",
    "seal": "assets/logo/caicara-selo-onda.png"
  };
  function SiteLogo(props) {
    var variant = props.variant || "horizontal-dark";
    var height = props.height || 34;
    var src = asset(LOGO_FILES[variant] || LOGO_FILES["horizontal-dark"]);
    var isSymbol = variant.indexOf("symbol") === 0 || variant === "seal";
    return h("img", {
      src: src,
      alt: "Caiçara Marketing Digital Estratégico",
      width: isSymbol ? height : undefined,
      height: height,
      loading: "lazy",
      decoding: "async",
      style: { height: height, width: isSymbol ? height : "auto", display: "block" }
    });
  }

  // ── 4. SiteNav (top navigation with real hrefs) ──────────────────────────────
  var NAV_LINKS = [
    { value: "home", label: "Início", href: "/" },
    { value: "servicos", label: "Serviços", href: "/servicos" },
    { value: "metodo", label: "Método", href: "/metodo" },
    { value: "cases", label: "Cases", href: "/cases" },
    { value: "sobre", label: "A Caiçara", href: "/sobre" },
    { value: "contato", label: "Contato", href: "/contato" }
  ];
  function SiteNav(props) {
    var active = props.active, glass = props.glass;
    var hoverRef = React.useRef(null);
    var setHover = function (v) { hoverRef.current = v; };
    var style = {
      height: 72,
      display: "flex", alignItems: "center", gap: "var(--space-8)",
      padding: "0 var(--space-6)", boxSizing: "border-box",
      position: "sticky", top: 0, zIndex: 40,
      background: glass ? "var(--glass-bg)" : "var(--surface-page)",
      backdropFilter: glass ? "var(--glass-blur)" : "none",
      WebkitBackdropFilter: glass ? "var(--glass-blur)" : "none",
      borderBottom: "1px solid " + (glass ? "rgba(253,248,242,.18)" : "var(--border-subtle)"),
      fontFamily: "var(--font-sans)"
    };
    return el("header", { className: "caicara-nav", style: style },
      h("a", {
        href: "/",
        "aria-label": "Caiçara — ir para o início",
        style: { display: "flex", alignItems: "center", flex: "0 0 auto" }
      }, h(SiteLogo, { variant: glass ? "horizontal-light" : "horizontal-dark", height: 34 })),
      el("nav", {
        "aria-label": "Navegação principal",
        style: { display: "flex", alignItems: "center", gap: "var(--space-6)", marginLeft: "auto" }
      },
        ...NAV_LINKS.map(function (l) {
          var on = l.value === active;
          return h("a", {
            key: l.value,
            href: l.href,
            "aria-current": on ? "page" : null,
            onMouseEnter: function () { setHover(l.value); },
            onMouseLeave: function () { setHover(null); },
            style: {
              fontSize: "var(--fs-sm)",
              fontWeight: on ? "var(--fw-semibold)" : "var(--fw-medium)",
              textDecoration: "none",
              letterSpacing: "var(--ls-tight)",
              color: "var(--text-heading)",
              paddingBottom: 2,
              borderBottom: "2px solid " + (on ? "var(--magenta-500)" : "transparent"),
              transition: "var(--transition-color)"
            }
          }, l.label);
        }),
        h("a", {
          href: "/contato",
          className: "caicara-cta",
          style: {
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            height: 40, padding: "0 var(--space-5)",
            background: "var(--magenta-500)", color: "var(--white)",
            borderRadius: "var(--radius-pill)",
            fontSize: "var(--fs-sm)", fontWeight: "var(--fw-semibold)",
            textDecoration: "none", letterSpacing: "var(--ls-tight)",
            boxShadow: "var(--shadow-sm)",
            transition: "var(--transition-color)"
          }
        }, "Falar com a gente")
      )
    );
  }

  // ── 5. SiteFooter (dark, deep-gradient with waterline rule) ──────────────────
  var FOOTER_COLS = [
    { title: "Serviços", links: [
      { l: "Gestão de mídias sociais", h: "/servicos" },
      { l: "Google Ads e Meta Ads", h: "/servicos" },
      { l: "Branding e identidade", h: "/servicos" },
      { l: "Automações e mensageria", h: "/servicos" },
      { l: "Perfil no Google", h: "/servicos" }
    ]},
    { title: "A Caiçara", links: [
      { l: "Quem somos", h: "/sobre" },
      { l: "Método PEMD", h: "/metodo" },
      { l: "Cases", h: "/cases" },
      { l: "Contato", h: "/contato" }
    ]},
    { title: "Legal", links: [
      { l: "Política de privacidade", h: "/politica-de-privacidade" }
    ]}
  ];
  function WaterlineRule(props) {
    var thickness = props.thickness || 3;
    return h("div", {
      role: "separator",
      style: {
        background: "var(--gradient-brand)",
        height: thickness,
        width: "100%",
        borderRadius: thickness > 2 ? "var(--radius-pill)" : 0
      }
    });
  }
  function SiteFooter() {
    return el("footer", {
      className: "on-deep",
      style: {
        background: "var(--gradient-deep)",
        position: "relative",
        marginTop: "var(--space-24)",
        color: "var(--text-inverse-muted)"
      }
    },
      h(WaterlineRule, null),
      el("div", {
        style: {
          maxWidth: "var(--container-max)", margin: "0 auto",
          padding: "var(--space-16) var(--container-gutter) var(--space-8)",
          display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "var(--space-12)"
        }
      },
        el("div", { style: { display: "flex", flexDirection: "column", gap: "var(--space-4)" } },
          h(SiteLogo, { variant: "horizontal-light", height: 32 }),
          h("p", {
            style: {
              margin: 0, fontSize: "var(--fs-sm)", lineHeight: "var(--lh-body)",
              color: "rgba(253,248,242,.7)", maxWidth: 300
            }
          }, "Seu porto seguro no marketing digital. Estratégia, criação e automação para PMEs de Santos e do litoral de São Paulo."),
          el("div", {
            style: { display: "flex", gap: "var(--space-3)", marginTop: "var(--space-2)" }
          },
            ...["instagram", "linkedin", "youtube", "facebook"].map(function (n) {
              return h("a", {
                key: n,
                href: n === "instagram" ? "https://instagram.com/caicaramarketing" : "#",
                "aria-label": n,
                rel: "noopener noreferrer",
                target: n === "instagram" ? "_blank" : null,
                style: {
                  width: 34, height: 34, borderRadius: "50%",
                  border: "1px solid rgba(253,248,242,.22)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(253,248,242,.8)"
                }
              }, h(Icon, { name: n, size: 16 }));
            })
          )
        ),
        ...FOOTER_COLS.map(function (c) {
          return el("div", {
            key: c.title,
            style: { display: "flex", flexDirection: "column", gap: "var(--space-3)" }
          },
            h("span", {
              style: {
                fontSize: "var(--fs-overline)", fontWeight: "var(--fw-semibold)",
                letterSpacing: "var(--ls-overline)", textTransform: "uppercase",
                color: "var(--cyan-300)"
              }
            }, c.title),
            ...c.links.map(function (lk) {
              return h("a", {
                key: lk.l,
                href: lk.h,
                style: {
                  fontSize: "var(--fs-sm)",
                  color: "rgba(253,248,242,.72)",
                  textDecoration: "none"
                }
              }, lk.l);
            })
          );
        })
      ),
      el("div", {
        style: {
          maxWidth: "var(--container-max)", margin: "0 auto",
          padding: "var(--space-6) var(--container-gutter)",
          borderTop: "1px solid rgba(253,248,242,.12)",
          display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-4)",
          fontFamily: "var(--font-mono)", fontSize: "var(--fs-caption)",
          color: "rgba(253,248,242,.55)"
        }
      },
        h("span", null, "caicaramarketing.com.br · (13) 97806-2772 · Santos, SP"),
        h("span", null, "© 2026 Caiçara Marketing Digital Estratégico")
      )
    );
  }

  // ── 6. DS access (with retry for slow loads) ─────────────────────────────────
  function getDS() {
    var tries = 0;
    return new Promise(function (resolve) {
      (function attempt() {
        var ds = window[DS_NS];
        if (ds && ds.NavBar && ds.Button && ds.Card) return resolve(ds);
        if (tries++ > 100) return resolve(null);
        setTimeout(attempt, 60);
      })();
    });
  }

  // ── 7. Shared content blocks ─────────────────────────────────────────────────
  // Overline component (eyebrow text in caps with letter spacing)
  function Overline(props) {
    return h("div", {
      style: {
        fontSize: "var(--fs-overline)",
        fontWeight: "var(--fw-semibold)",
        letterSpacing: "var(--ls-overline)",
        textTransform: "uppercase",
        color: props.color || "var(--text-accent)",
        marginBottom: "var(--space-3)"
      }
    }, props.children);
  }
  // Container that caps width
  function Container(props) {
    return el("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-gutter)"
      }
    },
      ...(Array.isArray(props.children) ? props.children : [props.children])
    );
  }
  // SectionSpacing (top + bottom rhythm)
  function Section(props) {
    var style = props.style || {};
    return el("section", {
      style: Object.assign({
        padding: "var(--section-y) 0",
        background: props.alt ? "var(--surface-page-alt)" : "transparent"
      }, style)
    },
      h(Container, null, props.children)
    );
  }

  // ── 8. Pages ────────────────────────────────────────────────────────────────

  // ─── 8.1 Home ───────────────────────────────────────────────────────────────
  function PageHome(props) {
    var DS = props.DS;
    var PhotoHero = DS.PhotoHero, SectionHeading = DS.SectionHeading;
    var ServiceCard = DS.ServiceCard, StatBlock = DS.StatBlock;
    var TestimonialCard = DS.TestimonialCard, CTAPanel = DS.CTAPanel;
    var Button = DS.Button;

    var SERVICES = [
      { icon: "trending-up", title: "Google Ads e Meta Ads", desc: "Campanhas otimizadas para reduzir o custo por lead e levar o anúncio certo para a pessoa certa.", meta: "Relatório mensal · KPIs claros", accent: "magenta" },
      { icon: "instagram", title: "Gestão de mídias sociais", desc: "Conteúdo com foco em engajamento e construção de comunidade, no seu tom de voz.", meta: "Calendário editorial · 5 linhas", accent: "cyan" },
      { icon: "compass", title: "Branding e identidade", desc: "Posicionamento, identidade visual e narrativa — a marca que sustenta a performance.", meta: "Bússola de posicionamento", accent: "violet" },
      { icon: "workflow", title: "Automações e mensageria", desc: "WhatsApp, Instagram DM, e-mail e SMS conversando no mesmo painel, sem lead esquecido.", meta: "Portal Caiçara", accent: "cyan" },
      { icon: "map-pin", title: "Perfil no Google", desc: "Otimização do Perfil da Empresa para quem busca serviço perto de casa, em Santos e região.", meta: "Busca local · avaliações", accent: "magenta" },
      { icon: "sparkles", title: "BOT Criativo", desc: "Um assistente de IA configurado com o Guia Estratégico da sua marca: produz no seu tom, em escala.", meta: "5 pilares · setup em 2 etapas", accent: "violet" }
    ];
    var STEPS = [
      ["Setup", "Acessos, ferramentas e medição no lugar. Sem dado, não há rota."],
      ["Onde estamos", "Diagnóstico honesto de marca, presença e funil."],
      ["Para onde vamos", "Metas, personas e a definição do que é sucesso."],
      ["Como vamos chegar lá", "O plano de 90 dias, com responsáveis e prazos."]
    ];
    var TESTIMONIALS = [
      { q: "Estávamos navegando em águas turbulentas. Em três meses, a agenda encheu.", a: "Camila Prol", r: "Lumen Iluminação", img: asset("assets/imagery/camila-caicara.png") },
      { q: "O trabalho em equipe é a chave para alcançar grandes conquistas.", a: "Equipe Caiçara", r: null, img: null, variant: "deep", align: "right" },
      { q: "Pela primeira vez eu sei exatamente para onde vai cada real investido.", a: "Matheus Prol", r: "Food & Health", img: asset("assets/imagery/matheus-caicara.webp") }
    ];

    return el(React.Fragment, null,
      h(PhotoHero, {
        imageSrc: asset("assets/photography/farol-ao-por-do-sol.webp"),
        overline: "Santos · SP · Brasil",
        title: "Seu porto seguro no",
        emphasis: "marketing digital",
        lead: "Estratégias personalizadas e amparadas em IA para PMEs que querem crescer no litoral — e além. Branding e performance no mesmo plano.",
        actions: el(React.Fragment, null,
          h(Button, { size: "lg", onClick: function () { navigateToPage("contato"); } }, "Agendar diagnóstico"),
          h(Button, { size: "lg", variant: "outline", onClick: function () { navigateToPage("cases"); } }, "Ver cases")
        )
      }),

      h(Section, { style: { padding: "var(--space-16) 0" } },
        el("div", { style: { display: "flex", gap: "var(--space-12)", flexWrap: "wrap", justifyContent: "space-between" } },
          h(StatBlock, { value: "+30%", label: "em vendas", note: "em 3 meses · varejo local" }),
          h(StatBlock, { accent: "cyan", value: "1.000+", label: "leads qualificados", note: "em uma única campanha" }),
          h(StatBlock, { accent: "violet", value: "4", label: "etapas do método PEMD", note: "do diagnóstico ao destino" }),
          h(StatBlock, { value: "13", label: "DDD de origem", note: "nascida em Santos, atende o Brasil" })
        )
      ),

      h(Section, { alt: true },
        el(React.Fragment, null,
          h(SectionHeading, { overline: "Serviços", title: "Tudo que o seu negócio precisa para", emphasis: "navegar longe",
            lead: "Marca sem resultado é enfeite. Resultado sem marca não se sustenta. Aqui os dois andam juntos." }),
          el("div", {
            style: {
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--space-6)", marginTop: "var(--space-12)"
            }
          },
            ...SERVICES.map(function (s) {
              return h(ServiceCard, {
                key: s.title, accent: s.accent,
                icon: h(Icon, { name: s.icon, size: 22 }),
                title: s.title, description: s.desc, meta: s.meta,
                onClick: function () { navigateToPage("servicos"); }
              });
            })
          )
        )
      ),

      h(Section, null,
        el("div", { style: { display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "var(--space-16)", alignItems: "center" } },
          el("div", { style: { position: "relative" } },
            h("img", {
              src: asset("assets/photography/bussola.webp"),
              alt: "Bússola sobre carta náutica",
              style: {
                width: "100%", height: 420, objectFit: "cover",
                borderRadius: "var(--radius-lg)",
                borderTopLeftRadius: "var(--radius-sail)"
              }
            })
          ),
          el("div", null,
            h(SectionHeading, {
              overline: "Método PEMD",
              title: "Do diagnóstico ao destino, em quatro etapas",
              lead: "Nada de pacote genérico. Antes de propor qualquer coisa, a gente mergulha fundo para entender onde você está."
            }),
            el("div", { style: { display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-8)" } },
              ...STEPS.map(function (s, i) {
                return el("div", { key: s[0], style: { display: "flex", gap: "var(--space-4)", alignItems: "flex-start" } },
                  el("span", {
                    style: {
                      flex: "0 0 32px", width: 32, height: 32, borderRadius: "50%",
                      background: i === 0 ? "var(--magenta-500)" : "var(--surface-accent-soft)",
                      color: i === 0 ? "#fff" : "var(--magenta-700)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-mono)", fontSize: "var(--fs-caption)", fontWeight: 500
                    }
                  }, "0" + (i + 1)),
                  el("div", null,
                    h("div", { style: { fontSize: "var(--fs-base)", fontWeight: "var(--fw-semibold)", color: "var(--text-heading)" } }, s[0]),
                    h("div", { style: { fontSize: "var(--fs-sm)", color: "var(--text-body)", lineHeight: "var(--lh-body)", marginTop: 2 } }, s[1])
                  )
                );
              })
            ),
            h(Button, { variant: "outline", style: { marginTop: "var(--space-8)" }, onClick: function () { navigateToPage("metodo"); } }, "Conhecer o método")
          )
        )
      ),

      h(Section, { alt: true },
        el(React.Fragment, null,
          h(SectionHeading, { overline: "Histórias à beira-mar", title: "Quem já içou as velas com a gente", align: "center" }),
          el("div", {
            style: {
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--space-6)", marginTop: "var(--space-12)", alignItems: "stretch"
            }
          },
            h(TestimonialCard, { quote: TESTIMONIALS[0].q, author: TESTIMONIALS[0].a, role: TESTIMONIALS[0].r, avatarSrc: TESTIMONIALS[0].img }),
            h(TestimonialCard, { variant: "deep", align: "right", quote: TESTIMONIALS[1].q, author: TESTIMONIALS[1].a }),
            h(TestimonialCard, { quote: TESTIMONIALS[2].q, author: TESTIMONIALS[2].a, role: TESTIMONIALS[2].r, avatarSrc: TESTIMONIALS[2].img })
          )
        )
      ),

      el("div", { style: { padding: "0 var(--container-gutter)" } },
        h(CTAPanel, {
          overline: "Vamos navegar",
          title: "Pronto para içar as velas?",
          lead: "Um diagnóstico de 30 minutos e você sai com a rota dos próximos 90 dias. Sem compromisso, sem jargão.",
          primary: { label: "Agendar diagnóstico", onClick: function () { navigateToPage("contato"); } },
          secondary: { label: "Falar no WhatsApp" },
          imageSrc: asset("assets/photography/farol-aceso-ceu-estrelado.webp")
        })
      )
    );
  }

  // ─── 8.2 Serviços ───────────────────────────────────────────────────────────
  function PageServicos(props) {
    var DS = props.DS;
    var SectionHeading = DS.SectionHeading, ServiceCard = DS.ServiceCard;
    var Card = DS.Card, Button = DS.Button, Badge = DS.Badge, Tabs = DS.Tabs;

    var PACKS = [
      { name: "Farol", tag: "Presença", price: "a partir de R$ 1.490/mês",
        items: ["Gestão de 2 redes sociais", "12 peças por mês", "Perfil no Google otimizado", "Relatório mensal"],
        accent: "cyan" },
      { name: "Bússola", tag: "Presença + Performance", price: "a partir de R$ 2.890/mês",
        items: ["Tudo do Farol", "Google Ads e Meta Ads", "Landing page de captação", "Automação de WhatsApp", "Reunião estratégica quinzenal"],
        accent: "magenta", featured: true },
      { name: "Leme", tag: "Operação completa", price: "sob consulta",
        items: ["Tudo da Bússola", "BOT Criativo configurado", "Portal Caiçara com mensageria", "Branding e identidade visual", "Squad dedicado"],
        accent: "violet" }
    ];
    var ALL = [
      { icon: "trending-up", cat: "Performance", title: "Google Ads e Meta Ads", desc: "Estruturação de campanha, criativos e otimização semanal para reduzir o custo por lead.", meta: "Performance", accent: "magenta" },
      { icon: "instagram", cat: "Conteúdo", title: "Gestão de mídias sociais", desc: "Linha editorial, calendário e produção. As 5 linhas da Caiçara adaptadas ao seu negócio.", meta: "Conteúdo", accent: "cyan" },
      { icon: "compass", cat: "Marca", title: "Branding e identidade", desc: "Bússola de posicionamento, arquétipos, tom de voz e identidade visual completa.", meta: "Marca", accent: "violet" },
      { icon: "workflow", cat: "Automação", title: "Automações e mensageria", desc: "Fluxos de resposta, distribuição de leads e follow-up automático em todos os canais.", meta: "Automação", accent: "cyan" },
      { icon: "map-pin", cat: "Performance", title: "Perfil no Google", desc: "Ficha completa, fotos, categorias e gestão de avaliações para busca local.", meta: "Performance", accent: "magenta" },
      { icon: "sparkles", cat: "Automação", title: "BOT Criativo", desc: "Assistente de IA treinado no Guia Estratégico da sua marca — conteúdo em escala, no seu tom.", meta: "Automação", accent: "violet" },
      { icon: "search", cat: "Performance", title: "SEO e conteúdo de blog", desc: "Pauta baseada nas dúvidas reais do seu cliente. They Ask, You Answer aplicado.", meta: "Performance", accent: "cyan" },
      { icon: "presentation", cat: "Marca", title: "Consultoria estratégica", desc: "Método PEMD aplicado ao seu negócio, com plano de 90 dias e acompanhamento.", meta: "Marca", accent: "magenta" }
    ];

    var tabHook = React.useState("Todos");
    var tab = tabHook[0], setTab = tabHook[1];
    var shown = tab === "Todos" ? ALL : ALL.filter(function (s) { return s.cat === tab; });

    return el(React.Fragment, null,
      h(Section, { style: { padding: "var(--space-20) 0 var(--space-8)" } },
        h(SectionHeading, { overline: "Serviços", title: "Escolha a rota. A gente", emphasis: "assume o timão",
          lead: "Cada serviço existe para resolver uma dor concreta que ouvimos de comerciantes, prestadores e empreendedores do litoral." })
      ),
      h(Section, { style: { paddingBottom: "var(--section-y)" } },
        h(Tabs, { items: ["Todos", "Performance", "Conteúdo", "Marca", "Automação"], value: tab, onChange: setTab }),
        el("div", {
          style: {
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-6)", marginTop: "var(--space-8)"
          }
        },
          ...shown.map(function (s) {
            return h(ServiceCard, {
              key: s.title, accent: s.accent,
              icon: h(Icon, { name: s.icon, size: 22 }),
              title: s.title, description: s.desc, meta: s.meta
            });
          })
        )
      ),
      h(Section, { alt: true },
        el(React.Fragment, null,
          h(SectionHeading, { align: "center", overline: "Pacotes", title: "Três embarcações, o mesmo destino",
            lead: "Comece pelo que cabe agora. Trocar de pacote é conversa, não contrato novo." }),
          el("div", {
            style: {
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--space-6)", marginTop: "var(--space-12)", alignItems: "stretch"
            }
          },
            ...PACKS.map(function (p) {
              return h(Card, {
                key: p.name, padding: "0",
                style: {
                  overflow: "hidden", display: "flex", flexDirection: "column",
                  border: p.featured ? "2px solid var(--magenta-500)" : undefined,
                  boxShadow: p.featured ? "var(--shadow-lg)" : undefined
                }
              },
                p.featured ? h(WaterlineRule, null) : null,
                el("div", { style: { padding: "var(--space-8)", display: "flex", flexDirection: "column", gap: "var(--space-4)", flex: 1 } },
                  el("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
                    h("h3", {
                      style: {
                        margin: 0, fontFamily: "var(--font-display)",
                        fontSize: "var(--fs-3xl)", fontWeight: "var(--fw-bold)",
                        color: "var(--text-heading)"
                      }
                    }, p.name),
                    h(Badge, { tone: p.accent }, p.tag)
                  ),
                  h("div", {
                    style: {
                      fontFamily: "var(--font-mono)", fontSize: "var(--fs-sm)",
                      color: "var(--text-accent)"
                    }
                  }, p.price),
                  el("div", {
                    style: { display: "flex", flexDirection: "column", gap: "var(--space-3)", flex: 1, marginTop: "var(--space-2)" }
                  },
                    ...p.items.map(function (it) {
                      return el("div", {
                        key: it,
                        style: {
                          display: "flex", gap: "var(--space-3)", alignItems: "flex-start",
                          fontSize: "var(--fs-sm)", color: "var(--text-body)"
                        }
                      },
                        h("span", { style: { color: "var(--cyan-500)", marginTop: 1 } }, h(Icon, { name: "check", size: 16 })),
                        it
                      );
                    })
                  ),
                  h(Button, {
                    variant: p.featured ? "primary" : "outline",
                    fullWidth: true,
                    onClick: function () { navigateToPage("contato"); },
                    style: { marginTop: "var(--space-4)" }
                  }, p.featured ? "Começar pela Bússola" : "Falar sobre o " + p.name)
                )
              );
            })
          )
        )
      )
    );
  }

  // ─── 8.3 Método PEMD ────────────────────────────────────────────────────────
  function PageMetodo(props) {
    var DS = props.DS;
    var SectionHeading = DS.SectionHeading, Card = DS.Card;
    var Button = DS.Button, Badge = DS.Badge, CTAPanel = DS.CTAPanel;

    var STEPS = [
      { n: "01", t: "Setup", d: "Acessos, ferramentas e medição no lugar. Instalamos o que falta e ligamos o painel — sem dado confiável não existe rota.", out: "Painel de métricas ativo", img: "assets/photography/ancora-na-proa.webp" },
      { n: "02", t: "Onde estamos", d: "Diagnóstico honesto de marca, presença digital e funil. Mergulhamos fundo, inclusive no que não está funcionando.", out: "Diagnóstico + benchmark", img: "assets/photography/bussola.webp" },
      { n: "03", t: "Para onde vamos", d: "Metas, personas e a definição clara do que é sucesso nos próximos 90 dias. Você aprova antes de a gente executar.", out: "Bússola de posicionamento", img: "assets/photography/mapa-navegacao-estilizado.webp" },
      { n: "04", t: "Como vamos chegar lá", d: "O plano com responsáveis, prazos e orçamento. Depois é execução, medição e ajuste de vela conforme o vento.", out: "Plano de 90 dias", img: "assets/photography/veleiro-vela-vermelha.webp" }
    ];
    var PERSONAS = [
      { t: "O Empreendedor Visionário", q: "Tem uma ideia brilhante, mas precisa de um mapa para navegar até o tesouro.", icon: "rocket", accent: "magenta" },
      { t: "O Comerciante Local", q: "Quer atrair mais clientes para a loja, mas se sente preso em um porto sem movimento.", icon: "store", accent: "cyan" },
      { t: "O Prestador de Serviços", q: "Oferece um serviço de qualidade, mas precisa de um farol para ser visto em meio à multidão.", icon: "lightbulb", accent: "violet" }
    ];

    var openHook = React.useState("01");
    var open = openHook[0], setOpen = openHook[1];

    return el(React.Fragment, null,
      h(Section, { style: { padding: "var(--space-20) 0 var(--space-12)" } },
        h(SectionHeading, { overline: "Método PEMD", title: "Do diagnóstico ao destino:", emphasis: "um mapa completo",
          lead: "O PEMD é o jeito Caiçara de trabalhar. Quatro etapas, na ordem, sempre — porque plano sem diagnóstico é chute com apresentação bonita." })
      ),
      h(Section, { style: { paddingBottom: "var(--section-y)" } },
        el("div", { style: { display: "flex", flexDirection: "column", gap: "var(--space-3)" } },
          ...STEPS.map(function (s) {
            var on = open === s.n;
            return h(Card, {
              key: s.n, padding: "0", interactive: true,
              onClick: function () { setOpen(s.n); },
              style: { overflow: "hidden", borderColor: on ? "var(--magenta-200)" : undefined }
            },
              el("div", { style: { display: "flex", alignItems: "stretch" } },
                el("div", {
                  style: {
                    flex: "0 0 96px",
                    background: on ? "var(--gradient-deep)" : "var(--surface-card-muted)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-mono)", fontSize: "var(--fs-2xl)",
                    color: on ? "var(--sand-500)" : "var(--text-muted)"
                  }
                }, s.n),
                el("div", { style: { flex: 1, padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-2)" } },
                  el("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-4)" } },
                    h("h3", {
                      style: {
                        margin: 0, fontSize: "var(--fs-xl)", fontWeight: "var(--fw-semibold)",
                        color: "var(--text-heading)", letterSpacing: "var(--ls-tight)"
                      }
                    }, s.t),
                    h(Badge, { tone: on ? "magenta" : "neutral" }, s.out),
                    h("span", {
                      style: {
                        marginLeft: "auto", color: "var(--text-muted)",
                        transform: on ? "rotate(180deg)" : "none",
                        transition: "transform var(--dur-base) var(--ease-out)"
                      }
                    }, h(Icon, { name: "chevron-down", size: 18 }))
                  ),
                  on ? h("p", {
                    style: {
                      margin: 0, fontSize: "var(--fs-base)", lineHeight: "var(--lh-body)",
                      color: "var(--text-body)", maxWidth: 680
                    }
                  }, s.d) : null
                ),
                on ? h("img", {
                  src: asset(s.img), alt: "",
                  style: { flex: "0 0 200px", width: 200, objectFit: "cover", display: "block" }
                }) : null
              )
            );
          })
        )
      ),
      h(Section, { alt: true },
        el(React.Fragment, null,
          h(SectionHeading, { overline: "Para quem", title: "Três tripulações, um litoral",
            lead: "A Caiçara nasceu para PMEs de Santos e da Baixada. Se você se reconhece em uma destas descrições, a conversa vai render." }),
          el("div", {
            style: {
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: "var(--space-6)", marginTop: "var(--space-12)"
            }
          },
            ...PERSONAS.map(function (p) {
              return h(Card, {
                key: p.t,
                style: { display: "flex", flexDirection: "column", gap: "var(--space-4)" }
              },
                el("span", {
                  style: {
                    width: 44, height: 44, borderRadius: "var(--radius-md)",
                    background: p.accent === "cyan" ? "var(--surface-cyan-soft)" : p.accent === "violet" ? "var(--surface-violet-soft)" : "var(--surface-accent-soft)",
                    color: p.accent === "cyan" ? "var(--cyan-600)" : p.accent === "violet" ? "var(--violet-600)" : "var(--magenta-600)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }
                }, h(Icon, { name: p.icon, size: 22 })),
                h("h3", { style: { margin: 0, fontSize: "var(--fs-lg)", fontWeight: "var(--fw-semibold)", color: "var(--text-heading)" } }, p.t),
                h("p", { style: { margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--fs-lg)", fontStyle: "italic", lineHeight: "var(--lh-heading)", color: "var(--violet-600)" } }, "“" + p.q + "”")
              );
            })
          )
        )
      ),
      el("div", { style: { padding: "0 var(--container-gutter)" } },
        h(CTAPanel, {
          overline: "Setup",
          title: "A primeira etapa é uma conversa",
          lead: "30 minutos para entender onde você está. Se não fizer sentido, a gente diz na hora.",
          primary: { label: "Agendar diagnóstico", onClick: function () { navigateToPage("contato"); } },
          sailCorner: "bl",
          imageSrc: asset("assets/photography/capitao-e-tripulante.webp")
        })
      )
    );
  }

  // ─── 8.4 Cases ──────────────────────────────────────────────────────────────
  function PageCases(props) {
    var DS = props.DS;
    var SectionHeading = DS.SectionHeading, Card = DS.Card;
    var StatBlock = DS.StatBlock, Tabs = DS.Tabs, Badge = DS.Badge;

    var CASES = [
      { cliente: "Lumen Iluminação", setor: "Varejo", img: "assets/photography/veleiros-oceano-azul.webp",
        titulo: "De um porto sem movimento a uma agenda cheia",
        resumo: "Reposicionamento da marca, gestão de Instagram e automação de WhatsApp para captar orçamentos direto do DM.",
        stats: [["+30%", "em vendas", "magenta"], ["3", "meses", "cyan"]],
        tags: ["Branding", "Mídias sociais", "Automações"] },
      { cliente: "Food & Health", setor: "Alimentação funcional", img: "assets/photography/mar-na-praia.webp",
        titulo: "1.000 leads qualificados em uma campanha",
        resumo: "Meta Ads com criativos testados em ciclos semanais e formulário integrado ao Portal Caiçara.",
        stats: [["1.000+", "leads", "cyan"], ["-42%", "custo por lead", "magenta"]],
        tags: ["Meta Ads", "Landing page"] },
      { cliente: "Pérola Azul", setor: "Locação · Riviera", img: "assets/photography/embarcacoes-marina.webp",
        titulo: "Ocupação alta fora da temporada",
        resumo: "SEO local, Perfil no Google otimizado e sequência de e-mails para hóspedes recorrentes.",
        stats: [["1º", "lugar na busca local", "violet"], ["+18%", "ocupação", "cyan"]],
        tags: ["SEO", "Perfil no Google"] },
      { cliente: "Alinah Prol Nutricionista", setor: "Saúde", img: "assets/photography/santos-jardins-da-orla.webp",
        titulo: "Autoridade construída com conteúdo de resposta",
        resumo: "Linha editorial Caiçara Responde adaptada: cada dúvida de consulta virou pauta de post e artigo.",
        stats: [["+3x", "alcance orgânico", "magenta"], ["12", "pautas/mês", "cyan"]],
        tags: ["Conteúdo", "BOT Criativo"] }
    ];

    var fHook = React.useState("Todos");
    var f = fHook[0], setF = fHook[1];
    var shown = f === "Todos" ? CASES : CASES.filter(function (c) { return c.tags.includes(f); });

    return el(React.Fragment, null,
      h(Section, { style: { padding: "var(--space-20) 0 var(--space-10)" } },
        h(SectionHeading, { overline: "Histórias à beira-mar", title: "Resultado é o que", emphasis: "sustenta a conversa",
          lead: "Números reais de clientes reais. Quando a Caiçara assume o timão, a rota fica visível no painel." })
      ),
      h(Section, { style: { paddingBottom: "var(--section-y)" } },
        h(Tabs, { variant: "pill", items: ["Todos", "Branding", "Meta Ads", "SEO", "Conteúdo", "Automações"], value: f, onChange: setF }),
        el("div", { style: { display: "flex", flexDirection: "column", gap: "var(--space-6)", marginTop: "var(--space-8)" } },
          ...shown.map(function (c) {
            return h(Card, { key: c.cliente, padding: "0", interactive: true, style: { overflow: "hidden" } },
              el("div", { style: { display: "grid", gridTemplateColumns: "320px 1fr", alignItems: "stretch" } },
                h("img", { src: asset(c.img), alt: "", style: { width: "100%", height: "100%", minHeight: 220, objectFit: "cover", display: "block" } }),
                el("div", { style: { padding: "var(--space-8)", display: "flex", flexDirection: "column", gap: "var(--space-3)" } },
                  el("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-3)" } },
                    h("span", { style: { fontSize: "var(--fs-overline)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-overline)", textTransform: "uppercase", color: "var(--text-accent)" } }, c.cliente),
                    h("span", { style: { fontSize: "var(--fs-caption)", color: "var(--text-muted)" } }, "· " + c.setor)
                  ),
                  h("h3", { style: { margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--fs-3xl)", fontWeight: "var(--fw-bold)", lineHeight: "var(--lh-snug)", letterSpacing: "var(--ls-tight)", color: "var(--text-heading)" } }, c.titulo),
                  h("p", { style: { margin: 0, fontSize: "var(--fs-sm)", lineHeight: "var(--lh-body)", color: "var(--text-body)", maxWidth: 560 } }, c.resumo),
                  el("div", { style: { display: "flex", gap: "var(--space-10)", marginTop: "var(--space-3)" } },
                    ...c.stats.map(function (st) {
                      return h(StatBlock, { key: st[1], size: "md", accent: st[2], value: st[0], label: st[1] });
                    })
                  ),
                  el("div", { style: { display: "flex", gap: "var(--space-2)", marginTop: "var(--space-4)", flexWrap: "wrap" } },
                    ...c.tags.map(function (t) { return h(Badge, { key: t, tone: "neutral" }, t); })
                  )
                )
              )
            );
          })
        )
      )
    );
  }

  // ─── 8.5 Contato ────────────────────────────────────────────────────────────
  function PageContato(props) {
    var DS = props.DS;
    var SectionHeading = DS.SectionHeading, Card = DS.Card;
    var Button = DS.Button, Input = DS.Input, Textarea = DS.Textarea;
    var Select = DS.Select, Checkbox = DS.Checkbox, Toast = DS.Toast;

    var formHook = React.useState({ nome: "", empresa: "", email: "", whats: "", servico: "", msg: "", ok: true });
    var form = formHook[0], setForm = formHook[1];
    var sentHook = React.useState(false);
    var sent = sentHook[0], setSent = sentHook[1];
    var errorHook = React.useState("");
    var error = errorHook[0], setError = errorHook[1];

    function set(k) {
      return function (e) {
        var v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setForm(Object.assign({}, form, (function () { var o = {}; o[k] = v; return o; })()));
      };
    }
    function submit() {
      setError("");
      if (!form.nome || !form.email) { setError("Preencha pelo menos nome e e-mail."); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError("E-mail inválido."); return; }
      try {
        var pending = JSON.parse(localStorage.getItem("caicara:pending-messages") || "[]");
        pending.push({ ts: new Date().toISOString(), form: form });
        localStorage.setItem("caicara:pending-messages", JSON.stringify(pending));
      } catch (e) {}
      setSent(true);
    }

    var CONTATOS = [
      ["message-circle", "WhatsApp", "(13) 97806-2772"],
      ["mail", "E-mail", "contato@caicaramarketing.com.br"],
      ["map-pin", "Onde estamos", "Santos · São Paulo · Brasil"],
      ["instagram", "Instagram", "@caicaramarketing"]
    ];
    var SERVICOS_OPTS = ["Gestão de mídias sociais", "Google Ads e Meta Ads", "Branding e identidade", "Automações e mensageria", "Perfil no Google", "BOT Criativo", "Ainda não sei"];

    return el("div", { style: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-20) var(--container-gutter) 0" } },
      el("div", { style: { display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "var(--space-16)", alignItems: "start" } },
        el("div", null,
          h(SectionHeading, { overline: "Contato", title: "Vamos conversar sobre", emphasis: "a sua rota",
            lead: "Conte onde você está e onde quer chegar. A gente responde em até um dia útil — sempre uma pessoa, nunca um robô." }),
          el("div", { style: { display: "flex", flexDirection: "column", gap: "var(--space-5)", marginTop: "var(--space-10)" } },
            ...CONTATOS.map(function (c) {
              return el("div", { key: c[1], style: { display: "flex", gap: "var(--space-4)", alignItems: "center" } },
                el("span", {
                  style: {
                    width: 40, height: 40, borderRadius: "50%",
                    background: "var(--surface-cyan-soft)", color: "var(--cyan-600)",
                    display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 40px"
                  }
                }, h(Icon, { name: c[0], size: 18 })),
                el("div", null,
                  h("div", { style: { fontSize: "var(--fs-caption)", color: "var(--text-muted)" } }, c[1]),
                  h("div", { style: { fontSize: "var(--fs-base)", fontWeight: "var(--fw-medium)", color: "var(--text-heading)" } }, c[2])
                )
              );
            })
          ),
          h("img", {
            src: asset("assets/photography/santos-mureta.webp"),
            alt: "Muretas de Santos",
            style: {
              width: "100%", height: 200, objectFit: "cover",
              borderRadius: "var(--radius-lg)", borderBottomRightRadius: "var(--radius-sail)",
              marginTop: "var(--space-10)"
            }
          })
        ),
        h(Card, { padding: "0", style: { overflow: "hidden" } },
          h(WaterlineRule, null),
          el("div", { style: { padding: "var(--space-8)", display: "flex", flexDirection: "column", gap: "var(--space-5)" } },
            sent ? el(React.Fragment, null,
              h(Toast, { tone: "success", title: "Mensagem recebida", message: "A tripulação responde em até um dia útil. Enquanto isso, dá uma olhada nos cases." }),
              h(Button, { variant: "outline", onClick: function () { setSent(false); } }, "Enviar outra mensagem")
            ) : el(React.Fragment, null,
              el("div", null,
                h("h3", { style: { margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--fs-3xl)", fontWeight: "var(--fw-bold)", color: "var(--text-heading)", letterSpacing: "var(--ls-tight)" } }, "Traçar a rota"),
                h("p", { style: { margin: "var(--space-2) 0 0", fontSize: "var(--fs-sm)", color: "var(--text-body)" } }, "Leva dois minutos. Sem campo obrigatório inútil.")
              ),
              el("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" } },
                h(Input, { label: "Seu nome", placeholder: "Como podemos te chamar?", value: form.nome, onChange: set("nome") }),
                h(Input, { label: "Empresa", placeholder: "Nome do negócio", value: form.empresa, onChange: set("empresa") }),
                h(Input, { label: "E-mail", placeholder: "voce@empresa.com.br", value: form.email, onChange: set("email"), type: "email" }),
                h(Input, { label: "WhatsApp", placeholder: "(13) 90000-0000", value: form.whats, onChange: set("whats") })
              ),
              h(Select, { label: "Serviço de interesse", placeholder: "Escolha uma rota", value: form.servico, onChange: set("servico"), options: SERVICOS_OPTS }),
              h(Textarea, { label: "Onde você quer chegar?", rows: 4, placeholder: "Conte o que está travando o crescimento hoje.", value: form.msg, onChange: set("msg") }),
              h(Checkbox, { label: "Quero receber a Maré Digital", description: "Uma newsletter por mês com tendências do mercado. Sem enrolação.", checked: form.ok, onChange: set("ok") }),
              error ? h("div", { style: { color: "var(--danger-500)", fontSize: "var(--fs-sm)" } }, error) : null,
              h(Button, { size: "lg", fullWidth: true, onClick: submit }, "Enviar mensagem")
            )
          )
        )
      )
    );
  }

  // ─── 8.6 Sobre (A Caiçara) ──────────────────────────────────────────────────
  function PageSobre(props) {
    var DS = props.DS;
    var SectionHeading = DS.SectionHeading, Card = DS.Card;
    var CTAPanel = DS.CTAPanel, Button = DS.Button;

    var VALORES = [
      { t: "Explorador", d: "Inovamos e nos adaptamos às mudanças do mercado, como um marinheiro que ajusta as velas ao vento.", accent: "magenta", icon: "compass" },
      { t: "Cuidador", d: "Cada cliente é uma viagem que assumimos juntos. Protegemos o negócio e a marca como quem protege o próprio barco.", accent: "cyan", icon: "shield" },
      { t: "Transparência", d: "Relatórios mensais, painel de métricas e reunião de rota. Sem caixa-preta, sem promessa sem número.", accent: "violet", icon: "eye" },
      { t: "Resultado real", d: "Marca sem resultado é enfeite. Resultado sem marca não se sustenta. Aqui os dois andam juntos.", accent: "magenta", icon: "trending-up" }
    ];
    var PESSOAS = [
      { nome: "Camila Prol", role: "Estratégia · Conteúdo", img: "assets/imagery/camila-caicara.png",
        desc: "Lidera estratégia de marca e conteúdo. Vive entre o pontilhado da bússola e o ritmo da maré." },
      { nome: "Matheus Prol", role: "Performance · Tecnologia", img: "assets/imagery/matheus-caicara.webp",
        desc: "Cuida de performance, automação e plataforma. Vê funil como quem vê rosa-dos-ventos." }
    ];

    return el(React.Fragment, null,
      // Hero
      el("div", {
        style: {
          background: "var(--gradient-deep)", color: "var(--sand-500)",
          padding: "var(--space-32) var(--container-gutter) var(--space-24)",
          position: "relative"
        }
      },
        el("div", { style: { maxWidth: "var(--container-max)", margin: "0 auto" } },
          h(WaterlineRule, { style: { marginBottom: "var(--space-12)" } }),
          h(Overline, { color: "var(--cyan-300)" }, "A Caiçara"),
          h("h1", {
            style: {
              margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--fs-6xl)",
              fontWeight: "var(--fw-bold)", lineHeight: "var(--lh-tight)", letterSpacing: "var(--ls-tighter)",
              maxWidth: 880
            }
          }, "Quem está ao leme"),
          h("p", {
            style: {
              margin: "var(--space-6) 0 0", fontSize: "var(--fs-lg)", lineHeight: "var(--lh-body)",
              color: "rgba(253,248,242,.78)", maxWidth: 720
            }
          }, "A tripulação da Caiçara é pequena, mas cabe no barco inteiro. Estratégia, criação, performance e plataforma no mesmo plano de navegação — sem terceirizar o que importa.")
        )
      ),

      // Propósito
      h(Section, null,
        el("div", { style: { display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "var(--space-16)", alignItems: "center" } },
          el("div", null,
            h(SectionHeading, {
              overline: "Propósito",
              title: "Ser o farol que guia PMEs",
              emphasis: "pelo oceano digital",
              lead: "Nasceu em Santos, em 2024, com a missão de elevar marcas responsáveis que entregam valor genuíno. Acreditamos que marketing digital bom é o que une a tradição caiçara com a inovação que a IA traz — e que o resultado tem que aparecer no caixa do cliente, não só no relatório."
            })
          ),
          el("div", { style: { position: "relative" } },
            h("img", {
              src: asset("assets/photography/farol-na-costa.webp"),
              alt: "Farol na costa",
              style: {
                width: "100%", height: 420, objectFit: "cover",
                borderRadius: "var(--radius-lg)", borderTopRightRadius: "var(--radius-sail)"
              }
            })
          )
        )
      ),

      // Valores
      h(Section, { alt: true },
        el(React.Fragment, null,
          h(SectionHeading, { align: "center", overline: "Valores", title: "O que nos guia", emphasis: "em cada rota" }),
          el("div", {
            style: {
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
              gap: "var(--space-6)", marginTop: "var(--space-12)"
            }
          },
            ...VALORES.map(function (v) {
              return h(Card, { key: v.t, style: { display: "flex", flexDirection: "column", gap: "var(--space-3)" } },
                el("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-3)" } },
                  el("span", {
                    style: {
                      width: 36, height: 36, borderRadius: "var(--radius-md)",
                      background: v.accent === "cyan" ? "var(--surface-cyan-soft)" : v.accent === "violet" ? "var(--surface-violet-soft)" : "var(--surface-accent-soft)",
                      color: v.accent === "cyan" ? "var(--cyan-600)" : v.accent === "violet" ? "var(--violet-600)" : "var(--magenta-600)",
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }
                  }, h(Icon, { name: v.icon, size: 18 })),
                  h("h3", { style: { margin: 0, fontSize: "var(--fs-lg)", fontWeight: "var(--fw-semibold)", color: "var(--text-heading)" } }, v.t)
                ),
                h("p", { style: { margin: 0, fontSize: "var(--fs-sm)", lineHeight: "var(--lh-body)", color: "var(--text-body)" } }, v.d)
              );
            })
          )
        )
      ),

      // Time
      h(Section, null,
        el(React.Fragment, null,
          h(SectionHeading, { overline: "Tripulação", title: "Pequena tripulação,", emphasis: "vento a favor" }),
          el("div", {
            style: {
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
              gap: "var(--space-6)", marginTop: "var(--space-12)"
            }
          },
            ...PESSOAS.map(function (p) {
              return h(Card, { key: p.nome, padding: "0", style: { overflow: "hidden" } },
                el("div", { style: { display: "grid", gridTemplateColumns: "200px 1fr", alignItems: "stretch" } },
                  h("img", {
                    src: asset(p.img), alt: p.nome,
                    style: { width: "100%", height: "100%", minHeight: 220, objectFit: "cover" }
                  }),
                  el("div", { style: { padding: "var(--space-6)", display: "flex", flexDirection: "column", gap: "var(--space-2)" } },
                    h("h3", { style: { margin: 0, fontSize: "var(--fs-xl)", fontWeight: "var(--fw-semibold)", color: "var(--text-heading)" } }, p.nome),
                    h("div", { style: { fontSize: "var(--fs-caption)", color: "var(--text-accent)", fontWeight: "var(--fw-semibold)", letterSpacing: "var(--ls-overline)", textTransform: "uppercase" } }, p.role),
                    h("p", { style: { margin: 0, fontSize: "var(--fs-sm)", lineHeight: "var(--lh-body)", color: "var(--text-body)" } }, p.desc)
                  )
                )
              );
            })
          )
        )
      ),

      // CTA
      el("div", { style: { padding: "0 var(--container-gutter)" } },
        h(CTAPanel, {
          overline: "Vamos",
          title: "A próxima rota pode ser a sua",
          lead: "Se a sua marca tem propósito e quer resultado real, vem pro barco. A primeira conversa é de diagnóstico — e é por nossa conta.",
          primary: { label: "Agendar diagnóstico", onClick: function () { navigateToPage("contato"); } },
          imageSrc: asset("assets/photography/embarcacoes-marina.webp")
        })
      )
    );
  }

  // ─── 8.7 Política de Privacidade ────────────────────────────────────────────
  function PagePolitica() {
    var SECTIONS = [
      { h: "1. Quem somos", p: [
        "Caiçara Marketing Digital Estratégico (\"Caiçara\", \"nós\") é uma agência de marketing digital com sede em Santos, São Paulo, inscrita no CNPJ sob nº 59.205.837/0001-10, que oferece serviços de estratégia, criação, performance e automação para pequenas e médias empresas.",
        "Este site é o nosso canal institucional. Para qualquer questão relativa a esta política, fale com o nosso encarregado de dados (DPO) pelos canais indicados no fim deste documento."
      ]},
      { h: "2. Dados que coletamos", p: [
        "Coletamos apenas os dados necessários para responder ao seu contato e entregar os serviços contratados. Dependendo do ponto de contato, podemos coletar:",
        "• Nome completo, e-mail, WhatsApp, nome da empresa, cargo.",
        "• Conteúdo da mensagem que você nos envia pelo formulário de contato.",
        "• Dados de navegação anônimos (páginas visitadas, dispositivo, navegador) através de analytics — somente se você aceitar cookies não-essenciais.",
        "• Dados de pagamento e cobrança, tratados por processadores certificados (Stripe, PagSeguro, etc) — a Caiçara não armazena números completos de cartão."
      ]},
      { h: "3. Como coletamos", p: [
        "• Formulário de contato: os dados que você preenche voluntariamente.",
        "• Cookies: pequenos arquivos de texto armazenados no seu navegador. Usamos cookies essenciais para o site funcionar e cookies analíticos (opcionais) para entender como você usa o site.",
        "• E-mail e WhatsApp: quando você nos contata diretamente.",
        "• Reuniões comerciais: dados registrados em CRM, sob bases legais de execução de contrato e legítimo interesse."
      ]},
      { h: "4. Para que usamos os dados (finalidade)", p: [
        "• Responder ao seu contato e enviar a proposta ou diagnóstico solicitado.",
        "• Executar e gerenciar o contrato de prestação de serviços.",
        "• Enviar a newsletter \"Maré Digital\" — somente se você optou por receber.",
        "• Cumprir obrigações legais e fiscais (emissão de nota, retenção de impostos).",
        "• Melhorar o site e a experiência de navegação (analytics)."
      ]},
      { h: "5. Compartilhamento", p: [
        "Não vendemos seus dados. Compartilhamos somente o mínimo necessário com: processadores de pagamento, plataforma de e-mail marketing, CRM, hospedagem do site e contadores. Todos esses parceiros têm contratos próprios de proteção de dados e estão em conformidade com a LGPD."
      ]},
      { h: "6. Direitos do titular (LGPD, art. 18)", p: [
        "Você tem o direito de: confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar anonimização, bloqueio ou eliminação, obter portabilidade, revogar consentimento e apresentar reclamação à ANPD.",
        "Para exercer qualquer desses direitos, envie um e-mail para o DPO nos canais abaixo. Responderemos em até 15 dias."
      ]},
      { h: "7. Cookies", p: [
        "Usamos cookies essenciais (sempre ativos) para que o site funcione — por exemplo, lembrar a sua preferência de consentimento. Cookies analíticos (Google Analytics ou similar) são carregados somente após o seu consentimento. Você pode revisar e alterar a sua escolha a qualquer momento limpando os cookies do navegador."
      ]},
      { h: "8. Encarregado de dados (DPO)", p: [
        "Nome: Matheus Prol",
        "E-mail: dpo@caicaramarketing.com.br",
        "Telefone: (13) 97806-2772"
      ]},
      { h: "9. Alterações nesta política", p: [
        "Esta política pode ser revisada periodicamente. Quando houver mudança relevante, atualizaremos a data no fim do documento e, se for o caso, solicitaremos um novo consentimento."
      ]},
      { h: "10. Foro", p: [
        "Fica eleito o foro de Santos, São Paulo, para dirimir qualquer questão oriunda desta política, sem prejuízo dos direitos do titular de recorrer à Autoridade Nacional de Proteção de Dados."
      ]}
    ];

    return el("div", { style: { maxWidth: "var(--container-narrow)", margin: "0 auto", padding: "var(--space-20) var(--container-gutter) 0" } },
      h(Overline, null, "Documento legal"),
      h("h1", {
        style: {
          margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--fs-5xl)",
          fontWeight: "var(--fw-bold)", lineHeight: "var(--lh-tight)",
          letterSpacing: "var(--ls-tighter)", color: "var(--text-heading)"
        }
      }, "Política de privacidade"),
      h("p", {
        style: {
          margin: "var(--space-4) 0 0", fontSize: "var(--fs-base)",
          color: "var(--text-muted)"
        }
      }, "Última atualização: 19 de agosto de 2026. Esta política explica como a Caiçara Marketing Digital trata os dados pessoais de visitantes do site e de clientes, em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018)."),
      el("div", { style: { display: "flex", flexDirection: "column", gap: "var(--space-8)", marginTop: "var(--space-12)" } },
        ...SECTIONS.map(function (s) {
          return el("section", { key: s.h },
            h("h2", {
              style: {
                margin: "0 0 var(--space-3)", fontSize: "var(--fs-2xl)",
                fontWeight: "var(--fw-semibold)", color: "var(--text-heading)",
                letterSpacing: "var(--ls-tight)"
              }
            }, s.h),
            el("div", { style: { display: "flex", flexDirection: "column", gap: "var(--space-3)" } },
              ...s.p.map(function (para, i) {
                return h("p", {
                  key: i,
                  style: { margin: 0, fontSize: "var(--fs-base)", lineHeight: "var(--lh-loose)", color: "var(--text-body)" }
                }, para);
              })
            )
          );
        })
      )
    );
  }

  // ─── 8.8 404 ────────────────────────────────────────────────────────────────
  function PageNotFound() {
    return el("div", { style: { maxWidth: 720, margin: "0 auto", padding: "var(--space-32) var(--container-gutter)", textAlign: "center" } },
      h(Overline, { color: "var(--text-accent)" }, "Erro 404"),
      h("h1", {
        style: {
          margin: "var(--space-3) 0 0", fontFamily: "var(--font-display)",
          fontSize: "var(--fs-6xl)", fontWeight: "var(--fw-bold)",
          lineHeight: "var(--lh-tight)", letterSpacing: "var(--ls-tighter)",
          color: "var(--text-heading)"
        }
      }, "Fora de rota."),
      h("p", {
        style: {
          margin: "var(--space-6) 0 0", fontSize: "var(--fs-lg)",
          lineHeight: "var(--lh-body)", color: "var(--text-body)"
        }
      }, "A página que você procura não está em nenhum porto nosso. Mas a tripulação está de plantão — vamos voltar pro convés?"),
      el("div", { style: { display: "flex", gap: "var(--space-4)", justifyContent: "center", marginTop: "var(--space-10)", flexWrap: "wrap" } },
        h("a", {
          href: "/",
          style: {
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "14px 28px", background: "var(--magenta-500)", color: "var(--white)",
            borderRadius: "var(--radius-pill)", fontWeight: "var(--fw-semibold)",
            textDecoration: "none", boxShadow: "var(--shadow-sm)"
          }
        }, "Voltar pro início"),
        h("a", {
          href: "/contato",
          style: {
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "14px 28px", background: "transparent", color: "var(--text-heading)",
            border: "1px solid var(--deep-500)", borderRadius: "var(--radius-pill)",
            fontWeight: "var(--fw-semibold)", textDecoration: "none"
          }
        }, "Falar com a tripulação")
      )
    );
  }

  // ── 9. Page registry ────────────────────────────────────────────────────────
  var PAGE_MAP = {
    home: { Comp: PageHome, navActive: "home", title: "Caiçara Marketing Digital Estratégico" },
    servicos: { Comp: PageServicos, navActive: "servicos", title: "Serviços — Caiçara Marketing" },
    metodo: { Comp: PageMetodo, navActive: "metodo", title: "Método PEMD — Caiçara Marketing" },
    cases: { Comp: PageCases, navActive: "cases", title: "Cases — Caiçara Marketing" },
    contato: { Comp: PageContato, navActive: "contato", title: "Contato — Caiçara Marketing" },
    sobre: { Comp: PageSobre, navActive: "sobre", title: "A Caiçara — Quem está ao leme" },
    "politica-de-privacidade": { Comp: PagePolitica, navActive: null, title: "Política de privacidade — Caiçara" },
    "404": { Comp: PageNotFound, navActive: null, title: "Página não encontrada — Caiçara" }
  };

  // ── 10. Error fallback ──────────────────────────────────────────────────────
  function ErrorFallback(props) {
    return el("div", { className: "caicara-page" },
      el("div", { className: "caicara-error-fallback" },
        h("h1", null, "Não conseguimos carregar a página"),
        h("p", null, props.error || "Houve um problema ao renderizar esta página. Tente recarregar."),
        h("a", { href: "/" }, "Voltar pro início")
      )
    );
  }

  // ── 11. Mount ──────────────────────────────────────────────────────────────
  function mount() {
    var host = document.getElementById("caicara-page");
    var navHost = document.getElementById("caicara-nav");
    var footerHost = document.getElementById("caicara-footer");
    if (!host) return;

    var pageKey = host.getAttribute("data-page") || "home";
    var entry = PAGE_MAP[pageKey] || PAGE_MAP["404"];

    getDS().then(function (DS) {
      try {
        if (!DS) throw new Error("Bundle do Design System não carregou (window." + DS_NS + " ausente).");
        if (navHost) {
          var glass = pageKey === "home";
          ReactDOM.createRoot(navHost).render(
            h(SiteNav, { active: entry.navActive, glass: glass })
          );
        }
        var PageComp = entry.Comp;
        ReactDOM.createRoot(host).render(
          h(React.Fragment, null,
            h(PageComp, { DS: DS })
          )
        );
        if (footerHost) {
          ReactDOM.createRoot(footerHost).render(h(SiteFooter, null));
        }
        // Update document.title if set
        if (entry.title) {
          var path = (window.location.pathname || "/").toLowerCase();
          // If we are on /404 (a real 404 URL, slug "404" or anything that didn't match),
          // don't claim a custom title — let the page-wide HEADER SEO take precedence.
          if (pageKey !== "404" || path === "/404") document.title = entry.title;
        }
      } catch (err) {
        console.error("[Caiçara] erro de render:", err);
        if (host) ReactDOM.createRoot(host).render(h(ErrorFallback, { error: String(err && err.message || err) }));
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
