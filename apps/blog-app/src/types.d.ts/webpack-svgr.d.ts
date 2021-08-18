/**
 * An example declaration for svg if you're relying on @svgr/webpack or
 * equivalent strategy. I will improve type completion experience.
 *
 * @link {https://github.com/gregberge/svgr/issues/546|For issue followup}
 * @link {https://github.com/gregberge/svgr/pull/573|To follow upcoming improvements}
 *
 * If you're not using @svgr/webpack, just replace by definition by
 *
 * ```
 * declare module "*.svg" {
 *   const svg: string;
 *   export default svg;
 * }
 * ```
 */

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
