//Enscaptulation untuk membungkus suatu method seperti function

class Employee {
    employeeName =""
    setEmployeeName(str:string){                     //Membuat method untuk pemanggilan dari const bawah
        this.employeeName = str
    }
    getEmployeeName(){                              // Buat get untuk memanggil method diatas jangan lupa return
        return this.employeeName
    }
}

const employee1 = new Employee()
employee1.setEmployeeName("Dzaky")

console.log(employee1.getEmployeeName())


//==========================================================================================================================================================================

