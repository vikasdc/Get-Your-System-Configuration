/*               Created by vikas jr.
first to run this file you need to have node js installed in your computer
run this file in node js command prompt 
use command   node app.js to run the file
there will be no output in console but a new file configuration.txt will be created
you will get your computer configuration in that file
                                                            */ 


const fs = require("fs");
const os = require("os");

var cpu = os.cpus();

var x = fs.appendFileSync("configuration.txt",
`\n Administrator Name: ${os.hostname()}
 \n Processor: ${cpu[0].model}
 \n current Processor speed: ${cpu[0].speed} Mhz
 \n Total Cpus: ${cpu.length} cpus
 \n Total Ram: ${os.totalmem()} Bytes
 \n Free Ram: ${os.freemem()} Bytes
 \n Operating System Type: ${os.type()}
 \n Operating System Release: ${os.release()}

 `);


