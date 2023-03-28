import Moment from "react-moment";
import "./NourriceComment.css"
function setRowNb(nbr){
    document.documentElement.style.setProperty("--rowNum",nbr);
}
let data = [
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    },
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    },
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    },
    {
        childName :"nom prénom",
        commentContent : " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inv",   
        addingDate : new Date(),
    }
]
const NourriceComment = () => {
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