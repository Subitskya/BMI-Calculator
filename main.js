const btn = document.getElementById('calculate');


btn.addEventListener('click', function(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if(height == '' || weight == ''){
        alert('Please fill out the input fields')
        return;
    }

    // BMI = weight in KG/(hieght in m * height in m)

    height = height / 100;

    let BMI = (weight / (height * height));
    BMI = BMI.toFixed(2);
    // console.log(BMI);

    document.getElementById('result').innerHTML = BMI;

    let status = '';

    if (BMI < 18.5) {
        status = "Underweight";
    } else if (BMI >= 18.5 && BMI <= 24.9) { 
        status = "Healthy";
    } else if (BMI >= 25 && BMI <= 29.9) {
        status = "Overweight";
    } else if (BMI >= 30) {
        status = "Obese";
    }

    document.getElementsByClassName('comment')[0].innerHTML = `Comment: you are <span id="comment">${status}</span`;
});