import React from 'react';

import TableBody from './tableBody';
import TableHeader from './tableHeader'
const Table = ({columns, sortBy, onSort, data}) => {
    return (  
        <table className="table">
                    <TableHeader columns={columns}
                     sortBy={sortBy}
                     onSort={onSort}/>
                    <TableBody data={data} columns={columns}/>
        </table> 
    );
}
 
export default Table;