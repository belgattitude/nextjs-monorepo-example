// @ts-check
'use strict';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const { resolve } = require('node:path');
const { fileURLToPath } = require('node:url');

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const globalCachePath = resolve(`${__dirname}/.cache`);

/**
 * @param {string} packageName
 * @returns string
 */
function sanitize(packageName) {
  return packageName.replace('/', '.').replace(/[^a-z0-9.@_-]+/gi, '-');
}

/**
 * @param {string} packageName
 * @returns string
 */
export function getJestCachePath(packageName) {
  return `${globalCachePath}/jest/${sanitize(packageName)}`;
}

export function getEslintCachePath(packageName) {
  return `${globalCachePath}/${sanitize(packageName)}/eslint`;
}
