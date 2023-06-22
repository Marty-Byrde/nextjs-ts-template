import '@/public/globals.css'
import React, { CSSProperties } from "react"
import { getColorMode, useColorModeValue } from "@/app/(components)/ColorModeHandler"
import DaisyNavBar from "./DaisyNavBar"
import ColorModeSwitcher from "@/app/(components)/ColorModeSwitcher";



export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  const background = 'bg-base-100/90 dark:bg-base-100'


  return (
    <html lang="en" data-theme={useColorModeValue("cmyk", "halloween")} className={`${background} ${useColorModeValue("", "dark")}`}>

      <body className={``}>

      <div className='flex justify-center my-4 items-center'>
        <ColorModeSwitcher />
      </div>
        {/*<DaisyNavBar />*/}
        <div className={`p-4 ${background} `} id={"childrenContainer"}>
          {children}
        </div>


        <footer className="hidden footer footer-center p-4 bg-gray-400/50 dark:bg-base-300 text-base-content fixed bottom-0 right-0 left-0">
          <div>
            <p>Copyright © 2023 - All right reserved by XY</p>
          </div>
        </footer>


      </body>
    </html>
  )
}
