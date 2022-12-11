import React from "react";
import {Pagination} from "react-bootstrap";

function PaginationTool(props) {
    const pagesInTool = 5;
    const pagination = props.pagination
    const size = props.pagination.size
    const current = props.pagination.current
    const count = props.pagination.count

    return (
        <Pagination>
            {current > 2 && <Pagination.First href={`./?page=${1}`}/>}
            {current === count  && count !== 1 && <Pagination.Item href={`./?page=${current - 3}`}>{current - 3}</Pagination.Item>}
            {current >= count - 1 && count !== 1 && <Pagination.Item href={`./?page=${current - 2}`}>{current - 2}</Pagination.Item>}
            {current > 1 && <Pagination.Item href={`./?page=${current - 1}`}>{current - 1}</Pagination.Item>}

            <Pagination.Item active={true} href={`./?page=${current}`}>{current}</Pagination.Item>

            {current < count && <Pagination.Item href={`./?page=${current + 1}`}>{current + 1}</Pagination.Item>}
            {current < count - 1 && <Pagination.Item href={`./?page=${current + 2}`}>{current + 2}</Pagination.Item>}
            {current === 1 && count !== 1 && <Pagination.Item href={`./?page=${current + 3}`}>{current + 3}</Pagination.Item>}
            {current < count && <Pagination.Last href={`./?page=${count}`}/>}
        </Pagination>
    );
}

export default PaginationTool