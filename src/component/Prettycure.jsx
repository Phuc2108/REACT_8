import CureBlack from './CureBlack'
import CureWhite from './CureWhite'
export default function Prettycure() {
   const display = true;
  if (display) {
     return <CureBlack />
  } else {
     return <CureWhite />
  }

  //Đây là file component chính có thể edit tại đây, nó xuất ra App.jsx
  
  

};