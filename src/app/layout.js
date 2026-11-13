import "./globals.css";
import LenisProvider from "./providers/LenisProvider";

export const metadata = {
  title: "MSI Turismo | Há 14 anos realizando sonhos",
  description: "Excursões, viagens em grupo e atendimento personalizado em Caieiras — SP.",
  icons: {
    icon: "/brand/msi-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
