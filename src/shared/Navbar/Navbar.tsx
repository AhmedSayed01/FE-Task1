import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineHome } from 'react-icons/ai';
import { VscChecklist } from 'react-icons/vsc';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className='NavIcons'>
            <span>
                <RxHamburgerMenu />
            </span>
            <br />
            <br />
            <br />
            <span>
                <AiOutlineHome />
            </span>
            <br />
            <br />
            <span>
                <VscChecklist />
            </span>
        </div>
    )
}

export default Navbar