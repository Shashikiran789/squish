import * as names from 'names.js';

function ip21_update() {
startApplication("mstsc");
clickButton(waitForObject(names.remoteDesktopConnectionConnectButton));
clickButton(waitForObject(names.remoteDesktopConnectionYesButton));
snooze(3);
mouseClick(waitForObject(names.inputCaptureWindowPane), 1916, 0, MouseButton.PrimaryButton);
snooze(3);
mouseClick(waitForObject(names.inputCaptureWindowPane), 1916, 0, MouseButton.PrimaryButton);
snooze(3);
mouseClick(waitForObject(names.inputCaptureWindowPane), 413, 1064, MouseButton.PrimaryButton);
snooze(3);
mouseClick(waitForObject(names.inputCaptureWindowPane), 413, 1064, MouseButton.PrimaryButton);
snooze(3);
mouseClick(waitForObject(names.inputCaptureWindowPane), 413, 1064, MouseButton.PrimaryButton);
snooze(3);
mouseClick(waitForObject(names.inputCaptureWindowPane), 171, 33, MouseButton.PrimaryButton); //find
snooze(3);
mouseClick(waitForObject(names.inputCaptureWindowPane), 219, 102, MouseButton.PrimaryButton);//ip21record
snooze(3);
mouseClick(waitForObject(names.inputCaptureWindowPane), 947, 399, MouseButton.PrimaryButton);//name field
snooze(3);
var name_output= testData.dataset("Data_output.csv");
let rand=Math.floor(Math.random() * 10);
var device_name=testData.field(name_output[rand], "Name");
type(waitForObject(names.inputCaptureWindowPane),device_name);
snooze(3);
mouseClick(waitForObject(names.inputCaptureWindowPane), 789, 665, MouseButton.PrimaryButton);//find now
snooze(3);
doubleClick(waitForObject(names.inputCaptureWindowPane), 894, 439, MouseButton.PrimaryButton);//double click on device name
snooze(3);
mouseClick(waitForObject(names.inputCaptureWindowPane), 1208, 348, MouseButton.PrimaryButton);//close ip21 record
snooze(3);
doubleClick(waitForObject(names.inputCaptureWindowPane), 1174, 82, MouseButton.PrimaryButton);//double click on panel
snooze(3);
mouseClick(waitForObject(names.inputCaptureWindowPane), 686, 187, MouseButton.PrimaryButton);//location field
snooze(3);
var location_output= testData.dataset("Data_output.csv");
let random=Math.floor(Math.random() * 16);
var location_name=testData.field(location_output[random], "Location");
test.log(location_name);
type(waitForObject(names.inputCaptureWindowPane), location_name);//location select
nativeType("<Return>");
mouseClick(waitForObject(names.inputCaptureWindowPane), 1036, 566, MouseButton.PrimaryButton);//yes button on popup
mouseClick(waitForObject(names.inputCaptureWindowPane), 1319, 222, MouseButton.PrimaryButton);//health state field
snooze(3);
var health_output= testData.dataset("Data_output.csv");
let random1=Math.floor(Math.random() * 16);
//var health_state=testData.field(health_output[random1], "Health State");
//test.log(health_state);
type(waitForObject(names.inputCaptureWindowPane), "In Alarm");
snooze(2);
nativeType("<Return>");
mouseClick(waitForObject(names.inputCaptureWindowPane), 1036, 566, MouseButton.PrimaryButton);//yes button on popup
mouseClick(waitForObject(names.o2ToolbarItem));
clickButton(waitForObject(names.remoteDesktopConnectionOKButton));



}