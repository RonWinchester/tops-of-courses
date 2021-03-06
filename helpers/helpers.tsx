import CoursesIcon from "./icons/courses.svg";
import ServecesIcon from "./icons/serv.svg";
import ProductIcon from "./icons/product.svg";
import BookIcon from "./icons/book.svg";
import { FirstLevelMenuItem } from "../interfaces/menu.interfaces";
import { TopLevelCategory } from "../interfaces/page.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServecesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BookIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductIcon />,
    id: TopLevelCategory.Products,
  },
];

export const priceRu = (price: number): string => {
  return price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    .concat(" ₽");
};

export const declOfNum = (number: number, titles: [string,string,string]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}