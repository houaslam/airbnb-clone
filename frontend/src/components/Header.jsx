
import logo from '/assets/airbnb-logo.png';

export default function Header(){
    return (
      <nav className='nav-items'>
          <img src={logo} alt="React logo" />
          <ul className='nav--links'>
            <a href='#' className='nav--signin'>sign in</a>
            <button className='nav--login'>log in</button>
          </ul>
      </nav>
    )
  }
  