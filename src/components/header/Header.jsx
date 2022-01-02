import "./header.css"
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
                <img src="header.jpeg" alt="" className="headerImg" />
            </div>
        </div>
    )
}