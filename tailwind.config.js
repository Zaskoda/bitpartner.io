/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            colors: {
                'bit-yellow': '#fec260',
                'bit-blue': '#509fe2',
                'bit-brown-200': '#d0a487',
                'bit-brown-300': '#907154',
                'bit-brown-500': '#3c2925',
            },
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
