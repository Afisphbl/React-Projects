import "../styles/SkeletonLoader.css";

function SkeletonLoader() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-info">
        <div className="skeleton-name"></div>
        <div className="skeleton-details"></div>
      </div>
    </div>
  );
}

export default SkeletonLoader;
