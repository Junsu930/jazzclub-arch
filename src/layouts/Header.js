import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from 'reactstrap';
import user1 from '../assets/images/users/user1.jpg';
import notLogged from '../assets/images/users/notLogged.png';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById('sidebarArea').classList.toggle('showSidebar');
  };

  useEffect(() => {
    const storedUserLoggedInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInfo) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Navbar color="dark" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <Logo type="min" />
        </NavbarBrand>
        <Button
          color="dark"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="dark"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/jazzClubSchedule" className="nav-link">
              Jazz Club Schedule
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/board" className="nav-link">
              Board
            </Link>
          </NavItem>
        </Nav>
        {isLoggedIn && (
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="dark">
              <img
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="30"
              ></img>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>닉네임 변경</DropdownItem>
              <DropdownItem>작성 글 확인</DropdownItem>
              <DropdownItem>로그아웃</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
        {!isLoggedIn && (
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="dark">
              <img
                src={notLogged}
                alt="not logged in"
                className="rounded-circle"
                width="30"
              ></img>
            </DropdownToggle>
            <DropdownMenu>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <DropdownItem>로그인</DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
        )}
      </Collapse>
    </Navbar>
  );
};

export default Header;
