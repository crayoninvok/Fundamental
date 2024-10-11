/* Data Structur = teknik untuk menyimmpan data
   Last in First out */

//Stack

class Stack{
    #maxSize:number                                                     
    #container:number[] = []                                                                

    constructor(maxSize: number, number =10){                           //Untuk membuat stack dalam class butuh max size
        this.#maxSize = maxSize
    }

    #isFull(){
        return this.#container.length >= this.#maxSize
    }

    #isEmpty(){
        return this.#container.length == 0
    }

    push(elment: number){                                           // Push data untuk memangil data kedalam container
        if(this.#isFull()){
            console.log("Stack Overflow!")
            return
        }
        this.#container.push(elment)

    }

    pop(){                                                          // Menghapus data dalam container
        this.#container.pop()
        if(this.#isEmpty()){
            console.log("Stack Underflow!");
            return
        }
        

    }

    getElments(){
        return this.#container
    }

}

const stack = new Stack(3)

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.getElments());

stack.pop()
stack.pop()
stack.pop()

console.log(stack.getElments());
