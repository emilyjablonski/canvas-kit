# Changelog

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.7.0 (2020-05-06)

### Infrastructure
- ci: Enable Github Actions for pull requests ([#557](https://github.com/Workday/canvas-kit/pull/557)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Fix annotation for extra dependencies ([#578](https://github.com/Workday/canvas-kit/pull/578)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Update Lerna ([#583](https://github.com/Workday/canvas-kit/pull/583)) [@lychyi](https://github.com/lychyi)
- fix: Fix eslint for VSCode ([#589](https://github.com/Workday/canvas-kit/pull/589)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Update Cypress to 4.4.1 and remove custom TS handling ([#596](https://github.com/Workday/canvas-kit/pull/596)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Refactor control wrapper to hooks for easier examples ([#597](https://github.com/Workday/canvas-kit/pull/597)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Decrease output of build-storybook ([#598](https://github.com/Workday/canvas-kit/pull/598)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Fix ESLint VSCode plugin ([#599](https://github.com/Workday/canvas-kit/pull/599)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Update copyright in license files ([#615](https://github.com/Workday/canvas-kit/pull/615)) [@jpante](https://github.com/jpante)

### Components
- fix(ColorPicker): Export ColorSwatch from the ColorPicker index ([#580](https://github.com/Workday/canvas-kit/pull/580)) [@BlueVajra](https://github.com/BlueVajra)
- fix(table): Remove focus on CSS table rows ([#595](https://github.com/Workday/canvas-kit/pull/595)) [@NicholasBoll](https://github.com/NicholasBoll)
- test(toast): Write test for Toasts ([#584](https://github.com/Workday/canvas-kit/pull/584)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(select): Implement Canvas menu ([#454](https://github.com/Workday/canvas-kit/pull/454)) [@jamesfan](https://github.com/jamesfan)
- test(popup): Add tests for Popup ([#600](https://github.com/Workday/canvas-kit/pull/600)) [@mannycarrera4](https://github.com/mannycarrera4)

# 3.6.0 (2020-04-13)

### Infrastructure
- chore: Update thank you on README ([#511](https://github.com/Workday/canvas-kit/pull/511)) [@lychyi](https://github.com/lychyi)
- ci: Quiet Travis build-storybook webpack logs ([#516](https://github.com/Workday/canvas-kit/pull/516)) [@anicholls](https://github.com/anicholls)
- docs: Update Component Status ([#547](https://github.com/Workday/canvas-kit/pull/547)) [@jpante](https://github.com/jpante)

### Components
- feat(color-picker): Add color picker ([#462](https://github.com/Workday/canvas-kit/pull/462)) [@laurenraddatz](https://github.com/laurenraddatz)
- fix: Combobox and search bar not in container ([#513](https://github.com/Workday/canvas-kit/pull/513)) [@vibdev](https://github.com/vibdev)
- test(form-field): Add testing-library/react and cypress tests ([#482](https://github.com/Workday/canvas-kit/pull/482)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(menu): Update aria role for menu ([#520](https://github.com/Workday/canvas-kit/pull/520)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(combobox): Convert to functional component and add translation function for status text ([#532](https://github.com/Workday/canvas-kit/pull/532)) [@vibdev](https://github.com/vibdev)
- fix(color-picker): Design & use case improvements ([#519](https://github.com/Workday/canvas-kit/pull/519)) [@anicholls](https://github.com/anicholls)
- fix(menu): Fix flashing on initial selected index ([#561](https://github.com/Workday/canvas-kit/pull/561)) [@NicholasBoll](https://github.com/NicholasBoll)

# 3.5.0 (2020-03-12)

### Infrastructure
- test: Explicitly enable snapshots ([#478](https://github.com/Workday/canvas-kit/pull/478)) [@lychyi](https://github.com/lychyi)
- docs: Update docs for visual testing change ([#490](https://github.com/Workday/canvas-kit/pull/490)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Add lab modules as valid scopes for commit messages ([#491](https://github.com/Workday/canvas-kit/pull/491)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat: Allow a module's story to self-reference the package ([#494](https://github.com/Workday/canvas-kit/pull/494)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Avoid polyfill requirements ([#492](https://github.com/Workday/canvas-kit/pull/492)) [@anicholls](https://github.com/anicholls)
- chore: Simplify Chromatic CI runs ([#495](https://github.com/Workday/canvas-kit/pull/495)) [@anicholls](https://github.com/anicholls)
- fix: Update contributing readme with correct testing reference ([#498](https://github.com/Workday/canvas-kit/pull/498)) [@anicholls](https://github.com/anicholls)
- build: Improve PR build times ([#500](https://github.com/Workday/canvas-kit/pull/500)) [@lychyi](https://github.com/lychyi)
- chore: Update Storybook to 5.3 ([#453](https://github.com/Workday/canvas-kit/pull/453)) [@lychyi](https://github.com/lychyi)
- chore: Remove unused typescript-eslint depenency ([#502](https://github.com/Workday/canvas-kit/pull/502)) [@anicholls](https://github.com/anicholls)
- ci: Explicit use of yarn for Chromatic cmd ([#503](https://github.com/Workday/canvas-kit/pull/503)) [@lychyi](https://github.com/lychyi)
- ci: Travis build speed improvements ([#504](https://github.com/Workday/canvas-kit/pull/504)) [@lychyi](https://github.com/lychyi)

### Components
- feat(radio): Add theming support ([#457](https://github.com/Workday/canvas-kit/pull/457)) [@anicholls](https://github.com/anicholls)
- feat(switch): Add theming support ([#465](https://github.com/Workday/canvas-kit/pull/465)) [@anicholls](https://github.com/anicholls)
- test(button): Add static state tables for all Button components ([#469](https://github.com/Workday/canvas-kit/pull/469)) [@anicholls](https://github.com/anicholls)
- feat(pagination): Add pagination component to labs ([#301](https://github.com/Workday/canvas-kit/pull/301)) [@nikolasjchaconas](https://github.com/nikolasjchaconas)
- feat(drawer): Make the close icon in DrawerHeader optional ([#507](https://github.com/Workday/canvas-kit/pull/507)) [@devonsoto77](https://github.com/devonsoto77)

# 3.4.0 (2020-02-19)

### Infrastructure
- ci: Add check for missing or unused dependencies ([#437](https://github.com/Workday/canvas-kit/pull/437)) [@anicholls](https://github.com/anicholls)
- chore: Change nvmrc to use lts/dubnium ([#441](https://github.com/Workday/canvas-kit/pull/441)) [@lychyi](https://github.com/lychyi)
- chore: Update Cypress/Storybook integration to use cypress-storybook ([#439](https://github.com/Workday/canvas-kit/pull/439)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Add canary build script on master commit/merge ([#443](https://github.com/Workday/canvas-kit/pull/443)) [@anicholls](https://github.com/anicholls)
- ci: Fix canary build null version error ([#444](https://github.com/Workday/canvas-kit/pull/444)) [@anicholls](https://github.com/anicholls)
- ci: Run canary publish on master commit instead of tag ([#446](https://github.com/Workday/canvas-kit/pull/446)) [@anicholls](https://github.com/anicholls)
- test: Add @testing-library/cypress to the project ([#442](https://github.com/Workday/canvas-kit/pull/442)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Use correct module names in readmes for labs components ([#445](https://github.com/Workday/canvas-kit/pull/445)) [@anicholls](https://github.com/anicholls)
- ci: Force publish all modules instead of relying on version check ([#448](https://github.com/Workday/canvas-kit/pull/448)) [@anicholls](https://github.com/anicholls)
- ci: Disable git clone depth ([#449](https://github.com/Workday/canvas-kit/pull/449)) [@anicholls](https://github.com/anicholls)
- chore: Upgrade Cypress to 4.0.0 ([#450](https://github.com/Workday/canvas-kit/pull/450)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Announce canary builds on slack ([#458](https://github.com/Workday/canvas-kit/pull/458)) [@anicholls](https://github.com/anicholls)
- ci: Use node script for publishing canary versions ([#461](https://github.com/Workday/canvas-kit/pull/461)) [@anicholls](https://github.com/anicholls)
- ci: Pull canary version from lerna publish logs instead of lerna.json ([#463](https://github.com/Workday/canvas-kit/pull/463)) [@anicholls](https://github.com/anicholls)
- ci: Fix undefined variable in canary publish ([#464](https://github.com/Workday/canvas-kit/pull/464)) [@anicholls](https://github.com/anicholls)
- ci: Fix testing mistake with canary publish ([#466](https://github.com/Workday/canvas-kit/pull/466)) [@anicholls](https://github.com/anicholls)
- ci: Take quieter lerna output into account in canary publish ([#467](https://github.com/Workday/canvas-kit/pull/467)) [@anicholls](https://github.com/anicholls)

### Components
- test(color-picker): Add tests and convert them to react-testing-library ([#407](https://github.com/Workday/canvas-kit/pull/407)) [@sahlhoff](https://github.com/sahlhoff)
- test(text-area): Change tests to react-testing-library and improve coverage ([#394](https://github.com/Workday/canvas-kit/pull/394)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(popup): Fix responsiveness for popup ([#438](https://github.com/Workday/canvas-kit/pull/438)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- fix(radio): Update checked dot position to scale properly ([#393](https://github.com/Workday/canvas-kit/pull/393)) [@erik-vanlankvelt](https://github.com/erik-vanlankvelt)
- fix(icon): Remove React dependency from CSS kit ([#447](https://github.com/Workday/canvas-kit/pull/447)) [@jamesfan](https://github.com/jamesfan)
- test(radio): Change tests to react-testing-library and improve coverage ([#381](https://github.com/Workday/canvas-kit/pull/381)) [@mannycarrera4](https://github.com/mannycarrera4)
- test(select): Change tests to react-testing-library and improve coverage ([#412](https://github.com/Workday/canvas-kit/pull/412)) [@jamesfan](https://github.com/jamesfan)
- feat(text-input): Add theming to Text Input ([#411](https://github.com/Workday/canvas-kit/pull/411)) [@mannycarrera4](https://github.com/mannycarrera4)
- docs(labs): Fix broken link on  ComboBox Readme ([#455](https://github.com/Workday/canvas-kit/pull/455)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat(checkbox): Add theming support ([#456](https://github.com/Workday/canvas-kit/pull/456)) [@anicholls](https://github.com/anicholls)
- fix(button): Avoid using transition: all for buttons ([#460](https://github.com/Workday/canvas-kit/pull/460)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(text-area): Add theming support ([#459](https://github.com/Workday/canvas-kit/pull/459)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(button): Fix Component Selector Issue ([#474](https://github.com/Workday/canvas-kit/pull/474)) [@lychyi](https://github.com/lychyi)
- fix(icon): Support second accent layer ([#475](https://github.com/Workday/canvas-kit/pull/475)) [@mannycarrera4](https://github.com/mannycarrera4)

# 3.3.2 (2020-01-29)

### Infrastructure:
- docs: Add test documentation ([#382](https://github.com/Workday/canvas-kit/pull/382)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Correct Changelog ([#433](https://github.com/Workday/canvas-kit/pull/433)) [@lychyi](https://github.com/lychyi)

### Components:
- fix: Add missing labs-core imports ([#435](https://github.com/Workday/canvas-kit/pull/435)) [@anicholls](https://github.com/anicholls)


# 3.3.1 (2020-01-28)

### Components:
- test(switch): Redo switch tests in react-testing-library ([#386](https://github.com/Workday/canvas-kit/pull/386)) [@lychyi](https://github.com/lychyi)
- fix(labs): Remove global type from useTheme hook ([#430](https://github.com/Workday/canvas-kit/pull/430)) [@lychyi](https://github.com/lychyi)

# 3.3.0 (2020-01-03)

### Infrastructure:
- chore: Update Storybook Chromatic ([#397](https://github.com/Workday/canvas-kit/pull/397)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Add missing rtl-css-js dependency ([#399](https://github.com/Workday/canvas-kit/pull/399)) [@josephnle](https://github.com/josephnle)
- docs: Fix Storybook iframe rendering ([#401](https://github.com/Workday/canvas-kit/pull/401)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Increase storybook test timeout ([#402](https://github.com/Workday/canvas-kit/pull/402)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Fix Wallaby config for labs components ([#403](https://github.com/Workday/canvas-kit/pull/403)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Upgrade to Chromatic 2.0 ([#405](https://github.com/Workday/canvas-kit/pull/405)) [@NicholasBoll](https://github.com/NicholasBoll)
- test: Fix StaticStatesTable row check ([#415](https://github.com/Workday/canvas-kit/pull/415)) [@anicholls](https://github.com/anicholls)
- refactor: Update StaticStatesTable to be more flexible ([#418](https://github.com/Workday/canvas-kit/pull/418)) [@anicholls](https://github.com/anicholls)
- ci: Add Chroma v1 for cross-browser visual regression ([#421](https://github.com/Workday/canvas-kit/pull/421)) [@NicholasBoll](https://github.com/NicholasBoll)
- test: Add tests for permutateProps utility function ([#424](https://github.com/Workday/canvas-kit/pull/424)) [@anicholls](https://github.com/anicholls)

### Components:
- fix(text-input): Removed the "clear" button on text input in IE 11 ([#396](https://github.com/Workday/canvas-kit/pull/396)) [@Parker-Ledoux](https://github.com/Parker-Ledoux)
- feat: Add bidirectionality support to input components ([#337](https://github.com/Workday/canvas-kit/pull/337)) [@stephanerangaya](https://github.com/stephanerangaya)
- feat(button): Add support for icons in CSS buttons ([#353](https://github.com/Workday/canvas-kit/pull/353)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(select): Includes Select to CKR main exports ([#410](https://github.com/Workday/canvas-kit/pull/410)) [@sahlhoff](https://github.com/sahlhoff)
- fix(combobox): default to using ARIA 1.0 spec ([#380](https://github.com/Workday/canvas-kit/pull/380)) [@vibdev](https://github.com/vibdev)
- test(checkbox): Change tests to react-testing-library and improve coverage ([#372](https://github.com/Workday/canvas-kit/pull/372)) [@anicholls](https://github.com/anicholls)
- fix(toast): Fix typo in success message story ([#417](https://github.com/Workday/canvas-kit/pull/417)) [@zorfling](https://github.com/zorfling)
- docs: Audit prop descriptions ([#326](https://github.com/Workday/canvas-kit/pull/326)) [@sahlhoff](https://github.com/sahlhoff)
- test(text-input): Change tests to react-testing-library and improve coverage ([#390](https://github.com/Workday/canvas-kit/pull/390)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(form-field): Provide translation props for alert and error labels ([#423](https://github.com/Workday/canvas-kit/pull/423)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(button): Address issues with various IconButton states ([#271](https://github.com/Workday/canvas-kit/pull/271)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(header): Allow elements to flex correctly in IE11 ([#427](https://github.com/Workday/canvas-kit/pull/427)) [@lychyi](https://github.com/lychyi)

# 3.2.0 (2020-01-03)

### Infrastructure:
- chore: Use proper prettier file in configs ([#348](https://github.com/Workday/canvas-kit/pull/348)) [@Parker-Ledoux](https://github.com/Parker-Ledoux)
- docs: Update Storybook IA ([#300](https://github.com/Workday/canvas-kit/pull/300)) [@sahlhoff](https://github.com/sahlhoff)
- docs: Update incorrect story category for deprecated CSS buttons ([#355](https://github.com/Workday/canvas-kit/pull/355)) [@sahlhoff](https://github.com/sahlhoff)
- docs: Fix Storybook category for CSS Text Input (Left Label) ([#357](https://github.com/Workday/canvas-kit/pull/357)) [@jamesfan](https://github.com/jamesfan)
- fix: Update storybook so knobs work as expected ([#384](https://github.com/Workday/canvas-kit/pull/384)) [@vibdev](https://github.com/vibdev)
- fix:  Build Storybook for IE11 ([#370](https://github.com/Workday/canvas-kit/pull/370)) [@lychyi](https://github.com/lychyi)
- chore: Add StaticStates wrapper ([#377](https://github.com/Workday/canvas-kit/pull/377)) [@mannycarrera4](https://github.com/mannycarrera4)
- build(deps): Bump handlebars from 4.1.2 to 4.5.3 ([#388](https://github.com/Workday/canvas-kit/pull/388)) [@dependabot](https://github.com/dependabot)
- chore: Update readme with thankyous ([#395](https://github.com/Workday/canvas-kit/pull/395)) [@lychyi](https://github.com/lychyi)

### Components:
- feat(fonts): Add missing CSS fonts module ([#342](https://github.com/Workday/canvas-kit/pull/342)) [@anicholls](https://github.com/anicholls)
- feat(button): Add text button css ([#335](https://github.com/Workday/canvas-kit/pull/335)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(modal): Update focus-trap library to focus-trap-js ([#328](https://github.com/Workday/canvas-kit/pull/328)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- fix(text-input): Update type of inputRef ([#346](https://github.com/Workday/canvas-kit/pull/346)) [@davvidbaker](https://github.com/davvidbaker)
- feat(labs): Theming (react) ([#272](https://github.com/Workday/canvas-kit/pull/272)) [@anicholls](https://github.com/anicholls)
- fix: Allow icon injecting in shadowDOM ([#345](https://github.com/Workday/canvas-kit/pull/345)) [@vibdev](https://github.com/vibdev)
- fix(labs): Fix theming implementation ([#360](https://github.com/Workday/canvas-kit/pull/360)) [@anicholls](https://github.com/anicholls)
- feat: Add bidirectionality support ([#288](https://github.com/Workday/canvas-kit/pull/288)) [@stephanerangaya](https://github.com/stephanerangaya)
- test: Fix modal specs ([#374](https://github.com/Workday/canvas-kit/pull/374)) [@NicholasBoll](https://github.com/NicholasBoll)

# 3.1.1 (2019-12-02)

### Infrastructure:
- ci: Temporarily convert to TravisCI while billing is being figured out ([#318](https://github.com/Workday/canvas-kit/pull/318)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Exit 0 on ChromaticQA changes ([#325](https://github.com/Workday/canvas-kit/pull/325)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Add missing dependencies to CKCSS universal module ([#322](https://github.com/Workday/canvas-kit/pull/322)) [@jamesfan](https://github.com/jamesfan)
- build: Add Mdx support to webpack config ([#296](https://github.com/Workday/canvas-kit/pull/296)) [@sahlhoff](https://github.com/sahlhoff)

### Components:
- fix(side-panel): Add flexibility for aria attributes ([#327](https://github.com/Workday/canvas-kit/pull/327)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(modal): Add z-index to modal ([#331](https://github.com/Workday/canvas-kit/pull/331)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(menu): Fix import of React dependency. ([#334](https://github.com/Workday/canvas-kit/pull/334)) [@jsievenpiper](https://github.com/jsievenpiper)
- docs: Fix Component Status table ([#332](https://github.com/Workday/canvas-kit/pull/332)) [@jpante](https://github.com/jpante)
- fix(common): bad quote marks on accessible hide CSS ([#344](https://github.com/Workday/canvas-kit/pull/344)) [@vibdev](https://github.com/vibdev)

# 3.1.0 (2019-11-11)

### Infrastructure:
- build: Upgrade Storybook to 5.2 ([#267](https://github.com/Workday/canvas-kit/pull/267)) [@sahlhoff](https://github.com/sahlhoff)
- test: Add dependencies sync check ([#292](https://github.com/Workday/canvas-kit/pull/292)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Add wallaby config ([#297](https://github.com/Workday/canvas-kit/pull/297)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Update chromatic master job ([#299](https://github.com/Workday/canvas-kit/pull/299)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs: Add browser support section ([#287](https://github.com/Workday/canvas-kit/pull/287)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Add missing tilde on SASS imports and update Canvas Kit CSS usage README ([#307](https://github.com/Workday/canvas-kit/pull/307)) (#308) [@vibdev](https://github.com/vibdev)

### Components:
- fix(icon): Add index.scss to package.json for css icon ([#306](https://github.com/Workday/canvas-kit/pull/306)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(labs): Add Drawer component ([#277](https://github.com/Workday/canvas-kit/pull/277)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(side-panel): Change width of children container when closed ([#304](https://github.com/Workday/canvas-kit/pull/304)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix: Rename -webkit-font-smoothing- to WebkitFontSmoothing ([#298](https://github.com/Workday/canvas-kit/pull/298)) [@alexandrzavalii](https://github.com/alexandrzavalii)
- fix(common): Port accessible hide styles from JS to CSS ([#310](https://github.com/Workday/canvas-kit/pull/310)) [@vibdev](https://github.com/vibdev)

# 3.0.1 (2019-11-01)

### Infrastructure
- fix(labs): Update incorrect emotion version in labs core ([#290](https://github.com/Workday/canvas-kit/pull/290)) [@anicholls](https://github.com/anicholls)
- fix: Add @emotion/is-prop-valid to components that need it ([#289](https://github.com/Workday/canvas-kit/pull/289)) [@anicholls](https://github.com/anicholls)

# 3.0.0 (2019-10-30)

### Infrastructure:
- ci: Update ChromaticQA for better baselines ([#269](https://github.com/Workday/canvas-kit/pull/269)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Update to use chroma/action ([#273](https://github.com/Workday/canvas-kit/pull/273)) [@NicholasBoll](https://github.com/NicholasBoll)
- test: Add axe to Cypress tests ([#274](https://github.com/Workday/canvas-kit/pull/274)) [@NicholasBoll](https://github.com/NicholasBoll)
- fix: Resolve lint and test warnings ([#276](https://github.com/Workday/canvas-kit/pull/276)) [@anicholls](https://github.com/anicholls)
- fix: Add authors to 3.0.0-beta release changelog ([#281](https://github.com/Workday/canvas-kit/pull/281)) [@mannycarrera4](https://github.com/mannycarrera4)

### Components:
- fix(layout): Add shouldForwardProp to Layout and Column components ([#265](https://github.com/Workday/canvas-kit/pull/265)) [@sahlhoff](https://github.com/sahlhoff)
- fix(header): Support onMenuClick without menuToggle ([#268](https://github.com/Workday/canvas-kit/pull/268)) [@jamesfan](https://github.com/jamesfan)
- fix(button): Update missed css styles for buttons ([#260](https://github.com/Workday/canvas-kit/pull/260)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat: Add support for translation ([#251](https://github.com/Workday/canvas-kit/pull/251)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(checkbox): Added an indeterminate checkbox type ([#275](https://github.com/Workday/canvas-kit/pull/275)) [@Parker-Ledoux](https://github.com/Parker-Ledoux)
- feat(button): Utilize input provider for mouse input focus ([#280](https://github.com/Workday/canvas-kit/pull/280)) [@anicholls](https://github.com/anicholls)
- refactor(Header): Move search out and create combobox component ([#157](https://github.com/Workday/canvas-kit/pull/157)) [@vibdev](https://github.com/vibdev)

### Breaking Changes:
- chore: Upgrade to Emotion 10 ([#246](https://github.com/Workday/canvas-kit/pull/246)) [@anicholls](https://github.com/anicholls)

# 3.0.0-beta.1 (2019-10-14)

### Infrastructure:
- ci: Fix fork failures ([#241](https://github.com/Workday/canvas-kit/pull/241)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Fix Cypress tests (maybe?) ([#248](https://github.com/Workday/canvas-kit/pull/248)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Add ChromaticQA to CI ([#254](https://github.com/Workday/canvas-kit/pull/254)) [@NicholasBoll](https://github.com/NicholasBoll)
- ci: Remove Travis from pull requests ([#258](https://github.com/Workday/canvas-kit/pull/258)) [@NicholasBoll](https://github.com/NicholasBoll)
- build: Replace TSLint with ESLint ([#242](https://github.com/Workday/canvas-kit/pull/242)) [@anicholls](https://github.com/anicholls)
- chore: Remove snapshot tests ([#259](https://github.com/Workday/canvas-kit/pull/259)) [@NicholasBoll](https://github.com/NicholasBoll)

### Components:
- chore(core): Add react-emotion as a dep ([#256](https://github.com/Workday/canvas-kit/pull/256)) [@lychyi](https://github.com/lychyi)
- fix(toast): Fix background color on Safari ([#245](https://github.com/Workday/canvas-kit/pull/245)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(layout): Compensate column width calculations ([#238](https://github.com/Workday/canvas-kit/pull/238)) [@sahlhoff](https://github.com/sahlhoff)

### Breaking Changes:
- fix(skeleton): Remove z-index ([#257](https://github.com/Workday/canvas-kit/pull/257)) [@lychyi](https://github.com/lychyi)

# 3.0.0-beta.0 (2019-10-07)

### Infrastructure:
- docs: Update component_status.md
- ci: Create github action for CI and add Cypress to CI ([#240](https://github.com/Workday/canvas-kit/pull/240)) [@NicholasBoll](https://github.com/NicholasBoll)

### Components:
- feat(modal): Implement CSS Modal to match React implementation ([#185](https://github.com/Workday/canvas-kit/pull/185)) [@jamesfan](https://github.com/jamesfan)
- refactor: A11y updates for CSS stories and Readmes ([#221](https://github.com/Workday/canvas-kit/pull/221)) [@anicholls](https://github.com/anicholls)
- fix: Address misc. bugs in create-component script ([#232](https://github.com/Workday/canvas-kit/pull/232)) [@anicholls](https://github.com/anicholls)
- fix: Change casing for aria-labelledby attr ([#236](https://github.com/Workday/canvas-kit/pull/236)) [@lychyi](https://github.com/lychyi)
- fix: Move uuid from defaultProps to component instance ([#228](https://github.com/Workday/canvas-kit/pull/228)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(checkbox): Change default id to be unique per instance ([#192](https://github.com/Workday/canvas-kit/pull/192)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(menu): Add Menu example with icons and grow support ([#147](https://github.com/Workday/canvas-kit/pull/147)) [@jamesfan](https://github.com/jamesfan)
- fix(button): Fix accessibility styling for CSS buttons ([#186](https://github.com/Workday/canvas-kit/pull/186)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(menu): Always focus selected menu item and add tab accessibility ([#239](https://github.com/Workday/canvas-kit/pull/239)) [@jayscheidt](https://github.com/jayscheidt)
- refactor(card): Update CSS styles to match React implementation ([#113](https://github.com/Workday/canvas-kit/pull/113)) [@mannycarrera4](https://github.com/mannycarrera4)
- refactor(icon): Update CSS styles to match React implementation ([#159](https://github.com/Workday/canvas-kit/pull/159)) [@jamesfan](https://github.com/jamesfan)
- refactor(tooltip): Update CSS story to match the React version ([#198](https://github.com/Workday/canvas-kit/pull/198)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor: Fix references to react attributes in css readmes

### Breaking Changes:
- fix: Update alert colors and error colors
- test: Add Cypress modal specifications ([#184](https://github.com/Workday/canvas-kit/pull/184)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat(button): Promote React beta Button ([#191](https://github.com/Workday/canvas-kit/pull/191)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(button): Add blue css buttons ([#231](https://github.com/Workday/canvas-kit/pull/231)) [@mannycarrera4](https://github.com/mannycarrera4)
- feat(core): Add border radius variables to CSS and React ([#204](https://github.com/Workday/canvas-kit/pull/204)) [@stephanerangaya](https://github.com/stephanerangaya)
- feat(banner): Update CSS styles to match React ([#50](https://github.com/Workday/canvas-kit/pull/50)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor(tooltip): Update CSS styles to match React implementation ([#49](https://github.com/Workday/canvas-kit/pull/49)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor(forms): Split CSS forms module into individual modules ([#24](https://github.com/Workday/canvas-kit/pull/24)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor(loading-animation): Update CSS styles to match React implementation ([#83](https://github.com/Workday/canvas-kit/pull/83)) [@jamesfan](https://github.com/jamesfan)
- refactor(menu): Update CSS styles to match React implementation ([#117](https://github.com/Workday/canvas-kit/pull/117)) [@jamesfan](https://github.com/jamesfan)
- refactor(button): Update CSS styles to match React implementation ([#53](https://github.com/Workday/canvas-kit/pull/53)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(button): CSS button fixes ([#156](https://github.com/Workday/canvas-kit/pull/156)) [@anicholls](https://github.com/anicholls)
- refactor(page-header): Refactor CSS to match React implementation ([#151](https://github.com/Workday/canvas-kit/pull/151)) [@mannycarrera4](https://github.com/mannycarrera4)
- refactor(layout): Update CSS naming to match React implementation ([#168](https://github.com/Workday/canvas-kit/pull/168)) [@jamesfan](https://github.com/jamesfan)
- refactor(popup): Refactor CSS to match React implementation ([#155](https://github.com/Workday/canvas-kit/pull/155)) [@mannycarrera4](https://github.com/mannycarrera4)
- fix(popup): CSS cleanup ([#188](https://github.com/Workday/canvas-kit/pull/188)) [@anicholls](https://github.com/anicholls)
- refactor(form): Update CSS form styles and structure to match React implementation ([#112](https://github.com/Workday/canvas-kit/pull/112)) [@stephanerangaya](https://github.com/stephanerangaya)
- fix(button): Update incorrect delete button colors
- refactor(text-input): Remove error icon in CSS ([#222](https://github.com/Workday/canvas-kit/pull/222)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor: Add components to labs module ([#210](https://github.com/Workday/canvas-kit/pull/210)) [@sahlhoff](https://github.com/sahlhoff)
- fix: Card, Popup and Modal cleanup ([#233](https://github.com/Workday/canvas-kit/pull/233)) [@anicholls](https://github.com/anicholls)
- fix(form): Form field spacing ([#234](https://github.com/Workday/canvas-kit/pull/234)) [@stephanerangaya](https://github.com/stephanerangaya)

# 3.0.0-alpha.9 (2019-09-26)

### Infrastructure:
- feat: Refactor and improve our create-module script ([#211](https://github.com/Workday/canvas-kit/pull/211)) [@anicholls](https://github.com/anicholls)

### Components:
- fix(select): Tighten up onChange typing ([#212](https://github.com/Workday/canvas-kit/pull/212)) [@lychyi](https://github.com/lychyi)
- fix(switch): Hide checkbox input ([#224](https://github.com/Workday/canvas-kit/pull/224)) [@stephanerangaya](https://github.com/stephanerangaya)

### Breaking Changes:
- refactor(text-input): Remove error icon in React ([#218](https://github.com/Workday/canvas-kit/pull/218)) [@MackenzieBerliner-Glasser](https://github.com/MackenzieBerliner-Glasser)

# 3.0.0-alpha.8 (2019-09-24)

### Components:
- fix(avatar): Add AvatarButton component and convert Avatar into ordinary div ([#206](https://github.com/Workday/canvas-kit/pull/206)) [@6r3al](https://github.com/6r3al)

# 3.0.0-alpha.7 (2019-09-19)

### Infrastructure:
- feat: Add Cypress tests to canvas-kit ([#174](https://github.com/Workday/canvas-kit/pull/174)) [@NicholasBoll](https://github.com/NicholasBoll)
- chore: Bump eslint-utils from 1.3.1 to 1.4.2 ([#176](https://github.com/Workday/canvas-kit/pull/176)) [@dependabot](https://github.com/dependabot)
- chore: Bump lodash-es from 4.17.11 to 4.17.15 ([#177](https://github.com/Workday/canvas-kit/pull/177)) [@dependabot](https://github.com/dependabot)
- chore: Bump lodash.template from 4.4.0 to 4.5.0 ([#178](https://github.com/Workday/canvas-kit/pull/178)) [@dependabot](https://github.com/dependabot)
- chore: Bump jest-axe from 3.1.1 to 3.2.0 ([#179](https://github.com/Workday/canvas-kit/pull/179)) [@NicholasBoll](https://github.com/NicholasBoll)
- feat: Add faster testing of stories in Cypress ([#183](https://github.com/Workday/canvas-kit/pull/183)) [@NicholasBoll](https://github.com/NicholasBoll)
- docs(core): Fix broken link ([#187](https://github.com/Workday/canvas-kit/pull/187)) [@anicholls](https://github.com/anicholls)

### Components:
- fix: Extend component props with correct interfaces ([#181](https://github.com/Workday/canvas-kit/pull/181)) [@lychyi](https://github.com/lychyi)
- refactor(switch): Add a11y messaging in Readme and move story location ([#197](https://github.com/Workday/canvas-kit/pull/197)) [@stephanerangaya](https://github.com/stephanerangaya)
- feat(form-field): Add red asterisk support for required inputs ([#196](https://github.com/Workday/canvas-kit/pull/196)) [@elliot-at-workday](https://github.com/elliot-at-workday)
- feat(switch): add support for alert and error text ([#203](https://github.com/Workday/canvas-kit/pull/203)) [@stephanerangaya](https://github.com/stephanerangaya)
- feat: Add support for Canvas Kit Labs modules ([#175](https://github.com/Workday/canvas-kit/pull/175)) [@anicholls](https://github.com/anicholls)

### Breaking Changes:
- refactor(side-panel): API update and fixes ([#123](https://github.com/Workday/canvas-kit/pull/123)) [@anicholls](https://github.com/anicholls)
- feat: Standardize elemProps prop spread behavior ([#150](https://github.com/Workday/canvas-kit/pull/150)) [@anicholls](https://github.com/anicholls)
- refactor(table): TableRow API update and cleanup ([#172](https://github.com/Workday/canvas-kit/pull/172)) [@sahlhoff](https://github.com/sahlhoff)
- refactor(button): API Updates ([#129](https://github.com/Workday/canvas-kit/pull/129)) [@anicholls](https://github.com/anicholls)
- refactor(avatar): Change themeColor to variant ([#194](https://github.com/Workday/canvas-kit/pull/194)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor(banner): Change BannerTheme to ErrorType ([#195](https://github.com/Workday/canvas-kit/pull/195)) [@stephanerangaya](https://github.com/stephanerangaya)
- refactor(core): Rename enums to singular ([#199](https://github.com/Workday/canvas-kit/pull/199)) [@mannycarrera4](https://github.com/mannycarrera4)

# 3.0.0-alpha.6 (2019-09-02)

### Infrastructure:
- chore: Fix console warnings in Storybook (#116) @anicholls
- docs: Update contributing git guidelines to reflect new PR strategy (#109) @anicholls
- feat: Reduce number of manual steps required after running create-module.sh (#46) @roblevintennis
- ci: Break out Travis testing to stages (#82) @d-bye
- fix: Add code-coverage to \*.ts files (#148) @NicholasBoll
- chore: Update commit validation to use commitlint (#124) @Patil2099
- feat: Add watch support for faster development (#161) @NicholasBoll

### Components:
- fix(button): Update TextButton focus outline for accessibility (#115) @jstin
- fix(avatar): Update background color when url is defined (#120) @anicholls
- fix(header): Remove duplicate icon buttons (#122) @anicholls
- fix(button): Pass buttonRef to IconButton button element (#128) @mannycarrera4
- fix(menu): Add menu component to universal module (#127) @lychyi
- fix(layout): Add check for null children (#119) @anicholls
- fix(page-header): Add missing dependency (#149) @anicholls
- refactor: Move InputProviderDecorators to Storybook config (#164) @stephanerangaya
- fix: Change positioning of Checkbox and Radio react components to relative (#160) @stephanerangaya
- fix(status-indicator): Export type and emphasis enums (#166) @anicholls

### Breaking Change:
- fix: Add missing static variables and fix Popup padding static variable (#110) @anicholls
- refactor(loading-animation): Deprecate LoadingSpinner (#142) @sahlhoff
- fix(form-field): Add component prefix to exported enums and interfaces #146 @sahlhoff
- refactor(page-header): Update marketing and breakpoint props (#143) @sahlhoff

# 3.0.0-alpha.5 (2019-08-13)

### Infrastructure:

- chore: update lint-staged to v8 (#76) (@Patil2099)

### Components:

- fix(SidePanel): Remove resize event on unmount (#78) (@mannycarrera4)
- fix(Menu): Allow aria role of menu item to be overridden (#75) (@jayscheidt)
- fix(TextArea): Align border color to match other inputs (#66) (@neilpelow)
- fix(Avatar): Change prop spread order to allow for overriding the aria label (#92) (@mannycarrera4)
- feat(Type): Add styled components for type primitives (#106) (@drschulz)
- fix(ActionBar): Match css styles to react action bar (#111) (@mannycarrera4)


# 3.0.0-alpha.4 (2019-08-05)

### Infrastructure:

- fix: Update lodash version to resolve vulnerability (#41)
- ci(travis): Enable tag publishing and re-enable master storybook (#52)
- chore: Pull in version bumps from old release branch (#71)
- build(travis): skip cleanup on npm publish (#79)
- ci(travis): fix npm publish conditional (#81)

### Components:

- fix(Tooltip): Add missing fontFamily property (#47)
- fix(Popper): Spread remainder props on wrapper div (#44)
- feat(menu): Enable MenuItems to skip onClose (#48)
- fix(header): Header search accessibility & prop spread fixes (#43)
- fix(SidePanel): remove resize event handler on unmount (#74)

### Breaking Changes:

- refactor(Icon): Move icon-list from core into icon module (#30)
- refactor(Fonts): Remove @workday/canvas-kit-react-fonts from universal module (#40)
