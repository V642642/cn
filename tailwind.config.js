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
      primary: ["Arimo", "Jost" ,"Open Sans"],
      secondary: ["Open Sans"],
    },
    extend: {
      backgroundImage: {
        parallex: "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/img-14.webp')",
        ourclient: "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/base5.webp')",
        social: "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/img-13.webp')",
        employer: "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/employer.webp')",
        enextsteps: "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/img-17.webp')",
        agency: "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/agencies.webp')",
        "about-us": "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/about-big.webp')",
        refer: "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/refer-page.jpeg')",
        thankyou : "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/illustration.avif')",
        rbanner : "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/techhr-header.webp')",
        cbanner : "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/hero-contact-us.webp')",
        testimonial : "url('https://hp-ca-web-prod.s3.ca-central-1.amazonaws.com/public/images/testimonial-banner.jpg')"
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
