import CureBlack from './CureBlack'
import CureWhite from './CureWhite'
export default function Prettycure() {
  const charater = ['Sore Harewataru', 'Nijigaoka Mashiro', 'Yuunagi Tsubasa', 'Hijiri Ageha', 'Ellee-chan']
  
  return(
   <div>
     <ul>
       {charater.map((cure) =>(
     <h1 key = {cure}> {cure} </h1>
       )
          )
            }
     </ul>
   </div>
)

};