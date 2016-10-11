# latitudeDigital
![alt text](./img/latitudeDigital.png "Home Page")

** Working with screen shots to build as much of an app as possible using React Native, here are some notes that I have found:

1. There is no "horizontal rule" < hr > in React Native, they are currently trying to get it working with < Text /> and <        TextInput /> but the only way to do it right now is to wrap it with < View > tags which seems pretty hacky. There is a npm    module react-native-hr that looks like that would be an easy fix, just a reminder to check it out.
2. Wasn't able to get the overlay so I pushed the login to another page.
3. Figured out Picker on a later page as to be able to roll through a list of names to be selected.
4. Start survey - a user can add there name and we can store as properties.
5. Not sure on how to structure out the quick domain feature.
6. Here is PickerIOS with the time frame and vehicles the user may want and whether they are leasing or purchasing.

There is a lot of npm packages for react-native and most of them have decent enough documentation and have a history of downloads. Even with the support I was unable to get certain packages running or needed to further download other packages on top, kind of a waist of time and effort in my opinion.

If you would like to try this out, I have it set up on a mac using Xcode - you will need to npm install -g react-native-cli and once you clone this repo you can then run react-native run-ios, make sure that it boots through terminal, you can either tab to a different tab or I like to run iTerm and let terminal do it's thing.
