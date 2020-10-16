import NavBarItem from "./nav-bar-item";
import { useRouter } from "next/router";
import styles from "./nav-bar.module.scss";

const NavBar = () => {
  const router = useRouter();

  const links = [
    {
      path: "/",
      text: "На Главную",
    },
    {
      path: "/goods",
      text: "Товары",
    },
    {
      path: "/cart",
      text: "Корзина",
    },
    {
      path: "/auth",
      text: "Авторизация",
    },
  ];
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navWrapper}>
          <a href="#" className={styles.logo}>
            Logo
          </a>
          <ul>
            {links.map((item) => {
              return (
                <NavBarItem
                  path={item.path}
                  text={item.text}
                  current={router.route === item.path}
                  curCls={styles.current}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
