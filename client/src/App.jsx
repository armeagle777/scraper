import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Monitorings from "./components/Monitorings"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Monitoring from "./components/Monitoring"
import NewMonitoring from "./components/NewMonitoring"




function App() { 

  return (
            
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/monitorings' element={<Monitorings />} >
            <Route path=':id' element={<Monitoring />} />
        </Route>
        <Route path='/new-monitoring' element={<NewMonitoring />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
