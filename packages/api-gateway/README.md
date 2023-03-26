# @your-org/api-gateway

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/belgattitude/nextjs-monorepo-example/ci-packages.yml?style=for-the-badge&label=CI)

Uses [graphql-mesh](https://github.com/Urigo/graphql-mesh) as an example.

To regenerate the generated code (in case of config change / schema update), please run

```bash
yarn codegen
```

Generated code will live in the `./.mesh` directory and is git-versioned.

The codegen strategy is a bit different from the standard graphql-mesh examples.
To give some context, in standard examples:

- the mesh build/codegen is run on postinstall
- the `.mesh` directory is gitignored.

The advantage of this approach:

- The CI / deploy will ensure the generated mesh is fresh.

The pitfalls:

- No tracking of changes.
- When upstream services are down: can't build.
- When you need to rebuild an older image... codegen will run on latest schema.

So the idea,

- Commit the `.mesh` folder
- Run `yarn codegen` when doing changes.

To avoid issues, a CI action checks whether the schema is in sync.
