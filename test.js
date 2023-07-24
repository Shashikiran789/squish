import * as names from 'names.js';  //names.js will store all the locators while recording/inspecting the elements.
import * as ip21 from 'IP21_Update.js';
import * as dv from 'Data_validation_post_IP21.js';

function main() {
    startApplication("\"Integra HMI\"");  //this line is to open the application
    snooze(5);
    clickButton(waitForObject(names.integraAlarmPanelButton_2));
    clickButton(waitForObject(names.integraButton_2));
    snooze(2);
    mouseClick(waitForObject(names.systemUtilitiesMenuItem_2));
    mouseClick(waitForObject(names.systemUtilitiesDeviceManagementMenuItem_2));
    clickButton(waitForObject(names.communicationsCommunicationsButton));
    var dataset = testData.dataset("Data_Input.csv");
    var communications_expected_value = testData.field(dataset[0], "Sub_Systems");
    test.log(communications_expected_value);
    communications_actual_value=waitForObject(names.communicationsCommunicationsButton).text;
    test.log(communications_actual_value);
    snooze(3);
    
    //this block will validate the data of the subsystems of HMI application.
     if(communications_actual_value==communications_expected_value){
            test.log("Communications-Values are similar");
        }
        else{
            test.log("Communications-Values are not similar");
        }
     snooze(3);
//     var plc_expected_value=testData.field(dataset[1], "Sub_Systems");
//     test.log(plc_expected_value);
//     plc_actual_value=waitForObject(names.pLCPLCButton).text;
//     test.log(plc_actual_value);
//     snooze(3);
//     if(plc_actual_value==plc_expected_value){
//         test.log("PLC-Values are similar");
//     }
//     else{
//         test.log("PLC-Values are not similar");
//     }
//     snooze(3);
//     var power_expected_value=testData.field(dataset[2], "Sub_Systems");
//     test.log(power_expected_value);
//     power_actual_value=waitForObject(names.powerPowerButton).text;
//     test.log(power_actual_value);
//     snooze(3);
//     if(power_actual_value==power_expected_value){
//         test.log("Power-Values are similar");
//     }
//     else{
//         test.log("Power-Values are not similar");
//     }
//     snooze(3);
//     var power11kV_expected_value=testData.field(dataset[3], "Sub_Systems");
//     test.log(power11kV_expected_value);
//     power11kV_actual_value=waitForObject(names.power11kVPower11kVButton).text;
//     test.log(power11kV_actual_value);
//     snooze(3);
//     if(power11kV_actual_value==power11kV_expected_value){
//         test.log("Power11kV-Values are similar");
//     }
//     else{
//         test.log("Power11kV-Values are not similar");
//     } 
//     snooze(3);
//     var power1500V_expected_value=testData.field(dataset[4], "Sub_Systems");
//     test.log(power1500V_expected_value);
//     power1500V_actual_value=waitForObject(names.power1500VPower1500VButton).text;
//     test.log(power1500V_actual_value);
//     snooze(3);
//     if(power1500V_actual_value==power1500V_expected_value){
//         test.log("Power1500V-Values are similar");
//     }
//     else{
//         test.log("Power1500V-Values are not similar");
//     }
//     snooze(3);
//     var power33kV_expected_value=testData.field(dataset[5], "Sub_Systems");
//     test.log(power33kV_expected_value);
//     power33kV_actual_value=waitForObject(names.power33kVPower33kVButton).text;
//     test.log(power33kV_actual_value);
//     snooze(3);
//     if(power33kV_actual_value==power33kV_expected_value){
//         test.log("Power33kV-Values are similar");
//     }
//     else{
//         test.log("Power33kV-Values are not similar");
//     }
//     snooze(3);
//     var powerLV_expected_value=testData.field(dataset[6], "Sub_Systems");
//     test.log(powerLV_expected_value);
//     powerLV_actual_value=waitForObject(names.powerLVPowerLVButton).text;
//     test.log(powerLV_actual_value);
//     snooze(3);
//     if(powerLV_actual_value==powerLV_expected_value){
//         test.log("PowerLV-Values are similar");
//     }
//     else{
//         test.log("PowerLV-Values are not similar");
//     }
//     snooze(3);
//     var system_expected_value=testData.field(dataset[7], "Sub_Systems");
//     test.log(system_expected_value);
//     system_actual_value=waitForObject(names.systemSystemButton).text;
//     test.log(system_actual_value);
//     snooze(3);
//     if(system_actual_value==system_expected_value){
//         test.log("System-Values are similar");
//     }
//     else{
//         test.log("System-Values are not similar");
//     }
//     snooze(3);
//     var ventilation_expected_value=testData.field(dataset[8], "Sub_Systems");
//     test.log(ventilation_expected_value);
//     ventilation_actual_value=waitForObject(names.ventilationVentilationButton).text;
//     test.log(ventilation_actual_value);
//     snooze(3);
//     if(ventilation_actual_value==ventilation_expected_value){
//         test.log("Ventilation-Values are similar");
//     }
//     else{
//         test.log("Ventilation-Values are not similar");
//     }
     
     
     snooze(3);
  clickButton(waitForObject(names.communicationsDeviceLevelRingDLRButton));
  snooze(3);
  mouseClick(waitForObject(names.integraDeviceLevelRingDLREdit), 81, 23, MouseButton.PrimaryButton);
    
 
  //this section will take the values from the csv file
  var dataset_device_name = testData.dataset("Data_Input.csv");
  var device_name = testData.field(dataset_device_name[0], "Device Name");
  snooze(3);
  type(waitForObject(names.integraDeviceLevelRingDLREdit), device_name);
  mouseClick(waitForObject(names.integraWPFControl_2), 2, 4, MouseButton.PrimaryButton);
    mouseClick(waitForObject(names.integraDeviceLevelRingDLREdit), 331, 17, MouseButton.PrimaryButton);
    snooze(3);
    mouseClick(waitForObject(names.integraWPFControl_4), 6, 4, MouseButton.PrimaryButton);
    snooze(3);
    mouseClick(waitForObject(names.healthStateExpander));
    mouseClick(waitForObject(names.healthStateInAlarmCheckBox));
    clickButton(waitForObject(names.applyButton));
    mouseClick(waitForObject(names.integraToggleButton));
    mouseClick(waitForObject(names.healthStateExpander));
    clickButton(waitForObject(names.healthStateClearButton));
    mouseClick(waitForObject(names.healthStateUnknownCheckBox));
    clickButton(waitForObject(names.applyButton));
    mouseMove(waitForObject(names.o04TableCell));
    mouseWheel(-10);
    mouseWheel(8);
    mouseClick(waitForObject(names.integraToggleButton));
    clickButton(waitForObject(names.clearButton));
    mouseClick(waitForObject(names.integraPARTIconWPFControl), 6, 12, MouseButton.PrimaryButton);
    mouseClick(waitForImage("cancel"));
    mouseClick(waitForObject(names.integraPARTIconWPFControl), 7, 9, MouseButton.PrimaryButton);
    mouseClick(waitForImage("save"));
    snooze(3);
    mouseClick(waitForObject(names.nameHeaderItem));
    mouseClick(waitForObject(names.nameHeaderItem));
    mouseClick(waitForObject(names.locationHeaderItem));
    mouseClick(waitForObject(names.locationHeaderItem));
    mouseClick(waitForObject(names.o01TableCell));
    snooze(3);
    clickButton(waitForObject(names.integraShowDeviceInformationButton));
    mouseClick(waitForObject(names.integraWPFControl_10), 20, 14, MouseButton.PrimaryButton);
    doubleClick(waitForObject(names.o02TableCell));
    snooze(3);
    test.attachDesktopScreenshot("Pre-updation of Notes");
    clickButton(waitForObject(names.integraButton_6));
    type(waitForObject(names.integraEdit), "<Ctrl+A>");
    type(waitForObject(names.integraEdit), "<Backspace>");
    let edit = Math.floor(Math.random() * 1000);//Note edit
    test.log(edit);
    type(waitForObject(names.integraEdit),edit+"Automation Testing!!!");//Note edit
    test.attachDesktopScreenshot("Post updation of Notes");
    mouseClick(waitForObject(names.integraButton_7));
    snooze(3);
    test.attachDesktopScreenshot("Pre-updation of Remarks");
    mouseClick(waitForObject(names.integraButton_9));
    type(waitForObject(names.integraRemarksEdit), "<Ctrl+A>");
    type(waitForObject(names.integraRemarksEdit), "<Backspace>");
    let remarks=Math.floor(Math.random() * 1000);
    test.log(remarks);
    type(waitForObject(names.integraRemarksEdit), remarks+"This is Squish!!"); //Remarks edit
    mouseClick(waitForObject(names.integraButton_5));
    snooze(3);
    test.attachDesktopScreenshot("Post updation of Remarks");
  
  //Verifying the Alarm Tab
//    mouseClick(waitForObject(names.integraIntegraClientCommonUIWPFViewModelsDeviceDetailsAlarmsTabViewModelTabItem));
//    snooze(3);
//    mouseClick(waitForImage("image_1"));  //click the image we have captured at the time of scripting(check the image in Search Images folder in Test Suite resources
//    snooze(3);
//   mouseClick(waitForObject(names.healthTypeExpander));
//    mouseClick(waitForObject(names.healthTypeFCheckBox));
//    clickButton(waitForObject(names.applyButton));
//    mouseClick(waitForImage("image_1"));
//    clickButton(waitForObject(names.clearButton));
//    mouseClick(waitForImage("image_1"));
//    mouseClick(waitForObject(names.stateExpander));
//    mouseClick(waitForObject(names.stateAlarmCheckBox));
//    mouseClick(waitForObject(names.healthTypeExpander));
//    mouseClick(waitForObject(names.healthTypeFCheckBox));
//    clickButton(waitForObject(names.applyButton));
//    mouseClick(waitForImage("image_1"));
//    clickButton(waitForObject(names.clearButton));
//    if(waitForImage("export_alarm").exists){
//    mouseClick(waitForImage("export_alarm"));
//    mouseClick(waitForImage("cancel"));
//    mouseClick(waitForImage("export_alarm"));
//    mouseClick(waitForImage("save"));
//    snooze(3);
//    test.attachDesktopScreenshot("Alarms Screen");
//    }
////    else if(waitForImage("export_disabled").exists){
//    snooze(3);
//    test.attachDesktopScreenshot("Alarms Screen");
//  //  }
//    mouseClick(waitForObject(names.integraIntegraClientCommonUIWPFViewModelsDeviceDetailsEventsOrHistoryTabViewModelTabItem));
//    mouseClick(waitForObject(names.integraEdit), 80, 20, MouseButton.PrimaryButton);
//    snooze(3);
//    type(waitForObject(names.integraEdit), "in alarm");
//    type(waitForObject(names.integraEdit), "<Ctrl+A>");
//    type(waitForObject(names.integraEdit), "<Backspace>");
//    mouseClick(waitForObject(names.historyTabDataGridDateTimeHeaderItem));
//    mouseClick(waitForObject(names.historyTabDataGridDateTimeHeaderItem));
//    if(findImage(("export_disabled")).exists) {
//         mouseClick(waitForObject(names.integraIntegraClientCommonUIWPFViewModelsDeviceDetailsLegendsTabViewModelTabItem));
//    }
//    else if(waitForImage("export_enabled")){
//    mouseClick(waitForImage("export_alarm"));
//    mouseClick(waitForImage("cancel"));
//    mouseClick(waitForImage("export_alarm"));
//    mouseClick(waitForImage("save"));
//    snooze(3);
//    }
    test.attachDesktopScreenshot("Events Screen"); //capture the screenshot and attach to the report
    mouseClick(waitForObject(names.integraIntegraClientCommonUIWPFViewModelsDeviceDetailsLegendsTabViewModelTabItem));

    var label_dataset= testData.dataset("Data_Input.csv");
    var comm_state= testData.field(label_dataset[0], "Label_Names");
    test.compare(waitForObjectExists(names.integraCommunicationsStateLabel).text, comm_state);
    var health_state= testData.field(label_dataset[1], "Label_Names");
    test.compare(waitForObjectExists(names.integraHealthStateLabel).text, health_state);
    var device_icon= testData.field(label_dataset[2], "Label_Names");
    test.compare(waitForObjectExists(names.integraDeviceIconLabel).text, device_icon);
    snooze(3);
    test.attachDesktopScreenshot("Legend Screen");
    snooze(3);
    //doubleClick(waitForObject(names.o01TableCell));
    mouseClick(waitForObject(names.integraWPFControl_11), 16, 23, MouseButton.PrimaryButton);
    snooze(3);
    var device_types_dataset= testData.dataset("Data_Input.csv");
    var dlr= testData.field(device_types_dataset[0], "Device_Types_Communications");
    test.compare(waitForObjectExists(names.communicationsDeviceLevelRingDLRButton).text, dlr);
    snooze(3);
    var aenp= testData.field(device_types_dataset[1], "Device_Types_Communications");
    test.compare(waitForObjectExists(names.communicationsEthernetAdaptorPCSAENPButton).text, aenp);
    snooze(3);
    var aent= testData.field(device_types_dataset[2], "Device_Types_Communications");
    test.compare(waitForObjectExists(names.communicationsEthernetAdaptorTVCSAENTButton).text, aent);
    snooze(3);
    var ecb= testData.field(device_types_dataset[3], "Device_Types_Communications");
    test.compare(waitForObjectExists(names.communicationsEthernetControlBridgeECBButton).text, ecb);
    snooze(3);
    var esw= testData.field(device_types_dataset[4], "Device_Types_Communications");
    test.compare(waitForObjectExists(names.communicationsEthernetSwitchESWButton).text, esw);
    snooze(3);
    var etp= testData.field(device_types_dataset[5], "Device_Types_Communications");
    test.compare(waitForObjectExists(names.communicationsEthernetTapETPButton).text, etp);
    snooze(3);
    var icmp= testData.field(device_types_dataset[6], "Device_Types_Communications");
    test.compare(waitForObjectExists(names.communicationsICMPDeviceICMPDeviceButton).text, icmp);
    snooze(3);
    var gtw= testData.field(device_types_dataset[7], "Device_Types_Communications");
    test.compare(waitForObjectExists(names.communicationsSELRTACGatewayGTWButton).text, gtw);
    snooze(3);
    test.attachDesktopScreenshot("Communications Device Types");
    clickButton(waitForObject(names.communicationsCommunicationsButton));
    snooze(3);
//    clickButton(waitForObject(names.pLCPLCButton));
//    snooze(3);
//    var device_types_plc_dataset= testData.dataset("Data_Input.csv");
//    var plci= testData.field(device_types_plc_dataset[0], "Device_Types_PLC");
//    test.compare(waitForObjectExists(names.pLCPLCInterfacePLCIButton).text,plci);
//    snooze(3);
//    var plcm= testData.field(device_types_plc_dataset[1], "Device_Types_PLC");
//    test.compare(waitForObjectExists(names.pLCPLCMonitoringPLCMButton).text,plcm);
//    snooze(3);
//    test.attachDesktopScreenshot("PLC Device Types");
//    clickButton(waitForObject(names.pLCPLCButton));
//    snooze(3);
//    clickButton(waitForObject(names.powerPowerButton));
//    snooze(3);
//    var device_types_power_dataset= testData.dataset("Data_Input.csv");
//    var hvap=testData.field(device_types_power_dataset[0], "Device_Types_Power");
//    test.compare(waitForObjectExists(names.powerHighVoltageAntiParallelHVAPButton).text,hvap);
//    snooze(3);
//    var lhs=testData.field(device_types_power_dataset[1], "Device_Types_Power");
//    test.compare(waitForObjectExists(names.powerHighVoltageSwitchboardLHSButton).text,lhs);
//    snooze(3);
//    var lbb=testData.field(device_types_power_dataset[2], "Device_Types_Power");
//    test.compare(waitForObjectExists(names.powerHVBusbarLBBButton).text,lbb);
//    snooze(3);
//    var hvsc=testData.field(device_types_power_dataset[3], "Device_Types_Power");
//    test.compare(waitForObjectExists(names.powerHVControlSystemHVSCButton).text,hvsc);
//    snooze(3);
//    test.attachDesktopScreenshot("Power Device Types");
//    clickButton(waitForObject(names.powerPowerButton));
//    snooze(3);
//    clickButton(waitForObject(names.power11kVPower11kVButton));
//    snooze(3);
//    var device_types_power11kV_dataset= testData.dataset("Data_Input.csv");
//    var lmtl= testData.field(device_types_power11kV_dataset[0], "Device_Types_Power11kV");
//    test.compare(waitForObjectExists(names.power11kV1104kVACTransformerFeederLMTLButton).text,lmtl)
//    snooze(3);
//    var lmsb= testData.field(device_types_power11kV_dataset[1], "Device_Types_Power11kV");
//    test.compare(waitForObjectExists(names.power11kV11kVBusSectionBreakerLMSBButton).text,lmsb)
//    snooze(3);
//    var lmi= testData.field(device_types_power11kV_dataset[2], "Device_Types_Power11kV");
//    test.compare(waitForObjectExists(names.power11kV11kVIncomerFromTxBreakerLMIButton).text,lmi)
//    snooze(3);
//    var lml= testData.field(device_types_power11kV_dataset[3], "Device_Types_Power11kV");
//    test.compare(waitForObjectExists(names.power11kV11kVInterconnectorLMLButton).text,lml)
//    snooze(3);
//    test.attachDesktopScreenshot("Power11kV Device Types");
//    clickButton(waitForObject(names.power11kVPower11kVButton));
//    snooze(3);
//    clickButton(waitForObject(names.power1500VPower1500VButton));
//    snooze(3);
//    var device_types_power1500V_dataset= testData.dataset("Data_Input.csv");
//    var ldcb=testData.field(device_types_power1500V_dataset[0], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500V1500VDCCircuitBreakerLDCBButton).text,ldcb);
//    snooze(3);
//    var ldt2=testData.field(device_types_power1500V_dataset[1], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500V1500VTracksideIsolatorDoublePoleLDT2Button).text,ldt2);
//    snooze(3);
//    var dcm=testData.field(device_types_power1500V_dataset[2], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500V24VDCMonitoringDCMButton).text,dcm);
//    snooze(3);
//    var ldb=testData.field(device_types_power1500V_dataset[3], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VBypassPanelLDBButton).text,ldb);
//    snooze(3);
//    var ldnpcs=testData.field(device_types_power1500V_dataset[4], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VNegativeReturnPanelCitySideLDNPCSButton).text,ldnpcs);
//    snooze(3);
//    var ldnps1=testData.field(device_types_power1500V_dataset[5], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VNegativeReturnPanelSouthernDive1LDNPS1Button).text,ldnps1);
//    snooze(3);
//    var ldnps2=testData.field(device_types_power1500V_dataset[6], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VNegativeReturnPanelSouthernDive2LDNPS2Button).text,ldnps2);
//    snooze(3);
//    var ldnpsw=testData.field(device_types_power1500V_dataset[7], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VNegativeReturnPanelSouthwestCorridorLDNPSWButton).text,ldnpsw);
//    snooze(3);
//    var ohw=testData.field(device_types_power1500V_dataset[8], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VOverheadWiringSectionOHWButton).text,ohw);
//    snooze(3);
//    var ldrb=testData.field(device_types_power1500V_dataset[9], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VRectifierBreakerLDRBButton).text,ldrb);
//    snooze(3);
//    mouseMove(waitForObject(names.power1500VRectifierBreakerLDRBButton));
//    mouseWheel(-1);
//    var ldrs=testData.field(device_types_power1500V_dataset[10], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VRegenerativeEnergyStorageDeviceLDRSButton).text,ldrs);
//    snooze(3);
//    mouseMove(waitForObject(names.power1500VRegenerativeEnergyStorageDeviceLDRSButton));
//    mouseWheel(-2);
//    var ldfs=testData.field(device_types_power1500V_dataset[11], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VSafetyFeederLDFSButton).text,ldfs);
//    snooze(3);
//    var ldsf=testData.field(device_types_power1500V_dataset[12], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VSectionFeederLDSFButton).text,ldsf);
//    snooze(3);
//    mouseMove(waitForObject(names.power1500VSectionFeederLDSFButton));
//    mouseWheel(-1);
//    var ldt=testData.field(device_types_power1500V_dataset[13], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VTracksideIsolatorsLDTButton).text,ldt);
//    snooze(3);
//    mouseWheel(-1);
//    var ups=testData.field(device_types_power1500V_dataset[14], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VUninterruptiblePowerSupplyUPSButton).text,ups);
//    snooze(3);
//    mouseWheel(-3);
//    var ldv=testData.field(device_types_power1500V_dataset[15], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VVoltageLimitingDeviceLDVButton).text,ldv);
//    snooze(3);
//    var vmd=testData.field(device_types_power1500V_dataset[16], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VVoltageMonitoringDeviceVMDButton).text,vmd);
//    snooze(3);
//    var ldyf=testData.field(device_types_power1500V_dataset[17], "Device_Types_Power1500V");
//    test.compare(waitForObjectExists(names.power1500VYardFeederBreakerLDYFButton).text,ldyf);
//    snooze(3);
//    mouseWheel(8);
//    test.attachDesktopScreenshot("Power 1500V Device Types");
//    clickButton(waitForObject(names.power1500VPower1500VButton));
//    snooze(3);
//    clickButton(waitForObject(names.power33kVPower33kVButton));
//    var device_types_power33kV_dataset= testData.dataset("Data_Input.csv");
//    var lhtd=testData.field(device_types_power33kV_dataset[0], "Device_Types_Power33kV");
//    test.compare(waitForObjectExists(names.power33kV3312kVRectifierTxBreakerLHTDButton).text,lhtd);
//    snooze(3);
//    var lhtm=testData.field(device_types_power33kV_dataset[1], "Device_Types_Power33kV");
//    test.compare(waitForObjectExists(names.power33kV3311kVTxBreakerLHTMButton).text,lhtm);
//    snooze(3);
//    var lhi=testData.field(device_types_power33kV_dataset[2], "Device_Types_Power33kV");
//    test.compare(waitForObjectExists(names.power33kV33kVBulkSupplyIncomerLHIButton).text,lhi);
//    snooze(3);
//    var lhsb=testData.field(device_types_power33kV_dataset[3], "Device_Types_Power33kV");
//    test.compare(waitForObjectExists(names.power33kV33kVBusSectionBreakerLHSBButton).text,lhsb);
//    snooze(3);
//    var lhh=testData.field(device_types_power33kV_dataset[4], "Device_Types_Power33kV");
//    test.compare(waitForObjectExists(names.power33kV33kVHarmonicFilterLHHButton).text,lhh);
//    snooze(3);
//    var lhe=testData.field(device_types_power33kV_dataset[5], "Device_Types_Power33kV");
//    test.compare(waitForObjectExists(names.power33kV33kVSwitchboardBusTieLHEButton).text,lhe);
//    snooze(3);
//    var lhl=testData.field(device_types_power33kV_dataset[6], "Device_Types_Power33kV");
//    test.compare(waitForObjectExists(names.power33kV33kVSwitchboardInterconnectorLHLButton).text,lhl);
//    snooze(3);
//    var epb=testData.field(device_types_power33kV_dataset[7], "Device_Types_Power33kV");
//    test.compare(waitForObjectExists(names.power33kVEmergencyPushButtonEPBButton).text,epb);
//    snooze(3);
//    var lmtr=testData.field(device_types_power33kV_dataset[8], "Device_Types_Power33kV");
//    test.compare(waitForObjectExists(names.power33kVHVPowerMeterLMTRButton).text,lmtr);
//    snooze(3);
//    test.attachDesktopScreenshot("Power 33kV Device Types");
//    clickButton(waitForObject(names.power33kVPower33kVButton));
//    snooze(3);
//    clickButton(waitForObject(names.powerLVPowerLVButton));
//    var device_types_powerLV_dataset= testData.dataset("Data_Input.csv");
//    var bch=testData.field(device_types_powerLV_dataset[0], "Device_Types_PowerLV");
//    test.compare(waitForObjectExists(names.powerLVBatteryChargersBCHButton).text,bch);
//    snooze(3);
//    var cer=testData.field(device_types_powerLV_dataset[1], "Device_Types_PowerLV");
//    test.compare(waitForObjectExists(names.powerLVCommunicationEquipmentRoomCERButton).text,cer);
//    snooze(3);
//    var cec=testData.field(device_types_powerLV_dataset[2], "Device_Types_PowerLV");
//    test.compare(waitForObjectExists(names.powerLVControlEquipmentCabinetType1CECButton).text,cec);
//    snooze(3);
//    var cecs=testData.field(device_types_powerLV_dataset[3], "Device_Types_PowerLV");
//    test.compare(waitForObjectExists(names.powerLVControlEquipmentCabinetType2CECSButton).text,cecs);
//    snooze(3);
//    var cect=testData.field(device_types_powerLV_dataset[4], "Device_Types_PowerLV");
//    test.compare(waitForObjectExists(names.powerLVControlEquipmentCabinetType3CECTButton).text,cect);
//    snooze(3);
//    var dgn=testData.field(device_types_powerLV_dataset[5], "Device_Types_PowerLV");
//    test.compare(waitForObjectExists(names.powerLVDieselGeneratorDGNButton).text,dgn);
//    snooze(3);
//    var llv=testData.field(device_types_powerLV_dataset[6], "Device_Types_PowerLV");
//    test.compare(waitForObjectExists(names.powerLVLVSwitchboardLLVButton).text,llv);
//    snooze(3);
//    test.attachDesktopScreenshot("Power LV Device Types");
//    clickButton(waitForObject(names.powerLVPowerLVButton));
//    snooze(3);
//    clickButton(waitForObject(names.systemSystemButton));
//    var device_types_system_dataset= testData.dataset("Data_Input.csv");
//    var etm=testData.field(device_types_system_dataset[0], "System");
//    test.compare(waitForObjectExists(names.systemExternalTaskMonitoringETMButton).text,etm);
//    snooze(3);
//    var ss=testData.field(device_types_system_dataset[1], "System");
//    test.compare(waitForObjectExists(names.systemServerStateServerStateButton).text,ss);
//    snooze(3);
//    var crs=testData.field(device_types_system_dataset[2], "System");
//    test.compare(waitForObjectExists(names.systemServersComputerCRSButton).text,crs);
//    snooze(3);
//    var td=testData.field(device_types_system_dataset[3], "System");
//    test.compare(waitForObjectExists(names.systemTaskMonitoringTaskDeviceButton).text,td);
//    snooze(3);
//    var hv=testData.field(device_types_system_dataset[4], "System");
//    test.compare(waitForObjectExists(names.systemVMMonitoringHypervisorButton).text,hv);
//    snooze(3);
//    test.attachDesktopScreenshot("System Device Types");
//    clickButton(waitForObject(names.systemSystemButton));
//    snooze(3);
//    clickButton(waitForObject(names.ventilationVentilationButton));
//    var device_types_ventilation_dataset= testData.dataset("Data_Input.csv");
//    var cmp=testData.field(device_types_ventilation_dataset[0], "Ventilation");
//    test.compare(waitForObjectExists(names.ventilationCompressorCMPButton).text,cmp);
//    snooze(3);
//    var evp=testData.field(device_types_ventilation_dataset[1], "Ventilation");
//    test.compare(waitForObjectExists(names.ventilationEmergencyVentilationPanelEVPButton).text,evp);
//    snooze(3);
//    var fpd=testData.field(device_types_ventilation_dataset[2], "Ventilation");
//    test.compare(waitForObjectExists(names.ventilationFixedPositionDamperFPDButton).text,fpd);
//    snooze(3);
//    var ibp=testData.field(device_types_ventilation_dataset[3], "Ventilation");
//    test.compare(waitForObjectExists(names.ventilationIntegratedBackupPanelIBPButton).text,ibp);
//    snooze(3);
//    var mpd=testData.field(device_types_ventilation_dataset[4], "Ventilation");
//    test.compare(waitForObjectExists(names.ventilationMultiPositionDamperMPDButton).text,mpd);
//    snooze(3);
//    var rtd=testData.field(device_types_ventilation_dataset[5], "Ventilation");
//    test.compare(waitForObjectExists(names.ventilationTemperatureSensorRTDButton).text,rtd);
//    snooze(3);
//    var tes=testData.field(device_types_ventilation_dataset[6], "Ventilation");
//    test.compare(waitForObjectExists(names.ventilationTrackwayExhaustSystemTESButton).text,tes);
//    snooze(3);
//    var ctb=testData.field(device_types_ventilation_dataset[7], "Ventilation");
//    test.compare(waitForObjectExists(names.ventilationTunnelVentilationControlTimetableCTBButton).text,ctb);
//    snooze(3);
//    mouseWheel(-2);
//    var tvs=testData.field(device_types_ventilation_dataset[8], "Ventilation");
//    test.compare(waitForObjectExists(names.ventilationTunnelVentilationSystemTVSButton).text,tvs);
//    snooze(3);
//    var vfn=testData.field(device_types_ventilation_dataset[9], "Ventilation");
//    test.compare(waitForObjectExists(names.ventilationVariableSpeedFanVFNButton).text,vfn);
//    snooze(3);
//    mouseWheel(7);
//    test.attachDesktopScreenshot("Ventilation Device Types");
//    clickButton(waitForObject(names.ventilationVentilationButton));
//    snooze(3);
   clickButton(waitForObject(names.communicationsCommunicationsButton));
    clickButton(waitForObject(names.communicationsDeviceLevelRingDLRButton));
    mouseClick(waitForObject(names.integraToggleButton));
    mouseClick(waitForObject(names.healthStateExpander));
    mouseClick(waitForObject(names.healthStateFaultyCheckBox));
    mouseClick(waitForObject(names.healthStateUnknownCheckBox));
    mouseClick(waitForObject(names.healthStateInAlarmCheckBox));
    clickButton(waitForObject(names.applyButton));
    mouseClick(waitForObject(names.integraPARTIconWPFControl), 7, 12, MouseButton.PrimaryButton);
    type(waitForObject(names.saveAsEdit), "Data_output");
    type(waitForObject(names.saveAsEdit), "<Down>");
    type(waitForObject(names.saveAsEdit), "<Return>");
    clickButton(waitForObject(names.saveAsYesButton));
    test.attachDesktopScreenshot("Unknown Filter Data");
    
    
   
    //Read the csv file
    infile = findFile("testdata", "Data_output.csv");
    infile = infile.replace(/[\/]/g, File.separator);
    test.log("Reading " + infile);
    file = File.open(infile, "r");
    var lines = [];
    var i = 0;
    while (true) {
        var line = file.readln();
        if (line == null)
            break;
        lines[i++] = line;
    }
    file.close();
    
    
    //Take the values from the csv file and compare it with application data
    var unknown_dataset= testData.dataset("Data_output.csv");
    var ul=unknown_dataset.length;
    for(j=0;j<ul;j++){
         var unknown_output=testData.field(unknown_dataset[j], "Health State");
         test.log(unknown_output)
         test.compare(unknown_output,"Unknown");
    }
    var faulty_dataset= testData.dataset("Data_output.csv");
    var fl=faulty_dataset.length;
    for(j=0;j<fl;j++){
         var faulty_output=testData.field(faulty_dataset[j], "Health State");
         test.log(faulty_output)
         test.compare(faulty_output,"Faulty");
    }
    
    var comm_dataset= testData.dataset("Data_output.csv");
    var cl=comm_dataset.length;
    for(j=0;j<cl;j++){
         var comm_output=testData.field(comm_dataset[j], "Communications State");
         test.log(comm_output);
         test.compare(comm_output,"Comms Loss");
    }
    var unknown_comm_dataset= testData.dataset("Data_output.csv");
    var ucl=unknown_comm_dataset.length;
    for(j=0;j<ucl;j++){
         var unknown_comm_output=testData.field(unknown_comm_dataset[j], "Communications State");
         test.log(unknown_comm_output);
         test.compare(unknown_comm_output,"Unknown");
    }
    
    var location_dataset= testData.dataset("Data_output.csv");
    var loc=location_dataset.length;
        for(j=0;j<loc;j++){
             var location_output=testData.field(location_dataset[j], "Location");
             
             test.log(location_output);
             
             var location_substring= location_output.split(" ");
             test.log(location_substring);
             if(location_substring[0]=="Central"){
                 test.log("Location Contains Central");
             }
             else{
                 test.log("Location doesnot Contains Central");
             }
             if(location_substring[1]=="Central"){
                 test.log("Location Contains Central");
             }
             else{
                 test.log("Location doesnot Contains Central");
             }
             if(location_substring[2]=="Central"){
                 test.log("Location Contains Central");
             }
             else{
                 test.log("Location doesnot Contains Central");
             }
             if(location_substring[3]=="Central"){
                 test.log("Location Contains Central");
             }
             else{
                 test.log("Location doesnot Contains Central");
             }
             if(location_substring[4]=="Central"){
                 test.log("Location Contains Central");
             }
             else{
                 test.log("Location doesnot Contains Central");
             }   
             if(location_substring[5]=="Central"){
                 test.log("Location Contains Central");
             }
             else{
                 test.log("Location doesnot Contains Central");
             }   
            }
           
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
//            var name_output= testData.dataset("Data_output.csv");
//            let rand=Math.floor(Math.random() * 10);
//            var device_name=testData.field(name_output[rand], "Name");
            type(waitForObject(names.inputCaptureWindowPane),"PLCBC0DLRB");
            snooze(3);
            mouseClick(waitForObject(names.inputCaptureWindowPane), 789, 665, MouseButton.PrimaryButton);//find now
            snooze(3);
            doubleClick(waitForObject(names.inputCaptureWindowPane), 894, 439, MouseButton.PrimaryButton);//double click on device name
            snooze(3);
            mouseClick(waitForObject(names.inputCaptureWindowPane), 1208, 348, MouseButton.PrimaryButton);//close ip21 record
            snooze(3);
            doubleClick(waitForObject(names.inputCaptureWindowPane), 1174, 82, MouseButton.PrimaryButton);//double click on panel
            snooze(3);
            test.attachDesktopScreenshot("Values before IP21 Updation");
//            mouseClick(waitForObject(names.inputCaptureWindowPane), 686, 187, MouseButton.PrimaryButton);//location field
//            snooze(3);
////            var location_output= testData.dataset("Data_output.csv");
////            let random=Math.floor(Math.random() * 16);
////            var location_name=testData.field(location_output[random], "Location");
////            test.log(location_name);
//            type(waitForObject(names.inputCaptureWindowPane), "Southern Dive to Waterloo");//location select
//            nativeType("<Return>");
//            mouseClick(waitForObject(names.inputCaptureWindowPane), 1036, 566, MouseButton.PrimaryButton);//yes button on popup
            //var health_state=(waitForObjectExists(names.inputCaptureWindowPane),1319, 222).text;
            //test.log(health_state);
            mouseClick(waitForObject(names.inputCaptureWindowPane), 1319, 222, MouseButton.PrimaryButton);//health state field
            snooze(3);
//            var health_output= testData.dataset("Data_output.csv");
//            let random1=Math.floor(Math.random() * 16);
//            var health_state=testData.field(health_output[random1], "Health State");
//            test.log(health_state);
            //if(health_state=="Unknown"){
            type(waitForObject(names.inputCaptureWindowPane), "In Alarm");
            snooze(2);
            nativeType("<Return>");
            
//            else if(health_state=="In Alarm"){
//                type(waitForObject(names.inputCaptureWindowPane), "Unknown");
//                snooze(2);
//                nativeType("<Return>");
//            }
//            else {
//                type(waitForObject(names.inputCaptureWindowPane), "Faulty");
//                snooze(2);
//                nativeType("<Return>");
//            }
          //  mouseClick(waitForObject(names.inputCaptureWindowPane), 1036, 566, MouseButton.PrimaryButton);//yes button on popup
            snooze(3);
            test.attachDesktopScreenshot("Values post IP21 Updation");
            mouseClick(waitForObject(names.o2ToolbarItem));
            clickButton(waitForObject(names.remoteDesktopConnectionOKButton));

                
        

snooze(5);

            //clickButton(waitForObject(names.communicationsCommunicationsButton));
//            clickButton(waitForObject(names.communicationsDeviceLevelRingDLRButton));
//            mouseClick(waitForObject(names.integraWPFControl_31), 19, 3, MouseButton.PrimaryButton);
//            mouseClick(waitForObject(names.healthStateExpander));
//            mouseClick(waitForObject(names.healthStateFaultyCheckBox));
//            mouseClick(waitForObject(names.healthStateUnknownCheckBox));
//            mouseClick(waitForObject(names.healthStateInAlarmCheckBox));
//            clickButton(waitForObject(names.applyButton));
//            mouseClick(waitForObject(names.integraPARTIconWPFControl), 13, 18, MouseButton.PrimaryButton);
//            type(waitForObject(names.saveAsEdit), "Data_output_after");
//            type(waitForObject(names.saveAsEdit), "<Down>");
//            type(waitForObject(names.saveAsEdit), "<Return>");
//            clickButton(waitForObject(names.saveAsYesButton));
            
//            var name_output= testData.dataset("Data_output.csv");
//            let rand=Math.floor(Math.random() * 16);
//            var device_name=testData.field(name_output[rand], "Name");
            test.log(device_name);
            type(waitForObject(names.integraDeviceLevelRingDLREdit), "PLCBC0DLRB");
            doubleClick(waitForObject(names.o02TableCell));
            snooze(3);
            test.attachDesktopScreenshot("Post IP21 Update");
              
//            infile = findFile("testdata", "Data_output_after.csv");
//            infile = infile.replace(/[\/]/g, File.separator);
//            test.log("Reading " + infile);
//            file = File.open(infile, "r");
//            var lines = [];
//            var i = 0;
//            while (true) {
//                var line = file.readln();
//                if (line == null)
//                    break;
//                lines[i++] = line;
//            }
//            file.close();
            
            
            //Take the values from the csv file and compare it with application data
//            var unknown_dataset= testData.dataset("Data_output_after.csv");
//            var ul=unknown_dataset.length;
//            for(j=0;j<ul;j++){
//                 var unknown_output=testData.field(unknown_dataset[j], "Health State");
//                 test.log(unknown_output)
//                 test.compare(unknown_output,"Unknown");
//            }
//            var faulty_dataset= testData.dataset("Data_output_after.csv");
//            var fl=faulty_dataset.length;
//            for(j=0;j<fl;j++){
//                 var faulty_output=testData.field(faulty_dataset[j], "Health State");
//                 test.log(faulty_output)
//                 test.compare(faulty_output,"Faulty");
//            }
//            
//            var comm_dataset= testData.dataset("Data_output_after.csv");
//            var cl=comm_dataset.length;
//            for(j=0;j<cl;j++){
//                 var comm_output=testData.field(comm_dataset[j], "Communications State");
//                 test.log(comm_output);
//                 test.compare(comm_output,"Comms Loss");
//            }
//            var unknown_comm_dataset= testData.dataset("Data_output_after.csv");
//            var ucl=unknown_comm_dataset.length;
//            for(j=0;j<ucl;j++){
//                 var unknown_comm_output=testData.field(unknown_comm_dataset[j], "Communications State");
//                 test.log(unknown_comm_output);
//                 test.compare(unknown_comm_output,"Unknown");
//            }
//            
//            var location_dataset= testData.dataset("Data_output_after.csv");
//            var loc=location_dataset.length;
//                for(j=0;j<loc;j++){
//                     var location_output=testData.field(location_dataset[j], "Location");
//                     
//                     test.log(location_output);
//                     
//                     var location_substring= location_output.split(" ");
//                     test.log(location_substring);
//                     if(location_substring[0]=="Central"){
//                         test.log("Location Contains Central");
//                     }
//                     else{
//                         test.log("Location doesnot Contains Central");
//                     }
//                     if(location_substring[1]=="Central"){
//                         test.log("Location Contains Central");
//                     }
//                     else{
//                         test.log("Location doesnot Contains Central");
//                     }
//                     if(location_substring[2]=="Central"){
//                         test.log("Location Contains Central");
//                     }
//                     else{
//                         test.log("Location doesnot Contains Central");
//                     }
//                     if(location_substring[3]=="Central"){
//                         test.log("Location Contains Central");
//                     }
//                     else{
//                         test.log("Location doesnot Contains Central");
//                     }
//                     if(location_substring[4]=="Central"){
//                         test.log("Location Contains Central");
//                     }
//                     else{
//                         test.log("Location doesnot Contains Central");
//                     }   
//                     if(location_substring[5]=="Central"){
//                         test.log("Location Contains Central");
//                     }
//                     else{
//                         test.log("Location doesnot Contains Central");
//                     }   
//                    }
                    
}