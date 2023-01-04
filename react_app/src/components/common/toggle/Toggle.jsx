import { useState } from 'react'
import "./Toggle.css"
export const Toggle = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <label>
            <strong>{label}</strong>
            <span />
            <input className="input" type="checkbox" defaultChecked={isToggled} onClick={callback}  />
            
            
        </label>
    )
}