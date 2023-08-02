import '../styles/globals.css'
import styles from '../styles/page.module.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akademi',
  description: 'Akademi School Admission',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}
