# The blog-app

<p align="left">
  <a aria-label="Build" href="https://github.com/belgattitude/nextjs-monorepo-example/actions?query=workflow%3ACI">
    <img alt="build" src="https://img.shields.io/github/workflow/status/belgattitude/nextjs-monorepo-example/CI-blog-app/main?label=CI&logo=github&style=flat-quare&labelColor=000000" />
  </a>
</p>

> Part of the [nextjs-monorepo-example](https://github.com/belgattitude/nextjs-monorepo-example)

## Develop

```bash
$ cd apps/blog-app
$ yarn dev -p 3000
# Alternatively: yarn workspace webapp run dev -p 3000
```

### Features

> Some common features that have been enabled to widen monorepo testing scenarios.

- [x] Styling: [Emotion v11](https://emotion.sh/) support with critical path extraction enabled.
- [x] Styling: [Tailwind v3](https://tailwindcss.com/) with JIT mode enabled and common plugins.
- [x] Security: [next-secure-headers](https://github.com/jagaapple/next-secure-headers) with basic defaults.
- [x] Seo: [next-seo](https://github.com/garmeeh/next-seo)
- [x] Tests: [jest](https://jestjs.io/) + [ts-jest](https://github.com/kulshekhar/ts-jest) + [@testing-library/react](https://testing-library.com/)
- [x] E2E: [Playwright](https://playwright.dev/)
