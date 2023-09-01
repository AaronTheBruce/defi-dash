import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux';
import { store } from '@/services/store';
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'App Page',
  description: 'Handles the rendering out of the app page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
