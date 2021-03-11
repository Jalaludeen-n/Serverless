const Responses = require("../common/API_Response");
const Dynamo = require("../common/Dynamo");

const tableName = process.env.tableName;

exports.handler = async (event) => {
  console.log("event", event);

  const user = await Dynamo.getAll("UsersList").catch((err) => {
    console.log("error in Dynamo Get", err);
    return null;
  });

  if (!user) {
    return Responses._400({ message: "Failed to get user by Table" });
  }

  return Responses._200({ user });
};
