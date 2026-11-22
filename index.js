function change(unit) {
    const inputGroup = document.getElementById('input-group');

    if (unit === "metric") {
        inputGroup.classList.remove('imperial');
        inputGroup.innerHTML = `
            <div class="input-item">
                <p>Height</p>
                <input type="number" placeholder="0" id="height" oninput="calculateBMI()">
                <span>cm</span>
            </div>
            <div class="input-item">
                <p>Weight</p>
                <input type="number" placeholder="0" id="weight" oninput="calculateBMI()">
                <span>kg</span>
            </div>
        `;
        
}
    else {
        inputGroup.classList.add('imperial');
        inputGroup.innerHTML = `
            <div class="input-item">
                <p>Height</p>
                <input type="number" placeholder="0" id="height-ft" oninput="calculateBMII()">
                <span>ft</span>
            </div>
            <div class="input-item">
                <p>Height</p>
                <input type="number" placeholder="0" id="height-in" oninput="calculateBMII()">
                <span>in</span>
            </div>
            <div class="input-item">
                <p>Weight</p>
                <input type="number" placeholder="0" id="weight-st" oninput="calculateBMII()">
                <span>st</span>
            </div>
            <div class="input-item">
                <p>Weight</p>
                <input type="number" placeholder="0" id="weight-lbs" oninput="calculateBMII()">
                <span>lbs</span>
            </div>
        `;
    }    resetResult();
}
function resetResult() {
    document.getElementById('result').innerHTML = `
        <h2>Welcome!</h2>
        <p>Enter your height and weight and you'll see your BMI result here</p>
    `;
}
function calculateBMI() {
    
    const height = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);
  const result = document.getElementById('result');
    if (height <= 0 || weight <= 0) {
       result.innerHTML = `
            <h2>Welcome!</h2>
            <p>Enter your height and weight and you'll see your BMI result here</p>
        `;
        return;
}  
    const bmi = weight / ((height/100 ) ** 2);
     const blweight=18.5*((height/100 ) ** 2);
        const bhweight=24.9*((height/100 ) ** 2);
       let weightStatus=null;
         if (bmi < 18.5)
     weightStatus = "underweight";
     else if (bmi < 25)
     weightStatus = "a healthy weight";
    else if (bmi < 30)
    weightStatus = "overweight";
       result.innerHTML  = `<h3>Your BMI is ${bmi.toFixed(2)}</h3><p style="margin-top: 20px ;">Your BMI suggests you're ${weightStatus}, Healthy weight range: ${blweight.toFixed(2)} - ${bhweight.toFixed(2)} kg</p>`;}
    
       function calculateBMII(){ 
      
    const feet = Number(document.getElementById("height-ft").value);
    const inches = Number(document.getElementById("height-in").value);

    const stone = Number(document.getElementById("weight-st").value);
    const pounds = Number(document.getElementById("weight-lbs").value);

    const result = document.getElementById("result");

    const height = (feet * 12 + inches) * 0.0254;
    const weight = (stone * 14 + pounds) * 0.45;
   
    if (height <= 0 || weight <= 0) {
       result.innerHTML = `
            <h2>Welcome!</h2>
            <p>Enter your height and weight and you'll see your BMI result here</p>
        `;
        return;
}
        const bmi = weight / ((height ) ** 2);
     const blweight=18.5*((height ) ** 2)/ 6.3;
        const bhweight=24.9*((height ) ** 2)/ 6.3;
       let weightStatus=null;
    if (bmi < 18.5)
    weightStatus = "underweight";
else if (bmi < 25)
    weightStatus = "a healthy weight";
else if (bmi < 30)
    weightStatus = "overweight";
       console.log("Height:", height);
       result.innerHTML  = `<h3>Your BMI is ${bmi.toFixed(2)}</h3><p style="margin-top: 20px ;">Your BMI suggests you're ${weightStatus}, Healthy weight range: ${blweight.toFixed(2)} - ${bhweight.toFixed(2)} ST</p>`;
    }