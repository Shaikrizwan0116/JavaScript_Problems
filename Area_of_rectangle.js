function calculate_area(length,width){
    if (length < 0){
        throw new Array("length should be positive number");
    }
    if (width < 0){
        throw new Array("width should be positive number");
    }
    const area_of_rectangle=length*width
    console.log("area of rectangle",area_of_rectangle);
}

calculate_area(2,4);
calculate_area(-1,4);
