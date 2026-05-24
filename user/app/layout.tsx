import "./globals.css";

export const metadata = {
  title: "WisataCui",
  description: "Website wisata Sanggar Beach Lampung Selatan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}