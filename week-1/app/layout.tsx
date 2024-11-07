import './globals.css';
import Nav from '@/components/nav/nav.component';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const routesName = ['home', 'blogs', 'about'];
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950">
        <div className="h-screen max-w-screen-2xl m-auto">
          <Nav routesName={routesName} />
          {children}
        </div>
      </body>
    </html>
  );
}
