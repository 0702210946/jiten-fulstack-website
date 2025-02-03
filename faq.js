<script>
    // Add click event listener to each FAQ item
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        })
    });
</script>
