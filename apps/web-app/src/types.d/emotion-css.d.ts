/**
 * To enable emotion css props for typescript...
 * While nextjs does not have problems with its babel.config.js,
 * it's still hard to have the css prop working even with the
 * `"jsxImportSource": "@emotion/react"`
 *
 * You can try by yourself removing this type, add jsxImportSource
 * and see if you have and error looking like:
 * > 'Expression produces a union type that is too complex to represent'
 */
/// <reference types="@emotion/react/types/css-prop" />
