<<<<<<< HEAD
import React from "react";
//import Wallet from "../components/dashboard/Wallet";
import Table from "../components/dashboard/Table";
//import DonutChart from "../components/dashboard/DonutChart";
import Statistics from "../components/dashboard/Statistics";
=======
import React, {useContext, useEffect, useState} from "react";
import Wallet from "../components/dashboard/Wallet";
import Table from "../components/dashboard/Table";
import DonutChart from "../components/dashboard/DonutChart";
import UserStatistics from "../components/dashboard/UserStatistics";
import AuthContext from "../context/AuthProvider";
import carbonTrackerService from "../services/CarbonTrackerService";


>>>>>>> 302c8079b40f20e4d1090189c7b65366a10f5cda

const Dashboard = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const [totalCarbon, setTotalCarbon] = useState(0);
  const {auth} = useContext(AuthContext);

  useEffect(() => {
    carbonTrackerService.getDishConsumed(auth.userId, auth.accessToken).then((response) => {
      console.log("Table response")
      console.log(response)
      setHistoricalData(response);
      console.log(historicalData);
    });
  }, [])

  useEffect(() => {
    carbonTrackerService.getUserTotalCarbonConsumption(auth.userId, auth.accessToken).then((response) => {
      console.log("Carbon response")
      console.log(response)
      setTotalCarbon(response);
      console.log(totalCarbon);
    });

  }, [])
  return (
    <>
      <div>
        <h1 class="text-2xl ml-6 mt-4 font-bold">Welcome Back, {auth.firstName}!</h1>
        {/* <Wallet /> */}
<<<<<<< HEAD
        <Statistics />
        <Table />
        {/* <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <DonutChart />
          <DonutChart />
          <DonutChart />
        </div> */}
=======
        <UserStatistics TotalCarbon={totalCarbon.toFixed(0)}/>
        <Table historicalData={historicalData}/>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {/*<DonutChart />*/}
        </div>
>>>>>>> 302c8079b40f20e4d1090189c7b65366a10f5cda
      </div>
    </>
  );
};

export default Dashboard;
