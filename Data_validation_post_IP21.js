import * as names from 'names.js';

function data_validation() {
    startApplication("\"Integra HMI\"");
    clickButton(waitForObject(names.integraAlarmPanelButton));
    mouseClick(waitForObject(names.integraWPFControl_22), 3, 8, MouseButton.PrimaryButton);
    mouseClick(waitForObject(names.systemUtilitiesMenuItem));
    mouseClick(waitForObject(names.systemUtilitiesDeviceManagementMenuItem));
    clickButton(waitForObject(names.communicationsCommunicationsButton));
    clickButton(waitForObject(names.communicationsDeviceLevelRingDLRButton));
    mouseClick(waitForObject(names.integraWPFControl_31), 19, 3, MouseButton.PrimaryButton);
    mouseClick(waitForObject(names.healthStateExpander));
    mouseClick(waitForObject(names.healthStateFaultyCheckBox));
    mouseClick(waitForObject(names.healthStateUnknownCheckBox));
    mouseClick(waitForObject(names.healthStateInAlarmCheckBox));
    clickButton(waitForObject(names.applyButton));
    mouseClick(waitForObject(names.integraPARTIconWPFControl), 13, 18, MouseButton.PrimaryButton);
    type(waitForObject(names.saveAsEdit), "Data_output_after");
    type(waitForObject(names.saveAsEdit), "<Down>");
    type(waitForObject(names.saveAsEdit), "<Return>");
    clickButton(waitForObject(names.saveAsYesButton));
    
    infile = findFile("testdata", "Data_output_after.csv");
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
    var unknown_dataset= testData.dataset("Data_output_after.csv");
    var ul=unknown_dataset.length;
    for(j=0;j<ul;j++){
         var unknown_output=testData.field(unknown_dataset[j], "Health State");
         test.log(unknown_output)
         test.compare(unknown_output,"Unknown");
    }
    var faulty_dataset= testData.dataset("Data_output_after.csv");
    var fl=faulty_dataset.length;
    for(j=0;j<fl;j++){
         var faulty_output=testData.field(faulty_dataset[j], "Health State");
         test.log(faulty_output)
         test.compare(faulty_output,"Faulty");
    }
    
    var comm_dataset= testData.dataset("Data_output_after.csv");
    var cl=comm_dataset.length;
    for(j=0;j<cl;j++){
         var comm_output=testData.field(comm_dataset[j], "Communications State");
         test.log(comm_output);
         test.compare(comm_output,"Comms Loss");
    }
    var unknown_comm_dataset= testData.dataset("Data_output_after.csv");
    var ucl=unknown_comm_dataset.length;
    for(j=0;j<ucl;j++){
         var unknown_comm_output=testData.field(unknown_comm_dataset[j], "Communications State");
         test.log(unknown_comm_output);
         test.compare(unknown_comm_output,"Unknown");
    }
    
    var location_dataset= testData.dataset("Data_output_after.csv");
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
}
