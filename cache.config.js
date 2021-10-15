/**
 * Convenience script to harmonize cache directories across various
 * tooling such as eslint and jest
 */
// @ts-check
'use strict';

const { resolve } = require('path');

const globalCachePath = resolve(`${__dirname}/.cache`);

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
function getEslintCachePath(packageName) {
  return `${globalCachePath}/${sanitize(packageName)}/eslint`;
}

/**
 * @param {string} packageName
 * @returns string
 */
function getJestCachePath(packageName) {
  return `${globalCachePath}/${sanitize(packageName)}/jest`;
}

module.exports = {
  getJestCachePath,
  getEslintCachePath,
};
