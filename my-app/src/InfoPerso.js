import photoEnfant from './assets/picture.png'
import './InfoPerso.css'


const infoPerso = () => {
    const virtualchild={
            nom: "Benkhalifa",
            prenom: "Achref",
            datedenaissance: ("13/5/2016"),
            sexe : "masculin",
            photo : photoEnfant
        };
    const virtualparent={
        pere:'Salim', 
        jobp: 'Directeur',
        mere: 'Mechraoui Yasmine', 
        jobm: '/',
        numero: '0668788157', 
        email : 'example@email.com',
        adresse: 'cite aadl zaafrania z2  - annaba',
        freres: 2

    }
    
        
    return ( 
    <div className="section">
        <div className="child-info">
            <img src={virtualchild.photo} alt="" />
            <div className='info'>
                <p>
                    <span  className='bold'>nom:</span> 
                    <span className='notbold'> {virtualchild.nom} </span>
                </p>
                <p>
                    <span className='bold'>prénom:</span>
                    <span className='notbold'> {virtualchild.prenom} </span>
                </p>
                <p>
                    <span className='bold'>date de naissance:</span> 
                    <span className='notbold'> {virtualchild.datedenaissance} </span>
                </p>
                <p>
                    <span className='bold'>sexe:</span> 
                    <span className='notbold'> {virtualchild.sexe} </span>
                </p> 
            </div>
            
        </div>
        <div className='parent-info'>
            <div className='parent-info-container'>
                <div className='left'>
                    <p>
                        <span  className='bold'>père:</span> 
                        <span className='notbold'> {virtualparent.pere} </span>
                    </p>
                    <p>
                        <span className='bold'>mère:</span> 
                        <span className='notbold'> {virtualparent.mere} </span>
                    </p>
                </div>

                <div className='right'>
                    <p>
                        <span className='bold'>proffession:</span>
                        <span className='notbold'> {virtualparent.jobp} </span>
                    </p>
                    <p>
                        <span className='bold'>proffession:</span>
                        <span className='notbold'> {virtualparent.jobm} </span>
                    </p>
            </div>
        </div>
            

                <p className='telephone'>
                    <span>
                        <span className='bold'>N° de téléphone:</span> 
                        <span className='notbold'> {virtualparent.numero} </span>
                    </span>
                </p>
                <p className='email'>
                    <span className='bold'>email:</span> 
                    <span className='notbold'> {virtualparent.email} </span>
                </p>
                <p className='adresse'>
                    <span className='bold'>adresse:</span> 
                    <span className='notbold'> {virtualparent.adresse} </span>
                </p>
                <p className='freres'>
                    <span className='bold'>frères:</span> 
                    <span className='notbold'> {virtualparent.freres} </span>
                </p>
        </div>


    </div> 
    );
}
 
export default infoPerso;