const config = {
  plugins: {
    "@tailwindcss/postcss": {
        /* plugin options */
        enabled: true,
        config: {
            content: [
                "./pages/**/*.{js,ts,jsx,tsx}",
                "./components/**/*.{js,ts,jsx,tsx}",
                "./app/**/*.{js,ts,jsx,tsx}",
                "./src/**/*.{js,ts,jsx,tsx}",
                "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
            ],
        },
    },
  },
};

export default config;