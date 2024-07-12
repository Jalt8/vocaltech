require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mailgun = require('mailgun-js');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../client/dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

app.post('/api/send-email', async (req, res) => {
  const { name, email, company, message } = req.body;

  const data = {
    from: `VocalTech Contact Form <contact@${process.env.MAILGUN_DOMAIN}>`,
    to: 'juvan@vocaltech.net',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Company:</strong> ${company}</p>
           <p><strong>Message:</strong> ${message}</p>`
  };

  try {
    console.log('Attempting to send email with data:', data);
    const result = await mg.messages().send(data);
    console.log('Email sent successfully:', result);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error('Detailed error in sending email:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ message: "Failed to send email", error: error.message, stack: error.stack });
  }
});

app.post('/api/send-email2', (req, res) => {
    const data = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: 'juvan@vocaltech.net',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomeness!'
    };
    
    mg.messages().send(data, (error, body) => {
      if (error) {
        console.error('Error sending test email:', error);
        res.status(500).json({ error: error.message });
      } else {
        console.log('Test email sent successfully:', body);
        res.json({ message: 'Test email sent', details: body });
      }
    });
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));