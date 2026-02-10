import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const HomeLayout = ({  }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* Naye pages yahan load honge */}
      </main>
      <Footer />
    </div>
  )
}

export default HomeLayout