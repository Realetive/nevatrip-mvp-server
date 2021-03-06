module.exports = {
  fileProvider: require('enb/techs/file-provider'),
  // fileMerge: require('enb/techs/file-merge'),
  fileCopy: require('enb/techs/file-copy'),
  // fileWrite: require('enb/techs/write-file'),
  borschik: require('enb-borschik/techs/borschik'),
  postcss: require('enb-postcss/techs/enb-postcss'),
  postcssPlugins: [
    require('postcss-import')(),
    require('postcss-each'),
    require('postcss-for'),
    require('postcss-simple-vars')(),
    require('postcss-nested'),
    require('lost'),
    require('pobem'),
    require('postcss-inline-svg'),
    require('postcss-url')([{ url: 'rebase' }]),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          preserve: true,
          warnings: false
        }
      }
    }),
    require('postcss-reporter')(),
  ],
  // browserJs: require('enb-js/techs/browser-js'),
  // babel: require('enb-babelify/techs/babel-browser-js'),
  // babelPolyfill: require('../tech/enb-babel-polyfill'),
  // prependYm: require('enb-modules/techs/prepend-modules'),
  bemtreeI18N: require('enb-bemxjst-i18n/techs/bemtree-i18n'),
  // bemhtmlI18N: require('enb-bemxjst-i18n/techs/bemhtml-i18n'),
  // bemtree: require('enb-bemxjst/techs/bemtree'),
  bemhtml: require('enb-bemxjst/techs/bemhtml'),
  keysets: require('enb-bem-i18n/techs/keysets'),
  i18n: require('enb-bem-i18n/techs/i18n'),
  bem: require('enb-bem-techs'),
};
