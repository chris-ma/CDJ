interface SkeletonLoaderProps {
  height?: string
  width?: string
  rounded?: string
  className?: string
}

export function SkeletonLoader({
  height = 'h-4',
  width = 'w-full',
  rounded = 'rounded',
  className = '',
}: SkeletonLoaderProps) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse bg-gray-200 ${height} ${width} ${rounded} ${className}`}
    />
  )
}
