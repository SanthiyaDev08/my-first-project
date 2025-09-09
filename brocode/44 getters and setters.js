/* getters - special method that makes a property readable
setters - special method that makes a property writable
it validate and modify a value when reading or writing a property*/

class Rectangle {

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if (newWidth > 0){
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive number.");
        }
    }

    set height(newHeight){
        if (newHeight > 0){
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number.");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)}cm²`;
    }
}


/*const rectangle1 = new Rectangle(-100000, "pizza");
console.log(rectangle1.width, rectangle1.height);*/


const rectangle2 = new Rectangle(3, 4);
rectangle2.width = 5;
rectangle2.height = 6;
console.log(rectangle2.width);
console.log(rectangle2.height);
console.log(rectangle2.area);
