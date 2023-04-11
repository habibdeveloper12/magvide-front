import React from 'react';

const ButtonP = ({ title }) => {
  return (
    <button className="border-2 bg-primary border-solid text-lg font-medium font-pop rounded-lg border-primary text-white px-6 py-2 hover:font-medium hover:bg-white hover:text-primary">
      {title}
    </button>
  );
};

export default ButtonP;
