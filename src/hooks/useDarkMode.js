import React, { useState, useEffect} from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (props) => {
    // const [someValue, setSomeValue] = useLocalStorage("false");
    const [darkMode, setDarkMode] = useLocalStorage(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };

    useEffect(() => {
        if (darkMode){
            document.querySelector('body').classList.add("dark-mode");
            console.log(darkMode)

        }
        if (!darkMode){
            document.querySelector('body').classList.remove("dark-mode");
            console.log(darkMode)

        }

    },[darkMode])

    return [darkMode, toggleMode]
        
}