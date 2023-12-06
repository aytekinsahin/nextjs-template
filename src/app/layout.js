import { Inter } from 'next/font/google'
import './globals.css'
import NextAuthProvider from "@/providers/NextAuthProvider";
import Header from "@/components/header";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children,session }) {
  return (
    <html lang="en">
          <body className={inter.className}>
            <NextAuthProvider session={session}>
              <Header/>
              {children}
            </NextAuthProvider>
          </body>
    </html>
  )
}
