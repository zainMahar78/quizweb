const divToDisplayQuestions = document.getElementById("divToDisplayQuestions");
const questions = [
    {
        question: "who is the current prime minister of Pakistan?",
        text:  [{answer: "Imran Khan", correct: false},
            {answer: "Nawaz Sharif", correct: false},
            {answer: "Shahid Khaqan Abbassi", correct: false},
            {answer: "Shahbaz Sharif", correct: true}]
    },
    {
        question: "The capital of France is",
        text: [{answer: "Berlin", correct: false},
            {answer: "Paris", correct: true},
            {answer: "London", correct: false},
            {answer: "Munich", correct: false}]
    },
    {
        question: "The Berlin Wall fell on ",
        text: [{answer: "9 November 1989",correct: true},
            {answer: "9 July 1989", correct: false},
            {answer: "9 November 1988", correct: false},
            {answer: "9 July 1988", correct: false}
        ]
    },
    {
        question: "The construction of great wall of China began in: ",
        text: [{answer: "7th century BC", correct: true},
            {answer: "8th century BC", correct: false},
            {answer: "9th Century AD", correct: false},
            {answer: "7th century AD", correct: false}]
    },
    {
        question: "The current interior minister of Pakistan is",
        text: [{answer: "Ejaz Shah", correct: false},
            {answer: "Mohsin Naqvi", correct: true},
            {answer: "Chaudary Nisar Ali Khan", correct: false},
            {answer: "Hina Rabbani Khar", correct: false}]
    }
]
let currentIndex = 0;
function showQUiz(){
    const div = document.createElement("div");
    div.innerText =currentIndex+1 + questions[currentIndex].question;
    divToDisplayQuestions.appendChild(div);
questions[currentIndex].text.forEach((element, index) => {
    const divForOptions = document.createElement("div");
    divForOptions.classList.add("form-check");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.classList.add("form-check-input");
    input.id = `radioDefault${index}`;
    input.value = element.correct;
    const label = document.createElement("label");
    label.classList.add("form-check-label");
    label.htmlFor = input.id;
    label.innerText = element.answer;
    divForOptions.appendChild(input);
    divForOptions.appendChild(label);
    div.appendChild(divForOptions);
});
    if(input.value === true || input.value === false){
        const btn = document.createElement("button");
        btn.type = "button";
        btn.classList.add("btn btn-primary");
        btn.innerText = "Next";
    }
}
function startQuiz(){
    showQUiz();
}
startQuiz();
