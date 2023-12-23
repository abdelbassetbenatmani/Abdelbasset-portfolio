
import { Poppins } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-family-poppins",
});
export const metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
