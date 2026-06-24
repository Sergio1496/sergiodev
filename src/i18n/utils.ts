import { ui, defaultLang, type Lang } from "./ui";

/** Idiomas soportados, en orden de aparición en el selector. */
export const languages: Record<Lang, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  it: "Italiano",
};

export const locales = Object.keys(languages) as Lang[];

/** Detecta el idioma a partir del primer segmento de la ruta. */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  if (segment && segment in ui) return segment as Lang;
  return defaultLang;
}

/** Devuelve una función t() que traduce claves para el idioma dado. */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

/**
 * Construye la ruta equivalente en otro idioma conservando el resto del path.
 * El idioma por defecto (es) vive en la raíz; los demás llevan prefijo.
 */
export function localizePath(path: string, lang: Lang): string {
  // Quita un posible prefijo de idioma existente.
  const segments = path.split("/").filter(Boolean);
  if (segments[0] && segments[0] in ui) segments.shift();
  const rest = segments.join("/");
  if (lang === defaultLang) return "/" + rest;
  return "/" + lang + (rest ? "/" + rest : "");
}
