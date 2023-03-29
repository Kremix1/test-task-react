import {useEffect, useState} from "react";
import {ISpell} from "../models";
import axios from "axios";

export const useFetchSpells = () => {
    const [spells, setSpells] = useState<ISpell[]>([]);
    const [loading, setLoading] = useState(true)
    const fetchSpells = async () => {
        setLoading(true);
        const response = await axios.get(`https://wizard-world-api.herokuapp.com/Spells`);
        setSpells(response.data);
        setLoading(false);
    }
    useEffect(() => {
        fetchSpells()
    }, [])

    return {loading, spells}
}