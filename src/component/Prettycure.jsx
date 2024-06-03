import CureBlack from './CureBlack'
import CureWhite from './CureWhite'
export default function Prettycure(props) {
      const charater = [
    {
      name :"Sore Harewataru",
      age : "14",
      type : "Cure Sky 🌌",
      directly: true
    } ,

    {
      name :"Nijigaoka Mashiro",
      age : "15",
      type : "Cure Prism 🌈⃤",
      directly : true
  } ,


    {
      name :"Yuunagi Tsubasa",
      age : "12",
      type : "Cure Wing 🪽",
      directly : false
  } ,

    {
      name :"Hijiri Ageha",
      age : "18",
      type : "Cure Butterfly 🦋",
      directly : true
  } ,

    {
      name :"Ellee-chan",
      age : "1",
      type : "Cure Majesty ⚜️",
      directly : false 
  }

  ];
    return(
      <div>
     
        <ul>
       {charater.map((cure) =>(
    //<h1 key = {cure.name}>
      // <li> {""} {cure.name} {cure.age} {cure.type} {cure.directly ? "✅️" : ""}
     //  </li> (nội bộ trong 1 comp)
  //   </h1>
        <CureBlack 
          key  = {cure.name}
          name = {cure.name}
          age = {cure.age}
          type = {cure.type}
          directly = {cure.directly}/>
       )
          )
            }
     </ul>
        
   </div>
)

};


// ở đây là điều kiện if else dựa trên kết quả ở const, nếu true nó sẽ chọn phần tử hoặc comp đầu tiên, nếu false thì ngược lại; phần "//" là dùng toán tử 3 ngôi trong nội bộ comp

//Tiếp theo là ta đặt comp khác kết xuất qua các prop nhất định (đặt theo thuộc tính) và truyền vào loại các biến

// Prop "key" là 1 prop đặc biệt giúp xác định các comp duy nhất (gắn liền với comp), giá trị của key thường là giá trị duy nhất như id hoặc tên của item
