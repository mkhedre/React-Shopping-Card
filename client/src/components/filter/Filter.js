import React from 'react'
import '../../css/filter/Filter.css'
function Filter(props) {
    return (
        <div className="filter-wrapper">
            <div className='filter-title'> filter title</div>
            <div className='num-of-products'> number of products</div>
            <div value={props.size} className='filter-by-size' onChange={props.handlesize}>
                <div>Filter</div>
                <select className='filter-select' >
                    <option value='ALL'>All</option>
                    <option value='XL'>XL</option>
                    <option value='S'>S</option>
                    <option value='L'>L</option>
                    <option value='M'>M</option>
                    <option value='XXL'>XXL</option>
                </select>
            </div>
            <div value={props.sort} className='filter-by-date' onChange={props.handlesort}>
                <span>Date</span>
                <select className='filter-select'>
                    <option value='latest'>latest</option>
                    <option value='lowest'>lowest</option>
                    <option value='heighest'>heighest</option>
                </select>
            </div>
        </div>
    )
}
export default Filter