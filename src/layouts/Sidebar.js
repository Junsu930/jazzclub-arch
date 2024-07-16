import { Button, Nav } from 'reactstrap';
import Logo from './Logo';
import { useLocation } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';

const navigation = [
  {
    title: '수도권',
    href: '/metropolitan',
    icon: 'bi bi-globe-americas',
  },
  {
    title: '광역시/특별시',
    href: '/specialCity',
    icon: 'bi bi-globe-americas',
  },
  {
    title: '지방',
    href: '/rural',
    icon: 'bi bi-globe-americas',
  },
];

const navigation2 = [
  {
    title: '자유게시판',
    href: '/freeboard',
    icon: 'bi bi-clipboard-fill',
  },
  {
    title: '의견 제출',
    href: '/ask',
    icon: 'bi bi-clipboard-fill',
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
          {(location.pathname === '/jazzClubSchedule' ||
            navigation.some((x) => x.href === location.pathname)) && (
            <SidebarMenu naviArr={navigation} parentMenu="JazzClubSchedule" />
          )}
          {(location.pathname === '/board' ||
            location.pathname.includes('/post') ||
            navigation2.some((x) => x.href === location.pathname)) && (
            <SidebarMenu naviArr={navigation2} parentMenu="Board" />
          )}
          {location.pathname === '/starter' && (
            <>
              <SidebarMenu naviArr={navigation} parentMenu="JazzClubSchedule" />
              <SidebarMenu naviArr={navigation2} parentMenu="Board" />
            </>
          )}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
