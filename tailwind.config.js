/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      primary: ["Poppins", "Arimo", "Jost"],
      secondary: ["Open Sans"],
    },
    extend: {
      backgroundImage: {
        parallex: "url('/images/img-14.webp')",
        ourclient: "url('/images/base5.webp')",
        social: "url('/images/img-13.webp')",
        employer: "url('/images/employer.webp')",
        enextsteps: "url('/images/img-17.webp')",
        agency: "url('/images/agencies.webp')",
        "about-us": "url('/images/about-big.webp')",
        refer: "url('/images/refer-page.jpeg')",
        thankyou : "url('/images/illustration.avif')",
        rbanner : "url('/images/techhr-header.webp')",
        cbanner : "url('/images/hero-contact-us.webp')"
      },
      animation: {
        text: "text 3s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
