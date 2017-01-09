/**
 * Created by yudistira on 1/8/17.
 */

var loopback = require('loopback');
var jsonfile = require('jsonfile');



// testing data source to read
var ds = loopback.createDataSource('myDashDB', {
    "host": "yp-dashdb-small-01-lon02.services.eu-gb.bluemix.net",
    "port": 50000,
    "database": "BLUDB",
    "password": "KU8oSTFjrpSv",
    "name": "myDashDB",
    "connector": "dashdb",
    "user": "dash107047"
});

// discover schema properties
ds.discoverSchema('BAM_ACCOUNTS1_TEST',{owner:'DASH107047'},callbackSchema);
function callbackSchema(err,results){
    if (err){
        console.error(err);
    }
    var BAM_ACCOUNTS1_TEST = results;
    console.info(BAM_ACCOUNTS1_TEST);
    var BAM_ACCOUNTS1_TEST_file = '../models/BAM_ACCOUNTS1_TEST.json';
    console.log(BAM_ACCOUNTS1_TEST_file);
    jsonfile.writeFile(BAM_ACCOUNTS1_TEST_file,BAM_ACCOUNTS1_TEST,saveFile);

    function saveFile(err){
        if (err) {
            console.error(err);
        }
        console.log('success writing files');
    }

}
