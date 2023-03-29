import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {ISpell} from "../../assets/models";
import {Loading} from "../../Components/Loading/Loading";
import axios from "axios";
import './spellPage.scss'

export const SpellPage = () => {
    const {id} = useParams()
    const [spell, setSpell] = useState<ISpell>()
    const fetchProduct = async () => {
        const response = await axios.get(`https://wizard-world-api.herokuapp.com/Spells/${id}`)
        setSpell(response.data)
    }
    useEffect(() => {
        fetchProduct()
    }, [])

    if(spell)
    return (
        <div className="spell">
            <Link to="/" className="spell__back">
                <div className="spell__back__arrow"></div>
                <span>Вернуться</span>
            </Link>
            <div className="spell__description">
                <div className="spell__title">{spell.name}</div>
                <div><span className="spell__lorem">Произношение: </span>{spell.incantation}</div>
                <div><span className="spell__lorem">Эффект: </span>{spell.effect}</div>
                {spell.light &&
					<p className="spell__description">
						<span className="spell__lorem">Свет:</span>{spell.light}
					</p>
                }
                {!spell.light && <div className="spell__description">Вспышки света нет</div>}
                <div>
                    <span className="spell__lorem">Тип заклинания: </span>
                    {spell.type ? <div>{spell.type}</div> : 'Неизвестен'}
                </div>
            </div>

        </div>
    );
    else
        return (
            <Loading/>
        )
};