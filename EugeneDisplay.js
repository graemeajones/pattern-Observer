export default class EugeneDisplay {
    total = 0;
    
    alert = (num) => {
        this.total += num;
    }
    display = () => {
        console.log(this.total);
    }  
}