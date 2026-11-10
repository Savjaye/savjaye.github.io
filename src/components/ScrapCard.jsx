// One scrapbook entry. Receives the spread props from data/scrapbook.js.
export default function ScrapCard({ title, date, caption, tag, color, img }) {
    return (
        <article className="scrap-card">
            <span className="tape" aria-hidden="true"></span>
            {img ? (
                <img className="scrap-photo" src={img.src} alt={img.alt} />
            ) : (
                <div className={`scrap-photo placeholder ${color}`}>
                    <span>{tag}</span>
                </div>
            )}
            <h3 className="scrap-title">{title}</h3>
            <p className="scrap-caption">{caption}</p>
            <p className="scrap-date">{date}</p>
        </article>
    )
}
