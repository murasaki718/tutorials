# First Function

## Create first public function from UI

- Open https://console.cloud.google.com/
- Go to cloud functions
- Click create function
- Call it first-function
- Click `Allow unauthenticated invocations`
- Enable `Cloud Build API`
- Open `Runtime`, `Source code`, `package.json`
```
let message = req.query.message || req.body.message || 'Hello World!';
```
- Click deploy
- Click on function
- Go to triggers and copy URL
- Invoke the function
```
curl https://us-central1-devopsbyexample-v1.cloudfunctions.net/first-function

curl https://us-central1-devopsbyexample-v1.cloudfunctions.net/function-1 \
    -H 'Content-Type: application/json' \
    -d '{"message":"Hi!!"}'
```
- Delete function
