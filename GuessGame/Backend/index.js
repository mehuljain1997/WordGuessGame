const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var cron = require('node-cron');
require('dotenv').config()
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const fs =  require('fs')
let winnerMail = ""
let highestScore = 0

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

  cron.schedule('0 0 * * *', async () => {
    try {
        const jsonString = fs.readFileSync("records.json");
        const customer = JSON.parse(jsonString);
        if(customer.records.length){
            customer.records.sort((a,b)=> b.score - a.score)
            if(customer.records[0].score){
                winnerMail = customer.records[0].email
                highestScore = customer.records[0].score
            }
        }
        if(winnerMail){
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                user: process.env.Admin_Mail,
                pass: process.env.Password
                }
            });
            const mailOptions = {
                from: process.env.Admin_Mail,
                to: winnerMail,
                subject: 'Winner of Word Guess Game',
                text: `“You are the winner for today’s game. Keep learning new word everyday. Your score:- ${highestScore}”`
            };
            const info = await transporter.sendMail(mailOptions)
            console.log('Email sent successfully: ' + info.response);

            fs.writeFile('records.json',JSON.stringify({records: []}),'utf8', function(err){
                if(err) throw err
                console.log('write new data successfully.')
            })

        }

    } catch (err) {
        console.log('Error found',err)
        fs.writeFile('records.json',JSON.stringify({records: []}),'utf8', function(err){
            if(err) throw err
            console.log('write new data successfully.')
        })
    }

  });
  

const userRoute = require('./routes/user')
const port = process.env.PORT || 4000;
app.use('/user', userRoute);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});