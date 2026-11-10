import sparkle from "../assets/sparkle.svg"
import navLinks from "../data/navLinks"

// `currentPage` is passed in by each page so we can highlight its link.
export default function Navbar({ currentPage }) {
    const linkElements = navLinks.map((link) => {
        return (
            <a
                key={link.id}
                href={link.href}
                className={link.id === currentPage ? "nav-link active" : "nav-link"}
            >
                {link.label}
            </a>
        )
    })

    return (
        <header className="navbar">
            <a href="/" className="logo">
                <img src={sparkle} alt="" className="logo-icon" />
                savvy's scrapbook
            </a>
            <nav className="nav-links">
                {linkElements}
            </nav>
        </header>
    )
}
