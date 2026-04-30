import { Link } from "react-router-dom"
import JournalCard from "../../components/JournaCard/JournalCard"
import articles from "../../data/journal.json"
import styles from "./Journal.module.css"
import Footer from "../../components/Footer/Footer"

function Journal() {
    const articleHTML = articles.map(article => (
        <Link key={article.id} to={`/journal/${article.id}`}>
            <JournalCard 
                title={article.title}
                date={article.date}
                image={article.coverImage}
            />
        </Link>
        )
    )

    return (
        <>
        <section className={styles.journalSection}>
            <div className="container">
                <h3>My Journal</h3>
                <p className={styles.paragraph}>This journal is where I reflect on the moments behind the photographs. The quiet thoughts, unexpected stories, and small details that don’t always make it into the frame. It’s a space for sharing my process and the experiences that shape the way I see.</p>

                <div className={styles.cardGrid}>
                    {articleHTML}
                </div>
                
            </div>
        </section>
        <footer>
            <div className="container">
                <Footer />
            </div>
        </footer>
        </>
    )
}

export default Journal