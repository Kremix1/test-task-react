import './radioButton.scss'
import React, {ChangeEvent} from "react";

interface RadioButtonProps {
    value: string,
    func: (difficulty: string, e?: ChangeEvent<HTMLInputElement>) => void,
}

export const RadioButton: React.FC<RadioButtonProps> = ({value, func}: RadioButtonProps) => {
    return (
        <>
            <label className="custom-radio" onClick={() => func(value)}>
                {localStorage.getItem('difficulty') === value ?
                    <input type="radio" name="difficulty" value={value} defaultChecked={true}></input>
                    :
                    <input type="radio" name="difficulty" value={value}></input>
                }
                    <span>{value}</span>
            </label>
        </>
    );
};