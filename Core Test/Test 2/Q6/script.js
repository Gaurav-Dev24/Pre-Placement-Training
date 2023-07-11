const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
  }
});
