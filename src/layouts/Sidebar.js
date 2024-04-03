import { Button, Nav, NavItem } from 'reactstrap';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  {
    title: '수도권',
    href: '/starter',
    icon: 'bi bi-speedometer2',
  },
  {
    title: '광역시/특별시',
    href: '/alerts',
    icon: 'bi bi-bell',
  },
  {
    title: '지방',
    href: '/badges',
    icon: 'bi bi-patch-check',
  },
];

const navigation2 = [
  {
    title: '자유게시판',
    href: '/cards',
    icon: 'bi bi-speedometer2',
  },
  {
    title: '의견 제출',
    href: '/grid',
    icon: 'bi bi-bell',
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById('sidebarArea').classList.toggle('showSidebar');
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={() => showMobilemenu()}
          ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {location.pathname === '/jazzClubSchedule' &&
            navigation.map((navi, index) => (
              <NavItem key={index} className="sidenav-bg">
                <Link
                  to={navi.href}
                  className={
                    location.pathname === navi.href
                      ? 'text-primary nav-link py-3'
                      : 'nav-link text-secondary py-3'
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </Link>
              </NavItem>
            ))}
          {location.pathname === '/about' &&
            navigation2.map((navi, index) => (
              <NavItem key={index} className="sidenav-bg">
                <Link
                  to={navi.href}
                  className={
                    location.pathname === navi.href
                      ? 'text-primary nav-link py-3'
                      : 'nav-link text-secondary py-3'
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </Link>
              </NavItem>
            ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
