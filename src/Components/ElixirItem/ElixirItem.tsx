import React from "react";
import { IElixir } from "../../assets/models";
import './elixirItem.scss'
import {Link} from "react-router-dom";
interface ElixirItemProps {
    elixir: IElixir
}

export const ElixirItem = ({elixir}: ElixirItemProps): JSX.Element => {

    return(
        <Link to={`Elixirs/${elixir.id}`} className="main">
            <h2>{elixir.name}</h2>
            <div className="main__description">
                <p className="main__description-item">
                    <span className="main__lorem">Эффект: </span>
                    {elixir.effect}
                </p>
                <p className="main__description-item">
                    <span className="main__lorem">Побочный эффект: </span>
                    {elixir.sideEffects ? <span>{elixir.sideEffects}</span> : <span>Нет</span>}
                </p>
            </div>
        </Link>
    );
}