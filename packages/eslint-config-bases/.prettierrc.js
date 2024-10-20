// @ts-check
const {
    getPrettierConfig,
} = require("./src/helpers");

/**
 * @type {import('prettier').Config}
 */
module.exports = {
    ...getPrettierConfig(),
    overrides: [
        // whatever you need
    ],
};
