// src/components/ResourceCard.tsx
import React from 'react';

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
    const handleFavoriteToggle = () => {
        onFavoriteToggle(id, !isFavorite);
      };
    
      const handleShare = () => {
        onShare(id);
      };
  return (
    <div className="card p-0 content_bg">
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body content_bg">
        <h5 className="card-title">{title}</h5>
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
    </div>
  );
};

export default ResourceCard;
