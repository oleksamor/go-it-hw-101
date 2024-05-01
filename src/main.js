// document.getElementById('parent-list').
//   addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         const items = document.querySelectorAll('li');
//         items.forEach(function(item) {
//             item.classList.remove('selected');
//         })
//         event.target.classList.add('selected');
//     }
// });
const paragraph = document.getElementById("text");
paragraph.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "red";
});