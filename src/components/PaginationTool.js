import React from "react";
import {Pagination} from "react-bootstrap";

function PaginationTool(props) {
    const pagesInTool = 5;
    let maxPage = props.length;
    let currentPage = Number(props.current);
    return (
        <Pagination>
            <Pagination.First/>
            <Pagination.Item>{currentPage - 1}</Pagination.Item>
            <Pagination.Item active>{currentPage}</Pagination.Item>
            <Pagination.Item>{currentPage + 1}</Pagination.Item>
            <Pagination.Item>{currentPage + 2}</Pagination.Item>
            <Pagination.Last/>
        </Pagination>
    );
}

export default PaginationTool