const numberOfRolls = document.querySelector ("#player-input")
const total = document.querySelector ('#total')
const rollDice = document.querySelector("#roll")
const allRolls = document.querySelector('#Show')
const list = document.querySelector('#list')

let diceRolls = []
let counter=0
let totalSum = 0

rollDice.addEventListener('click',function(){
 let playerInput = numberOfRolls.value

    while(playerInput>counter){
      let random =Math.floor(Math.random()*6)+1;
   diceRolls.push(random) 
   totalSum +=random
   console.log('works')
   counter +=1
}
console.log(diceRolls)
total.innerHTML ="Total "+ totalSum


    })
    allRolls.addEventListener('click',function(){
       let diceIndex=0
       while(diceIndex<diceRolls.length){
          let listNumber = document.createElement('Li')
          listNumber.innerHTML=diceRolls[diceIndex]
          list.appendChild(listNumber)



         diceIndex+=1
       }

    })



//System.out.println("Sum:"+sum);


    //let newCounterValue = Number(counter.innerHTML) + 1;