import React from 'react';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  id: number;
  title: string;
  thumbnail: string;
  isFavorite: boolean;
  onFavoriteToggle: (id: number, isFavorite: boolean) => void;
  onShare: (id: number) => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  id,
  title,
  thumbnail,
  isFavorite,
  onFavoriteToggle,
  onShare,
}) => {
  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onFavoriteToggle(id, !isFavorite);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onShare(id);
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Link to={`/mss/resource/${id}`} className="content_bg">
        <img src={thumbnail} className="card-img-top" alt={title} />
        <div className="card-body content_bg">
          <h6 className="card-title d-flex">{title}</h6>
          <div className="d-flex justify-content-between">
            <button
              className={`btn btn-${isFavorite ? 'danger' : 'primary'}`}
              onClick={handleFavoriteToggle}
            >
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
            <button className="btn btn-secondary" onClick={handleShare}>
              Share
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ResourceCard;
