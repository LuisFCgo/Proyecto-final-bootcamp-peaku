import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  nameOnCard: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiration: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;