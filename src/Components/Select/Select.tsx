import './select.scss'
import {useEffect} from "react";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

interface SelectProps {
    setSelect: (light?: string, e?: undefined, type?: any[]) => void,
}

export const spellTypesInitial = [
    { label: "Charm", value: "Charm" },
    { label: "Conjuration", value: "Conjuration" },
    { label: "Spell", value: "Spell" },
    { label: "Transfiguration", value: "Transfiguration" },
    { label: "HealingSpell", value: "HealingSpell" },
    { label: "DarkCharm", value: "DarkCharm" },
    { label: "Jinx", value: "Jinx" },
    { label: "Curse", value: "Curse" },
    { label: "CounterSpell", value: "CounterSpell" },
    { label: "DarkArts", value: "DarkArts" },
];
export const Select = ({setSelect}: SelectProps) => {
    const [selected, setSelected] = useState([]);
    useEffect(() => {
        setSelect('', undefined, selected)
        console.log(selected)
    },[selected])
    return (
        <div>
            <MultiSelect
                options={spellTypesInitial}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                disableSearch={true}
            />
        </div>
    );
};