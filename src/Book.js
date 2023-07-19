const Book = (props) => {
  const { number, src, title, author } = props;

  return (
    <article className="book">
        
      <img src={src} alt={title} />
      <h2>{title}</h2>
      <button>display title</button>
      <h4>{author.toUpperCase()}</h4>
      <span className="number">#{number+1}</span>
    </article>
  );
};

export default Book