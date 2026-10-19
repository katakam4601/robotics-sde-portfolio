import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Katakam Saikumar | Robotics Software Engineer (ROS2 • Isaac Sim • Embodied AI)",
  description:
    "Portfolio of Katakam Saikumar, Robotics Software Engineer with 4 years experience building autonomy, perception, and robot learning systems in C++ and Python (Isaac Lab, ROS2, TensorRT, FreeRTOS).",
  keywords: [
    "Robotics Software Engineer",
    "Katakam Saikumar",
    "ROS2",
    "Nav2",
    "Isaac Sim",
    "Isaac Lab",
    "Embodied AI",
    "TensorRT",
    "Jetson Orin",
    "Reinforcement Learning Locomotion",
    "VLA Manipulation",
    "FreeRTOS",
    "CAN Bus",
  ],
  authors: [{ name: "Katakam Saikumar" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground cyber-grid">
        {children}
      </body>
    </html>
  );
}
