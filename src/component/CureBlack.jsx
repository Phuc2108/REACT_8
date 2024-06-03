export default function CureBlack( {name, age, type, directly} ) {

return (
 
     <h1> 
      
 {name} {age} {type} {directly ? "✅️" : ""}
     </h1>

  
   );
} // các thuộc tính và giá trị từ Prettycure.jsx được truyền vào đây thông qua props ( { } ), và có thể sử dụng toán tử 3 ngôi