import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <div className="main">
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
