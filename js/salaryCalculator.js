// function to calculate NHIF deduction
function nhif(grossPay){
    let deduction;
    if (grossPay>0 && grossPay<6000)
        {deduction=150;

        }
        else if(grossPay>=6000 && grossPay<8000){
            deduction=300;  
        }
        else if(grossPay>=6000 && grossPay<8000){
            deduction=300;  
        }
        else if(grossPay>=8000 && grossPay<12000){
            deduction=400;  
        }
        else if(grossPay>=12000 && grossPay<15000){
            deduction=500;  
        }
        else if(grossPay>=15000 && grossPay<20000){
            deduction=600;  
        }
        else if(grossPay>=20000 && grossPay<25000){
            deduction=750;  
        }
        else if(grossPay>=25000 && grossPay<30000){
            deduction=850;  
        }
        else if(grossPay>=30000 && grossPay<35000){
            deduction=900;  
        }
        else if(grossPay>=35000 && grossPay<40000){
            deduction=950;  
        }
        else if(grossPay>=40000 && grossPay<45000){
            deduction=1000;  
        }
        else if(grossPay>=45000 && grossPay<50000){
            deduction=1100;  
        }
        else if(grossPay>=50000 && grossPay<60000){
            deduction=1200;  
        }
        else if(grossPay>=60000 && grossPay<70000){
            deduction=1300;  
        }
        else if(grossPay>=70000 && grossPay<80000){
            deduction=1400;  
        }
        else if(grossPay>=80000 && grossPay<90000){
            deduction=1500;  
        }
        else if(grossPay>=90000 && grossPay<10000){
            deduction=1600;  
        }
        else{
            deduction=1700;
        }

        return deduction;
            
}
// function to calculate PAYE deduction
function paye(grossSalary){
    let deduction;
    if(grossSalary>0 && grossSalary<=24000){
        deduction=0.1*grossSalary;
    }
    else if(grossSalary>24000 && grossSalary<=32333){
        deduction=0.25*grossSalary;
    }
    else if(grossSalary>32334 && grossSalary<=500000){
        deduction=0.3*grossSalary;
    }
    else if(grossSalary>500000 && grossSalary<=800000){
        deduction=0.325*grossSalary;
    }
    else {
        deduction=0.35*grossSalary;
    }
    return deduction;
}
// function that calculates NSSF deduction
function nssf(grossPay){
    const deduction=0.06*grossPay;
    return deduction;
}
// function to calculate net salary after deductions
function netPay(grossPay,paye,nssf,nhif){
    const netSalary=grossPay-paye-nssf-nhif;
    return netSalary;
}


const basicSalary=Number(prompt("Enter your basic salary in Kshs:"));
const benefits =Number(prompt("Enter your benefits in Kshs:"));
// calculate gross salary
const grossPay=basicSalary+benefits;
const nssfDeduction=nssf(grossPay);
const nhifDeduction=nhif(grossPay);
const payeDeduction=paye(grossPay);
const netSalary=netPay(grossPay,payeDeduction,nssfDeduction,nhifDeduction);
 console.log(`Your net salary is ${netSalary}`);
alert(`Your net salary is ${netSalary} Kshs.`);