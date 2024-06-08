import Payment from '../models/payment.model.js';

// Función para guardar un nuevo pago en la base de datos
export const createPayment = async (req, res) => {
  try {
    const { nameOnCard, cardNumber, expiration, cvv } = req.body;

    // Crear una nueva instancia del modelo Payment con los datos recibidos
    const newPayment = new Payment({
      nameOnCard,
      cardNumber,
      expiration,
      cvv,
      user: req.user.id, // Asociar el pago con el usuario autenticado
    });

    // Guardar el nuevo pago en la base de datos
    const paymentSaved = await newPayment.save();

    // Enviar una respuesta con el pago guardado y otros detalles
    res.status(201).json({
      id: paymentSaved._id,
      nameOnCard: paymentSaved.nameOnCard,
      cardNumber: paymentSaved.cardNumber,
      expiration: paymentSaved.expiration,
      cvv: paymentSaved.cvv,
    });
  } catch (error) {
    // Manejar errores
    console.error('Error saving payment:', error);
    res.status(500).json({ message: 'Error saving payment' });
  }
};

// Función para obtener todos los pagos del usuario autenticado
export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user.id }); // Solo obtener pagos del usuario autenticado
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Función para obtener un pago específico del usuario autenticado
export const getPayment = async (req, res) => {
  try {
    const payment = await Payment.findOne({ _id: req.params.id, user: req.user.id });
    if (!payment) return res.status(404).json({ message: 'Payment not found' });

    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Función para eliminar un pago del usuario autenticado
export const deletePayment = async (req, res) => {
  try {
    const deletedPayment = await Payment.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deletedPayment) return res.status(404).json({ message: 'Payment not found' });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};