function updateSliderValue(sliderID, valueID){
    //store slider value in the variable called sliedrValue
    let sliderValue = document.getElementById(sliderID).value;
    //change the DOM based on the sliderValue
    document.getElementById(valueID).innerHTML = sliderValue;
}

function evaluateResult(){
    // TODO: write some code to calculate the user input
    console.log('running')
    const answers = new URLSearchParams(window.location.search);
    var total = 0;
    var creeps = answers.get('csm');
    var intCreeps = parseInt(creeps);
    total += intCreeps;
    var kpp = answers.get('kpp');
    var intKpp = parseInt(kpp);
    total += intKpp;
    var wardScore = answers.get('wards');
    var intWardScore = parseInt(wardScore);
    total += intWardScore;
    var goldPer = answers.get('goldearned');
    var intGoldPer = parseInt(goldPer);
    total += intGoldPer;
    var kda = answers.get('kda');
    var intKda = parseInt(kda);
    total += intKda;
    var objControl = answers.get('objectives');
    var intObjControl = parseInt(objControl);
    total += intObjControl;
    var teamFightDurability = answers.get('tfd');
    var intTeamFightDurability = parseInt(teamFightDurability);
    total += intTeamFightDurability;
    var cons = answers.get('consistency');
    var intCons = parseInt(cons);
    total += intCons;
    console.log(total)
    return total;
}
function storeData(){
    let score = evaluateResult();
    window.localStorage.setItem('score', score);
}

function readData(){
    //get the score from localstorage
    let result = window.localStorage.getItem('score');
    //pass the data to DOM
    document.getElementById('score').innerHTML = result;
}

function getPlacement(){

    var mmr = evaluateResult();
    var rank = "unranked";
    var icon = document.createElement('img');
    icon.src = 'rank/bronze.webp';

    if (mmr < 10){
        rank = 'Bronze';
        icon.src = 'rank/bronze.webp';
    } else if (mmr < 20){
        rank = 'Silver';
        icon.src = 'ranks/silver.webp';
    } else if (mmr < 30){
        rank = 'Gold';
        icon.src = 'ranks/gold.webp';
    } else if (mmr < 40){
        rank = 'Platinum';
        icon.src = 'ranks/platinum.webp';
    } else if (mmr < 50){
        rank = 'Diamond';
        icon.src = 'ranks/diamond.webp';
    } else if (mmr < 60){
        rank = 'Master';
        icon.src = 'ranks/master.webp';
    }else if (mmr < 70){
        rank = 'Grand Master';
        icon.src = 'ranks/grandmaster.webp';
    } else {
        rank = 'Challenger';
        icon.src = 'ranks/challenger.webp';
    }
    // document.body.appendChild(icon);
    // document.querySelector('.ranks').appendChild(icon);
    // document.getElementById(icons).appendChild(icon);
    // console.log(rank);
    return rank;
}
// var slider = document.getElementById("cs");
// var output = document.getElementById("creepscore");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }

// var slider = document.getElementById("kp");
// var output = document.getElementById("kps");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//     output.innerHTML = this.value;
// }



// var slider = document.getElementById("ward");
// var output = document.getElementById("ws");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }

// var slider = document.getElementById("gold");
// var output = document.getElementById("gpm");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }

// var slider = document.getElementById("akda");
// var output = document.getElementById("k");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }

// var slider = document.getElementById("obj");
// var output = document.getElementById("objc");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }

// var slider = document.getElementById("tf");
// var output = document.getElementById("atfd");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }

// var slider = document.getElementById("c");
// var output = document.getElementById("con");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
// output.innerHTML = this.value;
// }