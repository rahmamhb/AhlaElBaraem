import './Menu.css'

const today = new Date();

const x = today.getDay();


const menu= [
    {
        day:"Dimanche",dejeuner:"food" ,snack:"candia choco", id:7, petitdejeuner:"croissant"
    }, 
    {
        day:"Lundi", dejeuner:"food" , snack:"candia choco" , id:1, petitdejeuner:"croissant"
    }, 
    {
        day:"Mardi", dejeuner:"food" , snack:"candia choco", id:2, petitdejeuner:"croissant"
    }, 
    {
        day:"Mercredi", dejeuner:"food" , snack:"candia choco", id:3, petitdejeuner:"croissant"
    }, 
    {
        day:"Jeudi", dejeuner:"food" , snack:"candia choco", id:4, petitdejeuner:"croissant"
    }

]

const Menu = () => {
    return ( 
        <div className="menu-container">
            {menu.map((menuday, index) => (
                        <div className={menuday.id === x ? 'isToday' :  'isNotToday'}>
                            
                                <div className='card-title'>
                                    <h1 className='theday'> {menuday.day} </h1>
                                </div>
                                <div className='card-content'>
                                    <h3 className='subtitle'> Petit-déjeuner </h3>
                                    <h6 className='content'> {menuday.petitdejeuner} </h6>
                                    <h3 className='subtitle'> Déjeuner </h3>
                                    <h6 className='content'> {menuday.dejeuner} </h6>
                                    <h3 className='subtitle'> Snack </h3>
                                    <h6 className='content'> {menuday.snack} </h6>
                                    
                                </div>
                             
                            
                        </div>
                    
                    ))}
        </div>
     );
}
 
export default Menu;