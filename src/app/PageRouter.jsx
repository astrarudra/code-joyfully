import { Route, Switch } from 'react-router-dom';
import { useStore } from './appStore';

const componentMap = {
};

const App = () => {
  const [ pages = {}, loaded ] = useStore((s) => [s.pages, s.loaded]);
  if(!loaded) return null;
  return (
    <div className="page">
      <Switch>
        {Object.keys(pages).map((key) => {
          const page = pages[key]
          return <Route key={page.path} path={page.path} component={componentMap[page.component]} />
        })}
        <Route path="/" component={<div></div>>} />
      </Switch>
    </div>
  );
};

export default App;