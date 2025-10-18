import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary shadow-sm border-b border-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover-scale cursor-pointer">
              <Image src="/logo.svg" alt="Nexcent" width={25} height={17} className="mr-2" />
              <span className="text-2xl font-bold text-primary">Nexcent</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#home" 
              className="text-tertiary hover:text-primary hover-color px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 cursor-pointer"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-tertiary hover:text-primary hover-color px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 cursor-pointer"
            >
              About
            </Link>
            <Link 
              href="#services" 
              className="text-tertiary hover:text-primary hover-color px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 cursor-pointer"
            >
              Services
            </Link>
            <Link 
              href="#contact" 
              className="text-tertiary hover:text-primary hover-color px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 cursor-pointer"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-tertiary hover:text-primary hover-color focus:outline-none focus:text-primary p-2 rounded-md transition-all duration-150 cursor-pointer">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
