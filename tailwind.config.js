/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                teal: {
                    DEFAULT: '#00685F',
                }
            },
        },
    },
    plugins: [],
}
