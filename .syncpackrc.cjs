module.exports = {
  "customTypes": {
    "engines": {
      "path": "engines",
      "strategy": "versionsByName"
    },
    "packageManager": {
      "path": "packageManager",
      "strategy": "name@version"
    }
  },
  "dependencyTypes": ["dev", "prod", "peer"],
  "filter": ".",
  "indent": "  ",
  "semverRange": "",
  "semverGroups": [
    {
      "range": "",
      "label": "apps",
      "dependencyTypes": ["dev", "prod"],
      "dependencies": ["**"],
      "packages": ["*-app"]
    },
    {
      "range": "^",
      "label": "publishable-packages",
      "dependencyTypes": ["peer", "prod"],
      "dependencies": ["**"],
      "packages": ["@your-org/*"]
    },
  ],
  "sortAz": [
    "contributors",
    "dependencies",
    "devDependencies",
    "keywords",
    "peerDependencies",
    "resolutions",
    "scripts"
  ],
  "sortFirst": ["name", "description", "version", "author"],
  "source": ["apps/**", "packages/**", "./package.json"],
  "versionGroups": []
}