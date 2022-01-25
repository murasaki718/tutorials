## Install gcloud

Install `gcloud`, follow this [guide](https://cloud.google.com/sdk/docs/install#installation_instructions).
Use recommended method instead of insalling gcloud with homebrew. if using brew you update packages with brew

Determine your machine hardware name
```
uname -m
```

Download gcloud tar from UI and extract files
```
mv ~/Downloads/google-cloud-sdk ~/
```

Install
```
./google-cloud-sdk/install.sh
```

Run gcloud init to initialize the SDK
```
./google-cloud-sdk/bin/gcloud init
```

Open new tab and run
```
gcloud --version
```
