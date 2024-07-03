// Function to calculate grades
const getGrade=function(){

    let invalidMark=true;
    let marks;


    while(invalidMark){ 
        // prompt user for input and convert it to number data type
    marks=(prompt("Kindly input your marks:"));
        // Use if for edge conditions
    if(marks!=null&& marks&&marks>=0 && marks<=100){ 
        // convert input to number
     marks=Number(marks);
        invalidMark=false;
        
    }
    else{alert("Kindly enter a valid mark.")}
    
}
let statement;
    if(marks>79){
        statement= 'Your grade is A';
    }
    else if (marks>=60 && marks <=79){
        statement= 'Your grade is B';
    }
    else if (marks>49 && marks<=59){
        statement ='Your grade is C';
    }
    else if (marks>=40 && marks<=50){
        statement ='Your grade is D';
    }
    else{
        statement= 'Your grade is E';
    }
    alert (statement)
}
getGrade();


   
    
