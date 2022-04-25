---
"nextjs-app": minor
---

Use emotion native ssr critical extraction

Since React 18, latest nextjs and emotion the critical path extraction
works out of the box. No flash of unstyled content anymore. Removes the
double rendering too, expect better lighthouse and initial page rendering
(to be measured).
