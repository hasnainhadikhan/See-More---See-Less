const content = document.getElementById('content');
const btn = document.getElementById('show-more-btn');
let expanded = false;

btn.addEventListener('click', function() {
  if (!expanded) {
    content.style.maxHeight = content.scrollHeight + 'px';
    btn.textContent = 'See Less';
  } else {
    content.style.maxHeight = '100px'; 
    btn.textContent = 'See More';
  }
  expanded = !expanded;
});