const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dataFilePath = 'addresses.json';

if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, '[]');
}

app.post('/save-address', (req, res) => {
    const { name, address, phoneNumber } = req.body;

    const data = JSON.parse(fs.readFileSync(dataFilePath));

    const newAddress = {
        name,
        address,
        phoneNumber,
    };
    data.push(newAddress);

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    res.json({ success: true, message: 'Address saved successfully.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
