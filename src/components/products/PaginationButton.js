import React from 'react'
import ReactPaginate from 'react-paginate'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const PaginationButton = () => {
    return (
        <div>
            <ReactPaginate
                breakLabel={<span className='break-label'>...</span>}
                nextLabel={
                    <span className='button-right'>
                        <BsChevronRight />
                    </span>
                }

                pageRangeDisplayed={5}
                pageCount={50}
                previousLabel={
                    <span className='button-left'>
                        <BsChevronLeft />
                    </span>
                }
                containerClassName='pagination'
                pageClassName='page-item'
                activeClassName='active'
            />
        </div>

    )
}

export default PaginationButton