import styles from "./JournalCard.module.css"

function JournalCard({ title, date, image }) {
    return (
        <div className={styles.cardContainer}>
            <img src={image} alt={title} />
            <h5>{title}</h5>
            <p>{new Date(date).toLocaleDateString()}</p>
        </div>
    )
}

export default JournalCard