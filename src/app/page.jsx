import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Image
        className="dark:invert"
        src="/images/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  )
}
