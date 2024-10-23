# Semantic Release Automated Changelog

# [3.1.0](https://github.com/AlaskaAirlines/auro-sidenav/compare/v3.0.1...v3.1.0) (2024-10-23)


### Features

* **api:** add register static method [#82](https://github.com/AlaskaAirlines/auro-sidenav/issues/82) ([d002c7b](https://github.com/AlaskaAirlines/auro-sidenav/commit/d002c7b0bd247262c76c8166f24a7689f4aec308))

## [3.0.1](https://github.com/AlaskaAirlines/auro-sidenav/compare/v3.0.0...v3.0.1) (2024-10-08)


### Bug Fixes

* moves auro library to dependencies in package.json [#35](https://github.com/AlaskaAirlines/auro-sidenav/issues/35) ([e34f7c9](https://github.com/AlaskaAirlines/auro-sidenav/commit/e34f7c991fb568acc2697ec0c20fee639f362a0b))

# [3.0.0](https://github.com/AlaskaAirlines/auro-sidenav/compare/v2.0.1...v3.0.0) (2024-10-02)


### Features

* add tag name as attribute when custom registered ([fb5f221](https://github.com/AlaskaAirlines/auro-sidenav/commit/fb5f2212d8afd6bc0ef4fabcb4203d6bc63101da))
* implement color theming support [#30](https://github.com/AlaskaAirlines/auro-sidenav/issues/30) ([c6b746f](https://github.com/AlaskaAirlines/auro-sidenav/commit/c6b746f648e73bf64520391b12fb215707db5aa2))


### Performance Improvements

* **label:** remove github label colors ([6c7ee0c](https://github.com/AlaskaAirlines/auro-sidenav/commit/6c7ee0cda5f4513c0b2f7380771c7bb1c0e45e96))
* refactor custom component registration config ([19e26ab](https://github.com/AlaskaAirlines/auro-sidenav/commit/19e26ab95db9f44a23890f89f4a3dc944fc02a8b))
* update dependencies ([06ba5f7](https://github.com/AlaskaAirlines/auro-sidenav/commit/06ba5f721681bfe7a77062f3f42ff900f99222e7))


### BREAKING CHANGES

* trigger major release for color theme support #30

## [2.0.1](https://github.com/AlaskaAirlines/auro-sidenav/compare/v2.0.0...v2.0.1) (2024-07-23)


### Bug Fixes

* update import reference path [#28](https://github.com/AlaskaAirlines/auro-sidenav/issues/28) ([8d9fae4](https://github.com/AlaskaAirlines/auro-sidenav/commit/8d9fae46c8fe35ac67cad0d7ff887640e7d3b50e))

# [2.0.0](https://github.com/AlaskaAirlines/auro-sidenav/compare/v1.1.7...v2.0.0) (2024-03-25)


### Bug Fixes

* **svg:** center svgs within sidenavitems [#17](https://github.com/AlaskaAirlines/auro-sidenav/issues/17) ([364db92](https://github.com/AlaskaAirlines/auro-sidenav/commit/364db9237ea60b5a964d219e9ed2116e1640c18a))


### Features

* mobile sidenav via attribute [#13](https://github.com/AlaskaAirlines/auro-sidenav/issues/13) ([c88af64](https://github.com/AlaskaAirlines/auro-sidenav/commit/c88af641146f998bc6d7b05c4f79f64ce85ee032))


### BREAKING CHANGES

* all auro-sidenav instances are now mobile until
specified with the static attribute.

Changes to be committed:
	modified:   apiExamples/basic.html
	modified:   apiExamples/custom.html
	modified:   apiExamples/full.html
	modified:   apiExamples/heading.html
	modified:   apiExamples/hyperlink.html
	modified:   apiExamples/isToggle.html
	modified:   apiExamples/sections.html
	modified:   apiExamples/selected.html
	modified:   demo/api.md
	modified:   demo/index.html
	modified:   demo/index.md
	modified:   docs/api.md
	modified:   docs/partials/index.md
	modified:   package-lock.json
	modified:   src/auro-sidenav.js
	modified:   src/auro-sidenavsection.js
	modified:   test/auro-sidenav.test.js
   modified:   apiExamples/collapsible.html
   modified:   README.md

## [1.1.7](https://github.com/AlaskaAirlines/auro-sidenav/compare/v1.1.6...v1.1.7) (2024-03-11)


### Performance Improvements

* **update docs:** add full scope of all elements ([775dd28](https://github.com/AlaskaAirlines/auro-sidenav/commit/775dd286a616c9f607443e38aef872f675307daa))

## [1.1.6](https://github.com/AlaskaAirlines/auro-sidenav/compare/v1.1.5...v1.1.6) (2024-02-21)


### Bug Fixes

* **registration:** make custom registration rename all component parts ([ff6b88a](https://github.com/AlaskaAirlines/auro-sidenav/commit/ff6b88a4fd09dd08311719cfadf08a14f28fb158))
* **styles:** make styles work with custom tag names ([b42cb93](https://github.com/AlaskaAirlines/auro-sidenav/commit/b42cb9337d7058608757a2a52782c42b5e09be28))


### Performance Improvements

* **deps:** update to latest dependency versions ([7b425ff](https://github.com/AlaskaAirlines/auro-sidenav/commit/7b425ffa4810d43352e44223bccee8e179fbf97a))

## [1.1.5](https://github.com/AlaskaAirlines/auro-sidenav/compare/v1.1.4...v1.1.5) (2024-02-16)


### Performance Improvements

* update deps and hyperlink ref ([f8af136](https://github.com/AlaskaAirlines/auro-sidenav/commit/f8af136ca7dc34e7c34556ea16a108dae63f0549))

## [1.1.4](https://github.com/AlaskaAirlines/auro-sidenav/compare/v1.1.3...v1.1.4) (2024-02-15)


### Performance Improvements

* **demo:** update demo file names ([dd7b597](https://github.com/AlaskaAirlines/auro-sidenav/commit/dd7b597c34e7fe035d9251149b07175848f9d522))
* **deps:** update dependencies ([7969767](https://github.com/AlaskaAirlines/auro-sidenav/commit/79697670dca66c2d96496153a58c854c48a5d62b))

## [1.1.3](https://github.com/AlaskaAirlines/auro-sidenav/compare/v1.1.2...v1.1.3) (2024-02-13)


### Performance Improvements

* update auro dependencies ([70511f1](https://github.com/AlaskaAirlines/auro-sidenav/commit/70511f1056d739643a162b9dfcdbc8de5a8c8ff5))

## [1.1.2](https://github.com/AlaskaAirlines/auro-sidenav/compare/v1.1.1...v1.1.2) (2024-02-13)


### Bug Fixes

* update dependency ref ([4962b44](https://github.com/AlaskaAirlines/auro-sidenav/commit/4962b4469c51f2daf0f1e3975aaddde83971d8f2))

## [1.1.1](https://github.com/AlaskaAirlines/auro-sidenav/compare/v1.1.0...v1.1.1) (2024-02-13)


### Bug Fixes

* update component reference ([6cfaafe](https://github.com/AlaskaAirlines/auro-sidenav/commit/6cfaafe4cbf48e21426b3e6320d62d56ef83e38e))


### Performance Improvements

* update to support ESM ([d0d6dac](https://github.com/AlaskaAirlines/auro-sidenav/commit/d0d6dacf9d6fd10225ef5798d7ae43a3769f73e4))

# [1.1.0](https://github.com/AlaskaAirlines/auro-sidenav/compare/v1.0.2...v1.1.0) (2024-02-01)


### Features

* **ssr:** implement support for SSR projects [#8](https://github.com/AlaskaAirlines/auro-sidenav/issues/8) ([7b7cf61](https://github.com/AlaskaAirlines/auro-sidenav/commit/7b7cf61f1648b94d53a51c5756028bdcb4e14f44))


### Performance Improvements

* **accordion:** use new version of accordion ([18bf30c](https://github.com/AlaskaAirlines/auro-sidenav/commit/18bf30cde7a7fce8967e8989c8e22f5312da6443))
* **deps:** update dependencies ([3fbcc62](https://github.com/AlaskaAirlines/auro-sidenav/commit/3fbcc628bda9772d18804a484ef674c0ee9c5631))
* update deps and resource configs ([2b61e36](https://github.com/AlaskaAirlines/auro-sidenav/commit/2b61e36c751543d95c36f1b3dbea21dc7873db9b))
* update index file name extension ([922892a](https://github.com/AlaskaAirlines/auro-sidenav/commit/922892a5017b6cb5f0dd0e26e26c97a8709ec876))

## [1.0.2](https://github.com/AlaskaAirlines/auro-sidenav/compare/v1.0.1...v1.0.2) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([5ce4792](https://github.com/AlaskaAirlines/auro-sidenav/commit/5ce4792393b0bad6abbfb8d43fe59046f6d2195e))

## [1.0.1](https://github.com/AlaskaAirlines/auro-sidenav/compare/v1.0.0...v1.0.1) (2023-11-16)


### Performance Improvements

* **token:** update token per new theming [#6](https://github.com/AlaskaAirlines/auro-sidenav/issues/6) ([47c0c72](https://github.com/AlaskaAirlines/auro-sidenav/commit/47c0c724ae01f91c8876482330c506508a8a3e2a))

# 1.0.0 (2023-08-01)


### Features

* allow for selected item updates ([4aae9fe](https://github.com/AlaskaAirlines/auro-sidenav/commit/4aae9fe9da6fbe229085094e077c34b9da937947))
* introduce basic functionality ([0e2a6e3](https://github.com/AlaskaAirlines/auro-sidenav/commit/0e2a6e3319592d02359251d7289dad3f1f53a4c1))
