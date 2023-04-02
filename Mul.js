const n1 = Math.ceil(Math.random()*10);
const n2 = Math.ceil(Math.random()*10);

const q1 = document.getElementById("qn");

const in1 = document.getElementById("input");

const f1 = document.getElementById("form");

const sc = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if(!score)
{
    score = 0;
}
sc.innerText = `score: ${score}`
q1.innerText = `What is ${n1} multiply by ${n2}?`;

const CorrectAns = n1*n2;

f1.addEventListener("submit", ()=>{
    const UserAns = +in1.value 
    if(UserAns == CorrectAns){
        score++;
        uplocstorage()
    }
    else{
        score--;
        uplocstorage()
    }
    })
function uplocstorage()
{
    localStorage.setItem("score", JSON.stringify(score))
}






