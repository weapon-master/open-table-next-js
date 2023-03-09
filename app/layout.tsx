import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Open Table',
  icons: '/favicon.ico',
  description: 'Reserve your table in your favorite restaurant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main className='bg-gray-100 min-h-screen w-screen'>
          <main className='max-w-screen-2xl m-auto bg-white'>
            <Navbar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
