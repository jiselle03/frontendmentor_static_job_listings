import React from 'react';

import CompanyLogo from './CompanyLogo';
import JobDetail from './JobDetail';
import Filter from './Filter';

const JobPost = ({ job, addFilter }) => {
    return(
        <div 
            className={job.featured ? "job-post emphasis" : "job-post"}
            data-role={job.role}
            data-level={job.level}
            data-languages={job.languages ? job.languages : null}
            data-tools={job.tools ? job.tools : null}
        >
            <CompanyLogo logo={job.logo} />
            <div className="job-info">
                <div className="top-line">
                    <JobDetail name="company" info={job.company} />
                    <JobDetail name={job.new ? "new pill" : "hidden"} info="NEW" />
                    <JobDetail name={job.featured ? "featured pill" : "hidden"} info="FEATURED" />
                </div>

                <div className="middle-line">
                    <JobDetail name="position" info={job.position} />
                    
                    <div className="keywords">
                        <Filter 
                            keyword={job.role}
                            type="role" 
                            addFilter={addFilter} 
                        />
                        <Filter 
                            keyword={job.level} 
                            type="level"
                            addFilter={addFilter} 
                        />
                        
                        {job.languages && job.languages.map(language => (
                            <Filter 
                                key={language} 
                                keyword={language} 
                                type="languages"
                                addFilter={addFilter} 
                            />
                        ))}
                        {job.tools && job.tools.map(tool => (
                            <Filter 
                                key={tool}
                                keyword={tool}
                                type="tools"
                                addFilter={addFilter}
                            />
                        ))}
                    </div>
                </div>

                <JobDetail name="details" info={`${job.postedAt} • ${job.contract} • ${job.location}`} />
            </div>
        </div>
    );
};

export default JobPost;
