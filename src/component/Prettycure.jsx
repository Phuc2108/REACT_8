import CureBlack from './CureBlack'
import CureWhite from './CureWhite'
export default function Prettycure(props) {
    const display = true
    if (display) {
       return <CureBlack/>;
    } else {
       return <CureWhite/>;
    }
    
}
// ở đây là điều kiện if else dựa trên kết quả ở const, nếu true nó sẽ chọn phần tử hoặc comp đầu tiên, nếu false thì ngược lại 
