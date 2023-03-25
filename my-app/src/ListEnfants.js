import Moment from "react-moment"
import "./ListEnfant.css"
import Pagination from "./Pagination"
import { useEffect, useState } from "react"

const ListEnfant = () => {

    let data = [{id:1,childName:"Matty",ParentEmail:"mbrydie0@skype.com",LastEditDate:new Date()},
    {id:2,childName:"Rayna",ParentEmail:"rburgwyn1@webnode.com",LastEditDate:new Date()},
    {id:3,childName:"Engelbert",ParentEmail:"edarlow2@hugedomains.com",LastEditDate:new Date()},
    {id:4,childName:"Culver",ParentEmail:"cdulinty3@weibo.com",LastEditDate:new Date()},
    {id:5,childName:"Nate",ParentEmail:"nreason4@shareasale.com",LastEditDate:new Date()},
    {id:6,childName:"Dav",ParentEmail:"dyanyshev5@forbes.com",LastEditDate:new Date()},
    {id:7,childName:"Lorry",ParentEmail:"lpoints6@comcast.net",LastEditDate:new Date()},
    {id:8,childName:"Hank",ParentEmail:"hcolgan7@blogger.com",LastEditDate:new Date()},
    {id:9,childName:"Glennie",ParentEmail:"gfobidge8@homestead.com",LastEditDate:new Date()},
    {id:10,childName:"Bethany",ParentEmail:"bwoodwing9@mysql.com",LastEditDate:new Date()},
    {id:11,childName:"Giselle",ParentEmail:"gpovera@house.gov",LastEditDate:new Date()},
    {id:12,childName:"Nonnah",ParentEmail:"nvlasinb@ucla.edu",LastEditDate:new Date()},
    {id:13,childName:"Johnny",ParentEmail:"jkaiserc@webnode.com",LastEditDate:new Date()},
    {id:14,childName:"Ingmar",ParentEmail:"iwriterd@jiathis.com",LastEditDate:new Date()},
    {id:15,childName:"Eloise",ParentEmail:"ewinsparee@xinhuanet.com",LastEditDate:new Date()},
    {id:16,childName:"Osbourne",ParentEmail:"olepiscopiof@upenn.edu",LastEditDate:new Date()},
    {id:17,childName:"Mariquilla",ParentEmail:"mfilinkovg@hatena.ne.jp",LastEditDate:new Date()},
    {id:18,childName:"Carlie",ParentEmail:"chumphrish@rambler.ru",LastEditDate:new Date()},
    {id:19,childName:"Danica",ParentEmail:"dlimericki@youtube.com",LastEditDate:new Date()},
    {id:20,childName:"Elmore",ParentEmail:"eflodej@independent.co.uk",LastEditDate:new Date()}]
    useEffect(()=>{
    }, []);
    function setRowNb(nbr){
        document.documentElement.style.setProperty("--rowNum",nbr);
    }

    const [currentPage , setCurrentPage] = useState(1);
    const [childrenPerPage ] = useState(10);
    const indexOfLastChild = currentPage*childrenPerPage ;
    const indexOfFirstChild = indexOfLastChild - childrenPerPage ;
    const currentChild = data.slice(indexOfFirstChild,indexOfLastChild);
    const paginate = (pageNumber) => setCurrentPage(pageNumber) ;
    return ( 
        <div className="list-page">
            <div className="list-enfant-container" onChange={setRowNb(currentChild.length)}>
                {currentChild.map((item,index)=>{
                    return(
                        <div className="enfant-info" key={index} >
                            <span className="nbr"> {index + 1}</span>
                            <span className="child-name"> {item.childName}</span>
                            <span className="parent-email">{item.ParentEmail}</span>
                            <span className="last-edit"><Moment format='lll'>{item.LastEditDate}</Moment></span>
                            <button>éditer</button>
                        </div>
                    )
                })
                }            
            </div>
            <Pagination childPerPage={childrenPerPage} TotalChildren={data.length} paginate={paginate}></Pagination>
        </div>
     );
}
 
export default ListEnfant;