const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const config = {
  title: 'autobrr',
  tagline: 'the modern autodl-irssi replacement',
  url: 'https://autobrr.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'autobrr', // Usually your GitHub org/user name.
  projectName: 'autobrr', // Usually your repo name.

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/autobrr/autobrr.com/tree/main/',
          sidebarCollapsible: false,
          routeBasePath: "/",
        },
        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: "img/logo.png",
      navbar: {
        title: 'autobrr',
        logo: {
          alt: 'autobrr Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'faqs',
            position: 'left',
            label: 'FAQs',
          },
          {
            to: 'community/contributors',
            position: 'left',
            label: 'Community',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/autobrr/autobrr',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
      },
      footer: {
        logo: {
          alt: 'autobrr Logo',
          src: 'img/logo-sm.png',
          href: 'https://autobrr.com',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/introduction/',
              },
              {
                label: 'Getting Started',
                to: '/getting-started/',
              },
              {
                label: 'Filters',
                to: '/filters/',
              },
              {
                label: 'FAQs',
                to: '/faqs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/WQ2eUycxyT',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/autobrr/autobrr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} autobrr. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
