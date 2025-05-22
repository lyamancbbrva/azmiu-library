import { Link } from "react-router-dom"

function Category({item}:any) {
  return (
    <Link to={`/${item.name}`} className="box">
        <div className="box-img">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="box-bottom">
          <h5>{item.name}</h5>
        </div>
    </Link>
  )
}

export default Category