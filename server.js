const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alphatushar1912@gmail.com', // Replace with your email
        pass: 'sharmatashu@1912',   // Replace with your email password
    },
});

app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Welcome to DEV@Deakin Newsletter',
        text: 'Thank you for subscribing to our newsletter!',
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Failed to send welcome email' });
        }
        res.status(200).json({ message: 'Subscription successful! Check your email for a welcome message.' });
    });
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
