# GCP Cloud Functions Tutorial

You can find tutorial [here]().

Start [here](https://cloud.google.com/functions/docs/quickstarts)

Intro:
- Mention that some functions will be created from the console and some using cli tool as well as deployed directlly from the git code (GitHub)

1. HTTPS API
   - Authenticate
   - Secret access
   - Terraform
   - CI/CD

2. Example with pub sub
   - python
   - [upload zip](https://cloud.google.com/functions/docs/deploying/filesystem)
   - https://cloud.google.com/functions/docs/local-development#functions-clone-sample-repository-python
   - test locally both ways (https://cloud.google.com/functions/docs/testing/test-overview)
      > In general, we recommend using Functions Frameworks unless portability and/or containerization are specifically desired.
      - [Functions Framework](https://github.com/GoogleCloudPlatform/functions-framework)
      - [Building Using the Pack CLI](https://cloud.google.com/functions/docs/building/pack)

3. Example with images recognition
   - Uploaded to gs bucket

4. API Gateway
   - custom domain
   - absed on envoy
   - API key
   - quotas










Protect your API
- JSON Web Tokens and Google API keys





gcloud functions deploy FUNCTION_NAME --runtime nodejs16 --trigger-http --allow-unauthenticated
curl -X POST "https://YOUR_REGION-YOUR_PROJECT_ID.cloudfunctions.net/FUNCTION_NAME" -H "Content-Type:application/json" --data '{"name":"Keyboard Cat"}'

curl  -H "Authorization: bearer $(gcloud auth print-identity-token)" \
  https://us-central1-devopsbyexample-339215.cloudfunctions.net/function-1


- [Cloud Endpoints Quickstart](https://cloud.google.com/endpoints/docs/quickstart-endpoints)
- [Getting Started with Endpoints for Cloud Functions with ESPv2](https://cloud.google.com/endpoints/docs/openapi/get-started-cloud-functions)
- [Difference between Google's API Gateway and Cloud Endpoints](https://stackoverflow.com/questions/63795473/difference-between-googles-api-gateway-and-cloud-endpoints)
- [Google Cloud API Gateway is now available in public beta](https://cloud.google.com/blog/products/serverless/google-cloud-api-gateway-is-now-available-in-public-beta)

You can run functions locally using either Function Frameworks or Cloud Native buildpacks.
- Functions Framework
- Building Using the Pack CLI