//interface
import { IHeader } from "./IHeader";
//styles
import styles from './header.module.scss';
//components
import { Logo } from "./Logo";
import { Hamburger } from "./Hamburger";
//next/react


export const Header = ({logo}: IHeader) => {
    return (
        <nav>
            <div className={styles.NavBar}>
                <div className={styles.LogoContainer}>
                    <Logo />
                </div>
                <div className={styles.SideMenu}>
                    <Hamburger />
                </div>
            </div>
        </nav>
    )
};