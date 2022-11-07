/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  title: 'The Paladin Network',
  titleTemplate: 'The Paladin Docs',
  description:
    'Documentation about content policies and support documentation for employees and contributors.',
  lang: 'en-us',
  appearance: true, // automatically use device theme, but still show a toggle
  base: '/', // we publish to the root of a subdomain, so we do not need to prepend URLs with a path
  ignoreDeadLinks: false, // fail builds if there are broken links
  lastUpdated: true, // show page's last updated time based on git commits
  markdown: {
    lineNumbers: true, // show line numbers in code blocks
  },
  cleanUrls: 'with-subfolders', // do not use .html at the end of urls
  themeConfig: {
    nav: [
      { text: 'Website', link: 'https://thepaladin.news' },
      { text: 'Cristata', link: 'https://cristata.app/paladin-news' },
      { text: 'GitHub', link: 'https://github.com/paladin-news' },
    ],
    sidebar: [
      {
        text: 'Editing',
        items: [
          { text: 'Copy editing guidelines', link: '/editing/copy-guidelines' },
          { text: 'Editing checklist', link: '/editing/copy-checklist' },
        ],
      },
      {
        text: 'Policies',
        items: [
          { text: 'Constitution', link: '/policies/constitution' },
          { text: 'Student Media Board', link: '/policies/student-media-board-constitution' },
          { text: 'Privacy policy', link: '/policies/privacy-policy' },
          { text: 'Photos', link: '/policies/photos' },
        ],
      },
      {
        text: 'Brand guides',
        items: [
          { text: 'The Paladin Network', link: '/brand-guides/the-paladin-network' },
          { text: 'The Paladin Newspaper', link: '/brand-guides/the-paladin-newspaper' },
          { text: 'The Flusher', link: '/brand-guides/the-flusher' },
          { text: 'Furman University News Channel', link: '/brand-guides/func' },
        ],
      },
      {
        text: 'Print Newspaper',
        items: [
          { text: 'Printing and shipping', link: '/print-newspaper/printing-and-shipping' },
          { text: 'Schedule', link: '/print-newspaper/schedule' },
          { text: 'Tips and guidelines', link: '/print-newspaper/tips-guidelines' },
          { text: 'Archiving', link: '/print-newspaper/archiving' },
        ],
      },
      {
        text: 'Advertising',
        items: [
          { text: 'Rate card', link: '/rates/rate-card' },
          { text: 'Website', link: '/rates/website' },
          { text: 'The Flusher', link: '/rates/the-flusher' },
          { text: 'Emails', link: '/rates/emails' },
          { text: 'Print newspaper', link: '/rates/newspaper' },
        ],
      },
    ],
    footer: {
      message:
        'The Paladin Network is a student-run organization and is editorially independent from Furman University.',
      copyright:
        'It benefits the campus of Furman University and the Greenville area. Any opinions do not necessarily reflect the opinion of Furman University or any representatives of Furman.',
    },
  },
};

export default config;
