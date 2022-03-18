module.exports = {
    // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
    // https://tailwindcss.com/docs/just-in-time-mode
    // mode: "jit",
    theme: {
        extend: {
        colors: {
            "float-box": "#3f9cc1",
            primary: "#c1b086",
        },
        width: {
            "1/8": "12.5%",
        },
        },
    },
    variants: {},
    plugins: [],
    // Filenames to scan for classes
    content: [
        "./src/**/*.html",
        "./src/**/*.js",
        "./src/**/*.jsx",
        "./src/**/*.ts",
        "./src/**/*.tsx",
        "./src/**/**/*.html",
        "./src/**/**/*.js",
        "./src/**/**/*.jsx",
        "./src/**/**/*.ts",
        "./src/**/**/*.tsx",
        "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
        // Whitelist specific selectors by name
        // safelist: [],
    },
};
