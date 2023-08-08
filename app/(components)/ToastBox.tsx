'use client'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export default function ToastBox(config?: ContainerProps) {
  return <ToastContainer
    className='mt-12'
    autoClose={3000}
    closeOnClick
    pauseOnHover
    pauseOnFocusLoss={false}
    theme={"colored"}
    position={"top-right"}
    {...config}
  />
}

export type ContainerProps = {
  className?: string,
  autoClose?: number,
  hideProgressBar?: boolean,
  pauseOnHover?: boolean,
  theme?: "colored" | "dark" | "light",
  position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left",
  pauseOnFocusLoss?: boolean,
}