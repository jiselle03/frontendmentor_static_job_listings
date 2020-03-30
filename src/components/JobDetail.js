import React from 'react';

const JobDetail = props => {
    const { name, info } = props;

    return(
        <div>
            {name === "details" || name === "position" ? 
                (
                    <p
                        className={name}
                    >
                        {info}
                    </p>
                ) 
            :
                (
                <small 
                    className={name}
                >
                    {info}
                </small>
                )
            }
        </div>
    );
};

export default JobDetail;
