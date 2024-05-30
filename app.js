const axios = require('axios');  
const winston = require('winston');  
  
const BASE_URI = 'https://indian-railway-api.cyclic.app/trains';  
const SECOND_URI="http://ec2-3-109-210-229.ap-south-1.compute.amazonaws.com:5000"
  
const logger = winston.createLogger({  
  level: 'info',  
  format: winston.format.json(),  
  defaultMeta: { service: 'user-service' },  
  transports: [  
    new winston.transports.File({ filename: 'error.log', level: 'error' }),  
    new winston.transports.File({ filename: 'combined.log' }),  
  ],  
});  
  
const getTrainInformation = (trainNo) => {  
  const url = `${SECOND_URI}/getTrainInfo/?trainNo=${trainNo}`;  
  return axios.get(url)  
    .then(response => {  
      logger.info(`[getTrainInformation] trainNo: ${trainNo}, status: ${response.status}`);  
      return response.data;  
    })  
    .catch(error => {  
      logger.error(`[getTrainInformation] trainNo: ${trainNo}, error: ${error.message}`);  
      throw error;  
    });  
};  
  
const getTrainBtwStation = (from, to) => {  
  const url = `${SECOND_URI}/betweenStations/?from=${from}&to=${to}`;  
  return axios.get(url)  
    .then(response => {  
      logger.info(`[getTrainBtwStation] from: ${from}, to: ${to}, status: ${response.status}`);  
      return response.data;  
    })  
    .catch(error => {  
      logger.error(`[getTrainBtwStation] from: ${from}, to: ${to}, error: ${error.message}`);  
      throw error;  
    });  
};  
  
const getTrainOnDate = (from, to, date) => {  
  const url = `${SECOND_URI}/gettrainon?from=${from}&to=${to}&date=${date}`;  
  return axios.get(url)  
    .then(response => {  
      logger.info(`[getTrainOnDate] from: ${from}, to: ${to}, date: ${date}, status: ${response.status}`);  
      return response.data;  
    })  
    .catch(error => {  
      logger.error(`[getTrainOnDate] from: ${from}, to: ${to}, date: ${date}, error: ${error.message}`);  
      throw error;  
    });  
};  
  
const getRoute = (trainNo) => {  
  const url = `${SECOND_URI}/getRoute?trainNo=${trainNo}`;  
  return axios.get(url)  
    .then(response => {  
      logger.info(`[getRoute] trainNo: ${trainNo}, status: ${response.status}`);  
      return response.data;  
    })  
    .catch(error => {  
      logger.error(`[getRoute] trainNo: ${trainNo}, error: ${error.message}`);  
      throw error;  
    });  
};  

const getLiveTrainInfo = (trainNo,date) => {  
  const url = `${SECOND_URI}/liveTrainInfo/?trainNo=${trainNo}&date=${date}`;   
  return axios.get(url)  
    .then(response => {  
      logger.info(`[getLiveTrainInfo] trainNo: ${trainNo},date:${date}, status: ${response.status}`);  
      return response.data;  
    })  
    .catch(error => {  
      logger.error(`[getLiveTrainInfo] trainNo: ${trainNo},date:${date}, error: ${error.message}`);  
      throw error;  
    });  
};  
const getPNRinfo = (PNR) => {  
  const url = `${SECOND_URI}/getPNRinfo/?pnr=${PNR}`;  
  return axios.get(url)  
    .then(response => {  
      logger.info(`[getPNRinfo] PNR: ${PNR}`);  
      return response;  
    })  
    .catch(error => {  
      logger.error(`[getPNRinfo] PNR: ${PNR}`);  
      throw error;  
    });  
};   



module.exports = {  
  getTrainInformation,  
  getTrainBtwStation,  
  getTrainOnDate,  
  getRoute, 
  getLiveTrainInfo,
  logger 
};  
