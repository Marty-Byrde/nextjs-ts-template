
type SkeletonProps = {
  rounded?: string,
  maxWidth?: string | 'max-w-sm',
  children?: any
}

/**
 * This component will return a Skeleton in which further Sekeleton-elements can be displayed.
 * @param props
 * @constructor
 */
export default function Skeleton(props: SkeletonProps = { rounded: "3xl", maxWidth: "max-w-sm" }) {
  let { maxWidth, rounded } = props

  return (
    <div role="status" className={`${maxWidth} w-full h-md max-h-full h-60 p-4 border border-gray-200 rounded-${rounded} shadow animate-pulse md:p-6 dark:border-gray-700 bg-amber-50/20`}>
      {props.children}
    </div>
  )
}


export type SkeletonLineProps = {
  height?: string | 'h-2',
  width?: string | 'w-16',
}

/**
 * This function will return a Skeleton-line
 * @param props
 * @constructor
 */
export function SkeletonLine(props: SkeletonLineProps) {
  let { width, height } = props

  return <div className={`${height ?? "h-2"} bg-gray-200 rounded-full dark:bg-gray-700 ${width ?? 'w-16'} my-3`}></div>
}



/**
 * This function will display a skeleton that combines and some skeleton lines next to it, given as its children.
 * @constructor
 */
export function SkeletonImageGroup({children}) {
  return <div>
    <div className="flex items-center mt-4 space-x-3">
      <SkeletonImage width='w-14' height='w-14'/>
      <div className={""}>
        {children}
      </div>
    </div>
  </div>
}

/**
 * This function will return a Skeleton-image
 * @param width
 * @param height
 * @constructor
 */
export function SkeletonImage({ width, height }: { width: string | 'w-14', height: string | 'h-14' }) {
  return <svg className={`text-gray-200 ${width} ${height} dark:text-gray-700`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
  </svg>
}