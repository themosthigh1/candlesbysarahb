"use client"
import { CssBaseline, ThemeProvider } from '@mui/material';
import './globals.css'
import theme  from "./theme/theme";


export default function MainLayout({children,}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <section>{children}</section> 
          </body>
        </ThemeProvider>
    </html>
  )
}
