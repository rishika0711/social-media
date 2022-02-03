 import "./post.css"
import { MoreVert } from "@material-ui/icons"
export default function Post( {post}) {
    console.log(post); 
  return (
    <div className="post">
      <div className="postWrapper">
          <div className="postTop">
              <div className="postTopLeft">
                  <img class Name="postProfileImg" 
                  src={post.photo}
                   alt=""/>
                  <span className="postUsername">Safak</span>
                  <span className="postDate">
                      {post.date}
                      </span>
              </div>
              <div className="postTopRight">
                  <MoreVert/> 
              </div>
          </div> 
          <div className="postCenter">
              <span className="postText">
                  {post?.desc}
                  </span>
              <img className="postImg" src={post.photo} alt=""/>
          </div>
          <div className="postBotton">
              <div className="postBottonLeft">
                  <img className="likeIcon" src="assets/like.png" alt=""/>
                  <img className="likeIcon" src="assets/heart.png" alt=""/>
                  <span className="postLikeCounter">
                      {post.like} 
                      people like it </span>
              </div>
              <div className="postBottonLeft">
                  <span className="postCommentText">
                      {post.comment}
                      Comments</span>
            
              </div>

          </div>
      </div>
    </div>
  )
}
