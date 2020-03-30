import React, { useState, useEffect } from 'react';

import JobPost from './JobPost';
import Filter from './Filter';
import * as jobs from '../data.json';

const App = () => {
  const [jobList, setJobList] = useState([]);
  const [filters, setFilters] = useState([]);
  
  const addFilter = event => {
    event.preventDefault();
    const key = Object.values(event.target.dataset);
    const keyword = event.target.innerText;
    const newFilter = {[key]: keyword};

    if (!filters.some(filter => filter[key] === newFilter[key])) setFilters([...filters, newFilter]);

    filterJobs();
  };

  const filterJobs = () => {
    const filteredList = [];

    jobs.default.forEach(job => {
      let included = true;

      for (let filter of filters) {
        switch(true) {
          case job.role === filter.role:
          case job.level === filter.level:
          case job.languages && job.languages.includes(filter.languages):
          case job.tools && job.tools.includes(filter.tools):
            break;
          default:
            included = false;
            break;
        };
      };

      if (included) filteredList.push(job);
    });

    return filteredList;
  };

  const deleteFilter = event => {
    event.preventDefault();
    const target = event.target.closest(".filter-container").firstChild;
    const deletedFilter = target.innerText;
    const newFilters = [];

    filters.forEach(filter => {
      if (Object.values(filter)[0] !== deletedFilter) newFilters.push(filter);
    });

    if (newFilters.length === 0) {
      clearFilters();
    } else {  
      setFilters(newFilters);
      setJobList(filterJobs);
    };
  };

  const clearFilters = () => {
    setFilters([]);
  };

  useEffect(() => {
    setJobList(filterJobs);
  }, [filters]);

  return (
    <div className="app">
      <header className="app-header">
      </header>

      {filters.length > 0 ? (
          <div className="filters container">
            <div className="filters-list">
              {filters.map(filter => (
                <div key={Object.values(filter)} className="filter-container">
                  <Filter 
                    del
                    keyword={Object.values(filter)}
                    deleteFilter={deleteFilter}
                  />
                </div>
              ))}
            </div>
            <small 
              className="clear"
              onClick={() => clearFilters()}
            >
              Clear
            </small>
          </div>
        )
      :
        <div className="filters container invisible"></div>
      }

      <main>
        <div className="job-list">
          {jobList.map(job => (
            <JobPost job={job} key={job.logo} addFilter={addFilter} />
          ))}
        </div>

        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
          Coded by <a href="http://github.com/jiselle03" target="_blank" rel="noopener noreferrer">Jiselle</a>.
        </div>
      </main>
    </div>
  );
};

export default App;
