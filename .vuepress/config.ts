import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";
import { navbar } from "./configs";

// const isProd = process.env.NODE_ENV === "production";
const isProd = true;

export default defineUserConfig({
  base: "/",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "Zur Reinheit funktionaler Oberflächen" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Zur Reinheit funktionaler Oberflächen" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  // site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "Reinheit funktionaler Oberflächen",
      description: "Gesammelte Fachaufsätze"
    }
  },

  // specify bundler via environment variable
  bundler:
    process.env.DOCS_BUNDLER === "webpack" ? webpackBundler() : viteBundler(),

  // configure default theme
  theme: gungnirTheme({
    repo: "Renovamen/vuepress-theme-gungnir",
    docsDir: "docs",

    // personal information
    personalInfo: {
      name: "Zur Reinheit funktionaler Oberflächen",
      avatar: "/img/avatar.png",
      description: "Win Labuda et al.",
      sns: {
        github: "clear-clean",
        linkedin: "win-labuda-5a1791128",
        email: "win@labuda.net"
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/labor.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/labor.jpg",
        mask: "rgba(211, 136, 37, .5)"
      }
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Suche nach Schlagworten",
        bgImage: {
          path: "/img/home-bg/labor.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle: "Lesenwertes im Internet",
        bgImage: {
          path: "/img/home-bg/labor.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale is English, we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbar.en,
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      mermaid: true,
      chartjs: true,
      mdPlus: {
        all: true
      },
      pwa: true,
      search: false // use @vuepress/plugin-docsearch instead
    },

    footer: `
      &copy; <a href="https://github.com/clear-clean" target="_blank">Clear&Clean GmbH</a> 2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }),

  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    }
  },

  // plugins: [
  //   docsearchPlugin({
  //     appId: "3DDLGP0IG4",
  //     apiKey: "6556adaa82b31485309b440a525f264a",
  //     indexName: "v2-vuepress-theme-gungnir"
  //   })
  // ]
});
