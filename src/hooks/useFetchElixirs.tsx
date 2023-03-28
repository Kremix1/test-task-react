import {useEffect, useState} from "react";
import {IElixir} from "../assets/models";
import axios from "axios";

export const useFetchElixirs = () => {
    const [elixirs, setElixirs] = useState<IElixir[]>([]);
    const [loading, setLoading] = useState(true)
    const fetchElixirs = async () => {
        setLoading(true);
        const response = await axios.get(`https://wizard-world-api.herokuapp.com/Elixirs`);
        setElixirs(response.data);
        setLoading(false);
    }
    useEffect(() => {
        fetchElixirs()
    }, [])

    return {loading, elixirs}
}