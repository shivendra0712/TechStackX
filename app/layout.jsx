
import '../styles/globals.css'

export const metadata = {
  title: "YourCompany — Scalable Software & Cloud Solutions",
  description: "Product engineering, cloud migration, mobile apps, DevOps."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
