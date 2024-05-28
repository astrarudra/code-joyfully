import { Route, Switch } from 'react-router-dom';
import { useStore } from './appStore';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const componentMap = {
  Home,
  Courses,
  About,
  Blog,
  Contact,
};
const PageRouter = () => {
  const [ pages = {}, loaded ] = useStore((s) => [s.pages, s.loaded]);
  // if(!loaded) return null;
  console.log(pages, componentMap)
  return (
    <div className="page ">
      <Switch>
        {Object.keys(pages).map((key) => {
          const page = pages[key]
          return <Route key={page.path} path={page.path} component={componentMap[page.component]} />
        })}
        <Route path="/" component={componentMap.Home} />
      </Switch>
    </div>
  );
};

export default PageRouter;