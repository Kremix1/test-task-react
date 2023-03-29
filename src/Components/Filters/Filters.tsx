import {RadioButton} from "../RadioButton/RadioButton";
import './filters.scss'
import React, {ChangeEvent, Dispatch, SetStateAction} from "react";

interface FiltersProps {
    filters: boolean,
    setFilters: Dispatch<SetStateAction<boolean>>,
    input: string,
    findElixir: (difficulty: string, e?: ChangeEvent<HTMLInputElement>) => void,
}

export const Filters: React.FC<FiltersProps> = ({filters, setFilters, input, findElixir}: FiltersProps) => {
    const difficulties = ['Unknown', 'Advanced', 'Moderate', 'Beginner', 'OrdinaryWizardingLevel', 'OneOfAKind']

    return (
        <>
            {filters ?
                <h2 className='close-filters' onClick={() => setFilters(prev => !prev)}>Фильтры</h2>
                : <h2>Фильтры</h2>
            }
            <div className="main-page__filters__item">
                <span className='main-page__lorem'>Название</span>
                <div className="find">
                    <input className="main-page__filters__find" value={input!} onChange={(e) => findElixir("", e)}/>
                </div>
            </div>
            <div className="main-page__filters__item">
                <span className='main-page__lorem'>Ингредиенты</span>
                <select multiple={true}>
                    <option>Корешки</option>
                    <option>Вершки</option>
                    <option>Горшки</option>
                </select>
            </div>
            <div className="main-page__filters__item">
                <span className='main-page__lorem'>Сложность</span>
                <form className='main-page__radio'>
                    {difficulties.map(difficult =>
                        <RadioButton key={difficult} value={difficult} func={findElixir}/>
                    )}
                </form>
            </div>
        </>
    );
};