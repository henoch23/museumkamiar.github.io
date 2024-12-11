const navItems = document.querySelectorAll('nav ul li a');
navItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.color = '#ff004f';
    item.style.transform = 'cale(1.1)';
  });
  item.addEventListener('mouseout', () => {
    item.style.color = '#fff';
    item.style.transform = 'cale(1)';
  });
});

// Add event listener to header text
const headerText = document.querySelector('.header-text h1');
headerText.addEventListener('mouseover', () => {
  headerText.style.textShadow = '0 0 10px #ff004f';
});
headerText.addEventListener('mouseout', () => {
  headerText.style.textShadow = 'none';
});

// Add event listeners to services list items
const servicesListItems = document.querySelectorAll('.services-list div');
servicesListItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.background = '#ff004f';
    item.style.transform = 'translateY(-10px)';
    item.style.boxShadow = '0 0 10px #ff004f';
  });
  item.addEventListener('mouseout', () => {
    item.style.background = '#262626';
    item.style.transform = 'translateY(0)';
    item.style.boxShadow = 'none';
  });
});