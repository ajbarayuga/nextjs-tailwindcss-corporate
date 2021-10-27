import { Navbar, Footer } from '../Index'

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
            <main className="py-24">{ children }</main>
        <Footer />
        </>
    )
}

export default Layout
