let resume=`[{
    "Name": "Sathish V",
    "MobileNumber": "9361352232",
    "Email id": "sathishvenkatrajan0108@gmail.com",
    "Location": "India",
    "Career Objective": "Recent graduate seeking a position in an esteemed organization to apply my professional skills to design and develop the necessity as per the requirement specification.",
    "Undergraduate degree": " K Ramakrishnan college Technology,Trichy, BE in ECE(2018-2022)",
    "Higher Seconday Education": "SVV Higher secondary school, Trichy(2015-2016)",
    "Secondary School Education": "SRV Mat Higher secondary school,Namakkal(2013-2014)",
    "Programming skills": "Javascript",
    "Tools": "GitHub",
    "Technologies": "HTML,CSS",
    "Acedemic Project": "Automation Agriculture and Irrigation Management",
    "Project Discripton": "With the help of raspberry pi pico microcontroller configured with micro python assembled with various sensors,the Iot setup is placed in the agricultural field to measure various soil parameters and to control the water levels",
    "Declaration": "I hereby confirm and verify all the facts mentioned above and I hold the responsiblity of their aunthenticity and correctness"
}]`
let resume1=JSON.parse(resume);
console.log(resume1);
// For loop:
for(let i=0;i<resume1.length;i++){
    console.log(resume1[i]);
}

// For in loop:
for(let i in resume){
    console.log(resume1[i]);
}

//For of loop:
for(let i of resume1){
    console.log(i);
}

//For Each loop:
resume1.forEach(function(JsonResume){
    console.log(JsonResume);
})
    

