// 1. First select all the hands.

const secondHand_div = document.querySelector('.second-hand');
const minutesHand_div = document.querySelector('.min-hand');
const hoursHand_div = document.querySelector('.hour-hand');

// 2.Create a function that moves each hand according to the corresponding rotation degrees.
function moveHands(secDegrees,minDegrees,hourDegrees) {
      secondHand_div.style.transform = `rotate(${secDegrees}deg)`;
      minutesHand_div.style.transform = `rotate(${minDegrees}deg)`;
      hoursHand_div.style.transform = `rotate(${hourDegrees}deg)`;

    }


// 1.1.Along with the setInterval() method, let's create a function that grabs the current date every second and then assigns the hours, minutes and seconds to the corresponding variables.
    function grabDate() {
      var d = new Date();
      var seconds = d.getSeconds();
      var minutes = d.getMinutes();
      var hours = d.getHours();
      // 1.2. Let's turn each second, minute and hour into a degree:
      var secondstoDegrees = ((seconds/60)*360)+90;
      var minutestoDegrees = ((minutes/60)*360)+90;
      var hourstoDegrees = ((hours/12)*360)+90;
//3. Let's call the moveHands function, to rotate the three hands according to the corresponding degrees.
      moveHands(secondstoDegrees, minutestoDegrees, hourstoDegrees);
    }
//1.1 > Let's call the setInterval method to grab the current Date every second.
    setInterval(grabDate, 1000);