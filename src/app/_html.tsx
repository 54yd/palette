import { ReactNode } from "react";

export const metadata = {
  title: "My Next.js App",
  description: "Generated by create next app",
};

const Html = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default Html;
