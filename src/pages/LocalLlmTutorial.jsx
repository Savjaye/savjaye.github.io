import { Link } from 'react-router'

// the page uses a hash router (#/local-llm-tutorial), so normal #anchor links
// would change the route. this scrolls to the section instead.
function jumpTo(id) {
    return (event) => {
        event.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
}

export default function LocalLlmTutorial() {
    return (
        <main className="tutorial">
            <article className="tutorial-content">

                {/* back to home */}
                {/*<Link to="/" className="back-link">← back home</Link>*/}

                {/* title */}
                <header className="tutorial-header">
                    <p className="tutorial-tag">*:･° tutorial °･:*</p>
                    <h1>Local LLM Tutorial</h1>
                    <p className="blurb">
                        run a large language model on your own computer
                    </p>
                </header>

                {/* contents: */}
                <nav className="contents" aria-label="contents">
                    <p className="contents-title">contents</p>
                    <ol>
                        <li>
                            <a href="#intro" onClick={jumpTo('intro')}>intro</a>
                            <ol>
                                <li><a href="#why-local" onClick={jumpTo('why-local')}>why run an LLM locally?</a></li>
                                <li><a href="#pros-cons" onClick={jumpTo('pros-cons')}>pros &amp; cons</a></li>
                                <li><a href="#terminal" onClick={jumpTo('terminal')}>a word about the terminal</a></li>
                            </ol>
                        </li>
                        <li>
                            <a href="#getting-started" onClick={jumpTo('getting-started')}>getting started</a>
                        </li>
                        <li className="coming-soon">more chapters coming soon</li>
                    </ol>
                </nav>

                {/* ================= chapter: intro ================= */}
                <section className="chapter" id="intro">
                    <h2 className="chapter-title"><span className="chapter-number">1.</span> intro</h2>

                    <section className="step" id="why-local">
                        <h3>why run an LLM locally?</h3>
                        <p>
                            Typically, when you are using an AI chat bot, that bot is running on someone else's computer. Your conversations
                            travel off to a corporate data center, get processed there, and the answer travels back. A local LLM skips all of that. 
                            The model lives on <em>your</em> machine and does its thinking right there. Your request, your hardware, your own llm.
                        </p>


                       <p>
                            There are of course trade-offs to running a model locally. Local models might not be the best for every use case,
                            but they are a great tool and have their place (and so much potential imho).
                        </p>
                    </section>

                    <section className="step" id="pros-cons">
                        <h3>pros &amp; cons</h3>
                        <div className="pros-cons">
                            <div className="pros">
                                <p className="list-title">pros</p>
                                <ul>
                                    <li><strong>private:</strong> your conversations never leave your computer.</li>
                                    <li><strong>no data centers:</strong> your query, your compute.</li>
                                    <li><strong>free:</strong> no subscriptions, no per-message costs. Finally something you own.</li>
                                </ul>
                            </div>
                            <div className="cons">
                                <p className="list-title">cons</p>
                                <ul>
                                    <li><strong>reduced capacity:</strong> models you run locally will often be smaller than the ones hosted in data centers.</li>
                                    <li><strong>slower:</strong> your computer is doing all the work.</li>
                                    <li><strong>more hands on:</strong> you set it up yourself (secret pro).</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="step" id="terminal">
                        <h3>a word about the terminal</h3>
                        <p>
                            This tutorial will ask you to open your terminal.
                            <span className="dun"> (dun! dun! DUUUUUNNNNN!)</span>
                        </p>
                        <p>
                            Don't worry, ill give you every command you need so you can just copy and paste them.
                  
                        </p>
                        <aside className="note">
                            <strong>note:</strong> the terminal is powerful, so if it's new to you, be careful. 
                            Read each command before you run it, and only paste the ones from this
                            tutorial.
                        </aside>

                        <p>
                            The commands will differ depending on your operating system, but I will include commands for both Mac and Windows.
                            Before we get started, lets make sure you can open your terminal and run basic commands. Open your terminal (Terminal 
                            on Mac of PowerShell on Windows) and type <code>echo hello</code> and hit enter. You should see <code>hello</code> printed back to you.
                        </p>


                    </section>
                </section>

                {/* ================= chapter: getting started ================= */}
                <section className="chapter" id="getting-started">
                    <h2 className="chapter-title"><span className="chapter-number"></span> getting started</h2>

                    {/* one step: copy this whole <section> for each new step */}
                    <section className="step">
                        <h3><span className="step-number">01</span> Download ollama</h3>
                        <p>Ollama is an open-source platform for managing and running large language models locally. To download it,
                            open your terminal and run the following command by copying and pasting into your command line:
                        </p>
                            
                        <strong>Mac</strong>
                        {/* code block: use a template string so { } and < > show up as plain text */}
                        <pre className="code-block"><code>{`curl -fsSL https://ollama.com/install.sh | sh`}</code></pre>

                        <strong>Windows</strong>
                        <pre className="code-block"><code>{`irm https://ollama.com/install.ps1 | iex`}</code></pre>

                        <p>Let the model install. You'll know its complete when you see a message like <code>Install complete. Run 'ollama' from the command line.</code> and you
                        cursor is blinking in the command line. Double-check that the installation was successful by running: </p>

                        <strong>Mac & Windows</strong>
                        <pre className="code-block"><code>{`ollama -v`}</code></pre>

                        <p>You should get a response that looks something like <code>ollama version is 0.40.16</code>.</p>
                        <aside className="note">
                            <strong>note:</strong> You can also check out the Ollama <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer">
                            download docs</a> for more information. When you want to update Ollama, you can run the same install command again and it will update to 
                            the latest version.
                            
                        </aside>

                    </section>
                    <section className="step">
                        <h3><span className="step-number">02</span> Another step</h3>
                        <p>blablabla place holder <code>fake code</code> blahblahblah</p>


                        {/* details: hidden extra info the reader can click open */}
                        <details className="details">
                            <summary>more details</summary>
                            <p>The sweet sweet deets.</p>
                        </details>
                    </section>
                </section>

                {/* not the end! more chapters will go above this */}
                <p className="to-be-continued">more chapters coming soon_</p>

            </article>
        </main>
    )
}
