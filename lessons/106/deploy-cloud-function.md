```
gcloud functions deploy helloGET \
    --runtime nodejs16 \
    --trigger-http \
    --allow-unauthenticated \
    --project devops-339301
```

When the function finishes deploying, take note of the httpsTrigger's url property or find it using the following command:
```
gcloud functions describe helloGET --project devops-339301
```

Invoke the function
```
curl https://us-central1-devops-339301.cloudfunctions.net/helloGET
```

Delete the function
```
gcloud functions delete helloGET --project devops-339301
```