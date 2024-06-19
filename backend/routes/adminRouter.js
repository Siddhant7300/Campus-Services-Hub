const router = require('express').Router();
const adminController = require('../controller/adminController');
const manageController = require('../controller/manageController');

router.post('/signup', adminController.signupController)
router.post('/login', adminController.loginController);
router.post('/logout', adminController.logoutController);
router.get('/refresh', adminController.refreshAccessTokenController);


router.get('/room', manageController.roomController);
router.post('/fixroom', manageController.roomFixController);
router.post('/deleteroom', manageController.deleteRoomController);

router.get('/wifi', manageController.wifiController);
router.post('/wifiFix', manageController.wifiFixController);
router.post('/wifiDelete', manageController.deleteWifiController);

module.exports = router;