import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Sidebar/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
