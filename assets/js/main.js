// DOM - DOCUMENT OBJECT MODEL
// BOM - BROWSER OBJECT MODEL
// Clipboard api
// window.navigator.geolocation.getCurrentPosition(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     if (err.code === 1) {
//       alert(
//         "Please allow us to read your location, otherwise we can not serve you properly"
//       );
//     }
//   }
// );

// element.innerHTML = `<div class="inner-wrapper">hello from inner wrapper</div>`;
// element.innerText = `<div class="inner-wrapper">hello from inner wrapper</div>`;

// Selector
// const element = document.getElementById("wrapper");
// const wrappers = Array.from(
//   document.getElementsByClassName("secondary-wrapper")
// ); // converting HTMLCollection(array-like) to Array of HTML elements

// wrappers.forEach(function (wrapper, index, array) {
//   console.log(wrapper.innerText);
// });

// const todos = [
//   {
//     text: "Do homework",
//     isDone: false,
//   },
//   {
//     text: "Eat breakfast",
//     isDone: true,
//   },
//   {
//     text: "Go to shopping",
//     isDone: false,
//   },
// ];

// const list = document.getElementById("todo-list");

// todos.forEach((todo) => {
//   const { text, isDone } = todo;
//   const listItem = document.createElement("li");

//   listItem.className = "hello";

//   if (isDone) {
//     // listItem.style.textDecoration = "line-through";
//     listItem.className = "line-through";
//   }
//   // template literals - string interpolation
//   listItem.innerText = `${text}`;

//   list.prepend(listItem);
// });

// const user = {
//     age: 23
// }

// user.age = 30;

// const heading1 = document.getElementsByClassName("hello").item(0);

// setInterval(() => {
//   heading1.classList.toggle("line-through");
//   heading1.classList.toggle("hello");
// }, 1000);

// document.querySelector
// document.querySelectorAll

// listItems.forEach(function (listItem) {
//   if (listItem.innerText.toLowerCase().includes("second")) {
//     listItem.remove();
//   }
// });

// console.log(listItems[0].previousSibling);
// console.log(listItems[1].previousElementSibling);
// console.log(listItems[0].parentElement);

// console.log(listItems[0].nextElementSibling);
// console.log(listItems[0].nextSibling);
// document.querySelector("body").remove();

// const listItems = Array.from(document.querySelectorAll(".list-item"));

// console.log(listItems[0].querySelector("div"));

// class CustomNumber {
//   constructor(number) {
//     this.number = number;
//   }

//   minus(num) {
//     this.number = this.number - num;
//     return this;
//   }

//   add(num) {
//     this.number = this.number + num;
//     return this;
//   }

//   multiply(num) {
//     this.number = this.number * num;
//     return this;
//   }

//   divide(num) {
//     this.number = this.number / num;
//     return this;
//   }

//   toString() {
//     return this.number;
//   }
// }

// const customNumber = new CustomNumber(3);

// console.log(customNumber.minus(5).add(3).minus(4).divide(2).toString()); // -1.5

// Closure

// function useState() {
//   let count = 0;

//   return [
//     count,
//     function () {
//       count++;
//       return count;
//     },
//   ];
// }

// const [state, setState] = useState(); // function // bacpac - { count: 0 }

// console.log(increment()); //1
// console.log(increment()); //2
// console.log(increment()); //3
// console.log(increment()); //4
// console.log(increment()); //5
// console.log(increment()); //6
// console.log(increment()); //7
// console.log(increment()); //8
