class Triangle{
    constructor(edge1, edge2, edge3){
        this.edge1 = edge1;
        this.edge2 = edge2;
        this.edge3 = edge3;
    }

    checkTriange(){
        // Validation
        if(((this.edge1 <= 0) || (this.edge2 <= 0) || (this.edge3 <= 0)) || ((this.edge1 + this.edge2 < this.edge3) || (this.edge2 + this.edge3 < this.edge1) || (this.edge1 + this.edge3 < this.edge2))){
            console.log('invalid Triangle');
            return;
        }
        // now check
        if ((this.edge1 === this.edge2) && (this.edge1 === this.edge3) && (this.edge2 === this.edge3)){
            console.log('this is equilateral triangle');
        }
        else if((this.edge1 === this.edge2) || (this.edge1 === this.edge3) || (this.edge2 === this.edge3)){
            console.log('this is  isosceles triangle');
        }else{
            console.log('this is scalene triangle');
        }
    }
}

const tri1 = new Triangle(1, 2, 9);
const tri2 = new Triangle(3, 4, 5);
const tri3 = new Triangle(4, 4, 5);
const tri4 = new Triangle(3, 3, 3);

tri1.checkTriange()
tri2.checkTriange()
tri3.checkTriange()
tri4.checkTriange()
