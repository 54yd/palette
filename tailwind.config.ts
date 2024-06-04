type TailwindConfig = {
  content: string[];
  theme: {
    extend: Record<string, unknown>;
  };
  plugins: unknown[];
};

const config: TailwindConfig = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
