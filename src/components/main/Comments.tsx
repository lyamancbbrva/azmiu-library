import { IoMdStar } from "react-icons/io";
function Comments({ item }: any) {
  return (
    <div className="comment">
      <p>{item.desc}</p>
      <div className="stars">
        <IoMdStar className="checked"/>
        <IoMdStar className="checked" />
        <IoMdStar className="checked" />
        <IoMdStar className="checked" />
        <IoMdStar />
      </div>
      <div className="pp-img">
        <img src={item.profile_img} alt={item.name} />
      </div>
      <h5>
        {item.name}
      </h5>
      <span>{item.specialty}</span>
    </div>
  )
}

export default Comments