# css-tree-open-props

A demonstration repo for css-tree with open-props parsing

## Setup

1. Clone the repo
1. Have NodeJS installed (or run `nvm use`)
1. Run `npm ci`

## Demo

To reproduce the issue, run `npm run build` and see the output from parsing the contents of the **Open Props** [_props.media.css_](https://unpkg.com/browse/open-props@1.7.8/src/props.media.css) file.

```sh
  Parse error: ")" is expected
    1 |@custom-media --motionOK      (prefers-reduced-motion: no-preference);
------------------------------------------------------------^
    2 |@custom-media --motionNotOK   (prefers-reduced-motion: reduce);
    3 |@custom-media --opacityOK     (prefers-reduced-transparency: no-preference);
Parse error: ")" is expected
    1 |@custom-media --motionOK      (prefers-reduced-motion: no-preference);
    2 |@custom-media --motionNotOK   (prefers-reduced-motion: reduce);
------------------------------------------------------------^
    3 |@custom-media --opacityOK     (prefers-reduced-transparency: no-preference);
    4 |@custom-media --opacityNotOK  (prefers-reduced-transparency: reduce);
Parse error: ")" is expected
    1 |@custom-media --motionOK      (prefers-reduced-motion: no-preference);
    2 |@custom-media --motionNotOK   (prefers-reduced-motion: reduce);
    3 |@custom-media --opacityOK     (prefers-reduced-transparency: no-preference);
------------------------------------------------------------------^
    4 |@custom-media --opacityNotOK  (prefers-reduced-transparency: reduce);
    5 |@custom-media --useDataOK     (prefers-reduced-data: no-preference);
Parse error: ")" is expected
    2 |@custom-media --motionNotOK   (prefers-reduced-motion: reduce);
    3 |@custom-media --opacityOK     (prefers-reduced-transparency: no-preference);
    4 |@custom-media --opacityNotOK  (prefers-reduced-transparency: reduce);
------------------------------------------------------------------^
    5 |@custom-media --useDataOK     (prefers-reduced-data: no-preference);
    6 |@custom-media --useDataNotOK  (prefers-reduced-data: reduce);
Parse error: ")" is expected
    3 |@custom-media --opacityOK     (prefers-reduced-transparency: no-preference);
    4 |@custom-media --opacityNotOK  (prefers-reduced-transparency: reduce);
    5 |@custom-media --useDataOK     (prefers-reduced-data: no-preference);
----------------------------------------------------------^
    6 |@custom-media --useDataNotOK  (prefers-reduced-data: reduce);
Parse error: ")" is expected
    4 |@custom-media --opacityNotOK  (prefers-reduced-transparency: reduce);
    5 |@custom-media --useDataOK     (prefers-reduced-data: no-preference);
    6 |@custom-media --useDataNotOK  (prefers-reduced-data: reduce);
----------------------------------------------------------^
    7 |
    8 |@custom-media --OSdark        (prefers-color-scheme: dark);
Parse error: ")" is expected
    6 |@custom-media --useDataNotOK  (prefers-reduced-data: reduce);
    7 |
    8 |@custom-media --OSdark        (prefers-color-scheme: dark);
----------------------------------------------------------^
    9 |@custom-media --OSlight       (prefers-color-scheme: light);
Parse error: ")" is expected
    8 |@custom-media --OSdark        (prefers-color-scheme: dark);
    9 |@custom-media --OSlight       (prefers-color-scheme: light);
----------------------------------------------------------^
   10 |
   11 |@custom-media --highContrast  (prefers-contrast: more);
Parse error: ")" is expected
    9 |@custom-media --OSlight       (prefers-color-scheme: light);
   10 |
   11 |@custom-media --highContrast  (prefers-contrast: more);
------------------------------------------------------^
   12 |@custom-media --lowContrast   (prefers-contrast: less);
Parse error: ")" is expected
   11 |@custom-media --highContrast  (prefers-contrast: more);
   12 |@custom-media --lowContrast   (prefers-contrast: less);
------------------------------------------------------^
   13 |
   14 |@custom-media --invertedColors  (inverted-colors: inverted);
Parse error: ")" is expected
   12 |@custom-media --lowContrast   (prefers-contrast: less);
   13 |
   14 |@custom-media --invertedColors  (inverted-colors: inverted);
-------------------------------------------------------^
   15 |@custom-media --forcedColors  (forced-colors: active);
Parse error: ")" is expected
   14 |@custom-media --invertedColors  (inverted-colors: inverted);
   15 |@custom-media --forcedColors  (forced-colors: active);
---------------------------------------------------^
   16 |
   17 |@custom-media --portrait      (orientation: portrait);
Parse error: ")" is expected
   15 |@custom-media --forcedColors  (forced-colors: active);
   16 |
   17 |@custom-media --portrait      (orientation: portrait);
-------------------------------------------------^
   18 |@custom-media --landscape     (orientation: landscape);
Parse error: ")" is expected
   17 |@custom-media --portrait      (orientation: portrait);
   18 |@custom-media --landscape     (orientation: landscape);
-------------------------------------------------^
   19 |
   20 |@custom-media --HDcolor       (dynamic-range: high) or (color-gamut: p3);
Parse error: ")" is expected
   18 |@custom-media --landscape     (orientation: landscape);
   19 |
   20 |@custom-media --HDcolor       (dynamic-range: high) or (color-gamut: p3);
---------------------------------------------------^
   21 |
   22 |@custom-media --touch         (hover: none) and (pointer: coarse);
Parse error: ")" is expected
   20 |@custom-media --HDcolor       (dynamic-range: high) or (color-gamut: p3);
   21 |
   22 |@custom-media --touch         (hover: none) and (pointer: coarse);
-------------------------------------------^
   23 |@custom-media --stylus        (hover: none) and (pointer: fine);
   24 |@custom-media --pointer       (hover) and (pointer: coarse);
Parse error: ")" is expected
   22 |@custom-media --touch         (hover: none) and (pointer: coarse);
   23 |@custom-media --stylus        (hover: none) and (pointer: fine);
-------------------------------------------^
   24 |@custom-media --pointer       (hover) and (pointer: coarse);
   25 |@custom-media --mouse         (hover) and (pointer: fine);
Parse error: ")" is expected
   22 |@custom-media --touch         (hover: none) and (pointer: coarse);
   23 |@custom-media --stylus        (hover: none) and (pointer: fine);
   24 |@custom-media --pointer       (hover) and (pointer: coarse);
---------------------------------------------------------^
   25 |@custom-media --mouse         (hover) and (pointer: fine);
Parse error: ")" is expected
   23 |@custom-media --stylus        (hover: none) and (pointer: fine);
   24 |@custom-media --pointer       (hover) and (pointer: coarse);
   25 |@custom-media --mouse         (hover) and (pointer: fine);
---------------------------------------------------------^
   26 |
   27 |@custom-media --xxs-only      (0px <= width < 240px);
Parse error: ")" is expected
   25 |@custom-media --mouse         (hover) and (pointer: fine);
   26 |
   27 |@custom-media --xxs-only      (0px <= width < 240px);
------------------------------------------^
   28 |@custom-media --xxs-n-above   (width >= 240px);
   29 |@custom-media --xxs-n-below   (width < 240px);
Parse error: ")" is expected
   27 |@custom-media --xxs-only      (0px <= width < 240px);
   28 |@custom-media --xxs-n-above   (width >= 240px);
--------------------------------------------^
   29 |@custom-media --xxs-n-below   (width < 240px);
   30 |@custom-media --xxs-phone     (--xxs-only) and (--portrait);
Parse error: ")" is expected
   27 |@custom-media --xxs-only      (0px <= width < 240px);
   28 |@custom-media --xxs-n-above   (width >= 240px);
   29 |@custom-media --xxs-n-below   (width < 240px);
--------------------------------------------^
   30 |@custom-media --xxs-phone     (--xxs-only) and (--portrait);
Parse error: ")" is expected
   30 |@custom-media --xxs-phone     (--xxs-only) and (--portrait);
   31 |
   32 |@custom-media --xs-only       (240px <= width < 360px);
--------------------------------------------^
   33 |@custom-media --xs-n-above    (width >= 360px);
   34 |@custom-media --xs-n-below    (width < 360px);
Parse error: ")" is expected
   32 |@custom-media --xs-only       (240px <= width < 360px);
   33 |@custom-media --xs-n-above    (width >= 360px);
--------------------------------------------^
   34 |@custom-media --xs-n-below    (width < 360px);
   35 |@custom-media --xs-phone      (--xs-only) and (--portrait);
Parse error: ")" is expected
   32 |@custom-media --xs-only       (240px <= width < 360px);
   33 |@custom-media --xs-n-above    (width >= 360px);
   34 |@custom-media --xs-n-below    (width < 360px);
--------------------------------------------^
   35 |@custom-media --xs-phone      (--xs-only) and (--portrait);
Parse error: ")" is expected
   35 |@custom-media --xs-phone      (--xs-only) and (--portrait);
   36 |
   37 |@custom-media --sm-only       (360px <= width < 480px);
--------------------------------------------^
   38 |@custom-media --sm-n-above    (width >= 480px);
   39 |@custom-media --sm-n-below    (width < 480px);
Parse error: ")" is expected
   37 |@custom-media --sm-only       (360px <= width < 480px);
   38 |@custom-media --sm-n-above    (width >= 480px);
--------------------------------------------^
   39 |@custom-media --sm-n-below    (width < 480px);
   40 |@custom-media --sm-phone      (--sm-only) and (--portrait);
Parse error: ")" is expected
   37 |@custom-media --sm-only       (360px <= width < 480px);
   38 |@custom-media --sm-n-above    (width >= 480px);
   39 |@custom-media --sm-n-below    (width < 480px);
--------------------------------------------^
   40 |@custom-media --sm-phone      (--sm-only) and (--portrait);
Parse error: ")" is expected
   40 |@custom-media --sm-phone      (--sm-only) and (--portrait);
   41 |
   42 |@custom-media --md-only       (480px <= width < 768px);
--------------------------------------------^
   43 |@custom-media --md-n-above    (width >= 768px);
   44 |@custom-media --md-n-below    (width < 768px);
Parse error: ")" is expected
   42 |@custom-media --md-only       (480px <= width < 768px);
   43 |@custom-media --md-n-above    (width >= 768px);
--------------------------------------------^
   44 |@custom-media --md-n-below    (width < 768px);
   45 |@custom-media --md-phone      (--md-only) and (--portrait);
Parse error: ")" is expected
   42 |@custom-media --md-only       (480px <= width < 768px);
   43 |@custom-media --md-n-above    (width >= 768px);
   44 |@custom-media --md-n-below    (width < 768px);
--------------------------------------------^
   45 |@custom-media --md-phone      (--md-only) and (--portrait);
Parse error: ")" is expected
   45 |@custom-media --md-phone      (--md-only) and (--portrait);
   46 |
   47 |@custom-media --lg-only       (768px <= width < 1024px);
--------------------------------------------^
   48 |@custom-media --lg-n-above    (width >= 1024px);
   49 |@custom-media --lg-n-below    (width < 1024px);
Parse error: ")" is expected
   47 |@custom-media --lg-only       (768px <= width < 1024px);
   48 |@custom-media --lg-n-above    (width >= 1024px);
--------------------------------------------^
   49 |@custom-media --lg-n-below    (width < 1024px);
   50 |@custom-media --lg-phone      (--lg-only) and (--portrait);
Parse error: ")" is expected
   47 |@custom-media --lg-only       (768px <= width < 1024px);
   48 |@custom-media --lg-n-above    (width >= 1024px);
   49 |@custom-media --lg-n-below    (width < 1024px);
--------------------------------------------^
   50 |@custom-media --lg-phone      (--lg-only) and (--portrait);
Parse error: ")" is expected
   50 |@custom-media --lg-phone      (--lg-only) and (--portrait);
   51 |
   52 |@custom-media --xl-only       (1024px <= width < 1440px);
---------------------------------------------^
   53 |@custom-media --xl-n-above    (width >= 1440px);
   54 |@custom-media --xl-n-below    (width < 1440px);
Parse error: ")" is expected
   52 |@custom-media --xl-only       (1024px <= width < 1440px);
   53 |@custom-media --xl-n-above    (width >= 1440px);
--------------------------------------------^
   54 |@custom-media --xl-n-below    (width < 1440px);
Parse error: ")" is expected
   52 |@custom-media --xl-only       (1024px <= width < 1440px);
   53 |@custom-media --xl-n-above    (width >= 1440px);
   54 |@custom-media --xl-n-below    (width < 1440px);
--------------------------------------------^
   55 |
   56 |@custom-media --xxl-only      (1440px <= width < 1920px);
Parse error: ")" is expected
   54 |@custom-media --xl-n-below    (width < 1440px);
   55 |
   56 |@custom-media --xxl-only      (1440px <= width < 1920px);
---------------------------------------------^
   57 |@custom-media --xxl-n-above   (width >= 1920px);
   58 |@custom-media --xxl-n-below   (width < 1920px);
Parse error: ")" is expected
   56 |@custom-media --xxl-only      (1440px <= width < 1920px);
   57 |@custom-media --xxl-n-above   (width >= 1920px);
--------------------------------------------^
   58 |@custom-media --xxl-n-below   (width < 1920px);
Parse error: ")" is expected
   56 |@custom-media --xxl-only      (1440px <= width < 1920px);
   57 |@custom-media --xxl-n-above   (width >= 1920px);
   58 |@custom-media --xxl-n-below   (width < 1920px);
--------------------------------------------^
```