import Sidbar from "../../components/sidbar/Sidebar"
import "./settings.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update you Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <from className="settingsForm">
                    <label htmlFor="">Profile picture</label>
                    <div className="settingsPP">
                        <img src="post.jpeg" alt="" className="settingsImg" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file"  id="fileInput" style ={{display:"none"}} />
                    </div>
                    <laberl>Username</laberl>
                    <input type="text" name="" placeholder="safka" />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="safka@gmail.com"  />
                    <label>Password</label>
                    <input type="password" name="" id="" />
                    <button className="settingsSubmit">Update</button>
                </from>
            </div>
            <Sidbar />
        </div>
    )
}
