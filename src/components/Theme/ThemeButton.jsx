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
                // Sun icon (light mode)
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="5" stroke="black" strokeWidth="2"/>
                <line x1="12" y1="1" x2="12" y2="4" stroke="black" strokeWidth="2"/>
                <line x1="12" y1="20" x2="12" y2="23" stroke="black" strokeWidth="2"/>
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="black" strokeWidth="2"/>
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="black" strokeWidth="2"/>
                <line x1="1" y1="12" x2="4" y2="12" stroke="black" strokeWidth="2"/>
                <line x1="20" y1="12" x2="23" y2="12" stroke="black" strokeWidth="2"/>
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="black" strokeWidth="2"/>
                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="black" strokeWidth="2"/>
                </svg>
            ) : (
                // Moon icon (dark mode)
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path
                    d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"
                    stroke="black"
                    strokeWidth="2"
                />
                </svg>
            )}
            </button>
    )
}

export default ThemeButton