import {Link} from "react-router-dom"
import img from "../images/not-found.jpg"

const NotFound = () => {
    return <>
        <img src={img} alt="page not found" width="100%" />
        <Link to={"/"}>Page not found go to home page</Link>
    </>
}

export default NotFound