import React from "react";
import { ISpell } from "../../assets/models";
import './spellItem.scss'
import {Link} from "react-router-dom";
interface SpellItemProps {
    spell: ISpell
}

export const SpellItem = ({spell}: SpellItemProps): JSX.Element => {

    return(
        <Link to={`Spells/${spell.id}`} className="main">
            <h2>{spell.name}</h2>
            <div className="main__description">
                <p className="main__description-item">
                    <span className="main__lorem">Эффект: </span>
                    {spell.effect}
                </p>
                <p className="main__description-item">
                    <span className="main__lorem">Произношение: </span>
                    {spell.incantation ? <span>{spell.incantation}</span> : <span>Нет/Неизвестно</span>}
                </p>
            </div>
        </Link>
    );
}