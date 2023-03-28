import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {IElixir} from "../../assets/models";
import {Loading} from "../../Components/Loading/Loading";
import axios from "axios";
import './elixirPage.scss'

export const ElixirPage = () => {
    const {id} = useParams()
    const [elixir, setElixir] = useState<IElixir>()
    const fetchProduct = async () => {
        const response = await axios.get(`https://wizard-world-api.herokuapp.com/Elixirs/${id}`)
        setElixir(response.data)
    }
    useEffect(() => {
        fetchProduct()
    }, [])

    if(elixir)
    return (
        <div className="elixir">
            <Link to="/" className="elixir__back">
                <div className="elixir__back__arrow"></div>
                <span>Вернуться</span>
            </Link>
            <div className="elixir__description">
                <div className="elixir__title">{elixir.name}</div>
                <div><span className="elixir__lorem">Сложность: </span>{elixir.difficulty}</div>
                <div><span className="elixir__lorem">Эффект: </span>{elixir.effect}</div>
                {elixir.sideEffects &&
					<p className="elixir__description">
						<span className="elixir__lorem">Побочный эффект:</span>{elixir.sideEffects}
					</p>
                }
                {!elixir.sideEffects && <div className="elixir__description">Побочных эффектов нет</div>}
                <div>
                    <span className="elixir__lorem">Ингриденты: </span>
                    {elixir.ingredients.length ?
                        <div>{elixir.ingredients.map(ingredient =>
                        <p key={ingredient.id}>{ingredient.name}</p>
                    )}</div>
                        :
                        `Неизвестны`
                    }
                </div>
            </div>

        </div>
    );
    else
        return (
            <Loading/>
        )
};