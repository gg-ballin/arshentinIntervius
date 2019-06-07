const app = require('express')();
const bodyParser = require('body-parser');
const cors = require ('cors');
const sendGripDispatcher = require('@sendgrid/mail');

app.use(bodyParser.json());
app.use(cors());

sendGripDispatcher.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/emailForm', (req,res) => {    

    const {email,firstName,secondName,schoolDN,text,role, state, HUHAU} = req.query;

    const html = `
        <strong>First name: </strong> ${firstName}
        <strong>Second name: </strong> ${secondName} 
        <strong>School/District Name:</strong> ${schoolDN}
        <strong>Role: </strong>${role}
        <strong>State: </strong>${state}
        <strong>How did he or she heard about us: </strong>${HUHAU}  
        <strong>Text: </strong>${text}  
    `

    const msg = {
        to: email,
        html,
        from: 'test@example.com',
        subject: 'Tp 2hDesign',
    };

    sendGripDispatcher.send(msg).then((msg) => {
        console.log(text)
        res.status(200).send('success')
    });
    
});


app.listen(8080, () => {
    console.log('Server is running in port 8080');
});