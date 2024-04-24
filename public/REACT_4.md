- Bài này là array map() ở JS rồi. Nếu chưa biết thì xem qua đoạn code này
 ```
 var heroes = [
 {
    name : "Frieren",
    class : "Elf Mage"
    }

    {
    name : "Fern",
    class : "Mage"
    }

    {
    name : "Stark",
    class : "Warrior"
    }
 ]

 var teamHero = hero.map(function newTeam(hero){
    //console.log(hero);
 return hero.name + " " + hero.class;
 });
```
- Bài này khá phức tạp, hoạt động của nó là như thế này:
+ Tạo 1 biến mảng lớn `[]`, trong đó có các mảng nhỏ `{}` chứa các thuộc tính và giá trị trong mảng []
+ Tạo 1 biến mới `var name` , thuộc tính `map()` sẽ duyệt qua các từng mảng `{}` hiển thị các thuộc tính, và trong `()` ở `map()` là 1 `function mới` có thể viết reong hoặc ngoài `()`
+ function nay nhận tất cả thông tin từ `map()` hiển thị, đồng thời truyền vào tham số của`function()`, nó sẽ là đầu cuối hiển thị ra trang web