module.exports = {
  locales: ['th', 'en'],
  defaultLocale: 'th',
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`translation/locales/${lang}/${ns}.json`).then((m) => m.default),
};
