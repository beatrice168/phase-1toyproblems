function getNetSalary(basicsalary,benefits){
    let grossincome=basicsalary + benefits 
    let PAYE ; 
    if (grossincome<=24000){
        PAYE=grossincome*0.1
    }else if (grossincome>24000 && grossincome<= 32333){
        PAYE=grossincome*0.25
    }else {
        PAYE=grossincome*0.3
    }
    
}
//NHIF Deductions
let Deductions ;
if (grossincome<=5999) {
    Deduction = 150
}else if (grossincome>5999 && grossincome<=7999){
    Deduction = 300
}else if (grossincome>7999 && grossincome<=11999){
    Deduction = 400
}else if (grossincome>11999 && grossincome<=14999){
    Deduction = 500
}else if (grossincome>14999 && grossincome<=19999){
    Deduction = 600
}else if (grossincome>19999 && grossincome<=24999){
    Deduction = 750
}else if (grossincome>24999 && grossincome<=29999){
    Deduction = 850
}else if (grossincome>29999 && grossincome<=34999){
    Deduction = 900
}else if (grossincome>34999 && grossincome<=39999){
    Deduction = 950
}else if (grossincome>39999 && grossincome<=44999){
    Deduction = 1000
}else if (grossincome>44999 && grossincome<=49999){
    Deduction = 1100
}else if (grossincome>49999 && grossincome<=59999){
    Deduction = 1200
}else if (grossincome>59999 && grossincome<=69999){
    Deduction = 1300
}else if (grossincome>69999 && grossincome<=79999){
    Deduction = 1400
}else if (grossincome>79999 && grossincome<=89999){
    Deduction = 1500
}else if (grossincome>89999 && grossincome<=99999){
    Deduction = 1600
}else {
    Deduction =1700
}

// calculate NSSF Deductions = pensionalpay*NSSFRate
let NSSFRate = 0.06
if (pensionalpay<=6000){
    Deduction = pensionalpay*NSSFRate
}else if (pensionalpay>6000 && pensionalpay<=18000){
    Deduction = pensionalpay*NSSFRate
}
//calculate net salary
 let netSalary = grossincome - NSSFdeduction - NHIFDeduction

