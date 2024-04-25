import './App.css'
import Prettycure from './component/Prettycure'

export default function App() {
  const preCure = {
    name : "Cure Beauty",
    age : [1, 4],
    live : "Japan"
    }
  return (
   <div>
     <h1> Truyền mảng và đối tượng tới các thành phần bằng props
</h1>

     <Prettycure preCure = {preCure} /> 
      
   </div>
     
  )
} 
// các thuộc tính và giá trị ở preCure gắn vào component và được truyền vào comp Prettycure.jsx