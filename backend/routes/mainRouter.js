const router = require('express').Router();
const mainController = require('../controller/mainController');


router.post('/wifi', mainController.WifiController);
router.get('/counsellor', mainController.CounsellorController);
router.post('/health', mainController.HealthController);
router.post('/room', mainController.RoomController);
router.post('/rent', mainController.RentController);
router.get('/bike', mainController.BikeController);

module.exports = router;