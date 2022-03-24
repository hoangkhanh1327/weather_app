module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                warm: "url('../images/warm-bg.jpg')",
                cold: "url('../images/cold-bg.jpg')",
                main: "url('../images/bg.jpg')",
            },
            colors: {
                'rgba-0.2': 'rgba(0, 0, 0, 0.2)',
                'rgba-0.3': 'rgba(0, 0, 0, 0.3)',
                'rgba-0.5': 'rgba(0, 0, 0, 0.5)',
                'rgba-0.75': 'rgba(0, 0, 0, 0.75)',
                'rgba-light-0.2': 'rgba(255, 255, 255, 0.2)',
                'rgba-light-0.5': 'rgba(255, 255, 255, 0.5)',
                'rgba-light-0.75': 'rgba(255, 255, 255, 0.75)',
            },
        },
    },
    plugins: [],
};
