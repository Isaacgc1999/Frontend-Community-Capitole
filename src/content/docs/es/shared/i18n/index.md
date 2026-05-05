---
title: Internacionalización (i18n)
description: Guías cross-framework para construir aplicaciones frontend multi-idioma.
---

Guías cross-framework para construir aplicaciones frontend multi-idioma. Estas convenciones aplican a proyectos Angular, React y Vue de esta comunidad.

## Objetivos

- Pasar todos los textos de UI por una capa de traducción (sin texto hardcodeado)
- Mantener claves estables, estructuradas y significativas
- Soportar formato sensible al locale (fechas, números, monedas, plurales)
- Que añadir un nuevo idioma sea un cambio de configuración, no una refactorización

## Librerías recomendadas

| Stack   | Librería                                    |
| ------- | ------------------------------------------- |
| React   | `react-i18next` / `react-intl` / `lingui`   |
| Angular | `@angular/localize` / `@ngx-translate/core` |
| Vue     | `vue-i18n`                                  |
| Común   | ICU MessageFormat para plurales y género    |

Elegí una por proyecto y mantenela.

## Estructura del proyecto

```text
src/
  i18n/
    en/
      common.json
      auth.json
      checkout.json
    es/
      common.json
      auth.json
      checkout.json
    index.ts          → loader / configuración
```

- Un archivo por feature o dominio (`auth`, `checkout`, `profile`)
- Replicar el mismo árbol de claves en cada locale
- Mantener `en` como fuente de verdad; los demás locales se traducen desde ahí

## Naming de claves

- Usá `camelCase` o `dot.notation`, no frases completas
- Agrupá por feature, luego por componente o pantalla
- Que las claves describan la intención, no el texto literal

## Formato sensible al locale

Usá las APIs `Intl` de la plataforma (o los wrappers de la librería i18n) para:

- `Intl.DateTimeFormat` → fechas y horas
- `Intl.NumberFormat` → números, monedas, porcentajes
- `Intl.RelativeTimeFormat` → "hace 2 horas" / "2 hours ago"
- `Intl.PluralRules` → categorías de plural

Nunca formatees con templates de string manuales — se rompen en otros locales.

## Checklist de code review

- [ ] No hay strings hardcodeados visibles al usuario
- [ ] Las claves son estables, descriptivas y agrupadas por feature
- [ ] Los plurales usan ICU, no `if (count === 1)`
- [ ] Fechas, números y monedas usan `Intl` (o el equivalente de la librería)
- [ ] Todos los locales tienen las mismas claves (sin traducciones faltantes)
- [ ] Los idiomas RTL se renderizan correctamente si se soportan
- [ ] Los strings se renderizan sin overflow con ~30% más de longitud (alemán y español suelen expandirse)

## Referencias

- [Unicode CLDR](https://cldr.unicode.org/)
- [ICU MessageFormat](https://unicode-org.github.io/icu/userguide/format_parse/messages/)
- [MDN — Intl](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl)
