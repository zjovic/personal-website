import TextBox from "./components/TextBox/TextBox";
import Work from "./components/Work/Work";
import Scribbles from "./components/Scribbles/Scribbles";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/AboutMe/AboutMe";

export default [
  { path: "/", component: TextBox },
  { path: "/work", component: Work },
  { path: "/scribbles", component: Scribbles },
  { path: "/skills", component: Skills },
  { path: "/about", component: AboutMe }
];
