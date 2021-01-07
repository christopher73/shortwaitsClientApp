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
