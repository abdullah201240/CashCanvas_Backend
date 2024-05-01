import express from 'express';
import cors from 'cors';
import upload from '../middleware/upload';
import {Signup,Login,AddCards,AllAccount,AllTransaction,AllAmount,DeleteAccount,AllCost,History,RecivedMoney,MoneyADD,UpdateProfileImage,Profile,UpdateProfile,RegularCost,AddSchedule,ShowAllSchedule,DeleteSchedule,Notifications} from '../controller/usercontroller'
const router = express.Router();
router.use(cors());

router.post("/Signup", Signup);
router.post('/Login', Login);

router.post('/AddCards', AddCards);
router.get('/AllAccount', AllAccount);


router.post('/AllTransaction', AllTransaction);
router.get('/AllAmount', AllAmount);

router.delete('/DeleteAccount', DeleteAccount);

router.get('/AllCost', AllCost);


router.get('/History', History);

router.get('/RecivedMoney', RecivedMoney);
router.post('/MoneyADD', MoneyADD);
router.put('/UpdateProfileImage', upload.single('photo'), UpdateProfileImage);

router.get('/Profile', Profile);
router.put('/UpdateProfile', UpdateProfile);

router.get('/RegularCost', RegularCost);

router.post('/AddSchedule', AddSchedule);

router.get('/ShowAllSchedule', ShowAllSchedule);
router.delete('/DeleteSchedule', DeleteSchedule);


router.get('/Notifications', Notifications);

export default router;
