import { Link } from "react-router-dom"


function News({item}:any) {
  return (
    <Link to={`/${item.name}`} className="box">
        <div className="box-img">
          <img src={item.img} alt={item.tittle} />
        </div>
        <div className="box-bottom">
          <h5>{item.tittle}</h5>
          <p>{item.desc.length > 50 ? `${item.desc.slice(0, 50)}...` : item.desc }</p>
        </div>
    </Link>
  )
}

export default News