import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'
import Login from "./login";
import Signup from "./Signup";
import TrainInfoPage from "./Traininfo";
import Mainpage from "./Mainpage";
import TrainCard from "./Traincard";
import LiveTrain from "./livetrain";
import TrainRouteMap from "./Trainroute";
import { useState } from "react";
import PnrForm from "./PNR";
import LiveTrainForm from "./LiveTrainpage";
import PnrStatus from "./Pnrfetch";
import AssistanceCard from "./Assistance";
import Frontend from "./Frontend";
function App() {
  const [trainNo,setTrainNo]=useState("")
const router=createBrowserRouter([
  {
    path:"/",
    element:<Frontend></Frontend>
  }
  ,
  {
    path:"/signup",
    element:<Signup></Signup>
  },{
    path:"/trainform",
    element:<TrainCard></TrainCard>
  },{
    path:"/train-info/:trainNo",
    element:<TrainInfoPage></TrainInfoPage>
  },
  {
    path:"/train-route/:trainNo",
    element:<TrainRouteMap></TrainRouteMap>
  },
  {
    path:"mainpage",
    element:<Mainpage></Mainpage>
  },
  {
    path:"/live-train-info/:trainNo/:date",
    element:<LiveTrain></LiveTrain>
  },
  {
    path:"train-live",
    element:<LiveTrainForm></LiveTrainForm>
  },
  {
    path:"pnr-form",
    element:<PnrForm></PnrForm>
  },{
    path:"pnrinfo/:pnr",
    element:<PnrStatus></PnrStatus>
  },
  {
    path:"/getassistance",
    element:<AssistanceCard></AssistanceCard>
  }
])
  return (
    <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
