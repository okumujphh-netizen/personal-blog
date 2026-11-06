function Article({ title, date, preview }) {
  // Displays the details of one blog article.
  return (
    <article>
      <h3>{title}</h3>

      <small>{date}</small>

      <p>{preview}</p>
    </article>
  );
}

export default Article;