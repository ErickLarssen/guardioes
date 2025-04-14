let interval = null;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function randomLetter(){
  const randomNumber = Math.floor(Math.random() * letters.length)
  return letters[randomNumber];
}

function changeName(newName){
  const name = document.getElementById('member__name');
  name.innerText = newName
  name.setAttribute("data-value", newName)
  
  let interation = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    let text = name.innerText.split("")
    
    text = text.map((_, index) => {
      const isCorrectLetter = index < interation
      return isCorrectLetter ? newName[index] : randomLetter()
    })
    
    name.innerText = text.join("");
    if(interation >= newName.length){
      clearInterval(interval);
    }
    
    interation += 1;
  }, 60);
}