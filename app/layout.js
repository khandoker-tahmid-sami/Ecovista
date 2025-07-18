import "./globals.css";

export const metadata = {
  title: "Ecovista",
  description: "A weather related dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
