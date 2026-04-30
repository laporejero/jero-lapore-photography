function Footer() {
    return (
        <footer>
            <hr />
            <div class="footer">
                © Copyright 2025 - All images by Jero Lapore
            </div>

            <style jsx>
            {
                `
                    .footer {
                        height: var(--footer-height);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: var(--text-sm);
                    }
                `
            }
        </style>
        </footer>
    )
}

export default Footer