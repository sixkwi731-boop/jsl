const menu = document.getElementById("menu");
const toggle = document.querySelector(".toggle-menu");

function ensureOverlay() {
  let overlay = document.querySelector(".nav-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    overlay.setAttribute("aria-hidden", "true");
    document.body.appendChild(overlay);
  }
  return overlay;
}

function setMenu(open) {
  if (!menu || !toggle) return;
  const overlay = ensureOverlay();
  menu.classList.toggle("is-open", open);
  overlay.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

if (toggle && menu) {
  const overlay = ensureOverlay();

  toggle.addEventListener("click", () => {
    setMenu(!menu.classList.contains("is-open"));
  });

  overlay.addEventListener("click", () => setMenu(false));

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) setMenu(false);
  });
}

const hero = document.querySelector("[data-hero]");
if (hero) {
  const allSlides = [...hero.querySelectorAll(".hero-slide")];
  const dotsWrap = hero.querySelector(".hero-dots");
  let slides = [];
  let dots = [];
  let index = 0;
  let timer;

  function visibleSlides() {
    return allSlides.filter((slide) => {
      if (!slide.classList.contains("hero-slide--desktop-only")) return true;
      return window.innerWidth >= 992;
    });
  }

  function build() {
    clearInterval(timer);
    slides = visibleSlides();
    dotsWrap.innerHTML = "";

    allSlides.forEach((slide) => slide.classList.remove("is-active"));

    if (!slides.length) return;

    index = Math.min(index, slides.length - 1);
    slides[index].classList.add("is-active");

    slides.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", `Ir para o slide ${i + 1}`);
      if (i === index) btn.classList.add("is-active");
      btn.addEventListener("click", () => go(i));
      dotsWrap.appendChild(btn);
    });

    dots = [...dotsWrap.querySelectorAll("button")];
    restart();
  }

  function go(i) {
    if (!slides.length) return;
    slides[index].classList.remove("is-active");
    dots[index]?.classList.remove("is-active");
    index = (i + slides.length) % slides.length;
    slides[index].classList.add("is-active");
    dots[index]?.classList.add("is-active");
    restart();
  }

  function restart() {
    clearInterval(timer);
    if (slides.length < 2) return;
    timer = setInterval(() => go(index + 1), 5000);
  }

  let touchStartX = 0;
  hero.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  hero.addEventListener(
    "touchend",
    (e) => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) < 40) return;
      go(diff < 0 ? index + 1 : index - 1);
    },
    { passive: true }
  );

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(build, 150);
  });

  build();
}

const conheca = document.querySelector("[data-conheca-slider]");
if (conheca) {
  const slides = [...conheca.querySelectorAll(".conheca-slide")];
  const dotsWrap = conheca.querySelector(".conheca-dots");
  let index = 0;
  let timer;
  let videoPlaying = false;

  function go(i) {
    if (slides.length < 2 || videoPlaying) return;
    slides[index].classList.remove("is-active");
    dotsWrap?.querySelectorAll("button")[index]?.classList.remove("is-active");
    index = (i + slides.length) % slides.length;
    slides[index].classList.add("is-active");
    dotsWrap?.querySelectorAll("button")[index]?.classList.add("is-active");
    restart();
  }

  function restart() {
    clearInterval(timer);
    if (slides.length < 2 || videoPlaying) return;
    timer = setInterval(() => go(index + 1), 4500);
  }

  if (slides.length > 1 && dotsWrap) {
    slides.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", `Ir para o slide ${i + 1}`);
      if (i === index) btn.classList.add("is-active");
      btn.addEventListener("click", () => go(i));
      dotsWrap.appendChild(btn);
    });
    restart();
  }

  let touchStartX = 0;
  conheca.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  conheca.addEventListener(
    "touchend",
    (e) => {
      if (slides.length < 2 || videoPlaying) return;
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) < 40) return;
      go(diff < 0 ? index + 1 : index - 1);
    },
    { passive: true }
  );

  const videoBox = conheca.querySelector("[data-youtube]");
  const previewBtn = videoBox?.querySelector(".conheca-video__preview");
  if (videoBox && previewBtn) {
    previewBtn.addEventListener("click", () => {
      if (videoBox.classList.contains("is-playing")) return;

      const id = videoBox.getAttribute("data-youtube");
      const iframe = document.createElement("iframe");
      iframe.className = "conheca-video__frame";
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
      iframe.title = "Conheça a JSL";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");

      videoBox.appendChild(iframe);
      videoBox.classList.add("is-playing");
      videoPlaying = true;
      clearInterval(timer);
    });
  }
}

const statsSlider = document.querySelector("[data-stats-slider]");
if (statsSlider) {
  const slides = [...statsSlider.querySelectorAll(".stats-slide")];
  let index = 0;
  let timer;

  function go(i) {
    if (slides.length < 2) return;
    slides[index].classList.remove("is-active");
    index = (i + slides.length) % slides.length;
    slides[index].classList.add("is-active");
    restart();
  }

  function restart() {
    clearInterval(timer);
    if (slides.length < 2) return;
    timer = setInterval(() => go(index + 1), 4000);
  }

  restart();

  let touchStartX = 0;
  statsSlider.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );
  statsSlider.addEventListener(
    "touchend",
    (e) => {
      if (slides.length < 2) return;
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) < 40) return;
      go(diff < 0 ? index + 1 : index - 1);
    },
    { passive: true }
  );
}

const faqList = document.querySelector(".faq-list");
if (faqList) {
  faqList.addEventListener("toggle", (e) => {
    const item = e.target;
    if (!(item instanceof HTMLDetailsElement) || !item.open) return;
    faqList.querySelectorAll("details.faq-item[open]").forEach((other) => {
      if (other !== item) other.open = false;
    });
  }, true);
}
