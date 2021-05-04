const person = {
    name : "Volkan",
    department : "Software",
    
}
Object.defineProperty(person,"fullName",{//person objesine fullname diye bir alan eklicez 
    get function()
    {
        return `${this.name} ${this.department}` 
    },
    set function(value)
    {
        const parts = value.split(' ');
        this.name = parts[0];
        this.department = parts[1];
    }
});

person.fullname = "Volkan Yazılım"
console.log(person.fullname);