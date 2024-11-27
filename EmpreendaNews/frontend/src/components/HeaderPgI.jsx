import { Link } from "react-router-dom"

import { Navbar, Paginas} from '../styles/HeaderPgI'

const Header = () => {
    return (
        <Navbar>
            <Paginas>
                <Link className="linkNav" to='/login'> LOGIN </Link>
            </Paginas> 
        </Navbar>
    )
}

export default Header;