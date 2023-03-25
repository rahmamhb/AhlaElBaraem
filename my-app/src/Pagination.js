import "./Pagination.css"
const Pagination = ({childPerPage,TotalChildren,paginate}) => {
    const pageNumber = [];
    for(let i = 1 ; i <= Math.ceil(TotalChildren/childPerPage) ; i++){
       pageNumber.push(i)
    }
    return ( 
       <nav>
        <ul className="pagination">
            {pageNumber.map((number) =>{
                return(
                    <li className="page-item" key={number}>
                        <a onClick={()=> paginate(number) } href="#!" className="page-link">
                            {number}
                        </a>
                    </li>
                )
                
            })}
        </ul>
       </nav>
     );
}
 
export default Pagination;