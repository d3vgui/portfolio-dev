import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/settings.scss";
import "bootstrap-icons/font/bootstrap-icons.css"
import CustomCursor from '../components/CustomCursor/'

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
