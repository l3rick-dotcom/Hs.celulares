
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HS Celulares",
  description: "Sistema de gerenciamento da HS Celulares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{
        margin: 0,
        background: "#080808",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif"
      }}>
        {children}
      </body>
    </html>
  );
}
