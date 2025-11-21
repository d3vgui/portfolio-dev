import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/settings.scss";
import "bootstrap-icons/font/bootstrap-icons.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/> 
      </body>
    </html>
  );
}
