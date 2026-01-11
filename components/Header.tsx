import Link from 'next/link'

export default function Header() {
  return (
  <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container flex items-center justify-between py-4">
        <nav className="absolute left-1/2 transform -translate-x-1/2 space-x-6">
          <Link href="#contact" className="text-white hover:opacity-90">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
