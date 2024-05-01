import mongoose, { Document, Model, Schema } from 'mongoose';

interface AddScheduleDocument extends Document {
    notification: string;
    name: string;
    ammount: string;
    
    email: string;
    date: string;
    
}

const addScheduleSchema = new Schema<AddScheduleDocument>({
    name: {
        type: String,
        required: true
    },
    notification: {
        type: String,
        required: true
    },
    ammount: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },


}, { timestamps: true });

const AddSchedule: Model<AddScheduleDocument> = mongoose.model('AddSchedule', addScheduleSchema);

export default AddSchedule;
