/* Queue adalah antrian siapa yang pertama kali masuk adalah siapa yang pertama keluar
    menggunakan metode push untuk menambah kan dibelakang dan shift | Last in First Out */

interface IQueue {
    enqueue(elment: number): void
    dequeue(): number | undefined
    getElments(): number []

}

class Queue implements IQueue{
    #container: number[] = []

    enqueue(elment: number): void {
        this.#container.push(elment)
    }
    
     dequeue(): number | undefined {
        return this.#container.shift()
     }   
     getElments(): number[] {
         return this.#container
     }
    
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.getElments());

