import {useState} from 'react';

import './Google.css'

const Google = () => {

    const motamo =
    ['acteur', 'feutre', 'dessin', 'agenda', 'cadran', 'sudoku', 'casino', 'espace', 'danger', 'quiche',
    'guidon', 'cerise', 'zénith', 'étoile', 'saphir', 'fiesta', 'sketch', 'argent', 'chaton', 'ananas',
    'cheval', 'diable', 'citron', 'tomate', 'erreur', 'sphère', 'whisky', 'crypte', 'animal', 'zombie',
    'donjon', 'beauté', 'nectar', 'puzzle', 'pédalo', 'basket', 'médium', 'italie', 'jaunir', 'karaté',
    'parfum', 'banane', 'maison', 'valise', 'humour', 'idylle', 'jambon', 'oiseau', 'boxeur', 'hot-dog',
    'litchi', 'orange', 'brunch', 'rythme', 'moulin', 'voyage','bonzaï', 'piment', 'loisir','projet']

    let [letter, setLetter] = useState(0);
    let [total, setTotal] = useState(0);

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

    const wipeHistory = () => {
        let google = `https://www.google.com/search?q=${motamo[total-1]}`
        
        total > 0 && total < 61 &&
        window.location.replace(google)
    }

    return (
        <div className = 'google-body'>
            <section className = 'google-header'>
                <div class="left">
                    <p>Tous</p>
                    <p>Images</p>
                </div>
                <div class="right">
                    <svg class="gb_6e" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
                    {/* <p class="user"><i class="fas fa-user-circle"></i></p> */}
                </div>
            </section>
            <section class="main">
                <img src="https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="" onClick={handleReset}/>
                <div class="form-group">
                    <input type="texte">
                    {/* <label><i class="fas fa-microphone"></i></label> */}
                    </input>
                </div>
                <div class="buttons">
                    {/* <button>Recherche Google</button> */}
                    {/* <button>J'ai de la chance</button> */}
                    <button>Letter : {letter}</button>
                    <button onClick={wipeHistory}>Total : {total}</button>
                </div>
            </section>
            {letter < 6 &&
                <>
                    <div className = 'ghostLeft' onClick={handleYes}></div>
                    <div className = 'ghostRight' onClick={handleNo}></div>
                </>
            }
        </div>
    );
}

export default Google;
