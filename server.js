const express = require("express");
const app = express();

const port = 8000;
const connectDb = require("./db/connectDb");
const savedCodes = require("./db/SaveCodes");

app.use(express.json());

app.post("/saveCode", async (req, res) => {
    try {
      const { userId, title, code, language, date } = req.body;
  
      // Find the user by userID
      const user = await savedCodes.findOne({ userID: userId });
  
      if (!user) {
        // If user not found, create a new user
        await savedCodes.create({
          userID: userId,
          savedCodes: [{ title, code, language, date }],
        });
      } else {
        // If user found, add the code snippet to the existing user's savedCodes array
        user.savedCodes.push({ title, code, language, date });
        await user.save();
      }
  
      res.status(200).json({ message: "Code saved successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Can't save the code" });
    }
  });
  

connectDb();

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});