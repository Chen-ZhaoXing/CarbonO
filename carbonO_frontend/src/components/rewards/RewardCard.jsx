import React from 'react'

const RewardCard = ({
  RewardImage,
  RewardTitle,
  RewardDescription,
  RewardCompany,
  CompanyName,
  CompanyWebsite
}) => {
  return (
    <div className="mb-5">
      <a
        href="#"
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full h-44 rounded-t-lg  md:w-48 md:rounded-none md:rounded-l-lg"
          src={RewardImage}
          alt="Product Image"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {RewardTitle}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {RewardDescription}
          </p>
          <a href={CompanyWebsite} className="underline-offset-3 font-semibold text-grey-700">
            Visit {CompanyName}
          </a>
        </div>
      </a>
    </div>
  );
};

export default RewardCard
