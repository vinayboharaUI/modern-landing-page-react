import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-100">
      <Link to="/" className="hover:text-blue-600">Home</Link>
      <Link to="/about" className="hover:text-blue-600">About</Link>
      <Link to="/contact" className="hover:text-blue-600">Contact</Link>
    </nav>
  )
}

export default Nav