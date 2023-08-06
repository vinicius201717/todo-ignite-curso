import style from './Header.module.css';

import  logo from '../assets/todo.svg';
import icon from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo}>                
                <img src={icon} />
                <p><span>to</span><span>do</span></p>
            </div>
        </header>
    )
}