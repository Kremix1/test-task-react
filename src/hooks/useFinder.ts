import {ChangeEvent, useEffect, useRef, useState} from "react";
import {IElixir} from "../assets/models";

export const useFinder = (elixirs: IElixir[]) => {
    const [permElixirs, setPermElixirs] = useState<IElixir[]>([])
    const [currentPage, setCurrentPage] = useState(localStorage.getItem('page') ? Number(localStorage.getItem('page')) : 1)
    const [input, setInput] = useState(localStorage.getItem('finder') ? localStorage.getItem('finder') : '')
    const elixirsPerPage = 5
    let indexOfLastElixir = currentPage * elixirsPerPage
    let indexOfFirstElixir = indexOfLastElixir - elixirsPerPage
    const [currentElixirs, setCurrentElixirs] = useState(elixirs.slice(indexOfFirstElixir, indexOfLastElixir))
    useEffect(() => {
        setCurrentElixirs(permElixirs.slice(indexOfFirstElixir, indexOfLastElixir))
    },[permElixirs, indexOfFirstElixir, indexOfLastElixir])

    useEffect(() => {
        setPermElixirs(elixirs.filter(elixir => elixir.name.toLowerCase().includes(input!)))
    }, [elixirs, input])
    const paginateUp = () => {
        if(currentPage + 1 < Math.ceil(permElixirs.length / elixirsPerPage)){
            console.log(currentPage)
            setCurrentPage(prev => prev + 1)
            console.log(currentPage)
            localStorage.setItem('page', (currentPage + 1).toString())
        }
    }
    const paginateDown = () => {
        if(currentPage - 1 > 0){
            setCurrentPage(prev => prev - 1)
            localStorage.setItem('page', (currentPage - 1).toString())
        }
    }

    const findElixir = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        setPermElixirs(elixirs.filter(elixir => elixir.name.toLowerCase().includes(input!)))
        setCurrentPage(1)
        localStorage.setItem('finder', e.target.value)
        localStorage.setItem('page', '1')
    }
    return {paginateUp, paginateDown, findElixir, currentElixirs, currentPage, input}
}