import React from "react";
import ResponsivePaginationComponent from "react-responsive-pagination";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <>
      <style>
        {`
/* PAGINATION CUSTOM STYLE */
.pagination {
  justify-content: center;
  display: flex;
  padding-left: 0;
  list-style: none;
  margin: 0;
}

.page-item .page-link {
  position: relative;
  display: block;
  margin: 0 2px;
  min-height: 40px;
  min-width: 40px;
  border-radius: 20px;
  text-align: center;
  line-height: 40px;
  color: red;
  text-decoration: none;
}

.page-item .page-link:hover {
  background-color: #cccccc;
}

.page-item.active .page-link {
  font-weight: 700;
  color: #cccccc;
  background: linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%); 
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
}

@media (prefers-color-scheme: dark) {
  .page-item .page-link {
    color: #cccccc;
  }

  .page-item .page-link:hover {
    background-color: #F5F5F7;
    color : #cccccc;
  }

  .page-item.active .page-link {
    background: linear-gradient(98deg, #FEAC1A 11.54%, #F84426 87.5%); 
  }

  .page-item.disabled .page-link {
    color: #6c757d;
  }
}
      `}
      </style>
      <div className="flex justify-end py-4">
        <ResponsivePaginationComponent
          current={currentPage}
          total={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default CustomPagination;
