import React from 'react';

const Filter = props => {
    const { keyword, type, addFilter, del, deleteFilter } = props;

    return(
        <>
        <small 
            className={!del ? "filter badge" : "filter"}
            data-type={type}
            onClick={!del ? addFilter : null}
        >
            {keyword}
        </small>
        
        {del && (
            <small
                className="delete"
                onClick={deleteFilter}
            >
                X
            </small>
        )}
        </>
    );
};

export default Filter;
