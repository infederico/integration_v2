import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, itemsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(826 / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.pagination}>
      {pageNumbers?.map((number) => (
        <label key={number}>
          <button
            className={`${styles.paginationButton} ${number === currentPage ? styles.active : ""}`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </label>
      ))}
    </ul>
  );
};

export default Pagination;

