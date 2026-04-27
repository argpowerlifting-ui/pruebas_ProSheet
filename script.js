/* ════════════════════════════════════════════════════════════
   ProSheet · script.js
   ════════════════════════════════════════════════════════════ */

/* ══════════════════════════ THEME TOGGLE ══════════════════════════════════ */
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('prosheet-theme') === 'light') document.body.classList.add('light');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('prosheet-theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
}

/* ══════════════════════════ MOBILE MENU aaaa═══════════════════════════════════ */
const hamburger  = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}
function closeMobileMenu() {
  if (mobileMenu) mobileMenu.classList.remove('open');
}

/* ══════════════════════════ FAQ ═══════════════════════════════════════════ */
function toggleFaq(btn) {
  const item   = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ══════════════════════════ WHATSAPP FORM ═════════════════════════════════ */
function sendWhatsApp() {
  const name = document.getElementById('f-name').value.trim();
  const type = document.getElementById('f-type').value;
  const msg  = document.getElementById('f-msg').value.trim();
  if (!name || !msg) { alert('Por favor, completa tu nombre y describe tu proyecto.'); return; }
  const text = `Hola Álvaro! Soy ${name}${type ? `, ${type}` : ''}.%0A%0AMe interesa crear una herramienta de Google Sheets. Te cuento:%0A${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/34651381966?text=${text}`, '_blank');
}

/* ══════════════════════════ SCROLL REVEAL ═════════════════════════════════ */
const revealObs = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ══════════════════════════════════════════════════════════════════════════
   PRODUCTS DATA
   ──────────────────────────────────────────────────────────────────────────
   Para añadir un nuevo producto:
   1. Añade un objeto a este array.
   2. Añade la tarjeta .product-card en el HTML con data-product="tu-id".
   3. Las imágenes van en la carpeta raíz del proyecto.

   Para añadir imágenes al modal de Sistema Pro:
   ─ Añade las rutas al array "images" abajo (no hay límite de imágenes).
   ─ Ejemplo: images: ['mockup4.png', 'mockup5.png', 'mockup6.png', 'mockup7.png']
   ──────────────────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id:          'sistema-pro',
    type:        'sub',
    typeBadge:   'Suscripción mensual',
    name:        'Sistema Pro',
    tagline:     'El sistema que yo mismo usaría si empezara hoy.',
    priceNum:    '39,99 €',
    pricePeriod: '/mes',
    originalPrice: '49,99 €',
    promoLabel:  'Precio de lanzamiento (primeros 15) · +IVA',
    priceNote:   'Precio fijo. Sin sobrecoste por número de atletas.',
    description: 'Construido sobre 130 proyectos a medida en 3 años. Sistema Pro no es una plantilla: es la destilación de toda esa experiencia en un sistema profesional accesible desde el primer día. Programación, análisis, gestión de clientes y automatización completa en Google Sheets.',
    /* ── AÑADIR IMÁGENES: incluye todas las rutas que quieras aquí.
       El modal las mostrará todas en un grid de 3 columnas con lightbox al clic. ── */
    images: [
      'mockup4-Sistema-de-entrenamiento-prosheet.png',
      /* 'sistema-pro-2.png', */
      /* 'sistema-pro-3.png', */
      /* 'sistema-pro-4.png', */
    ],
    videoId: 'ZpEaguGbyE8',   /* ID del vídeo de YouTube */
    modules: [
      { num: '01', title: 'Excel del cliente',           desc: 'El atleta registra peso, perímetros, pliegues, cuestionarios y entrenamiento. Funciona en piloto automático.' },
      { num: '02', title: 'Excel de programación',       desc: 'El coach pauta el año completo semana a semana. Cálculo de métricas en tiempo real: stress index, series, volumen.' },
      { num: '03', title: 'Excel de análisis',           desc: 'Gráficas de volumen, intensidad, RM estimado, peso corporal, fatiga y análisis profundo por ejercicio.' },
      { num: '04', title: 'Panel de clientes',           desc: 'Visión global de todos los atletas. Avisos automáticos si algo falla. Clientes activos e inactivos.' },
      { num: '05', title: 'Base de datos de ejercicios', desc: 'Catálogo centralizado. Añade, edita o elimina ejercicios. Los cambios se propagan a todos los documentos.' },
      { num: '06', title: 'WebApp privada',              desc: 'Panel de control solo para el coach. Da de alta y baja clientes en pocos clics. Todo centralizado.' },
    ],
    perks: [
      'Compatible con RPE y RIR indistintamente',
      'Horquillas de intensidad, carga y repeticiones sin romper métricas',
      'Comparador Target vs Actual semana a semana',
      'Comparador de fotos corporales por fecha',
      'Configuración inicial con tu marca (colores y logo)',
      'Manual de usuario en PDF + vídeo incluido',
      'Soporte técnico incluido en el plan',
      'Tus datos en tu Google Drive, no en servidores de terceros',
    ],
    waMessage: 'Hola Álvaro! Me interesa el Sistema Pro. ¿Podrías darme más información sobre cómo empezar?',
  },

  /* ── PLANTILLA PARA NUEVOS PRODUCTOS ──────────────────────────────────────
  {
    id:          'nuevo-producto',
    type:        'one',
    typeBadge:   'Pago único',
    name:        'Nombre del producto',
    tagline:     'Subtítulo descriptivo.',
    priceNum:    '99 €',
    pricePeriod: 'pago único',
    priceNote:   'Acceso de por vida. Sin suscripciones.',
    description: 'Descripción completa...',
    images:      ['imagen.png'],
    videoId:     '',
    modules:     [{ num: '01', title: 'Módulo 1', desc: 'Descripción.' }],
    perks:       ['Ventaja 1', 'Ventaja 2'],
    waMessage:   'Hola Álvaro! Me interesa [nombre]. ¿Podrías darme más información?',
  },
  ──────────────────────────────────────────────────────────────────────── */
];

/* ══════════════════════════════════════════════════════════════════════════
   MODAL SYSTEM  +  IMAGE LIGHTBOX
   ══════════════════════════════════════════════════════════════════════════ */
const modalOverlay = document.getElementById('modalOverlay');
const modalInner   = document.getElementById('modalInner');

/* ── Lightbox: single shared overlay created once ── */
let lightboxEl = null;
function getLightbox() {
  if (lightboxEl) return lightboxEl;
  lightboxEl = document.createElement('div');
  lightboxEl.className = 'lightbox-overlay';
  lightboxEl.innerHTML = `
    <button class="lightbox-close" aria-label="Cerrar">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
    <img class="lightbox-img" src="" alt="" />`;
  lightboxEl.addEventListener('click', e => {
    if (e.target === lightboxEl || e.target.closest('.lightbox-close')) closeLightbox();
  });
  document.body.appendChild(lightboxEl);
  return lightboxEl;
}
function openLightbox(src, alt) {
  const lb = getLightbox();
  lb.querySelector('.lightbox-img').src = src;
  lb.querySelector('.lightbox-img').alt = alt || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  if (lightboxEl) lightboxEl.classList.remove('open');
  /* Only restore scroll if modal is also closed */
  if (!modalOverlay || !modalOverlay.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightboxEl && lightboxEl.classList.contains('open')) closeLightbox();
});

function openModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p || !modalOverlay || !modalInner) return;

  const badgeClass = p.type === 'sub' ? 'sub-badge' : 'one-badge';

  /* ── Images: show ALL, no limit, with lightbox on click ── */
  let imagesHtml = '';
  if (p.images && p.images.length > 0) {
    const slots = p.images.map(src => `
      <div class="modal-img-slot" onclick="openLightbox('${src}','${p.name}')" title="Ver en grande">
        <img src="${src}" alt="${p.name}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'modal-img-placeholder\\'><i class=\\'fa-regular fa-image\\'></i></div>'" />
        <div class="modal-img-zoom"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
      </div>`).join('');
    imagesHtml = `
      <div class="modal-section-label">Imágenes del producto <span style="opacity:.5;font-weight:400">(clic para ampliar)</span></div>
      <div class="modal-images">${slots}</div>`;
  }

  /* ── Video ── */
  let videoHtml = '';
  if (p.videoId) {
    videoHtml = `
      <div class="modal-section-label">Vídeo de presentación</div>
      <div class="modal-video-wrap">
        <iframe src="https://www.youtube.com/embed/${p.videoId}?rel=0&modestbranding=1"
                title="Vídeo de ${p.name}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen loading="lazy"></iframe>
      </div>`;
  } else {
    videoHtml = `
      <div class="modal-section-label">Vídeo de presentación</div>
      <div class="modal-video-wrap">
        <div class="modal-video-placeholder">
          <i class="fa-regular fa-circle-play"></i>
          <span>Vídeo disponible próximamente</span>
        </div>
      </div>`;
  }

  /* ── Modules: redesigned with big numbers ── */
  const modulesHtml = p.modules.map(m => `
    <div class="modal-module">
      <div class="modal-module-num-big">${m.num}</div>
      <div class="modal-module-title">${m.title}</div>
      <div class="modal-module-desc">${m.desc}</div>
    </div>`).join('');

  /* ── Perks ── */
  const perksHtml = p.perks.map(k =>
    `<div class="modal-perk"><i class="fa-solid fa-check"></i>${k}</div>`
  ).join('');

  const waUrl = `https://wa.me/34651381966?text=${encodeURIComponent(p.waMessage)}`;

  modalInner.innerHTML = `
    <div class="modal-header">
      <span class="modal-type-badge ${badgeClass}">${p.typeBadge}</span>
      <div class="modal-title">${p.name}</div>
      <div class="modal-tagline">${p.tagline}</div>
    </div>

    <div class="modal-price-row">
      ${p.originalPrice ? `<div class="modal-price-col">
        <div class="modal-price-original">${p.originalPrice}<span style="font-size:.75rem;font-weight:400"> ${p.pricePeriod}</span></div>
        <div class="modal-price-big">${p.priceNum}<span style="font-size:1rem;font-weight:500;-webkit-text-fill-color:var(--muted);background:none"> ${p.pricePeriod}</span></div>
        ${p.promoLabel ? `<div class="modal-price-note">${p.promoLabel}</div>` : ''}
      </div>` : `<div class="modal-price-big">${p.priceNum}<span style="font-size:1rem;font-weight:500;-webkit-text-fill-color:var(--muted);background:none"> ${p.pricePeriod}</span></div>
      <div class="modal-price-note">${p.priceNote}</div>`}
      ${!p.originalPrice ? '' : `<div class="modal-price-note-aside">${p.priceNote}</div>`}
    </div>

    <div class="modal-section-label">Descripción</div>
    <p style="color:var(--muted);font-size:.9rem;line-height:1.75;margin-bottom:28px">${p.description}</p>

    ${imagesHtml}
    ${videoHtml}

    <div class="modal-section-label">Qué incluye</div>
    <div class="modal-modules" style="margin-bottom:28px">${modulesHtml}</div>

    <div class="modal-section-label">Ventajas adicionales</div>
    <div class="modal-perks" style="margin-bottom:32px">${perksHtml}</div>

    <a href="${waUrl}" target="_blank" class="modal-cta">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Quiero el ${p.name}
    </a>
    <div class="modal-cta-note">Al pulsar, se abrirá WhatsApp con el mensaje listo para enviar.</div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  if (!lightboxEl || !lightboxEl.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}
function closeModalOutside(e) {
  if (e.target === modalOverlay) closeModal();
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) closeModal();
});

/* ══════════════════════════════════════════════════════════════════════════
   TESTIMONIALS DATA
   ──────────────────────────────────────────────────────────────────────────
   Para añadir testimonios: añade objetos al final del array.
   Campos:
   ─ img          Ruta de la foto de perfil (carpeta raíz)
   ─ handle       Usuario de Instagram con @
   ─ verified     true → muestra el tick azul de verificación
   ─ role         Descripción profesional breve
   ─ product      Nombre del producto o servicio (texto del badge)
   ─ productType  'custom' | 'sub' | 'one'
   ─ text         Opinión del cliente (puede estar vacío "")
   ─ tags         Array de strings — tipos de trabajo realizado (puede ser [])
   ══════════════════════════════════════════════════════════════════════════ */
const TESTIMONIALS = [
    {
    img:         'testimonio10.jpg',
    handle:      '@miguelzarza_trainer',
    verified:    true,
    role:        'Entrenador especializado en lipedema',
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        '',
    tags:        ['Entrenamiento', 'Nutrición'],
  },








  

  {
    img:         'testimonio2.jpg',
    handle:      '@strength.phase',
    verified:    true,
    role:        'Entrenador de powerlifting e hipertrofia',
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        '',
    tags:        ['Entrenamiento','Gestión de clientes'],
  },
    {
    img:         'testimonio12.jpg',
    handle:      '@adriraw',
    verified:    false,
    role:        'Fisioterapeuta especializado en deportes de fuerza',
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        'Álvaro fue muy profesional en todo momento: con el trato, los tiempos de entrega y sobre todo con la resolución de errores y el mantenimiento de la plataforma post proyecto. Una inversión que me ha ayudado a mejorar la gestión de pacientes y economizar mucho tiempo.',
    tags:        ['Fisioterapia', 'Gestión de clientes'],
  },
    {
    img:         'testimonio13.jpg',
    handle:      '@olayagaliano_',
    verified:    false,
    role:        'Dietista y entrenadora online',
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        'La verdad que tanto el servicio como el programa es de locos, lo más top es que puedes pedirlo a tu gusto desde detalles más básicos hasta lo más profesional, yo estoy muy contenta.',
    tags:        ['Nutrición'],
  },
    {
    img:         'testimonio9.jpg',
    handle:      '@pabloreveriego',
    verified:    true,
    role:        'Atleta y entrenador de streetlifting',
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        'Álvaro es un trabajador excepcional, nunca había trabajado con alguien que se volcase tanto en los proyectos. Desde la propuesta, el sistema de trabajo y el onboarding junto al seguimiento paso por paso del proyecto, todo es magnífico. Cualquier corrección y detalle se habla y se adapta durante el proceso de creación y la entrega es brutal porque incluye un manual de usuario individualizado. Sin duda, mi herramienta de trabajo está a otro nivel gracias a Álvaro, que es un profesional de 10',
    tags:        ['Entrenamiento'],
  },
    {
    img:         'testimonio8.jpg',
    handle:      '@alefuerzareal',
    verified:    false,
    role:        'Competidora internacional de powerlifting y entrendora personal',
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        '',
    tags:        ['Entrenamiento', 'Contabilidad'],
  },
    {
    img:         'testimonio7.jpg',
    handle:      '@physiolifter_',
    verified:    false,
    role:        'Fisio y entrenador de powerlifting',
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        '',
    tags:        ['Entrenamiento', 'Fisioterapia'],
  },
  {
    img:         'testimonio1.jpg',
    handle:      '@gorila_n_t',
    verified:    true,
    role:        'Ex boxeador profesional, entrenador y dietista en deportes de contacto',
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        'Servicio de 10 desde el primer momento. Desde que desarrollamos el Excel de entrenamientos, todo ha funcionado exactamente como necesitaba: ahora puedo controlar cada detalle de forma clara y eficiente. Has cumplido con los plazos, la entrega ha sido impecable y, sobre todo, has demostrado un nivel de profesionalidad altísimo durante todo el proceso.',
    tags:        ['Entrenamiento', 'Contabilidad', 'Test físicos'],
  },
  {
    img:         'testimonio4.jpg',
    handle:      '@coach_coni',
    verified:    false,
    role:        'Entrenador especialista en hipertrofia',
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        'El servicio de Alvaro vale cada centavo invertido porque la dedicación, conocimiento y atención son impecables. Desde la llamada inicial demuestra que ama su trabajo y se ve materializado en los mega Excels que nos permiten mejorar el servicio y trabajar mejor a cada uno de los entrenadores que confiamos en el. Sin duda repetiria una y mil veces sí necesitara de su ayuda. 100% recomendable!',
    tags:        ['Entrenamiento'],
  },
  {
    img:         'testimonio3.jpg',
    handle:      '@nutribyangy',
    verified:    false,
    role:        'Dietista deportiva',
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        'Trabajo totalmente personalizado a mi gusto y muy completo, ahora ahorro tiempo para dedicarme mejor a mis clientes. Destaco la implicación de Álvaro y capacidad para adaptarse a todo lo que yo necesitaba.',
    tags:        ['Nutrición'],
  },
      {
    img:         'testimonio11.jpg',
    handle:      '@juan.gason',
    verified:    true,
    role:        'Atleta y entrenador de streetlifting',
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        'Estoy muy contento con el trabajo de Álvaro. Ya le he pedido varios Excels porque trabaja rápido, entiende muy bien las necesidades del proyecto y se implica mucho en mejorar la herramienta. En mi caso, me ha ayudado a gestionar mejor a mis clientes y a dar un servicio más ordenado, medible y profesional!',
    tags:        ['Entrenamiento', 'Contabilidad'],
  },
  {
    img:         'testimonio6.jpg',
    handle:      '@gerardmoyaa',
    verified:    false,
    role:        "Entrenador y atleta de powerlifting",
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        'Estoy muy contento con el trabajo de Álvaro, gracias a la herramienta que me ha proporcionado he podido dar un paso hacia adelante en la calidad de mi servicio y todos mis atletas se han podido beneficiar de ello.',
    tags:        ['Entrenamiento'],
  },
  {
    img:         'testimonio5.jpg',
    handle:      '@miguelatm_',
    verified:    false,
    role:        "Atleta Men's Physique y entrenador online",
    product:     'Proyecto a medida',
    productType: 'custom',
    text:        'Con el paso del tiempo te das cuenta a la hora de ser un buen entrenador el tener tiempo para invertir en tu negocio o en ti. Y esto es lo que hemos conseguido, una plataforma donde poder trabajar de manera ordenada, eficiente, clara, con buenos registros que me facilitan mucho el trabajo día a día y que dan una profesionalidad a mi servicio increíble.',
    tags:        ['Entrenamiento', 'Nutrición', 'Contabilidad'],
  },
];

const PRODUCT_TYPE_COLORS = {
  custom: '#2fe8b8',
  sub:    '#3a9eff',
  one:    '#a855f7',
};

/* SVG del tick azul de verificación de Instagram */
const VERIFIED_SVG = `<svg class="testi-verified" viewBox="0 0 24 24" aria-label="Verificado">
  <circle cx="12" cy="12" r="11" fill="#3897F0"/>
  <path d="M7.5 12l3 3 6-6.5" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

function buildCarousel() {
  const wrap = document.getElementById('carouselWrap');
  if (!wrap) return;

  const outer   = wrap.closest('.section-testimonials');
  const track   = wrap.querySelector('.carousel-track');
  const btnPrev = wrap.querySelector('.carousel-btn-prev');
  const btnNext = wrap.querySelector('.carousel-btn-next');
  const hintEl  = document.querySelector('.carousel-pause-hint');

  /* ── Constants (must match CSS) ── */
  const CARD_W        = 300;
  const GAP           = 24;
  const STEP          = CARD_W + GAP;
  const N             = TESTIMONIALS.length;
  const SECS_PER_CARD = 5;
  const DURATION      = N * SECS_PER_CARD;

  /* ── Build card HTML ── */
  function cardHTML(t) {
    const color    = PRODUCT_TYPE_COLORS[t.productType] || PRODUCT_TYPE_COLORS.custom;
    const verified = t.verified ? VERIFIED_SVG : '';
    const quote    = t.text ? `<div class="testi-quote">"${t.text}"</div>` : '';
    const tagsHtml = (t.tags && t.tags.length > 0)
      ? `<div class="testi-tags">${t.tags.map(tag => `<span class="ptag">${tag}</span>`).join('')}</div>`
      : '';
    return `
      <div class="testi-card">
        <!-- Badge: top-left overlay, like portfolio-img-tag -->
        <div class="testi-type-badge" style="--badge-color:${color}">${t.product}</div>
        <div class="testi-img-wrap">
          <img src="${t.img}" alt="${t.handle}"
               onerror="this.style.display='none';this.parentElement.classList.add('testi-img--fallback')" />
          <div class="testi-img-fallback"><i class="fa-solid fa-user"></i></div>
        </div>
        <div class="testi-header">
          <div class="testi-name-row">
            <span class="testi-handle">${t.handle}</span>
            ${verified}
          </div>
          <div class="testi-role">${t.role}</div>
        </div>
        ${quote}
        ${tagsHtml}
      </div>`;
  }

  /* ── Render 3 copies for seamless loop ── */
  track.innerHTML = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map(cardHTML).join('');

  /* ── Animation parameters ── */
  const loopWidth = N * STEP;
  track.style.setProperty('--carousel-width',    `${loopWidth}px`);
  track.style.setProperty('--carousel-duration', `${DURATION}s`);

  /* ── Random starting position ── */
  const startIdx   = Math.floor(Math.random() * N);
  const startDelay = -(startIdx / N) * DURATION;
  track.style.animationDelay = `${startDelay}s`;

  /* ── State ── */
  let paused     = false;
  let currentIdx = startIdx;

  function setHint(text) { if (hintEl) hintEl.textContent = text; }

  /* ── PAUSE: reads live transform, removes animation, snaps to nearest card ── */
  function pause() {
    if (paused) return;
    paused = true;

    const matrix = window.getComputedStyle(track).transform;
    let rawOffset = 0;
    if (matrix && matrix !== 'none') {
      const parts = matrix.match(/matrix\(([^)]+)\)/)?.[1].split(',');
      if (parts && parts.length >= 6) rawOffset = parseFloat(parts[4]);
    }

    track.style.animation  = 'none';
    currentIdx = ((Math.round(-rawOffset / STEP) % N) + N) % N;
    const snapPx = -currentIdx * STEP;

    track.style.transition = 'none';
    track.style.transform  = `translateX(${rawOffset}px)`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        track.style.transition = 'transform 0.4s cubic-bezier(.22,1,.36,1)';
        track.style.transform  = `translateX(${snapPx}px)`;
      });
    });

    if (outer)   outer.classList.add('is-paused');
    if (btnPrev) btnPrev.classList.add('visible');
    if (btnNext) btnNext.classList.add('visible');
    wrap.style.cursor = 'default';
    setHint('Usa las flechas para navegar');
  }

  /* ── SLIDE (only when paused) ── */
  function slideTo(idx) {
    if (!paused) return;
    currentIdx = ((idx % N) + N) % N;
    track.style.transition = 'transform 0.4s cubic-bezier(.22,1,.36,1)';
    track.style.transform  = `translateX(${-currentIdx * STEP}px)`;
  }

  /* ── Events ── */
  wrap.addEventListener('click', e => {
    if (e.target.closest('.carousel-btn-prev') || e.target.closest('.carousel-btn-next')) return;
    pause();
  });
  if (btnPrev) btnPrev.addEventListener('click', e => { e.stopPropagation(); slideTo(currentIdx - 1); });
  if (btnNext) btnNext.addEventListener('click', e => { e.stopPropagation(); slideTo(currentIdx + 1); });
  document.addEventListener('keydown', e => {
    if (!paused) return;
    if (e.key === 'ArrowLeft')  { e.preventDefault(); slideTo(currentIdx - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); slideTo(currentIdx + 1); }
  });
}

if (document.getElementById('carouselWrap')) buildCarousel();
