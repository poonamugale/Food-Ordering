// const heading = Reat.createElement("h1", {}, "Hello word");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render("heading");
// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child", React.createElement("h1", {}, 'i'm an h1 tag));
//  )
// function onClick() {
//   console.log("hello");
// }
// let btn = document.getElementById("btn");
// btn.addEventListener("click", onClick);

btn.addEventListener("click", function () {
  btn.style.backgroundColor = "aqua";
});

btn.addEventListener("mouseover", function () {
  console.log("Mouse over Event");
});
btn.addEventListener("mouseout", function () {
  console.log("Mouse out Event");
});
