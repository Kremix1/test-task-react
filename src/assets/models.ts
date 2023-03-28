export interface IElixir{
    id: number,
    name: string,
    effect: string,
    sideEffects: string,
    difficulty: string,
    ingredients: Ingredient[],
}

interface Ingredient{
    id: number,
    name: string
}