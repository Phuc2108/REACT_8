import CureBlack from './CureBlack'
import CureWhite from './CureWhite'
export default function Prettycure(props) {
  const preCure1 = {
    name : "Cure Butterfly",
    age : [1, 8],
    live : "American"
  }

  const preCure2 = {
    name : "Cure Wing",
    age : [1, 2],
    live : "England"
  }
  return(
   <div>
     <h1> Hello {props.preCure.name} {props.preCure.age} {props.preCure.live} </h1>
     
     
     <CureBlack preCure1 = {preCure1}/>
     <CureWhite preCure2 = {preCure2}/>
     
   </div>
)

};

// các thuộc tính và giá trị từ App.jsx được truyền vào đây thông qua props
// tương tự như truyền vào các comp con