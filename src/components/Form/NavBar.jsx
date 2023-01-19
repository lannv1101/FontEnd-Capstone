import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { LogoBox, LogoImg } from '../Navbar/NavbarElements';
function NavBar() {
  return (
    <>
      <nav className='form-nav'>
        <Link to='/'>
          <LogoBox>
            <LogoImg src={logo} alt='logo' />
          </LogoBox>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
