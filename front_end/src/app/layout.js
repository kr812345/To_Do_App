import "@/app/globals.css";
import { Merriweather_Sans, Poppins } from 'next/font/google';

const merriweather = Merriweather_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    display: 'swap',
  });
  
const poppins = Poppins({
    subsets: ['latin'], 
    weight: ['500'],
    display: 'swap',
  });



export const metadata = {
  title: "To_Do App",
  description: "Created by me @kr812345",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
