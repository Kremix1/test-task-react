import {ChangeEvent, useEffect, useState} from "react";
import {ISpell} from "../models";

export const useFinder = (spells: ISpell[]) => {
    const [permSpells, setPermSpells] = useState<ISpell[]>([])
    const [currentPage, setCurrentPage] = useState(localStorage.getItem('page') ? Number(localStorage.getItem('page')) : 1)
    const [input, setInput] = useState(localStorage.getItem('finder') ? localStorage.getItem('finder') : '')
    const [light, setLight] = useState(localStorage.getItem('light') ? localStorage.getItem('light') : '')
    // @ts-ignore
    const [spellType, setSpellType] = useState<string[]>(localStorage.getItem('types') ? JSON.parse(localStorage.getItem('types')) : [])

    const spellPerPage = 5
    let indexOfLastSpell = currentPage * spellPerPage
    let indexOfFirstSpell = indexOfLastSpell - spellPerPage
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

    const [currentSpells, setCurrentSpells] = useState(spells.slice(indexOfFirstSpell, indexOfLastSpell))

    useEffect(() => {
        setCurrentSpells(permSpells.slice(indexOfFirstSpell, indexOfLastSpell))
    },[permSpells, indexOfFirstSpell, indexOfLastSpell])

    useEffect(() => {
        if(light! === 'All')
            setPermSpells(spells.filter(spell =>
                spell.name.toLowerCase().includes(input!)
                && spellType.indexOf(spell.type) !== -1
            ))
        else
            setPermSpells(spells.filter(spell => spell.light.includes(light!)
                && spell.name.toLowerCase().includes(input!)
                && spellType.indexOf(spell.type) !== -1
            ))
    }, [spells, input, light, spellType])

    const findSpell = (light?: string, e?: ChangeEvent<HTMLInputElement>, types?: any[]) => {
        if(e){
            setInput(e.target.value)
            localStorage.setItem('finder', e.target.value)
        }
        if(light){
            setLight(light)
            localStorage.setItem('light', light)
        }
        if(types){
            setSpellType([...types.map(type => type.value)])
            console.log(spellType)
            localStorage.setItem('types', JSON.stringify(spellType))
        }
        setCurrentPage(1)
        localStorage.setItem('page', '1')
    }
    return {paginateUp, paginateDown, findSpell, currentSpells, currentPage, input}
}