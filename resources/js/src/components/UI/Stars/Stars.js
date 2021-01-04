import React from 'react';

// import '../../../assets/css/star-rating-svg.css';

export default ({ mark, readOnly }) => <div className={readOnly ? "read-only-stars" : "ranking-stars"} data-rating={mark} />;