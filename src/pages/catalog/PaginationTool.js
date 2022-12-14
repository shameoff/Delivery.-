import React from "react";
import {Pagination} from "react-bootstrap";

function PaginationTool(props) {
    const current = props.pagination.current
    const count = props.pagination.count
    console.log(current)
    return (
        <Pagination className="mt-3 justify-content-center">
            {current > 2 && <Pagination.First onClick={e => props.onChange(1)}/>}
            {current === count  && count !== 1 && <Pagination.Item onClick={e => props.onChange(current - 3)}>{current - 3}</Pagination.Item>}
            {current >= count - 1 && count !== 1 && current > 1 && <Pagination.Item onClick={e => props.onChange(current - 2)}>{current - 2}</Pagination.Item>}
            {current > 1 && <Pagination.Item onClick={e => props.onChange(current - 1)}>{current - 1}</Pagination.Item>}

            <Pagination.Item active={true} onClick={e => props.onChange(current)}>{current}</Pagination.Item>

            {current < count && <Pagination.Item onClick={e => props.onChange(current + 1)}>{current + 1}</Pagination.Item>}
            {current < count - 1 && <Pagination.Item onClick={e => props.onChange(current + 2)}>{current + 2}</Pagination.Item>}
            {current === 1 && count !== 1 && <Pagination.Item onClick={e => props.onChange(current + 3)}>{current + 3}</Pagination.Item>}
            {current < count && <Pagination.Last onClick={e => props.onChange(count)}/>}
        </Pagination>
    );
}

export default PaginationTool