let questionInfo = [
    {
        question: "1. What is Capital Of India",
        optionA: "Rajastan",
        optionB: "Mumbai",
        optionC: "Delhi",
        optionD: "Kolkata",
        correct: "optionC"
    },
    {
        question: "2. What is Capital Of Jarkhand",
        optionA: "Ranchi",
        optionB: "Dehradun",
        optionC: "Delhi",
        optionD: "Kolkata",
        correct: "optionA"
    },
    {
        question: "3. What is Capital Of Telangana",
        optionA: "Amaravathi",
        optionB: "Banglore",
        optionC: "Hyderabad",
        optionD: "Chennai",
        correct: "optionC"
    },
    {
        question: "4. What is Capital Of Rajastan",
        optionA: "Jaipur",
        optionB: "Raipur",
        optionC: "Bhuvaneshwar",
        optionD: "Thiruvanantapuram",
        correct: "optionA"
    },
    
]
let myButton = document.querySelector("button")
let myh3 = document.querySelector("h3")
let mycity1 = document.querySelector(".city1")
let mycity2 = document.querySelector(".city2")
let mycity3 = document.querySelector(".city3")
let mycity4 = document.querySelector(".city4")
let answers = document.querySelectorAll(".answer")
let scoreArea = document.querySelector(".scoreArea")
let score = 0



let questionPosition = 0
function loadQuestion(){
          myh3.textContent  =  questionInfo[questionPosition].question
          mycity1.textContent     = questionInfo[questionPosition].optionA
          mycity2.textContent     = questionInfo[questionPosition].optionB
          mycity3.textContent     = questionInfo[questionPosition].optionC
          mycity4.textContent     = questionInfo[questionPosition].optionD

}
loadQuestion()
function getCheckedAnswered(){
     let answer
  answers.forEach((curAnsEle) => {
    if(curAnsEle.checked){
        answer = curAnsEle.id
    }

  })
   return answer; 
}
function deselectAll(){
    answers.forEach((curAnsEle) => curAnsEle.checked = false)
       
}


myButton.addEventListener("click" , function(){



    let checkedAnswer = getCheckedAnswered()
    console.log(checkedAnswer);


    if(checkedAnswer===questionInfo[questionPosition].correct){
        score++
    };
       questionPosition++

       deselectAll()
    if(questionPosition < questionInfo.length)
    {
        loadQuestion()
    }
    else{
        scoreArea.innerHTML = `<h3>You Scored ${score}/ ${questionInfo.length}</h3>
        <button class="btn" onclick="location.reload()">Play again</button>`
        scoreArea.classList.remove('scoreArea')
    }
})