import React from 'react';
import Button from './../forms/Button/Button';
import './styles.scss';

const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return (
    <div className="load-more">
      <Button onClick={() => onLoadMoreEvt()}>Load More</Button>
    </div>
  );
};

export default LoadMore;
