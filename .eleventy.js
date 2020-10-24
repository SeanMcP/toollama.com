module.exports = (config) => {
  config.addPassthroughCopy("./src/assets");

  const MarkdownIt = require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
    quotes: "“”‘’",
  })
    .use(require("markdown-it-anchor"), {
      permalink: true,
      permalinkClass: "permalink",
      permalinkSymbol: "#",
    })
    // This rule makes code blocks out of anything that is
    // indented, causing a problem for nested HTML.
    .disable("code");

  config.setLibrary("md", MarkdownIt);

  return {
    dir: {
      input: "./src",
      output: "./docs",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
