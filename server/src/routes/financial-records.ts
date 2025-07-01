// ✅ CORRECT
import express, { Request, Response } from 'express';
import FinancialRecordModel from '../schema/financial-record';

const router = express.Router();

router.get("/getAllByUserId/:userId", async (req: Request, res: Response) => {
//   try {
//     const userId = req.params.userId;
//     const records = await FinancialRecordModel.find({ userId });

//     if (records.length === 0) {
//       return res.status(404).json({ message: "No records found for this user" });
//     }

//     res.status(200).json(records);
//   } catch (err) {
//     return res.status(500).json({ error: err });
//   }

});

export default router;
