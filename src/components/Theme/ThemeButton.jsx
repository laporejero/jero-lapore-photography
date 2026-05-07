import { useTheme } from './Theme'
import styles from './ThemeButton.module.css'

function ThemeButton() {
    const { dark, setDark } = useTheme()

    return (
        <button
            className={styles.button}
            onClick={() => setDark(!dark)}
            >
            {dark ? (
                <ion-icon name="sunny"></ion-icon>
            ) : (
                <ion-icon name="moon"></ion-icon>
            )}
        </button>
    )
}

export default ThemeButton