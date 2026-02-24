import './App.css'
import { SideBar } from './components/header/SideBar.tsx'
import { Projects } from './pages/projects.tsx'

function App() {

  return (
    <>
      <SideBar></SideBar>
      <Projects />
    </>
  )
}

export default App
