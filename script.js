const menu = document.querySelector('.nav');
const menuBtn = document.querySelector(".menu-btn");
const message = document.querySelector('#message');
const form = document.getElementById("loveMessage");
//const output1 = document.getElementById('output1');
const percent_input = document.querySelector('#percent_input');
const output2 = document.getElementById('output2');
const div = document.querySelector(".messagecontainer");

//menu
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
});

//form
form.addEventListener('submit', function(e) {
   e.preventDefault();
    const msg = document.getElementById('message').value;
    if(msg != ""){
    const output1 = document.createElement("ul");
    output1.id = "output1";
    div.appendChild(output1);
    const li = document.createElement('li');
    li.textContent = msg;
    output1.appendChild(li);
    form.reset();}
    else{ alert("please fill it!")}
  });
    
// button donation
const donationAmount=document.querySelectorAll(".dollar");

donationAmount.forEach((button)=>button.addEventListener("click",(e)=>{
  const value= parseInt(e.target.value);
  // console.log(value);
  let donationAmmount=parseInt(output2.innerHTML);
   output2.innerHTML = donationAmmount + value;
}))

//input donation
percent_input.addEventListener('input', (e)=>{
  const value= parseInt(e.target.value);
  // console.log(value);
   output2.innerHTML = donationAmmount + value;
})
