import  Contacts  from "./components/Contacts";
import  About  from "./components/About";
import  Home  from "./components/Home";
import Staff from "./components/Staff";
import Adress from './components/Adress';

export const data = [
  {
    route: "/about",
    exact: true,
    name:  <h2>О нас</h2>,
    component: () => <About />,
  },
  {
    route: "/contacts",
    name: <h2>Контакты</h2>,
    component: () => <Contacts />,
  },
  {
    route: "/",
    exact: true,
    name: <h2>Главная</h2>,
    component: () => <Home />,
  },
  {
    route: "/staff",
    exact: true,
    name: <h2>Сотрудники</h2>,
    component: () => <Staff />,
  },
  {
    route: "/Adress",
    exact: true,
    name: <h2>Адрес</h2>,
    component: () => <Adress />,
  },
];
