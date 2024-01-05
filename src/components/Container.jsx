import React from 'react';

const Container = ({ children, customStyles }) => {
  return (
    <div className='w-full' style={customStyles}>
      <div className='max-w-[1200px] pt-4 mb-4 mx-auto rounded-md' style={customStyles}>
        {children}
      </div>
    </div>
  );
};

export default Container;
