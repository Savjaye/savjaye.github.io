// A blog post preview. Receives the spread props from data/posts.js.
export default function PostCard({ title, date, excerpt, tags }) {
    const tagElements = tags.map((tag) => (
        <li key={tag} className="tag">#{tag}</li>
    ))

    return (
        <article className="window post-card">
            <div className="window-titlebar">
                <span>{date}</span>
                <span className="window-buttons" aria-hidden="true">▢ ✕</span>
            </div>
            <div className="window-body">
                <h2 className="post-title">{title}</h2>
                <p>{excerpt}</p>
                <ul className="tag-list">{tagElements}</ul>
            </div>
        </article>
    )
}
