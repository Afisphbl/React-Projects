import React from "react";
import "../styles/SkeletonLoader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="weather-card-skeleton">
        <div className="skeleton-header skeleton-pulse"></div>
        <div className="skeleton-subheader skeleton-pulse"></div>

        <div className="skeleton-main">
          <div className="skeleton-temp skeleton-pulse"></div>
          <div className="skeleton-icon skeleton-pulse"></div>
        </div>

        <div className="skeleton-details">
          <div className="skeleton-detail-item skeleton-pulse"></div>
          <div className="skeleton-detail-item skeleton-pulse"></div>
          <div className="skeleton-detail-item skeleton-pulse"></div>
        </div>
      </div>

      <div className="forecast-skeleton-container">
        <div className="skeleton-forecast-title skeleton-pulse"></div>
        <div className="skeleton-forecast-list">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="skeleton-forecast-item skeleton-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
