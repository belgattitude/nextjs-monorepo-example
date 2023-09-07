## Project structure

The project takes inspiration from the popular [bulletproof-react](https://github.com/alan2207/bulletproof-react) guide
([direct link](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)) with adaptations
specific to nextjs (no appDir) and server side features.

### Monorepo level

```
.
├── 🌳 apps
│   ├── 📦 nextjs-app  
│   └── (react-expo-app, tauri-app...)
└── packages    
    ├── design-system         
    └── (prisma-db, common-i18n...)
```

### App level

```
🌳 (generally starts at ./apps in monorepos)
 └── 📦 nextjs-app
     ├── e2e                   (playwright e2e tests)
     ├── public                (nextjs public folder)
     ├── setup                 (config files related to tooling, ie vitest, rtl...)
     ├── 🍂 src                (see below)
     ├─ eslintrc.cjs
     ├─ next.config.mjs
     ├─ package.json           (all deps required to run this app independently)
     ├─ (tailwind.config.ts)   (optional tailwind config)
     └─ tsconfig.json
```

### Source level

```
🌳 nextjs-app
 └── 📦 src
     ├── app(*)            (nextjs > 13 app directory)
     ├── components        (react components shared across this app)
     ├── config
     ├── 🍂 features
     ├── hooks             (react hooks specific to this app)
     ├── layouts
     ├── lib
     ├── pages(*)          (nextjs <13 file router directory)
     │   └── api(*)        (nextjs file router api directory)
     ├── providers         (react providers)
     ├── 🍂 server         (server side code)
     ├── styles            (css styles, vars, globals...)
     ├── types.d
     ├── utils             (by convention for tools like trpc...)
     └─ (middleware.ts(*)) (nextjs specific)
```
