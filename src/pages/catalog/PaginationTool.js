import React from "react";
import {Pagination} from "react-bootstrap";
import {Link} from "react-router-dom";

function PaginationTool(props) {
    const pagesInTool = 5;
    const pagination = props.pagination
    const size = props.pagination.size
    const current = props.pagination.current
    const count = props.pagination.count

    return (
        <Pagination>
            {current > 2 && <Pagination.First href={`/dish?page=${1}`}/>}
            {current === size && <Pagination.Item href={`/dish?page=${current - 3}`}>{current - 3}</Pagination.Item>}
            {current > size - 3 && <Pagination.Item href={`/dish?page=${current - 2}`}>{current - 2}</Pagination.Item>}
            {current > 1 && <Pagination.Item href={`/dish?page=${current - 1}`}>{current - 1}</Pagination.Item>}

            <Pagination.Item active={true} href={`/dish?page=${current}`}>{current}</Pagination.Item>

            {current < size && <Pagination.Item href={`/dish?page=${current + 1}`}>{current + 1}</Pagination.Item>}
            {current < size - 1 && <Pagination.Item href={`/dish?page=${current - 1}`}>{current + 2}</Pagination.Item>}
            {current > 1 && <Pagination.Item href={`/dish?page=${current + 3}`}>{current - 1}</Pagination.Item>}
            {current < size && <Pagination.Last href={`/dish?page=${size}`}/>}
        </Pagination>
    );
}

export default PaginationTool