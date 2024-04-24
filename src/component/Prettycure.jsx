import CureBlack from './CureBlack'
import CureWhite from './CureWhite'
export default function Prettycure( {name} ) {
  
  
  return(
   <div>
     <h3>
       Hello {name}
     </h3>
     
     <h3>
       <CureBlack power1 = 'physics' />
       <CureWhite power2 = 'magical' />
     </h3>
   </div>
)


  // thay vì để prop ta viết thẳng {thuộc tính} từ App.jsx
  //tương tự truyền thuộc tính vào các comp con
  
  

};