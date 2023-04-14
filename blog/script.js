<script>
  const articles = document.querySelectorAll('.blog article');
  const preview = document.querySelector('.preview video');

  articles.forEach(article => {
    const button = article.querySelector('button');
    const source = article.querySelector('source');

    button.addEventListener('click', () => {
      preview.src = source.src;
      preview.style.display = 'block';
    });
  });
</script>
