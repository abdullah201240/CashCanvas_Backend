import mongoose, { Document, Model, Schema } from 'mongoose';

interface AddCardDocument extends Document {
    cardNumber: string;
    cardType: string;
    ammount: string;
    pin: string;
    email: string;
    
}

const addCardSchema = new Schema<AddCardDocument>({
    cardNumber: {
        type: String,
        required: true
    },
    cardType: {
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

}, { timestamps: true });

const AddCard: Model<AddCardDocument> = mongoose.model('AddCard', addCardSchema);

export default AddCard;
