// ═══════════════════════════════════════════════════════════════
// OlympusStudios.ca — 11ty (Eleventy) Configuration
// ═══════════════════════════════════════════════════════════════

const yaml = require("js-yaml");
const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  // ── Passthrough copies ──────────────────────────────────
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/_headers");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");

  // ── Data file extensions ────────────────────────────────
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  // ── Filters ──────────────────────────────────────────────
  // Limit array to first N items
  eleventyConfig.addFilter("limit", (arr, count) => {
    if (!Array.isArray(arr)) return [];
    return arr.slice(0, count);
  });

  // Date formatting
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // Slugify
  eleventyConfig.addFilter("slug", (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  });

  // Find production by slug
  eleventyConfig.addFilter("findProduction", (productions, slug) => {
    return (productions || []).find((p) => p.slug === slug);
  });

  // ── Collections ─────────────────────────────────────────

  // ── Return config ───────────────────────────────────────
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
      layouts: "includes/layouts",
      data: "data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: "/",
  };
};
