"use client"
import './globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme  from "./theme/theme";
import NavBar from './components/Navbar';
import Footer from './components/Footer';



export default function MainLayout({children,}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <NavBar/>
            <section>{children}</section> 
            <Footer/>
          </body>
        </ThemeProvider>
    </html>
  )
}
