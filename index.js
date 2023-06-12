function moveDodgerLeft() {
    const left = positionToInteger(DODGER.style.left);
  
    if (left > 0) {
      DODGER.style.left = `${left - 4}px`;
    }
  }
  
  function moveDodgerRight() {
    const left = positionToInteger(DODGER.style.left);
  
    if (left < GAME_WIDTH - DODGER_WIDTH) {
      DODGER.style.left = `${left + 4}px`;
    }
  }
  
  function positionToInteger(position) {
    return parseInt(position.split('px')[0]) || 0;
  }
  
  const DODGER = document.getElementById('dodger');
  const GAME_WIDTH = 400;
  const DODGER_WIDTH = 40;
  