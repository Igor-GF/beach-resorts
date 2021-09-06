import React from 'react';

const Title = ({ title, children }) => {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div></div>
      {children}
    </div>
  )
}

export default Title;
