// Linked list adalah untuk penyambung data yang berhubungan contoh seperti next and previous image
/* Single linked list ketika menggeser akan ada ujungnya dan tidak bisa kembali
    Double linked list ketika menggeser akan sampai ujung dan bisa kembali namun tidak bisa dikembalikan lagi
    Circular linked list
    Circular double linke list
    */

    class Node {
        element : number
        next: any

        constructor(element: number){
        this.element = element
        this.next = null
        }
    }

    class LinkedList{
         head: Node | null
        size: number

        constructor(){
            this.head = null
            this.size = 0
        }

        add(element: number){
            let node = new Node(element)

            let current: any

            if(this.head == null){
                this.head = node
            } else {
                current = this.head

                while(current.next){
                    current = current.next
                }

                current.next = node
            }

            this.size += 1
        }

        printList(){
            let curr:any = this.head
            while(curr){
                console.log(curr.element)
                curr = curr.next
                
            }
        }


    }

    const linked = new LinkedList()

   linked.add(1)
   linked.add(2)
   linked.add(3)
   linked.add(4)

    console.log(linked);
    

    