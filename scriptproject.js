const items = Array.from(document.querySelectorAll(".thenavigation-button"));

console.log("items: ", items);

items.forEach((item) => {
  item.onclick = () => {
    console.log("item: ", item);
    item.parentElement.parentElement.classList.toggle("change");
  };
});



const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", 
"#afeee"]; 

Array.from(document.querySelectorAll('.thenav-link')).forEach((link, idx) => {
  link.style.backgroundColor = colors[idx]
}); 

 
 
const theContainer = document.querySelector('.thecontainer');
const toggleNavEl = document.querySelector('.open-thenavbar-icon');

toggleNavEl.addEventListener('click', () => {
  theContainer.classList.toggle('change');
});


document.querySelector('.close-thenavbar-icon').addEventListener('click', () => {
  theContainer.classList.remove('change');
});
