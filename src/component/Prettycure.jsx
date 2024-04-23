import CureBlack from './CureBlack'
import CureWhite from './CureWhite'
export default function Prettycure(props) {
  console.log(props);
  
  return(
   <div>
     <h3>
       Hello {props.name}
     </h3>
     
     <h3>
       <CureBlack power1 = 'physics' />
       <CureWhite power2 = 'magical' />
     </h3>
   </div>
)


  // file này được truyền thuộc tính ở app.jsx thông qua props 
  //tương tự truyền thuộc tính vào các comp con
  
  

};