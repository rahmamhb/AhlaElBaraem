import Moment from "react-moment";
import "./Comment.css"
function setRowNb(nbr){
    document.documentElement.style.setProperty("--rowNum",nbr);
}
const NourriceComment = ({data}) => {
    return ( 

            <div className="comments" onChange={setRowNb(data.length)}>
                {
                    data.map((item,index)=>{
                        return(
                            <div className="comment" key={index}>
                                <div className="comment-text">
                                    <span className="child-name">{item.childName}</span>
                                    <span className="cmnt-content">{item.commentContent}</span>
                                </div>
                                <span className="comment-date"><Moment format='dddd L'>{item.addingDate}</Moment></span>
                            </div>
                        )
                    })
                }
            </div>
     );
}
 
export default NourriceComment;