exports.chat = async (req, res) => {
    try {

        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                error: "Please enter a message."
            });
        }

        res.json({
            answer: "No HR documents have been uploaded yet."
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};