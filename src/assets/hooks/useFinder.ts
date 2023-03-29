import {ChangeEvent, useEffect, useRef, useState} from "react";
import {IElixir} from "../models";

export const useFinder = (elixirs: IElixir[]) => {
    const [permElixirs, setPermElixirs] = useState<IElixir[]>([])
    const [currentPage, setCurrentPage] = useState(localStorage.getItem('page') ? Number(localStorage.getItem('page')) : 1)
    const [input, setInput] = useState(localStorage.getItem('finder') ? localStorage.getItem('finder') : '')
    const [diff, setDiff] = useState(localStorage.getItem('difficulty') ? localStorage.getItem('difficulty') : '')
    const elixirsPerPage = 5
    let indexOfLastElixir = currentPage * elixirsPerPage
    let indexOfFirstElixir = indexOfLastElixir - elixirsPerPage
    const [currentElixirs, setCurrentElixirs] = useState(elixirs.slice(indexOfFirstElixir, indexOfLastElixir))
    useEffect(() => {
        setCurrentElixirs(permElixirs.slice(indexOfFirstElixir, indexOfLastElixir))
    },[permElixirs, indexOfFirstElixir, indexOfLastElixir])

    useEffect(() => {
        setPermElixirs(elixirs.filter(elixir => elixir.difficulty.includes(diff!)
            && elixir.name.toLowerCase().includes(input!)))
    }, [elixirs, input, diff])
    const paginateUp = () => {
        if(currentPage + 1 < Math.ceil(permElixirs.length / elixirsPerPage)){
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

    const findElixir = (difficulty?: string, e?: ChangeEvent<HTMLInputElement>, ) => {
        if(e){
            setInput(e.target.value)
            localStorage.setItem('finder', e.target.value)
        }
        if(difficulty){
            setDiff(difficulty)
            localStorage.setItem('difficulty', difficulty)
        }
        setPermElixirs(elixirs.filter(elixir => elixir.difficulty.includes(diff!)
            && elixir.name.toLowerCase().includes(input!)))
        setCurrentPage(1)
        localStorage.setItem('page', '1')
    }
    const SortDifficulty = (value: string) => {
        setCurrentPage(1)
        localStorage.setItem('page', '1')
    }
    return {paginateUp, paginateDown, findElixir, SortDifficulty, currentElixirs, currentPage, input}
}