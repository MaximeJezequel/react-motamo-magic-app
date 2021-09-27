import {useState} from 'react';

import './Google.css'

const Google = () => {
    // base
    const motamo =
    ['acteur', 'feutre', 'dessin', 'agenda', 'cadran', 'sudoku', 'casino', 'espace', 'danger', 'quiche',
    'guidon', 'cerise', 'zénith', 'étoile', 'saphir', 'fiesta', 'sketch', 'argent', 'chaton', 'ananas',
    'cheval', 'diable', 'citron', 'tomate', 'erreur', 'sphère', 'whisky', 'crypte', 'animal', 'zombie',
    'donjon', 'beauté', 'nectar', 'puzzle', 'pédalo', 'basket', 'médium', 'italie', 'jaunir', 'karaté',
    'parfum', 'banane', 'maison', 'valise', 'humour', 'idylle', 'jambon', 'oiseau', 'boxeur', 'hot-dog',
    'litchi', 'orange', 'brunch', 'rythme', 'moulin', 'voyage','bonzaï', 'piment', 'loisir','projet']
    // initial
    let initial = "M"
    // states
    let [letter, setLetter] = useState(0);
    let [total, setTotal] = useState(0);
    let [url, setUrl]= useState(0)
    // functions
    const handleYes = () => {
        if (letter < 6){
            setLetter(letter+1);
            setTotal(total+Math.pow(2,5-letter));
        }
    }
    const handleNo = () => {
        if (letter < 6){
            setLetter(letter+1);
        }
    }
    const handleReset = () => {
        setLetter(0);
        setTotal(0);
    }
    const handleAll = () => {
        setUrl(0);
    }
    const handleImg = () => {
        setUrl(1);
    }
    const wipeHistory = () => {
        let google = "https://www.google.com/search?q="
        url === 1
            ? google = `https://www.google.com/search?q=${motamo[total-1]}&tbm=isch`
            : google = `https://www.google.com/search?q=${motamo[total-1]}`
        total > 0 && total < 61 &&
        window.location.replace(google)
    }
    const goToWiki = () => {
        let wiki = `https://fr.wikipedia.org/wiki/${motamo[total-1]}`
        total > 0 && total < 61 &&
        window.location.replace(wiki)
    }

    return (
        <div className= 'google'>
            <div className= 'header'>
                <div className="headerleft">
                    <svg className="headerleftsvg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                    <p className={url === 0 ? "headerlefttitle headeractive" : "headerlefttitle"} onClick={handleAll}>TOUS</p>
                    <p className={url === 1 ? "headerlefttitle headeractive" : "headerlefttitle"} onClick={handleImg}>IMAGES</p>
                </div>
                <div className="headerright">
                    <svg className="gb_6e" focusable="false" viewBox="0 0 24 24">
                        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                    </svg>
                    <div className="google-user">{letter > 0 ? total : initial}</div>
                </div>
            </div>
            <div className= "empty-top"></div>
            <div className="body">
                <div className= "logo">
                    <img src="https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="" onClick={handleReset}/>
                    {url === 1 && <span className= "logoImg">images</span>}
                </div>
                <div className= "searchBar">
                    <div className="form">
                        <div>
                            {letter < 1 || letter === 6
                                ? <span class="material-icons leftlogo"> search </span>
                                : <p class="number"> ({letter}) </p>
                            }
                        </div>
                        <input type="texte" placeholder= {letter > 5 ? motamo[total-1] : null}></input>
                    </div>
                </div>
                <div className= "buttons">
                    {letter < 6
                        ? <><button>Recherche Google</button><button>J'ai de la chance</button></>
                        : <><button onClick={wipeHistory}>Recherche Google</button><button onClick={goToWiki}>J'ai de la chance</button></>
                    }
                </div>
            </div>
            {/* <div>Google disponible en : English</div> */}
            {letter < 6 &&
                <>
                    <div className= 'ghostLeft' onClick={handleYes}></div>
                    <div className= 'ghostRight' onClick={handleNo}></div>
                </>
            }
            <div className= "empty-bottom"></div>
            <div className="footer">
                <div className="footer-row">France</div>
                <div className="footer-3col">
                    <div className="footer-col">Paramètres</div>
                    <div className="footer-col">Confidentialité</div>
                    <div className="footer-col">Conditions</div>
                </div>
            </div>
        </div>
    );
}

export default Google;
