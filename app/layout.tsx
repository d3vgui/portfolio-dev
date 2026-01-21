import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/settings.scss";
import "bootstrap-icons/font/bootstrap-icons.css"
import CustomCursor from '../components/CustomCursor/'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio - Guilherme Carvalho",
  description: "Portfólio de Guilherme Carvalho. Desenvolvedor Front-end e Analista de BI unindo React, Next.js e SQL para criar interfaces modernas e soluções baseadas em dados.",
  keywords: ["Desenvolvedor Web", "React", "Next.js", "Business Intelligence", "Front-end", "Portfólio", "JavaScript", "Programação", "SQL Server", "Data Analytics", "Power BI", "Dados"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <CustomCursor/>
          {children}
      </body>
    </html>
  );
}
