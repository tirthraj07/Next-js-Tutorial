import { Metadata } from "next"
import "./globals.css"

export const metadata : Metadata = {
  title:{
    default:"Next Js Tutorial",
    template:"%s | Tirthraj Mahajan"
  }
}

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        <header style={{
          border:"1px solid black",
          padding:"10px",
          paddingLeft:"2rem",
          textAlign:"center"
        }}>
          <h1>Header</h1>
        </header>
        

        <div style={{
          marginBottom:"10vh"
        }}>
          {children}
        </div>

        <footer style={{
          position:"relative",
          bottom:"0",
          left:"0",
          width:"100%",
          minHeight:"5vh",
          textAlign:"center",
          fontFamily:"sans-serif",
          fontWeight:"100",
          border:"1px solid black"
        }}>

          <h3>Brought to you by Tirthraj Mahajan @2024</h3>

        </footer>


        </body>
    </html>
  )
}
