// ✅ CORRECT
import express, { Request, Response } from 'express';
import FinancialRecordModel from '../schema/financial-record';

const router = express.Router();

router.get("/getAllByUserId/:userId", async (req: Request, res: Response) => {
    try{
        const userId = req.params.userId;
        const records = await FinancialRecordModel.find({userId});

        if(records.length === 0){
            res.status(404).send("No records found for this user");
            return;
        }
        res.status(200).send(records);
    }catch(err){
        res.status(500).send(err);
    }
});


router.post("/", async (req: Request, res: Response) => {
    try{
        const newRecordBody = req.body;
        const newRecord = new FinancialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();

        res.status(200).send(savedRecord);
    }catch(err){
        res.status(500).send(err);
    }
});


router.put("/:id", async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const newRecordBody = req.body;
        const record = await FinancialRecordModel.findByIdAndUpdate(
            id,
            newRecordBody,
            {new: true}
        );

        if(!record){
            res.status(404).send();
            return;
        }

        res.status(200).send(record);

    }catch(err){
        res.status(500).send(err);
    }
});


router.delete("/:id", async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        
        const record = await FinancialRecordModel.findByIdAndDelete(id);

        if(!record){
            res.status(404).send();
            return;
        }

        res.status(200).send(record);

    }catch(err){
        res.status(500).send(err);
    }
});

export default router;
