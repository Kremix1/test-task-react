import {RadioButton} from "../RadioButton/RadioButton";
import './filters.scss'
import React, {ChangeEvent, Dispatch, SetStateAction} from "react";
import {Select} from "../Select/Select";

interface FiltersProps {
    filters: boolean,
    setFilters: Dispatch<SetStateAction<boolean>>,
    input: string,
    findSpell: (light?: string, e?: ChangeEvent<HTMLInputElement>, type?: ChangeEvent<HTMLSelectElement>) => void,
}

export const Filters: React.FC<FiltersProps> = ({filters, setFilters, input, findSpell}: FiltersProps) => {
    const lights = ['Green', 'Orange', 'Yellow', 'Transparent', 'Purple', 'Fire', 'None']

    return (
        <>
            {filters ?
                <h2 className='close-filters' onClick={() => setFilters(prev => !prev)}>Фильтры</h2>
                : <h2>Фильтры</h2>
            }
            <div className="main-page__filters__item">
                <span className='main-page__lorem'>Название</span>
                <div className="find">
                    <input className="main-page__filters__find" value={input!} onChange={(e) => findSpell("", e)}/>
                </div>
            </div>
            <div className="main-page__filters__item">
                <span className='main-page__lorem'>Тип заклинания</span>
                <Select setSelect={findSpell}/>
            </div>
            <div className="main-page__filters__item">
                <span className='main-page__lorem'>Свет заклинания</span>
                <form className='main-page__radio'>
                    {lights.map(light =>
                        <RadioButton key={light} value={light} func={findSpell}/>
                    )}
                </form>
            </div>
        </>
    );
};