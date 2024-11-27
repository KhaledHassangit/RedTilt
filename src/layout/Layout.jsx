import NavBar from "../utilities/NavBar";
import Footer from "../utilities/Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <section className="min-h-screen flex flex-col relative">
            <NavBar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </section>
    );
};

export default Layout;
