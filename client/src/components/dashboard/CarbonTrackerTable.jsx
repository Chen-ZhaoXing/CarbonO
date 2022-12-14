import React, {useEffect, useState} from 'react'
import carbonTrackerService from "../../services/CarbonTrackerService";

const CarbonTrackerTable = ({historicalData}) => {

  console.log(historicalData);
  
  return (
    <div className="overflow-x-auto relative sm:rounded-lg m-6 font-default w-9/12">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-8">
              Dish Name
            </th>
            <th scope="col" className="py-3 px-9">
              Date
            </th>
            <th scope="col" className="py-3 px-6">
              Carbon Rating
            </th>
            <th scope="col" className="py-3 px-4">
              C02 consumed
            </th>
            <th scope="col" className="py-3 px-6">
              ECredits earned
            </th>
          </tr>
        </thead>
        <tbody>
        {historicalData.map((data) => {
            return(
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data.dish.dishName}
              </th>
              <td className="py-4 px-6">{data.dateConsumed.substring(0,10)}</td>
              <td className="py-4 px-16 ">{data.dish.carbonRating}</td>
              <td className="py-4 px-9">{data.dish.totalCarbonFootprint.toFixed(0) + 'g'}</td>
              <td className="py-4 px-16">
                <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {data.dish.carbonRating * 10}
                </a>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CarbonTrackerTable;
