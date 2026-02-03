import './Card.css'
function Card({content}){
    return <section className="card" style={content.style}>
        <div className="imgCont" style={content.style} >
            <img src={content.src} alt={content.name}/>
        </div>
        <div className="content">
            <h3>{content.name}</h3>
            <p>{content.job}</p>
        </div>
    </section>
}

export default Card