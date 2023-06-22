import Image from "next/image"
import hellocash from "@/public/hellocash.png"
import willhaben from "@/public/willhaben.svg"
import ColorModeSwitcher from "@/app/(components)/ColorModeSwitcher"


function Navigation_Title({ title }) {
  return (
    <div className="flex-1">
      <a className="font-semibold normal-case text-xl ml-4 select-none tracking-wider">{title}</a>
    </div>
  )
}

function NavigationItem({ label, image, children }: { label: string, image?: any, children?: any }) {
  const displayImage = image ? "" : "hidden"
  const displayChildren = children ? "" : "hidden"

  return (
    <li tabIndex={0}>
      <a>
        <div className="flex flex-row items-center">
          <div className={`avatar ${displayImage}`}>
            <div className="w-5 rounded-lg mt-1 mx-2">
              <Image src={image ? image : "https://plugins.jetbrains.com/files/17302/292730/icon/pluginIcon.svg"} alt="hellocash" width={20} height={20}/>
            </div>
          </div>
          <div>{label}</div>
        </div>

        <svg className={`fill-current ${displayChildren}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
        </svg>

      </a>
      <ul className={`p-2 bg-base-100 ${displayChildren}`}>
        {children}
      </ul>
    </li>
  )

}

function NavigationSubItem({ label }: { label: string }) {
  return (
    <li><a>{label}</a></li>
  )
}


export default function DaisyNavBar() {
  return (
    <div className={`navbar bg-gray-500 dark:bg-base-100 border-b `}>
      <Navigation_Title title={"Dashboard"}/>
      <div className="flex-none mr-8">
        <ul className="menu menu-horizontal px-1">

          <NavigationItem label={"Category-1"} image={hellocash}>
            <NavigationSubItem label={"Item-1"}/>
            <NavigationSubItem label={"Item-2"}/>
          </NavigationItem>

          <NavigationItem label={"Category-2"} image={willhaben}/>
          <NavigationItem label={"Category-2"}/>
        </ul>

        <ColorModeSwitcher/>
      </div>
    </div>)
}