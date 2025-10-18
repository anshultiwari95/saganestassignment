import "./globals.css";

export const metadata = {
  title: "Saganest",
  description: "Modern web application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
