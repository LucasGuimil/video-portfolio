import './App.css'
import { VideoList } from './components/body/VIdeoList.tsx'
import { SideBar } from './components/header/SideBar.tsx'

function App() {

  return (
    <>
    
      <SideBar></SideBar>
      <VideoList />
    </>
  )
}

export default App
