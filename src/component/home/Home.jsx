import Header from "../header/Header";
import Footer from "../footer/Footer";
import Login from "../login/Login";

export default function Home() {
    return (
        <div className="home">
            <Header />
            <Login />
            <Footer />
        </div>
    )
}
