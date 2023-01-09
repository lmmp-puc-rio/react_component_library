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
            <strong className='strong_Toggle'>{label}</strong>
            <span className='span_Toggle' />
            <input className="input_Toggle" type="checkbox" defaultChecked={isToggled} onClick={callback}  />
            
            
        </label>
    )
}