/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'notificationBackground': "url('assets/notification/darkBackground.png')",
                'notificationBackgroundDark': "url('assets/notification/whiteBackground.png')",
              },
            colors: {
                blue: {
                    50: '#1D4ED8',
                    100: '#3B82F6',
                    200: '#1E40AF'
                },
                MB: '#111827',
                secondary: '#5856d6',
                neutral: { 500: '#6B7280', 800: '#1F2937', 900: '#111827' },
                primary: {
                    200: '#F9FAFB',
                    300: '#BFDBFE'
                }
            }
        }
    },
    plugins: []
}
