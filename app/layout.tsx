import "./globals.css";

export const metadata = {
  title: "DUT Labs - Data · Users · Tasks",
  description: "Simple foundation · limitless potential",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-track-transparent scrollbar-thumb-foreground/10"
    >
      <body>{children}</body>
    </html>
  );
}
