import './select.scss'
import {ChangeEvent} from "react";

interface SelectProps {
    setSelect: (light?: string, e?: ChangeEvent<HTMLInputElement>, type?: ChangeEvent<HTMLSelectElement>) => void,
}

export const Select = ({setSelect}: SelectProps) => {
    const types = ['Charm', 'Conjuration', 'Spell', 'Transfiguration', 'HealingSpell', 'DarkCharm', 'Jinx', 'Curse', 'CounterSpell', 'DarkArts']

    return (
        <>
            <select name="select[]" multiple={true} onChange={(e) => setSelect('', undefined, e)}>
                {types.map(type =>
                    <option key={type}>{type}</option>
                )}
            </select>
        </>
    );
}