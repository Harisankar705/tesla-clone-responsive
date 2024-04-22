// var name=document.getElementById('name').style.color='red'
// name.style.color

// document.lastScrollPosition = 0;
// document.lastCentered = -1; // Initialize lastCentered with a default value
// document.addEventListener('scroll', () => {
//   const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
//   const sections = [...document.querySelectorAll('section')];
//   sections.forEach((section, index) => {
//     const sectionOffset = section.offsetTop;
//     if (window.pageYOffset >= sectionOffset && window.pageYOffset < sectionOffset + section.offsetHeight) {
//       document.lastCentered = index;
//     }
//   });
//   document.lastScrollPosition = window.pageYOffset;
// });
