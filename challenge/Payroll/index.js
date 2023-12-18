function calculatePayeTax(salary){
    // it enables strictmode that enables detection of errors, Improved perfomance etc 
    "use strict";
// declared a variable in an array method to enter the monthly salaries and their percentage 
// deduction rates
    const taxrates = [
        [0,24000,0.1],
        [24001,32333,0.25],
        [32334,500000,0.3],
        [500001,800000,0.325],
        [800000,0.35]
    ];
//   initialzes the tax variable to 0
        let tax = 0;
        for (const[lower,upper,rate]of taxrates){
            // checks if the salry falls in the above tax bracket
            if(salary <= upper){
                // calculates using the given rate and breakout  the loop
                tax = salary * rate;
                break;
            }
        }
// return the tax calculated
        return tax;

}
// to calculate NHIF based on salary
function calculateNHIF(salary){         
    // calculates the NHIF deduction with a five percent rate
    return salary * 0.05; 
}
// to calculate nssf based on salary
function calculateNSSF(salary){
    // calculates the nssf deduction with a six percent rate
    return salary * 0.06;
}
// to calculate using salary,payeetax,nhif and nssf
function calculateNetSalary(salary,PayeTax,nhif,nssf){
    return salary - PayeTax - nhif -nssf;
}
function main(){
    // sample of salary and benefits
    const salary = 15000;
    const benefits = 5000;
    // calculate Payee tax by adding salary and benefits
    const PayeTax = calculatePayeTax(salary + benefits);
    // calculates NHIF based on the salary
    const nhif = calculateNHIF(salary);
    // calculates NSSF based on salary
    const nssf = calculateNSSF(salary);
    // calculates netSalary base 0n all the above
    const netSalary = calculateNetSalary(salary + benefits + PayeTax + nhif + nssf);
// logs out the above calculated values
        console.log("Payee Tax:",PayeTax);
        console.log("NHIF Deduction:", nhif);
        console.log("NSSF Deductions:",nssf);
        console.log("Net Salary:",netSalary);


}
main();

// Added userInput that prompts the user to enter the Salary and the benefits when runned in liveserver.
function getUserSalaryandBenefits (){
    const salary = parseFloat(prompt("Enter your Salary:"));
    const benefits = parseFloat(prompt("Enter your Benefits:"));
    return {salary,benefits};
}
const userInput = getUserSalaryandBenefits();
const {salary, benefits} = userInput;
main(salary, benefits);