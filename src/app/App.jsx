import { AppNavbar } from './appComponents/ConnectedElements';
import PageRouter from './PageRouter';
import './App.css'
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
        <AppNavbar />
        <PageRouter />
        {/* Zustand not working
        Hello World - {version} */}
        {/* <Tooltip content="Tooltip content">
          <Button onClick={() => setState({version: "yay, it works"})}>
            Toggle Theme
          </Button>
        </Tooltip> */}
      </BrowserRouter>
  )
}

export default App
