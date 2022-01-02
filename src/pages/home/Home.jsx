import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidbar from "../../components/sidbar/Sidebar";
import "./home.css"
export default function Home() {
    return (
        <>
            <Header/>
            <div className="home">
                <Posts/>
                <Sidbar/>
            </div>
        </>
    )
}
