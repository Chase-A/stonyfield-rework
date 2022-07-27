import './Card.css'

function Card(){
    return(
        <div className="card-container">
            <img className="post-image" src="/stony1.webp"></img>
            <h3 className="post-title">HOW YOU’RE HELPING ‘SAVE GEN F’ BY BUYING STONYFIELD YOGURT</h3>
            <p>Jun 10, 2022</p>
            <ul>
                <a>Farm</a>
                <a>Organic</a>
                <a>Family</a>
                <a>Healthy</a>
                <a>Business</a>
            </ul>
        </div>
    )
}

export default Card