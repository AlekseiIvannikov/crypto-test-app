import daisyui from "daisyui"

export default {
  content: ['./src/**/*.{vue,js,ts}'],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
    ],
  },
  plugins: [
    daisyui,
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}

