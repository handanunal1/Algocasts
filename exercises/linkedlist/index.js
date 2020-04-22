// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data,next = null){
    this.data = data;
    this.next = next;
  }

}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(data){
  this.insertAt(data,0);

  }
  getFirst(){
    return this.head;
  }

  size(){
    let counter = 0;
    let node = this.head;
    while(node){
      counter++;
      node = node.next;
    }
    return counter;
  }

  getLast(){
    if(!this.head){
      return null;
    }
    let node = this.head;


    let nodeCurr;
    while(node){
      nodeCurr = node;
      node = node.next;
    }
    return nodeCurr;
  }


  clear(){
    this.head = null;
  }


  removeFirst(){
    if(!this.head){
      return;
    }
    this.head = this.head.next;
  }

  removeLast (){
    if(!this.head){
      return;
    }


    if(!this.head.next){
      this.head  = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while(node.next){
      previous =node;
      node = node.next;


    }
    previous.next = null;
    return;

  }


  insertLast(data){
    const last = this.getLast();
    if(last){
      last.next = new Node(data);
    }
    else{

      this.head = new Node(data);
    }

  }


  getAt(data){

    if(data == 0){
      return this.head;
    }

    let node = this.head;

    let counter = 0;
    while(counter < data && (node)){
      node = node.next;
      counter++;
    }

    if(counter == data){
      return node;
    }
    else{
      return null;
    }
  }


  removeAt(index){



    if(!this.head ){
      return;
    }
    if(index === 0){
      this.head = this.head.next;
      return;

    }


    const prev = this.getAt(index-1);

    if(!prev.next || !prev){
      return;
    }

    prev.next = prev.next.next;

  }


  insertAt(data,index){

    if(!this.head){
      this.head = new Node(data);
      return;
    }
    if(index === 0){

      this.head = new Node(data,this.head);
      return;

    }
    const prev = this.getAt(index-1) ||this.getLast();
    const node = new Node(data,prev.next);
    prev.next = node;

    return;

  }


  forEach(fn){
    let node = this.head;
    let counter = 0;
    while(node){
      fn(node,counter);
      node = node.next;
      counter ++;
    }


  }


  *[Symbol.iterator](){
    let node = this.head;
    while(node){
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
