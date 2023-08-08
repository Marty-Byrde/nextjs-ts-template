import '@/public/globals.css'
import React from "react"
import { useColorModeValue } from "@/app/(components)/ColorModeHandler"
import NavigationBar, { NavigationBarProps } from "@/app/(components)/Navigation/NavigationBar"

const navigationBarProps: NavigationBarProps = {
  title: "Dashboard",
  items: [
    {
      label: 'First Category',
      image: "https://cdn-icons-png.flaticon.com/512/74/74905.png",
      children: [
        {
          label: 'SubItem',
          subLabel: "Label of subitem",
          href: '/route'
        },
        {
          label: 'Second Subitem',
          subLabel: 'Label of second subitem',
          href: '/',
        },
      ],
    }
  ]
}


export default async function RootLayout({ children, }: { children: React.ReactNode }) {
  const background = 'bg-stone-100/90 dark:bg-base-100'


  return (
    <html lang="en" data-theme={useColorModeValue("cmyk", "halloween")} className={`h-full ${background} ${useColorModeValue("", "dark")}`}>

    <body className='h-full bg-gradient-to-r from-base-100 to-base-100'>

    <NavigationBar {...navigationBarProps} />

    <div className={`p-4 pb-6 mb-10 ${background}`}>
      {children}
    </div>


    <footer className="footer footer-center p-4 bg-gray-400/50 dark:bg-base-300 text-base-content fixed bottom-0 right-0 left-0">
      <div>
        <p className='hidden md:block'>Copyright © 2023 - All right reserved by @Marty-Byrde</p>
        <p className='block md:hidden'>Copyright © @Marty-Byrde</p>
      </div>
    </footer>


    </body>
    </html>
  )
}
