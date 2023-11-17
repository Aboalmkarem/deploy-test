import './theme.css'
import { FaSun, FaMoon} from 'react-icons/fa';

const Theme = ({isChecked, handleChange}) => {

    return (
        <div className="theme">
            <input
                className='toggle'
                type="checkbox"
                id="input"
                onChange={handleChange}
                checked={isChecked}
            />
            <label className='toggle-icons' htmlFor="input">
                <FaSun className='sun'/>
                <FaMoon className='moon'/>
            </label>
        </div>
    )
}

export default Theme;