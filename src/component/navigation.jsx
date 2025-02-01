import { renderToPipeableStream } from "react-dom/server"

const Navigation = () =>{
    return (
    <nav className="container">
        <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
            <li href= "#">menu</li>
            <li href= "#">location</li>
            <li href= "#">About</li>
            <li href= "#">Contact</li>
        </ul>

        <button>login</button>
    </nav>
    )
}

export default Navigation;