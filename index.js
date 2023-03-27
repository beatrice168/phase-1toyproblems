// this program prompts user to input grade and return 
function gradeGenerator(){
    //let grade = window.prompt ("what is your grade?")
    if (grade >= 79){
        console.log('A');
    }
    else if (grade < 79){
        console.log('B');
    }
    else if (grade <= 59 && grade >49){
        console.log('C');
    }
    else if (grade >= 40 && grade < 49){
        console.log('D');
    }
    else if (grade < 40){
        console.log('E');
    }                                                                                                                                                                                                                                                                                                                                                                                                                                  
}
gradeGenerator('60');