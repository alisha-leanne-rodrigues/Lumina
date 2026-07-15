import "./NewsCard.css";

function NewsCard({
  image,
  title,
  description,
  source,
  publishedAt,
  url,
}) {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-image" />

      <div className="news-info">

        <span className="news-source">
          {source}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <small>{publishedAt}</small>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More →
        </a>

      </div>
    </div>
  );
}

export default NewsCard;