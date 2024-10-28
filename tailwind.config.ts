type TailwindConfig = {
  content: string[];
  theme: {
    extend: Record<string, unknown>;
  };
  plugins: unknown[];
};

const config: TailwindConfig = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  //darkMode: "class",
  plugins: [],
  //@ts-ignore
  important: true,
};

export default config;
