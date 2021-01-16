## TO-DO

---

iOS - GEO Location
You need to include NSLocationWhenInUseUsageDescription and NSLocationAlwaysAndWhenInUseUsageDescription in Info.plist to enable geolocation when using the app. If your app supports iOS 10 and earlier, the NSLocationAlwaysUsageDescription key is also required. If these keys are not present in the Info.plist, authorization requests fail immediately and silently. Geolocation is enabled by default when you create a project with react-native init.

## In order to enable geolocation in the background, you need to include the 'NSLocationAlwaysUsageDescription' key in Info.plist and add location as a background mode in the 'Capabilities' tab in Xcode.

- Add resources to target for font on IOS

  https://dev.to/aneeqakhan/add-custom-fonts-in-react-native-0-63-for-ios-and-android-3a9e

  Now at this point, your custom fonts will start working for the android app but you need to do one last step to make it work for iOS.

  Go to the desired target of your app in Xcode, select the Build Phases tab, and add font files in the "Copy Bundle Resources" tab as shown below.

  Alt Text

  And you are done! 🎉 🎊

---

---

finish decorating statusBar according to plataform ex. make it transparent ?

---

---

### useful commands

- `➜ android git:(master) ✗ ./gradlew signingReport`

---

---

### .ENV VARIABLES

Android
The same environment variable can be used to assemble releases with a different config:

$ cd android && ENVFILE=.env.staging ./gradlew assembleRelease
Alternatively, you can define a map in build.gradle associating builds with env files. Do it before the apply from call, and use build cases in lowercase, like:

project.ext.envConfigFiles = [
debug: ".env.development",
release: ".env.production",
anothercustombuild: ".env",
]

apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
Also note that besides requiring lowercase, the matching is done with buildFlavor.startsWith, so a build named debugProd could match the debug case, above.

iOS
The basic idea in iOS is to have one scheme per environment file, so you can easily alternate between them.

Start by creating a new scheme:

In the Xcode menu, go to Product > Scheme > Edit Scheme
Click Duplicate Scheme on the bottom
Give it a proper name on the top left. For instance: "Myapp (staging)"
Then edit the newly created scheme to make it use a different env file. From the same "manage scheme" window:

Expand the "Build" settings on left
Click "Pre-actions", and under the plus sign select "New Run Script Action"
Where it says "Type a script or drag a script file", type:
cp "${PROJECT_DIR}/../.env.staging" "${PROJECT_DIR}/../.env" # replace .env.staging for your file
Also ensure that "Provide build settings from", just above the script, has a value selected so that PROJECT_DIR is set.

---
