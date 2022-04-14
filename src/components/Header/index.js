import { useEffect, useState } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import './styles.scss'

export function Header(){

    const [ theme, setTheme ] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
        setTheme(localStorage.getItem('theme'))
    }, []);

    function switchTheme() {
        if( theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme);
    }





    return(
        <header>
            <div className="logo">
                <Link to="/">Countries App</Link>
            </div>
            <button 
                className="theme-mode"
                onClick={switchTheme}
            >
                <CgDarkMode />
            </button>
        </header>
    )
}