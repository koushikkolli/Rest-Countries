import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (totalPosts > postsPerPage){
    return (
        <nav className="d-flex justify-content-around" style={{marginTop:"20px"}}>
          <ul className='pagination'>
            {pageNumbers.map(number => (
              <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} href='!#' className='page-link'>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
  }
  else{
      return null
  }
  
};

export default Pagination;