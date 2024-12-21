import { li } from "motion/react-client";
import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const {

    requirements,
        title,
        salaryRange,_id,
        location,
        description,
        company,
        company_logo,
        jobType,
        category,hr_name,hr_email,
        applicationDeadline,
        responsibilities
  }=job
  console.log(`job details`, job);
  return (
    <div>
      <div className="card bg-base-100 w-[80%] my-5 mx-auto shadow-xl">
        <div className="card-body">
          <div className="flex justify-between gap-5 duration-150 items-center max-sm:flex-col">
           <div>
           <h2 className="text-3xl font-bold">{title}</h2>
           <p>{jobType}</p>
           <h3 className="text-xl text-[#3c65f5] font-semibold">{company}</h3>
           </div>
           <button className="btn bg-[#3c65f5] w-40 hover:bg-white text-[18px] hover:text-[#3c65f5] text-white">Apply now</button>
          </div>
          <h3 className="text-2xl font-bold py-5">Employment Information</h3>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1 gap-2 text-[20px]">
           <p> <span className="font-semibold">Category:</span> {category}</p>
           <p> <span className="font-semibold">location:</span> {location}</p>
           <p> <span className="font-semibold">Application Deadline:</span> {applicationDeadline}</p>
           <p> <span className="font-semibold">Salary Range:</span> {salaryRange.min}-{salaryRange.max} {salaryRange.currency.toUpperCase()}</p>
           <p> <span className="font-semibold">Requirements:</span> {requirements.map(req=><li>{req}</li>)}</p>
           <p> <span className="font-semibold">Responsibility:</span> {responsibilities.map(req=><li>{req}</li>)}</p>
           <p> <span className="font-semibold">HR Name:</span> {hr_name}</p>
           <p> <span className="font-semibold">Hr Email:</span> {hr_email}</p>
          </div>
          <div className="py-10">
          <p>Welcome to {company}</p>
          <p>{description}</p>
          </div>
          <div className="card-actions">
          <button className="btn bg-[#3c65f5] w-40 hover:bg-white text-[18px] hover:text-[#3c65f5] text-white">Apply now</button>
          <button className="btn bg-white w-40  text-[18px] hover:bg-[#3c65f5] hover:text-white">Save Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
