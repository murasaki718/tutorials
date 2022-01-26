const fs = require('fs');

exports.readSecret = (req, res) => {
    const secretPath = '/api/api-key';

    fs.readFile(secretPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error');
        }
        res.status(200).send(data);
    });
};
