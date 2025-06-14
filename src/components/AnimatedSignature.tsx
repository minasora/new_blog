import Svg from '@/assets/minasora.svg'

export function AnimatedSignature() {
  return (
    <div
      className="animated-signature"
      dangerouslySetInnerHTML={{
        __html: Svg,
      }}
    ></div>
  )
}
