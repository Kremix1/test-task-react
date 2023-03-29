import {ChangeEvent, useEffect, useState} from "react";
import {ISpell} from "../models";

export const useFinder = (spells: ISpell[]) => {
    const [permSpells, setPermSpells] = useState<ISpell[]>([])
    const [currentPage, setCurrentPage] = useState(localStorage.getItem('page') ? Number(localStorage.getItem('page')) : 1)
    const [input, setInput] = useState(localStorage.getItem('finder') ? localStorage.getItem('finder') : '')
    const [light, setLight] = useState(localStorage.getItem('light') ? localStorage.getItem('light') : '')
    // @ts-ignore
    const [types, setTypes] = useState<string[]>(localStorage.getItem('types') ? JSON.parse(localStorage.getItem('types')) : [])

    const spellPerPage = 5
    let indexOfLastSpell = currentPage * spellPerPage
    let indexOfFirstSpell = indexOfLastSpell - spellPerPage

    const [currentSpells, setCurrentSpells] = useState(spells.slice(indexOfFirstSpell, indexOfLastSpell))

    useEffect(() => {
        setCurrentSpells(permSpells.slice(indexOfFirstSpell, indexOfLastSpell))
    },[permSpells, indexOfFirstSpell, indexOfLastSpell])

    useEffect(() => {
        let aboba = require("lodash")
        let test1 = ['1', 'abo', 'fe']
        let test2 = ['1', 'abo', 'fez', 'pu']
        console.log(aboba.intersection(test1, test2))
        console.log(types)
        setPermSpells(spells.filter(spell => spell.light.includes(light!)
            && spell.name.toLowerCase().includes(input!)
            && types.indexOf(spell.type) !== -1
        ))
        permSpells.map(spell => console.log(types.indexOf(spell.type)))
    }, [spells, input, light, types])
    const paginateUp = () => {
        if(currentPage + 1 < Math.ceil(permSpells.length / spellPerPage)){
            setCurrentPage(prev => prev + 1)
            localStorage.setItem('page', (currentPage + 1).toString())
        }
    }
    const paginateDown = () => {
        if(currentPage - 1 > 0){
            setCurrentPage(prev => prev - 1)
            localStorage.setItem('page', (currentPage - 1).toString())
        }
    }

    const findSpell = (light?: string, e?: ChangeEvent<HTMLInputElement>, type?: ChangeEvent<HTMLSelectElement>) => {
        if(e){
            setInput(e.target.value)
            localStorage.setItem('finder', e.target.value)
        }
        if(light){
            setLight(light)
            localStorage.setItem('light', light)
        }
        if(type){
            setTypes([...types, type.target.value])
            localStorage.setItem('types', JSON.stringify(types))
        }
        setPermSpells(spells.filter(spell => spell.light.includes(light!)
            && spell.name.toLowerCase().includes(input!)
            && types.indexOf(spell.type) !== -1
        ))
        setCurrentPage(1)
        localStorage.setItem('page', '1')
    }
    return {paginateUp, paginateDown, findSpell, currentSpells, currentPage, input}
}