

function Card({ id, title, children, isMainTitle, img }) {
    return (

        <section className="section">
            <div id={id} className='card'>
                <header className='card-header'>
                    {isMainTitle ? (
                        <h1 className='card-header-title title is-centered'>{title}</h1>
                    ) : (



                        < h2 className='card-header-title subtitle'>{title}</h2>
                    )}
                </header>
                <div className='card-content'>
                    <div className='content'>{children}</div>
                </div>
            </div>
        </section>

    );
}


export default Card;