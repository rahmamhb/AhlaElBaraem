import Moment from "react-moment"
import "./ListEnfant.css"
import Pagination from "./Pagination"
import { useEffect, useState } from "react"
import ChevronLeft from '@mui/icons-material/ChevronLeftRounded';

const ListEnfant = ({MatierData}) => {

    let data = [{id:1,childName:"Matty",ParentEmail:"mbrydie0@skype.com",LastEditDate:new Date(),age : 3 ,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:2,childName:"Rayna",ParentEmail:"rburgwyn1@webnode.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:3,childName:"Engelbert",ParentEmail:"edarlow2@hugedomains.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:4,childName:"Culver",ParentEmail:"cdulinty3@weibo.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:5,childName:"Nate",ParentEmail:"nreason4@shareasale.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:6,childName:"Dav",ParentEmail:"dyanyshev5@forbes.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:7,childName:"Lorry",ParentEmail:"lpoints6@comcast.net",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:8,childName:"Hank",ParentEmail:"hcolgan7@blogger.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:9,childName:"Glennie",ParentEmail:"gfobidge8@homestead.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:10,childName:"Bethany",ParentEmail:"bwoodwing9@mysql.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:11,childName:"Giselle",ParentEmail:"gpovera@house.gov",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:12,childName:"Nonnah",ParentEmail:"nvlasinb@ucla.edu",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:13,childName:"Johnny",ParentEmail:"jkaiserc@webnode.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:14,childName:"Ingmar",ParentEmail:"iwriterd@jiathis.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:15,childName:"Eloise",ParentEmail:"ewinsparee@xinhuanet.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:16,childName:"Osbourne",ParentEmail:"olepiscopiof@upenn.edu",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:17,childName:"Mariquilla",ParentEmail:"mfilinkovg@hatena.ne.jp",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:18,childName:"Carlie",ParentEmail:"chumphrish@rambler.ru",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:19,childName:"Danica",ParentEmail:"dlimericki@youtube.com",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"},
    {id:20,childName:"Elmore",ParentEmail:"eflodej@independent.co.uk",LastEditDate:new Date(),age : 3,childImg:"https://image.cnbcfm.com/api/v1/image/107081378-1656361235570-GettyImages-1225403728_2.jpg?v=1656361293&w=740&h=416&ffmt=webp&vtcrop=y"}]
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
    const [currentOverlayIndex, setCurrentOverlayIndex] = useState(null);
    const emojis = ["😒","🙁","😊","🥰","👏"];

    const [selectedMatiere, setSelectedMatiere] = useState(MatierData[0]);

    function handleMatiereChange(event) {
        const selectedMatiereName = event.target.value;
        const selectedMatiere = MatierData.find(matiere => matiere.matiereName === selectedMatiereName);
        setSelectedMatiere(selectedMatiere);
    }
    return ( 
        
        <div className="list-page">
            <div className="list-enfant-container" onChange={setRowNb(currentChild.length)}>
                {currentChild.map((item,index)=>{
                    return(
                        <div> 
                            <div  className={currentOverlayIndex === index ? "comportement-overlay open" : "comportement-overlay"}  key={index}>
                                <div className="comportement-container">
                                    <span className="comportement-header">
                                        <button onClick={() => setCurrentOverlayIndex(null)}><ChevronLeft></ChevronLeft></button>
                                        <div className="about-enfant">
                                            <img src={item.childImg} alt="childImg"></img>
                                            <div className="text">
                                                <p>{item.childName} , {item.age} ans</p>
                                                <p>{item.ParentEmail}</p>
                                            </div>
                                        </div>  
                                    </span>
                                    <form>
                                        <div className="comportement-of-the-day">
                                            <h3>Comportement d’aujourd'hui</h3>
                                            <div class="container">
                                                {emojis.map((emoji,index)=>{
                                                    return(
                                                        <div class="item">
                                                            <label >
                                                                <input class="radio" type="radio" name="feedback" id={index} value={index}/>
                                                                <span>{emoji}</span>
                                                            </label>
                                                        </div>
                                                    )
                                            })}
                                            </div>
                                        </div>
                                        <div className="selecter">
                                            <div className="select-matiere">
                                                <h3>Matieres</h3>
                                                <select value={selectedMatiere.matiereName} onChange={handleMatiereChange}>
                                                {MatierData.map(matiere => (
                                                    <option key={matiere.matiereName} value={matiere.matiereName}>{matiere.matiereName}</option>
                                                ))}
                                                </select>
                                            </div>
                                            <div className="select-activity">
                                                <h3>Activites</h3>
                                                <select>
                                                {selectedMatiere.activities.map(activity => (
                                                    <option key={activity} value={activity}>{activity}</option>
                                                ))}
                                                </select>
                                            </div>
                                            <div className="review-activity container">
                                                <div class="item">
                                                    <label >
                                                        <input class="radio" type="radio" name="review" id="9" value="9"/>
                                                        <span className="colorSpan first"></span>
                                                    </label>
                                                </div>
                                                <div class="item">
                                                    <label >
                                                        <input class="radio" type="radio" name="review" id="10" value="10"/>
                                                        <span className="colorSpan second"></span>
                                                    </label>
                                                </div>
                                                <div class="item">
                                                    <label >
                                                        <input class="radio" type="radio" name="review" id="20" value="20"/>
                                                        <span className="colorSpan third"></span>
                                                    </label>
                                                </div>
                                                <div class="item">
                                                    <label>
                                                        <input class="radio" type="radio" name="review" id="30" value="30"/>
                                                        <span className="colorSpan forth"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="add-comment">
                                                    <h3>Commentaire</h3>
                                                    <textarea></textarea>
                                            </div>
                                            
                                        </div>
                                        <button className="envoyer">envoyer</button>
                                    </form>
                                </div>    
                            </div>

                            <div className="enfant-info" key={index} >
                                <span className="nbr"> {index + 1}</span>
                                <span className="child-name"> {item.childName}</span>
                                <span className="parent-email">{item.ParentEmail}</span>
                                <span className="last-edit"><Moment format='lll'>{item.LastEditDate}</Moment></span>
                                <button  onClick={() => setCurrentOverlayIndex(index)} key={index}>éditer</button>
                            </div>

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