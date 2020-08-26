const path = require('path');
const NEXTJS_BUILD_TARGET = process.env.NEXTJS_BUILD_TARGET || 'server';
module.exports = {
    target: NEXTJS_BUILD_TARGET,
    webpack: function (config, { defaultLoaders }) {
        const resolvedBaseUrl = path.resolve(config.context, '../../')
        config.module.rules = [
            ...config.module.rules,
            {
                test: /\.(tsx|ts|js|mjs|jsx)$/,
                include: [resolvedBaseUrl],
                use: defaultLoaders.babel,
                exclude: (excludePath) => {
                    return /node_modules/.test(excludePath)
                },
            },
        ]
        return config
    },
}
