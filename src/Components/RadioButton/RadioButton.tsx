import './radioButton.scss'
import React, {ChangeEvent} from "react";

interface RadioButtonProps {
    value: string,
    func: (light?: string, e?: ChangeEvent<HTMLInputElement>, type?: any[]) => void,
}

export const RadioButton: React.FC<RadioButtonProps> = ({value, func}: RadioButtonProps) => {
    return (
        <>
            <label className="custom-radio" onClick={() => func(value)}>
                {localStorage.getItem('light') === value ?
                    <input type="radio" name="light" value={value} defaultChecked={true}></input>
                    :
                    <input type="radio" name="light" value={value}></input>
                }
                    <span>{value}</span>
            </label>
        </>
    );
};