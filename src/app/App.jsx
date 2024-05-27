import { useStore } from '../appStore/store'
import './App.css'

function App() {
  const [version, setState] = useStore(o => [o.version, o.setState])
  return (
    <>
      <div onClick={() => setState({version: "yay, it works"})}>
        Zustand not working
        Hello World - {version}
      </div>
    </>
  )
}

export default App
