import { Inter } from "next/font/google";
import "./globals.scss";
import MiProvider from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <MiProvider>
        <body>{children}</body>
      </MiProvider>
    </html>
  );
}
