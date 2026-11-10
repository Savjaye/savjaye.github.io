// A scrolling 90s-style marquee strip. Pass it an array of short phrases.
export default function Ticker({ items }) {
    const itemElements = items.map((item) => <span key={item}>✦ {item}</span>)

    return (
        <div className="ticker" aria-label={items.join(", ")}>
            {/* The list is rendered twice so the scroll loops seamlessly */}
            <div className="ticker-track" aria-hidden="true">
                <div className="ticker-group">{itemElements}</div>
                <div className="ticker-group">{itemElements}</div>
            </div>
        </div>
    )
}
