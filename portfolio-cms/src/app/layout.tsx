import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={title:"Taha Samani — Full-Stack Developer",description:"Bilingual developer portfolio and mock CMS demo."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}