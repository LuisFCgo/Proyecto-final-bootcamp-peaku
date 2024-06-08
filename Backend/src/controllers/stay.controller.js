import Stay from "../models/stay.model.js";


export const getStays = async (req, res) => {

    const Stays = await Stay.find(req.user.id);
    res.json(Stays)


};

export const createStay = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const newStay = new Stay({
            title,
            description,
            date
        });
        const savedStay = await newStay.save();
        res.json(savedStay);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};



export const getStay = async (req, res) => {

    try {
        const Stay = await Stay.findById(req.params.ID);
        res.json(Stay);

    } catch (error) {
        req.status(400).json({ message: "Stay not found" })
    }
};
export const updateStay = async (req, res) => {
    try {
        const { title, description, date } = req.body;
        const StayUpdated = await Stay.findOneAndUpdate(
            { _id: req.params.id },
            { title, description, date },
            { new: true }
        );
        return res.json(StayUpdated);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const deleteStay = async (req, res) => {
    try {
        const deleteStay= await Stay.findByIdAndDelete(req.params.id);
        if (!deleteStay)
            return res.status(404).json({ message: "Stay not found" });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}