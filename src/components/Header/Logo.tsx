//styles
import styles from './header.module.scss';

export const Logo = () => {
    return (
        <>
            <img 
              src="./images/Power-Wash.svg" 
              alt="Company Logo" 
              className={styles.Logo} 
            />
        </>
    )
};