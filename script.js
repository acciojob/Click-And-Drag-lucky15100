<script>
  const items = document.querySelector('.items');
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  items.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    items.classList.add('active');
    startX = e.pageX - items.offsetLeft;
    scrollLeft = items.scrollLeft;
  });

  items.addEventListener('mouseleave', () => {
    isMouseDown = false;
    items.classList.remove('active');
  });

  items.addEventListener('mouseup', () => {
    isMouseDown = false;
    items.classList.remove('active');
  });

  items.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - items.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
    items.scrollLeft = scrollLeft - walk;
  });
</script>
