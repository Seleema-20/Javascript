// const btn = document.getElementById("btn");

// const title = document.getElementById("title");

// btn.addEventListener("click", () => {

//   title.innerText = " Seleema";
//     document.body.style.backgroundColor="brown";

// });

// let count=0;
// const counte=document.getElementById("count");
// const btn=document.getElementById("incr")
// const btn2=document.getElementById("decr")
// btn.addEventListener("click",()=>
// {
//     count++;
//     counte.innerText=count;
// });

// btn2.addEventListener("click",()=>
// {
//     count--;
//     counte.innerText=count;
// });

// const btn = document.getElementById("btn");
// const result=document.getElementById("result");

// btn.addEventListener("click", () => {

//   const value = document.getElementById("username").value;

//   result.innerText=value;

// });

// const btn=document.getElementById("btn");
// btn.addEventListener("click",()=>
// {
//     const p=document.createElement("p");
//     p.innerText="New parqa added";

//     document.body.appendChild(p);
// });

// const btn=document.getElementById("btn");
// const para=document.getElementById("para");
// btn.addEventListener("click",()=>{
//     para.remove();
// });

const input = document.getElementById("taskInput");

const btn = document.getElementById("addBtn");

const list = document.getElementById("list");

btn.addEventListener("click", () => {

  const li = document.createElement("li");

  li.innerText = input.value;

  list.appendChild(li);

  input.value = "";

});