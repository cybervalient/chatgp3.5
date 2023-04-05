import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
//const express = require('express');
//const bodyParser = require('body-parser');
//const cors = require('cors');

const configuration = new Configuration({
    organization: "",
    apiKey: "",
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 5000;


app.use(bodyParser.json());
app.use(cors());


app.post("/datos", async(req,res)=>{
    try {
    const {message} = req.body;
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {role: "user", content:`${message}`},
        ]
    }) 
    console.log(completion.data.choices[0].message);
    res.json(
        completion.data.choices[0].message
    )
} catch(error) {
    // Consider implementing your own error handling logic here
    console.error(error);
    //alert(error.message);
  }
});

app.use(express.static('public'));

app.listen(port, function() {
    console.log("App listen at", `http://localhost:${port}`);
  });
