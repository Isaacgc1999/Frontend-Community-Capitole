# Internationalization (i18n)

Cross-framework guidelines for building multi-language frontend applications. These conventions apply to Angular, React and Vue projects in this community.

---

## 🎯 Goals

- Ship every user-facing string through a translation layer (no hardcoded text)
- Keep keys stable, structured and meaningful
- Support locale-aware formatting (dates, numbers, currencies, plurals)
- Make adding a new language a configuration change, not a refactor

---

## 📚 Recommended libraries

| Stack   | Library                                  |
| ------- | ---------------------------------------- |
| React   | `react-i18next` / `react-intl` / `lingui`|
| Angular | `@angular/localize` / `@ngx-translate/core` |
| Vue     | `vue-i18n`                               |
| Shared  | ICU MessageFormat for plurals & gender   |

Pick one per project and stick with it.

---

## 🗂️ Project structure

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
    index.ts          → loader / configuration
```

- One file per feature or domain (`auth`, `checkout`, `profile`)
- Mirror the same key tree across every locale
- Keep `en` as the source of truth; other locales are translated from it

---

## 🔑 Key naming

- Use `camelCase` or `dot.notation`, not full sentences
- Group by feature, then by component or screen
- Keep keys descriptive of intent, not of the literal text

```jsonc
// ✅ Good
{
  "checkout": {
    "summary": {
      "title": "Order summary",
      "totalLabel": "Total"
    },
    "actions": {
      "confirm": "Confirm purchase"
    }
  }
}

// ❌ Bad
{
  "confirmPurchaseButtonOnTheCheckoutSummary": "Confirm purchase"
}
```

---

## ✍️ Writing translatable strings

- Never concatenate translated fragments — use interpolation
- Use ICU MessageFormat for plurals and gender
- Move punctuation, spacing and casing **inside** the translation

```ts
// ✅ Good
t('cart.itemCount', { count }) // "{count, plural, one {# item} other {# items}}"

// ❌ Bad
`${t('cart.youHave')} ${count} ${t('cart.items')}`
```

---

## 🌍 Locale-aware formatting

Use the platform `Intl` APIs (or the i18n library wrappers around them) for:

- `Intl.DateTimeFormat` → dates and times
- `Intl.NumberFormat` → numbers, currencies, percentages
- `Intl.RelativeTimeFormat` → "hace 2 horas" / "2 hours ago"
- `Intl.PluralRules` → plural categories

Never format with manual string templates — they break in other locales.

---

## 🔁 Adding a new language

1. Duplicate the `en/` folder into the new locale code (e.g. `pt/`)
2. Translate every value, **keeping keys identical**
3. Register the locale in the i18n config and language switcher
4. Verify pluralization rules and date/number formats
5. Add a smoke test that renders a representative screen in the new locale

---

## ✅ Code review checklist

- [ ] No hardcoded user-facing strings
- [ ] Keys are stable, descriptive and grouped by feature
- [ ] Plurals use ICU, not `if (count === 1)`
- [ ] Dates, numbers and currencies use `Intl` (or library equivalent)
- [ ] All locales have the same keys (no missing translations)
- [ ] RTL languages render correctly if supported
- [ ] Strings render without overflow at ~30% longer (German, Spanish often expand)

---

## 🧪 Testing

- Snapshot or render tests run with at least two locales
- A "pseudo-locale" build (e.g. `en-XA`) catches missing or hardcoded strings
- Lint or CI rule that fails on missing keys across locales

---

## 📎 References

- [Unicode CLDR](https://cldr.unicode.org/)
- [ICU MessageFormat](https://unicode-org.github.io/icu/userguide/format_parse/messages/)
- [MDN — Intl](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl)
