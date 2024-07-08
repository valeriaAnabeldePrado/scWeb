import { Inter } from "next/font/google";
import "./globals.scss";
import MiProvider from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Smart Cloud Studio",
  description:
    "La innovación, el diseño y la tecnología se entrelazan para crear experiencias digitales que desafían lo convencional. Somos más que un estudio; somos vanguardia y transformación, ofrecemos soluciones únicas y personalizadas que elevan tu presencia. Lideramos una nueva era de innovación.",
  keywords: [
    "Smart Cloud Studio",
    "servicios digitales",
    "diseño UX/UI",
    "desarrollo de software a medida",
    "branding",
    "producciones audiovisuales",
    "renderizado 3D",
    "fotorrealismo",
    "comercio electrónico",
    "React.Js",
    "Next.Js",
    "WebGL",
    "Three.Js",
    "Gsap",
    "Headless",
    "Figma",
    "Illustrator",
    "contenido audiovisual",
    "Adobe Premiere Pro",
    "After Effects",
    "Blender",
    "Lightroom",
    "CapCut",
    "branding empresarial",
    "logotipo",
    "brandbook",
    "paleta de colores",
    "presentación empresarial",
    "diseño gráfico",
    "ilustración digital",
    "arte conceptual",
    "modelado 3D",
    "animación 3D",
    "mockups",
    "visualización de productos",
    "tarjetas digitales",
    "invitaciones digitales",
    "tarjetas personalizadas",
    "eventos empresariales",
  ],
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
