function calculatePayeeTax(salary){
    "use strict";

    const taxrates = [
        [0,24000,0.1],
        [24001,32333,0.25],
        [32334,500000,0.3],
        [500001,800000,0.325],
        [800000,0.35]
    ];
  
        let tax = 0;
        for (const[lower,upper,rate]of taxrates){
            if(salary <= upper){
                tax = salary * rate;
                break;
            }
        }

        return tax;

}
function calculateNHIF(salary){
    return salary * 0.05; 
}
function calculateNSSF(salary){
    return salary * 0.06;
}
function calculateNetSalary(salary,payeeTax,nhif,nssf){
    return salary - payeeTax - nhif -nssf;
}
function main(){
    const salary = 15000;
    const benefits = 5000;
    constPayeeTax = calculatePayeeTax(salary + benefits);
    const nhif = calculateNHIF(salary);
    const nssf = calculateNSSF(salary);
    const netSalary = calculateNetSalary(salary + benefits + payeeTax + nhif + nssf);

        console.log("Payee Tax:",payeeTax);
        console.log("NHIF Deduction:", nhif);
        console.log("NSSF Deductions:",nssf);
        console.log("Net Salary:",netSalary);


}
main();