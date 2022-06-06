 export default class NatalieDisplay
 {
     total = 0;

     constructor(name)
     {
         this.name = name;
     }

     //Alert method to add number to total
    alert = (number) => { this.total += number };

    //Display method to display total
    display = () => { console.log(`${this.name}'s Count: ${this.total}`) };
 }