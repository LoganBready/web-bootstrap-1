//components
import { IconContext } from "react-icons";
import { BiMenuAltRight } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
//next/react
import { useState } from 'react';
//styles
import styles from './header.module.scss';

export const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <button className={styles.IconButton} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
            <IconContext.Provider value={{style: {color: '#5ebc67', fontSize: '2rem'}}}>
              <GrFormClose />
            </IconContext.Provider>
            ) : (
            <IconContext.Provider value={{style: {color: '#5ebc67', fontSize: '2rem'}}}>
              <BiMenuAltRight />
            </IconContext.Provider>
            )}
        </button>
    )
};