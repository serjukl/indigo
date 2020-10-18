const withImages = require('next-images')
module.exports = withImages()
module.exports = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/siteMapCreator');
        }
        return config;
    }
};
