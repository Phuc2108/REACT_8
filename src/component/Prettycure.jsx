import CureBlack from './CureBlack'
import CureWhite from './CureWhite'
export default function Prettycure(props) {
    //const charater = ['Sore Harewataru', 'Nijigaoka Mashiro', 'Yuunagi Tsubasa', 'Hijiri Ageha', 'Ellee-chan']
  const charater = [
    {
      name :"Sore Harewataru",
      age : "14",
      type : "Cure Sky 🌌"
    } ,
    
    {
      name :"Nijigaoka Mashiro",
      age : "15",
      type : "Cure Prism 🌈⃤"
  } ,

  
    {
      name :"Yuunagi Tsubasa",
      age : "12",
      type : "Cure Wing 🪽"
  } ,
  
    {
      name :"Hijiri Ageha",
      age : "18",
      type : "Cure Butterfly 🦋"
  } ,
  
    {
      name :"Ellee-chan",
      age : "1",
      type : "Cure Majesty ⚜️"
  }
  
  ];
  return(
      <div>
     <ul>
       {charater.map((cure) =>(
     <h1 key = {cure.name}>
       <li> {""} {cure.name} {cure.age} {cure.type}
       </li>
     </h1>
       )
          )
            }
     </ul>
   </div>
)

};

// các thuộc tính và giá trị từ App.jsx được truyền vào đây thông qua props
// tương tự như truyền vào các comp con