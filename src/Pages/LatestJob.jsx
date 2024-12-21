import React, { useEffect, useState,useRef } from "react";
import JobCard from "./JobCard";


const LatestJob = () => {
  const [jobs, setjobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const timeoutRef = useRef(null);
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
        setIsLoading(false); // Set loading to false after 2 seconds
      }, 2000);
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setjobs(result.slice(0, 6));
      })

      .catch((error) => {
        console.log(error);
        setIsLoading(false)
      });
    
  }, []);
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center  py-10">Latest Job</h2>
      {isLoading ? (
        <>
          <div className="items-center text-center">
            <span className="loading loading-lg loading-ring text-primary"></span>
            <span className="loading loading-lg loading-ring text-secondary"></span>
            <span className="loading loading-lg loading-ring text-accent"></span>
            <span className="loading loading-lg loading-ring text-neutral"></span>
            <span className="loading loading-lg loading-ring text-info"></span>
            <span className="loading loading-lg loading-ring text-success"></span>
            <span className="loading loading-lg loading-ring text-warning"></span>
            <span className="loading loading-lg loading-ring text-error"></span>
          </div>
        </>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job}></JobCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestJob;
