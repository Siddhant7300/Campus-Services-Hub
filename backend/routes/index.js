const router = require('express').Router();
const authRouter = require('./authRouter');
const mainRouter = require('./mainRouter');
const adminRouter = require('./adminRouter');
const verifyUser = require('../middleware/verifyUser');

router.use('/auth', authRouter);
router.use('/main', mainRouter);
router.use('/admin', adminRouter);
// router.use('/posts', verifyUser, postRouter);
module.exports = router;