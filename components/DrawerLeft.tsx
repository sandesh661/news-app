import drawerStyles from '../styles/Drawer.module.css';

const DrawerLeft = ({ isDrawerOpen, setDrawerOpen }: { isDrawerOpen: any; setDrawerOpen: any }) => {
  return (
    <>
      {isDrawerOpen ? (
        <div className={drawerStyles.sidenav}>
          <a href="#" className={drawerStyles.drawerClosebtn} onClick={() => setDrawerOpen(false)}>
            &times;
          </a>
          <a href="#">Home</a>
          <a href="#">News</a>
          <a href="#">Log out</a>
        </div>
      ) : null}
    </>
  );
};

export default DrawerLeft;
