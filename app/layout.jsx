import '../styles/globals.css'
import styles from '../styles/page.module.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav/Nav'
// import { store, wrapper } from '@/redux/store'
// import { Provider } from 'react-redux'
import ReduxProvider from './redux-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akademi',
  description: 'Akademi School Admission',
}

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html html lang="en" >
        <body>
          <Nav />
          <main className={styles.main}>
            {children}
          </main>
        </body>
      </html >
    </ReduxProvider>
  )
}