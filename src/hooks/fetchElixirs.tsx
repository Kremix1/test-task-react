import {ChangeEvent, useEffect, useState} from "react";
import {IElixir} from "../assets/models";
import axios from "axios";

export const useElixirs = () => {
    const [elixirs, setElixirs] = useState<IElixir[]>([]);
    const [test, setTest] = useState<IElixir[]>(elixirs)
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [elixirsPerPage, setElixirsPerPage] = useState(5)
    let indexOfLastElixir = currentPage * elixirsPerPage
    let indexOfFirstElixir = indexOfLastElixir - elixirsPerPage
    let currentElixirs= elixirs.slice(indexOfFirstElixir, indexOfLastElixir)

    useEffect(() => {
        const fetchElixirs = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://wizard-world-api.herokuapp.com/Elixirs`);
                setElixirs(response.data);
                setLoading(false);
            } catch (e: unknown) {
                setLoading(false);
            }
        }
        fetchElixirs();
    }, [])

    useEffect(() => {
        currentElixirs = test.slice(indexOfFirstElixir, indexOfLastElixir)
    },[elixirs,test])

    const paginateUp = () => {
        if(currentPage + 1 < Math.ceil(elixirs.length / elixirsPerPage))
            setCurrentPage(currentPage + 1)
    }
    const paginateDown = () => {
        if(currentPage - 1 > 0)
        setCurrentPage(currentPage - 1)
    }

    const [input, setInput] = useState("")
    const findElixir = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        setTest(elixirs.filter(elixir => elixir.name.toLowerCase().includes(e.target.value.toLowerCase())))
        setCurrentPage(1)
    }

    return {loading, currentElixirs, findElixir, input, currentPage, paginateUp, paginateDown}
}