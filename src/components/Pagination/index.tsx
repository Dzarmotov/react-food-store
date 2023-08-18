import ReactPaginate from "react-paginate";
import React from "react";
import styles from "./Paginate.module.scss";

type PaginationProps = {
  currentPage: number,
  onChangePaginate: (page: number) => void
}

const index: React.FC<PaginationProps> = ({ currentPage, onChangePaginate }) => {
  return (
    <ReactPaginate
      className={styles.paginate}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePaginate(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default index;
