const trainAPI = require('./app.js');  
const { logger } = require('./app.js');  
  

  
const getTrainInformation = (req, res) => {  
  trainAPI.getTrainInformation(req.query.trainNo)  
    .then(data => res.json(data))  
    .catch(error => res.status(500).json({ error: error.toString() }));  
};  
  
const getTrainBtwStation = (req, res) => {  
  trainAPI.getTrainBtwStation(req.query.from, req.query.to)  
    .then(data => res.json(data))  
    .catch(error => res.status(500).json({ error: error.toString() }));  
};  
  
const getTrainOnDate = (req, res) => {  
  trainAPI.getTrainOnDate(req.query.from, req.query.to, req.query.date)  
    .then(data => res.json(data))  
    .catch(error => res.status(500).json({ error: error.toString() }));  
};  
  
const getRoute = (req, res) => {  
  trainAPI.getRoute(req.query.trainNo)  
    .then(data => res.json(data))  
    .catch(error => res.status(500).json({ error: error.toString() }));  
};  
const handleInvalidPath = (req, res) => {  
  const errorMsg = `Path ${req.originalUrl} not found`;  
  logger.error(errorMsg);  
  res.status(404).send(errorMsg);  
};   
  
const getLiveTrainInfo = (req, res) => {  
  trainAPI.getLiveTrainInfo(req.query.trainNo,req.query.date)  
    .then(data => res.json(data))  
    .catch(error => res.status(500).json({ error: error.toString() }));  
};

module.exports = {  
  getTrainInformation,  
  getTrainBtwStation,  
  getTrainOnDate,  
  getRoute,
  handleInvalidPath ,
  getLiveTrainInfo 
};  
