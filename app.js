const WA="https://wa.me/5521996321950";
function waUrl(s){const m=s?`Olá, JDA! Gostaria de solicitar um orçamento para o serviço: ${s}.`:"Olá, JDA! Gostaria de solicitar um orçamento para um serviço elétrico.";return WA+"?text="+encodeURIComponent(m);}
const nav=[["Início","inicio"],["Serviços","servicos"],["Sobre nós","sobre"],["Diferenciais","diferenciais"],["Contato","contato"]];
const services=[["Elétrica residencial","Instalações seguras e soluções completas para a sua casa.","house"],["Manutenção corretiva e preventiva","Identificação de falhas e cuidados para manter tudo funcionando.","wrench"],["Instalação de equipamentos elétricos","Conexões adequadas para o bom funcionamento dos seus equipamentos.","plug-zap"],["Instalação de chuveiros","Instalação e substituição com atenção à potência e à segurança.","shower-head"],["Lâmpadas, LEDs e luminárias","Iluminação bem planejada para transformar seus ambientes.","lightbulb"],["Instalação de ventiladores","Mais conforto com instalação cuidadosa e fixação adequada.","fan"],["Tomadas e interruptores","Instalação, troca e adequação de pontos elétricos.","plug"],["Distribuição de circuitos","Circuitos organizados e dimensionados para cada necessidade.","network"],["Quadros elétricos","Montagem e organização para uma instalação mais segura.","panels-top-left"],["Serviços elétricos personalizados","Soluções técnicas para as particularidades do seu projeto.","zap"]];
const diffs=[["badge-check","Profissionais qualificados","Equipe preparada para atender diferentes demandas elétricas com qualidade técnica."],["shield-check","Garantia dos serviços","Compromisso com a qualidade e com os serviços que executamos."],["zap","Segurança e responsabilidade","Atenção às boas práticas de segurança e aos procedimentos técnicos."],["credit-card","Facilidade de pagamento","Possibilidade de pagamento por cartão para facilitar seu planejamento."]];
const gallery = [
    {
        name: "Quadros elétricos",
        photos: [
            {
                src: "https://jdaservicoseletricos.lovable.app/__l5e/assets-v1/2e56ef94-9163-4a8e-8903-54c2c271d82a/jda-quadro-eletrico.jpg",
                alt: "Quadro elétrico com circuitos e dispositivos organizados",
                w: 1200,
                h: 1600
            }
        ]
    },
    {
        name: "Iluminação",
        photos: [
            {
                src: "https://jdaservicoseletricos.lovable.app/__l5e/assets-v1/887d8fb8-11d5-4985-93f6-e8d40593e924/jda-iluminacao-ambiente.jpg",
                alt: "Ambiente com pendentes e iluminação embutida",
                w: 1200,
                h: 1236
            },
            {
                src: "https://jdaservicoseletricos.lovable.app/__l5e/assets-v1/ac9a6f0a-0c83-4376-af53-60fd30f7e2e9/jda-iluminacao-embutida.jpg",
                alt: "Detalhe de iluminação embutida no teto",
                w: 900,
                h: 1600
            }
        ]
    },
    {
        name: "Manutenção",
        photos: [
            {
                src: "https://jdaservicoseletricos.lovable.app/__l5e/assets-v1/619a17ef-9822-4498-a60c-ff506f1078e5/jda-manutencao-tomadas.jpg",
                alt: "Profissional realizando manutenção em tomadas e interruptores",
                w: 1200,
                h: 1600
            }
        ]
    },
    {
        name: "Iluminação indireta",
        photos: [
            {
                src: "images/img.jpeg",
                alt: "Detalhe de iluminação indireta no teto de um ambiente",
                w: 1200,
                h: 1600
            }
        ]
    },
    {
        name: "Luminárias pendentes",
        photos: [
            {
                src: "images/img1.jpeg",
                alt: "Luminárias pendentes instaladas sobre uma mesa de jantar",
                w: 1200,
                h: 1600
            }
        ]
    },
    {
        name: "Iluminação residencial",
        photos: [
            {
                src: "images/img2.jpeg",
                alt: "Sala de estar com iluminação decorativa",
                w: 1200,
                h: 1600
            }
        ]
    },
    {
        name: "Instalação de luminária",
        photos: [
            {
                src: "images/img3.jpeg",
                alt: "Luminária linear instalada sobre uma mesa de jantar",
                w: 1200,
                h: 1600
            }
        ]
    },
    {
        name: "Iluminação em sanca",
        photos: [
            {
                src: "images/img4.jpeg",
                alt: "Iluminação linear embutida em um recorte no teto",
                w: 1200,
                h: 1600
            }
        ]
    },
    {
        name: "Iluminação comercial",
        photos: [
            {
                src: "images/img7.jpeg",
                alt: "Ambiente comercial com iluminação na área de atendimento",
                w: 1200,
                h: 1600
            }
        ]
    }
];
const faqs=[["Quais serviços elétricos a JDA realiza?", "Realizamos instalações e manutenção elétrica, iluminação, instalação de equipamentos, chuveiros, ventiladores, tomadas, distribuição de circuitos, montagem de quadros e carregadores automotivos."], ["A JDA atende residências e empresas?", "Sim. Atendemos residências, condomínios, comércios e empresas, com soluções adequadas a cada necessidade."], ["Qual é a área de atendimento?", "Atendemos todo o estado do Rio de Janeiro. Entre em contato para consultar a disponibilidade para sua localidade."], ["Os serviços possuem garantia?", "Sim. Temos compromisso com a qualidade e oferecemos garantia dos serviços. Consulte as condições para o seu serviço no orçamento."], ["Quais são as formas de pagamento?", "Há possibilidade de pagamento por cartão. Consulte as condições e demais formas disponíveis ao solicitar seu orçamento."], ["Como solicitar um orçamento?", "Entre em contato pelo WhatsApp (21) 99632-1950 e conte qual serviço você precisa. Nosso atendimento é de segunda a sexta-feira, das 08h às 18h."]];
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const links=nav.map(([n,id])=>`<a href="#${id}">${n}</a>`).join("");
navD.innerHTML=links;navM.innerHTML=links;navF.innerHTML=links;
svcCta.insertAdjacentHTML("beforebegin",services.map(([n,d,i])=>`<article class="service-card"><i data-lucide="${i}" class="service-icon"></i><h3>${n}</h3><p>${d}</p><a class="btn btn-consult" href="${waUrl(n)}" target="_blank" rel="noopener noreferrer">Consultar serviço<i data-lucide="arrow-up-right"></i></a></article>`).join(""));
document.getElementById("diffs").innerHTML=diffs.map(([i,t,x])=>`<article class="difference"><i data-lucide="${i}"></i><h3>${t}</h3><p>${x}</p></article>`).join("");
const galleryTrack = document.getElementById("galleryTrack");
const galleryDots = document.getElementById("galleryDots");
const galleryCounter = document.getElementById("galleryCounter");
const galleryViewport = document.getElementById("galleryViewport");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

galleryTrack.innerHTML = gallery.map((item, index) => {
    const photo = item.photos[0];

    return `
        <article
            class="gallery-slide"
            style="--slide-image: url('${esc(photo.src)}')"
            aria-hidden="${index !== 0}"
        >
            <button
                class="gallery-button"
                type="button"
                data-k="${index}"
                aria-label="Ampliar imagem: ${esc(item.name)}"
                tabindex="${index === 0 ? "0" : "-1"}"
            >
                <img
                    src="${esc(photo.src)}"
                    alt="${esc(photo.alt)}"
                    loading="${index === 0 ? "eager" : "lazy"}"
                    width="${photo.w}"
                    height="${photo.h}"
                >

                <span class="gallery-label">
                    <span>${esc(item.name)}</span>
                    <i data-lucide="expand" aria-hidden="true"></i>
                </span>
            </button>
        </article>
    `;
}).join("");

galleryDots.innerHTML = gallery.map((item, index) => `
    <button
        class="gallery-dot"
        type="button"
        data-slide="${index}"
        aria-label="Ir para ${esc(item.name)}"
        aria-current="${index === 0 ? "true" : "false"}"
    ></button>
`).join("");

let activeGallerySlide = 0;

function goToGallerySlide(nextIndex) {
    activeGallerySlide = (nextIndex + gallery.length) % gallery.length;

    galleryTrack.style.transform = `translateX(-${activeGallerySlide * 100}%)`;

    galleryTrack.querySelectorAll(".gallery-slide").forEach((slide, index) => {
        const isActive = index === activeGallerySlide;
        slide.setAttribute("aria-hidden", String(!isActive));

        const button = slide.querySelector(".gallery-button");
        button.tabIndex = isActive ? 0 : -1;
    });

    galleryDots.querySelectorAll(".gallery-dot").forEach((dot, index) => {
        dot.setAttribute("aria-current", String(index === activeGallerySlide));
    });

    galleryCounter.textContent =
        `${String(activeGallerySlide + 1).padStart(2, "0")} / ${String(gallery.length).padStart(2, "0")}`;
}

galleryPrev.addEventListener("click", () => {
    goToGallerySlide(activeGallerySlide - 1);
});

galleryNext.addEventListener("click", () => {
    goToGallerySlide(activeGallerySlide + 1);
});

galleryDots.addEventListener("click", event => {
    const dot = event.target.closest(".gallery-dot");
    if (!dot) return;

    goToGallerySlide(Number(dot.dataset.slide));
});

// Swipe horizontal em telas sensíveis ao toque.
let galleryTouchStartX = 0;
let lastGallerySwipe = 0;

galleryViewport.addEventListener("touchstart", event => {
    galleryTouchStartX = event.changedTouches[0].clientX;
}, { passive: true });

galleryViewport.addEventListener("touchend", event => {
    const distance = event.changedTouches[0].clientX - galleryTouchStartX;

    if (Math.abs(distance) < 45) return;

    lastGallerySwipe = Date.now();
    goToGallerySlide(activeGallerySlide + (distance < 0 ? 1 : -1));
}, { passive: true });

goToGallerySlide(0);
document.getElementById("faqs").innerHTML=faqs.map(([q,a])=>`<div class="faq-item"><button class="faq-q" aria-expanded="false">${q}<i data-lucide="chevron-down"></i></button><div class="faq-a">${a}</div></div>`).join("");
document.querySelectorAll("a.wa").forEach(a=>{a.href=waUrl();a.target="_blank";a.rel="noopener noreferrer";});
year.textContent=new Date().getFullYear();
// Menu
const mn=document.getElementById("mobile-navigation");
function setMenu(o){mn.hidden=!o;menuBtn.setAttribute("aria-expanded",o);menuBtn.setAttribute("aria-label",o?"Fechar menu":"Abrir menu");menuBtn.innerHTML=`<i data-lucide="${o?"x":"menu"}"></i>`;lucide.createIcons();}
menuBtn.onclick=()=>setMenu(mn.hidden);
mn.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
document.querySelector(".close-menu").onclick=()=>setMenu(false);
// FAQ (um aberto por vez)
document.getElementById("faqs").addEventListener("click",e=>{const b=e.target.closest(".faq-q");if(!b)return;const it=b.parentElement,o=it.classList.contains("open");document.querySelectorAll(".faq-item").forEach(x=>{x.classList.remove("open");x.firstElementChild.setAttribute("aria-expanded","false")});if(!o){it.classList.add("open");b.setAttribute("aria-expanded","true")}});
// Lightbox
let cur=null,idx=0,last=null;
function show(){const p=cur.photos[idx];mTitle.textContent=cur.name;mImg.src=p.src;mImg.alt=p.alt;mImg.width=p.w;mImg.height=p.h;mNav.style.display=cur.photos.length>1?"flex":"none";mCount.textContent=`${idx+1} / ${cur.photos.length}`;}
function openM(k){last=document.activeElement;cur=gallery[k];idx=0;show();modal.classList.add("open");document.body.style.overflow="hidden";mClose.focus();}
function closeM(){modal.classList.remove("open");document.body.style.overflow="";cur=null;last&&last.focus();}
document.getElementById("gallery").addEventListener("click", event => {
    // Evita abrir o ampliador ao terminar um gesto de arrastar no celular.
    if (Date.now() - lastGallerySwipe < 450) return;

    const button = event.target.closest(".gallery-button");
    if (button) openM(Number(button.dataset.k));
});
mClose.onclick=closeM;modal.onclick=e=>{if(e.target===modal)closeM()};
mPrev.onclick=()=>{idx=(idx+cur.photos.length-1)%cur.photos.length;show()};mNext.onclick=()=>{idx=(idx+1)%cur.photos.length;show()};
document.addEventListener("keydown",e=>{if(!cur)return;if(e.key==="Escape")closeM();if(cur.photos.length>1){if(e.key==="ArrowLeft")mPrev.click();if(e.key==="ArrowRight")mNext.click();}});
lucide.createIcons();

// Animações de entrada ao rolar a página (com fallback para navegadores sem suporte).
(() => {
  const selectors = [
    ".trust-item", ".section-heading", ".service-card", ".about-photo",
    ".about-copy", ".difference", ".gallery-item", ".coverage-copy",
    ".coverage-visual", ".gallery-carousel", ".faq-grid > div", ".faq-item", ".final-inner > *",
    ".footer-grid > *"
  ];
  const elements = document.querySelectorAll(selectors.join(","));
  elements.forEach((element, index) => {
    element.classList.add("reveal");
    if (element.matches(".service-card, .difference, .gallery-slide, .faq-item")) {
      element.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
    }
  });

  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach(element => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

  elements.forEach(element => observer.observe(element));
})();
