const { GoogleAuth } = require('google-auth-library');

exports.invokeFuncA = async (req, res) => {
    const url = 'https://us-central1-devopsbyexample-v1.cloudfunctions.net/function-a';
    const targetAudience = url;
    const auth = new GoogleAuth();

    try {
        const client = await auth.getIdTokenClient(targetAudience);
        const funcAResp = await client.request({ url });
        res.send({ message: funcAResp.data })
    } catch (err) {
        console.error(err.message);
        res.send({ message: err.message })
    }
}
