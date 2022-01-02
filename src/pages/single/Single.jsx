import "./single.css"
import Sidbar from "../../components/sidbar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
export default function Single() {
    return (
        <div className="single">
            {/* post */}
            <SinglePost/>
            <Sidbar/>
        </div>
    )
}
