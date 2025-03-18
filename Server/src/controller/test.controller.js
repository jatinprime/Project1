const basicController = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "Basic route",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Failure in Basic api",
        });
    }
};

const testController = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "Basic testing route",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Failure in Basic test api",
        });
    }
};

const testUserController = async (req, res) => {
    try {
        res.status(200).send({
            success: true,
            message: "Basic test-user route",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Failure in Basic test user api",
        });
    }
};

module.exports = { testUserController, basicController, testController };
