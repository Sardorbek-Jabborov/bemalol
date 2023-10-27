module.exports = {
    purge: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    mode: 'jit',
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: ['1170px']
        },
        extend: {
            colors: {
                red: '#FF0000',
                green: {
                    main: '#55BB00',
                    secondary: '#6c1',
                },
            },
        },
        fontSize: {
            "xs": "12px",
            13: "13px",
            "sm": "14px",
            15: "15px",
            "lg": "18px",
            19: "19px",
            "xl": "20px",
            "22": "22px",
            "2xl": "24px"
        }
    },
    plugins: [],
}
