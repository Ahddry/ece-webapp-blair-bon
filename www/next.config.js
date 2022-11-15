/* next.config.js  */
module.exports = {
    i18n: {
        locales: ["fr"],
        defaultLocale: "fr",
    },

    async redirects() {
        return [
            {
                source: "/login-native",
                destination: "/#contacter",
                permanent: true,
            },
        ];
    },
};
