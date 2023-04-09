import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = ({navbg, children}) => {
  return (
    <div>
        <header>
            <Navbar navbg={navbg} />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default Layout