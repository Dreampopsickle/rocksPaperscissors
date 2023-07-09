console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2: 
      return 'scissors';
      break;
  }
};

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a Tie!'
  };
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!'
    } else {
      return 'You win!'
    } 
  };
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!'
    } else {
      return 'You win!'
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins'
    } else {
      return 'You win!'
    }
  }
  if (userChoice === 'bomb') {
    return 'You win! The authorities are on their way. Please do not resist.'
  }
};

const playGame= () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`Computer threw: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();