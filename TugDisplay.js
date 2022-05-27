export default class Display {
    total = 0;
    // alert function -> Given an integer number
    alert = (number) => this.total += number;
    // class must sum the numbers

    // display function -> adds numbers up and then returns the total
    display = () => console.log(this.total);
    
}