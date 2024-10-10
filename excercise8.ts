/* ● Specifications :
○ Create a program to calculate total salary based on employee type
○ There are two types of employee : full-time & part-time
○ Salary for full-time employee :
■ IDR 100.000 / hour
■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
○ Salary for part-time employee :
■ IDR 50.000 / hour
■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours

● Requirements :
○ Create an Employee as a parent class
○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
■ Create a method in that class to add working hour per day
■ Create a method in that class to calculate total salary
○ Use inheritance concept */

// class Employee{
//    workingHours = 0
//     this.workingHours=(hours:number)  {
   

//    }



// }

// class FulltimeEmployee extends Employee {

  

//     }
   

    


// class ParttimeEmployee extends Employee{

// }

// let = new FulltimeEmployee


class Employee {
    name = ""
    hour = 0
    type = ""
    bSallary = 0
    oSallary = 0

    constructor(name: string, type: string, bSallary: number,oSallary: number){
        this.name = name
        this.type = type
        this.bSallary = bSallary
        this.oSallary = oSallary
    }

    setHour(n:number){
        this.hour = 0
    }

    getSallary(){
        // let total:number = 0

        if(this.hour<=6) {
            return this.hour * this.bSallary
        } else {
            return this.bSallary * 6 +(this.hour - 6) * this.oSallary
        }


}

}

class FulltimeEmployee extends Employee {
    constructor(name:string){
        super(name, "Fulltime", 100000, 75000)
    }
}


class ParttimeEmployee extends Employee {
    constructor(name:string){
        super(name, "PartTime", 50000,30000)
    }
}

const employee1 = new ParttimeEmployee ("Dzaky")
console.log(employee1)
console.log(employee1.setHour(10))
console.log(employee1.getSallary())