const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');
const  connectdb  = require('./db.js');
const userRoute=require('./route.js')
const app = express();
const port = 6080;
app.use(express.json())
app.use(cors()); // Place this line before any route definitions
connectdb();
const router = {
  traininfo: '/getTrainInformation',
  trainbtwnstn: '/getTrainBtwStation',
  trainonDate: '/getTrainOnDate',
  trainrouter: '/getRoute',
  trainlive:'/getLiveTrainInfo',
  PNRinfo:'/getPNRinfo'
};
app.use("/api",userRoute);
app.get(router.traininfo, routes.getTrainInformation);
app.get(router.trainbtwnstn, routes.getTrainBtwStation);
app.get(router.trainonDate, routes.getTrainOnDate);
app.get(router.trainrouter, routes.getRoute);
app.get(router.trainlive,routes.getLiveTrainInfo);
// app.get(router.PNRinfo,routes.getPNRinfo);
app.use('*', routes.handleInvalidPath);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
