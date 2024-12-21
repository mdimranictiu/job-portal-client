import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const JobCard = ({ job }) => {
    const {
        requirements,
        title,
        salaryRange,_id,
        location,
        description,
        company,
        company_logo,
        jobType,
    } = job;
    const salary=salaryRange.currency;
    const currency=salary.toUpperCase()

    return (
        <div className="card card-compact bg-red-200 shadow-xl h-full flex flex-col justify-between">
            <div className="card-body flex-grow">
                <div className="flex gap-5 items-center">
                    <img src={company_logo} className="w-[50px] h-[40px]" alt="company logo" />
                    <div className='flex flex-col gap-2'>

                        <h3 className="font-bold text-xl">{company}</h3>
                        <div className='flex items-center gap-2'>
                        <FaLocationDot />
                        <p className="text-gray-500">{location}</p>
                        </div>
                    </div>
                </div>
                <h2 className="card-title mt-2">{title}</h2>
                <p className="text-sm text-gray-600">{jobType}</p>
                <p className="text-sm text-gray-600">{description}</p>
                <div className="mt-3">
                    {requirements.map((req, index) => (
                        <button key={index} className="btn btn-xs btn-outline mr-2 mb-2">
                            {req}
                        </button>
                    ))}
                </div>
                <div className='flex sm:flex-col py-5 gap-3 justify-around '>
                <p className="text-sm mt-3 font-medium">
                   Salary:  {salaryRange.min} - {salaryRange.max} {currency}
                </p>
                <Link to={`/job/${_id}`}><button className='btn'>Apply now</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default JobCard;
