const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("form"));

const usernameDB = "someone";
const emailDB = "abc@gmail.com";
const passwordDB = "123";

app.post("/login", (req, res) => {
   const { username, email, password } = req.body;
   if (username == usernameDB && email == emailDB && password == passwordDB) {
      res.send("logged");
   } else {
      res.send("wrong");
   }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server started at ${PORT}`));
