const DEFAULT_HEADER_OFFSET = 88;

type ScrollOptions = {
  offset?: number;
  replace?: boolean;
  onComplete?: () => void;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function updateHash(href: string, replace?: boolean) {
  const nextUrl = new URL(window.location.href);
  nextUrl.hash = href === "#" ? "" : href;
  const nextPath = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;

  if (replace) {
    window.history.replaceState(null, "", nextPath);
    return;
  }

  window.history.pushState(null, "", nextPath);
}

export function scrollToHash(href: string, options: ScrollOptions = {}) {
  if (typeof window === "undefined") {
    return;
  }

  if (!href.startsWith("#")) {
    window.location.href = href;
    return;
  }

  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
    updateHash(href, options.replace);
    options.onComplete?.();
    return;
  }

  const id = decodeURIComponent(href.slice(1));
  const target = document.getElementById(id);

  if (!target) {
    options.onComplete?.();
    return;
  }

  const top =
    target.getBoundingClientRect().top +
    window.scrollY -
    (options.offset ?? DEFAULT_HEADER_OFFSET);

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
  updateHash(href, options.replace);
  options.onComplete?.();
}

export function scheduleScrollToHash(
  href: string,
  options: ScrollOptions = {},
) {
  if (typeof window === "undefined") {
    return () => {};
  }

  let firstFrame = 0;
  let secondFrame = 0;

  firstFrame = window.requestAnimationFrame(() => {
    secondFrame = window.requestAnimationFrame(() => {
      scrollToHash(href, options);
    });
  });

  return () => {
    window.cancelAnimationFrame(firstFrame);
    window.cancelAnimationFrame(secondFrame);
  };
}
