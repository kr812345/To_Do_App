import { Merriweather_Sans, Poppins } from 'next/font/google';

const merriweather = Merriweather_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    display: 'swap',
  });
  
const poppins = Poppins({
    subsets: ['latin'], 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
  });

export default {merriweather, poppins}