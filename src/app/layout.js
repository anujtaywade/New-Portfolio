import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Anuj Taywade",
  description: "Full Stack Developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          overflow-x-hidden
          antialiased
        `}
      >
        <Navbar/>
       
        {children}
        <Footer/>
      </body>
    </html>
  );
}
