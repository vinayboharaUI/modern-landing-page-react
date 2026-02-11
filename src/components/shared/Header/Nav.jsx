import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../../assets/logo.svg'

function Nav() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className='flex max-w-7xl mx-auto items-center py-4 px-6 relative'>
      <img src={logo} alt='logo' className="w-32 md:w-auto" />
      
      {/* Mobile Toggle Button */}
      <button 
        className="ml-auto md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Desktop Menu */}
      <div className='hidden md:flex gap-10 ml-auto text-white relative items-center'>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setActiveTab(link.name)}
            className="relative px-6 py-2 z-10 font-medium"
          >
            {link.name}
            {activeTab === link.name && (
              <motion.span
                layoutId="nav-pill"
                className='absolute inset-0 z-[-1] rounded bg-[#E2E2E2]/20 backdrop-blur-md border border-white/20 shadow-lg'
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-[#2C2C2C] p-6 flex flex-col gap-6 md:hidden z-50 border-b border-white/10"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-white text-xl border-b border-white/5 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Nav