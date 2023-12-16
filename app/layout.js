import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-family-poppins",
});
export const metadata = {
  title: 'Abdelbasset Benatmani',
  description: 'Personal website of Abdelbasset Benatmani',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
