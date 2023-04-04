import './InfoMedi.css'
const infoMedi = () => {
    return ( 
    <div className="infomedi">

        <div className="info-element">
            <p className="infop-title">
                <h1>allergies</h1>
            </p>
            <p className="infop-content">
                <span className="buttonlike">grain</span>
                <span className="buttonlike">lait</span>
                <span className="buttonlike">miel</span>
            </p>
        </div>

        <div className="info-element">
            <p className="infop-title">
                <h1>médicament</h1>
            </p>
            <p className="infop-content">
                <span className="buttonlike">médicament</span>
                <span className="buttonlike">médicament</span>
            </p>
        </div>

        <div className="info-element">
            <p className="infop-title">
                <h1>conditions médicales</h1>
            </p>
            <span className="info-text">Toute affection médicale chronique de l’enfant, comme l’asthme, le diabète ou l’épilepsie.</span>
            <p className="infop-content">
                <span className="buttonlike">diabète</span>
            </p>
        </div>

        <div className=" info-element">
            <p className="infop-title">
                <h1>vaccins</h1>
            </p>
            <p className="infop-content">
                <span className="buttonlike">le tétanos</span>
                <span className="buttonlike">Hépatite B</span>
                <span className="buttonlike">diphtérie</span>
                <span className="buttonlike">la poliomyélite</span>
            </p>
        </div>

        <div className="info-element">
            <p className="infop-title">
                <h1>antécédents médicaux</h1>
            </p>
            <p className="infop-content">
                <span className="info-text">Tout événement de santé important dans le passé de l’enfant, comme une chirurgie ou une hospitalisation.</span>
            </p>
        </div>

        <div className="info-element">
            <p className="infop-title">
                <h1>instructions spéciales</h1>
            </p>
            <p className="infop-content">
                <span className="info-text">Toute directive ou mesure d’adaptation spéciale dont l’enfant a besoin, comme les restrictions alimentaires ou l’aide à la mobilité.</span>
            </p>
        </div>

    </div> );
}
 
export default infoMedi;