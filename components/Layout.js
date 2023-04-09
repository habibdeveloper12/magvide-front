import Navbar from "./Navbar"


const Layout = ({navbg, children}) => {
  return (
    <div>
        <header>
            <Navbar navbg={navbg} />
        </header>
        <main>{children}</main>
        <footer></footer>
    </div>
  )
}

export default Layout