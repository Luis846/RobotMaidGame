let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";

const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

const startButton = document.getElementById('start');

let numClosedDoor = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }else {
    return false;
  }
}

const isClicked = (door) => {
  if(door.src === closedDoorPath){
    return false;
  } else {
    return true;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
    
  }else if(isBot(door)){
    gameOver();
  }  
}

let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  
  if(choreDoor === 0) {
     openDoor1 = botDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = beachDoorPath;
    
  } else if(choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
     openDoor3 = beachDoorPath;
   
  } else {
      openDoor3 = botDoorPath;
     openDoor2 = spaceDoorPath;
   openDoor1 = beachDoorPath;
  };
};



door1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying === true){
    doorImage1.src = openDoor1;
    playDoor(door1);
  }  
};

door2.onclick = () =>{
 if(!isClicked(doorImage2) && currentlyPlaying === true){
   doorImage2.src = openDoor2;
    playDoor(door2);
 }                           
};

door3.onclick = () =>{
  if(!isClicked(doorImage3) && currentlyPlaying === true){
     doorImage3.src = openDoor3;
     playDoor(door3);
  }
};

const startRound = () =>{
     doorImage1.src = closedDoorPath;
     doorImage2.src = closedDoorPath;
     doorImage3.src = closedDoorPath;
     numClosedDoors = 3;
     startButton.innerHTML = 'Good Luck';
     currentlyPlaying = true;
     randomChoreDoorGenerator();
  };

startButton.onclick = () => {
    if(!currentlyPlaying){
        startRound();
   }
};
  const gameOver = (status) =>{
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }else{
    startButton.innerHTML = 'Game over! Play again?';
  } currentlyPlaying = false;
}
  
startRound();