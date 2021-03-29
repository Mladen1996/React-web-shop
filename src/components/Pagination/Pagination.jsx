import React from 'react';
import useStyles from "./styles";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const classes = useStyles();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={classes.pageItem}>
            <p onClick={() => paginate(number)} className={classes.pageLink}>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;