import './App.css'
import Prettycure from './component/Prettycure'

export default function App() {
  return (
   <div>
     <h1>Props

     <Prettycure name = "Cure Sky" /> 
      </h1>
   </div>
     
  )
} 
// ở đây có 1 file component được gắn thuộc tính name = "Cure Sky", thuộc tính đó sẽ truyền vào file Prettycure.jsx