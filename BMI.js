let bmi = 0;
function check() {
    let a = document.getElementById('kg').value;
    let b = document.getElementById('m').value;
    bmi=a/(Math.pow(b,2));
    if (bmi < 18.5) {
        document.getElementById('result').innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById('result').innerHTML = "Nomal";
    } else if (bmi >= 25 && bmi < 30) {
        document.getElementById('result').innerHTML = "Overweight";
    } else {
        document.getElementById('result').innerHTML = "Obese";
    }
}
