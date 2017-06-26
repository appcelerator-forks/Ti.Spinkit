# Ti.Spinkit
Ti.SpinKit is an iOS Hyperloop wrapper of the SpinKit-ObjC library. Ti.SpinKit provides access to a few different Activity Indicators, giving your app a better look and feel.

# 1 - Requirements

This project uses HyperLoop so if you want to use it on some project that already exists you will have to perform some changes on it (notably on TiApp.xml).
We recommend you taking a look at Appcelerator’s documentation on how to run HyperLoop in a Titanium project:
iOS:
https://s3-us-west-2.amazonaws.com/appc-labs-server/downloads/Hyperloop+for+iOS+Programming+Guide.pdf

Android: https://s3-us-west-2.amazonaws.com/appc-labs-server/downloads/Hyperloop+for+Android+Programming+Guide.pdf

HyperLoop does a pretty good job in allowing you to use Objective-C / Swift with Javascript syntax, but that doesn't mean that you won't
need to learn Objective-C / Swift if you want to customise the module / create your own. For that reason we highly recommend you to
learn the basics of Objective-C / Swift.
In the long run that will make your job easier, since Objective-C is far from being an easy language to understand at the first sight.

# 2 - Environment setup

This module was tested and developed with the following environment:
- CocoaPods 0.39.0
- Titanium SDK 5.4.0.v20160712013704
- HyperLoop 1.2.0

Creating your HyperLoop-enabled project:

- Create a new Alloy project like you would normally do.
- Copy the "Podfile" provided by us to your project's root folder. DON'T EXECUTE "pod install" (like you would normally do) after this.
When building your project HyperLoop will automatically resolve the dependencies of the Libs/Frameworks you referenced in
- Take a look at the example tiapp.xml file that you've received from us. Your tiapp.xml should have the same properties defined in this example
otherwise you'll face some issues while building your project later on.
- You should copy the HyperLoop plugin AND module to your project's "/plugins" AND "/modules" folders.
If you don't have it, you can copy it from the HyperLoop example project at https://github.com/appcelerator/hyperloop-examples.

# 3 - Usage

You'll find inside this zip a very simple example of controller that you can copy to a HyperLoop-enabled project and start playing with it.
We've covered in this controller all the methods that you can use with the SpinKit library on iOS.
After following all the steps above you should have the project up and running without any problems.
HyperLoop DOES NOT work with LiveView as of now, so you will need to rebuild your project every time you change anything.

Controllers:
- Index.js - A simple controller that shows you all the spinner styles, how you can change its color and also its size.

Libs:
- HL_SpinKit - This is the file that will load the HyperLoop wrapper of SpinKit to your project and expose the Spinner creation method - createSpinner(style, color);
- Utils.js and Webcolor.js - these files provide a handful of methods to use with HyperLoop.
It was developed by Appcelerator and in this project we use it mostly to convert HEX colors (like #ABCDEF and #C0C0C0) to an UIColor object;

Misc:
- tiapp.xml - An example of how your tiapp.xml should look like.

# 4 - Support

One of the things we want to offer you as a reward for joining LoopModules is the ability to contact us to discuss and get help with problems that you may come across.
We've tested this module a lot of times and we want to deliver something that will work for everyone (as long as the environments are the same, e.g. SDK, HL version, and so on).
If you come across one of the following...
- Bugs
- Suggestions
- Issues while compiling this module
... feel free to contact us at contact@loopmodules.com.
