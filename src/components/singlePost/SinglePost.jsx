import './singlepost.css'

export default function SinglePost() {
    return (
        <div className="singlePost"> 
            <div className="singlePostWrapper">
                <img src="./post.jpeg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fa fa-trash-alt"></i>
                    </div>
                </h1> 
                <div className="singlePostInfo">
                    <span className="singlePostAuthor"> 
                        Autot: <b>Safak</b>
                    </span>
                    <span className="singlePostDate"> 1 hour ago </span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi 
                    assumenda consequatur asperiores placeat sit, ducimus eos in 
                    voluptate perspiciatis, quasi labore nostrum esse et nobis 
                    quod repudiandae adipisci ullam veritatis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi 
                    assumenda consequatur asperiores placeat sit, ducimus eos in 
                    voluptate perspiciatis, quasi labore nostrum esse et nobis 
                    quod repudiandae adipisci ullam veritatis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi 
                    assumenda consequatur asperiores placeat sit, ducimus eos in 
                    voluptate perspiciatis, quasi labore nostrum esse et nobis 
                    quod repudiandae adipisci ullam veritatis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi 
                    assumenda consequatur asperiores placeat sit, ducimus eos in 
                    voluptate perspiciatis, quasi labore nostrum esse et nobis 
                    quod repudiandae adipisci ullam veritatis!
                </p>
            </div>
        </div>
    )
}
