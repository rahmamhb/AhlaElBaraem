/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                primary: "#FF4848",
                "primary-light": "#FF9A9A",
                "accent-yellow": "#FFE794",
                "accent-yellow-dark": "#FDDC6B",
                "accent-orange": "#FFB585",
                "accent-peach": "#FFDCB0",
                "accent-blue": "#9ADBFF",
                "gray-dark": "#555555",
                "gray-mid": "#9D9D9D",
                "gray-light": "#D9D9D9",
                "status-red": "#FF4848",
                "status-orange": "#FFB585",
                "status-yellow": "#FFE794",
                "status-green": "#8BC34A",
            },
            fontFamily: {
                display: ["Bubblegum Sans", "cursive"],
                sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
