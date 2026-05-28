// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AgroTech Inteli',
  tagline: 'Documentação estratégica da vertical SoloBom',
  favicon: 'img/favicon.ico',

  url: 'https://AgroTech-Inteli-ATI.github.io', // Atualize conforme sua organização
  baseUrl: '/2026_01_Mantiqueira_Brasil/',
  trailingSlash: true,

  organizationName: 'AgroTech-Inteli-ATI', // Atualize conforme sua organização
  projectName: '2026_01_Mantiqueira_Brasil',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'AgroTech Inteli',
        logo: {
          alt: 'AgroTech Inteli',
          src: 'img/logo.png',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {
            href: 'https://github.com/AgroTech-Inteli-ATI/2026_01_Mantiqueira_Brasil', // Atualize para o URL correto do seu repositório
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentação',
                to: '/',
              },
            ],
          },
          // Resto do footer continua igual
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AgroTech Inteli. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;