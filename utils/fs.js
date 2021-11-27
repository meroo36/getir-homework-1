const fs = require("fs");
const util = require("util");

module.exports = (dir, req) => {
    const date = new Date().toTimeString();
    //Initialize write stream.
    const logFile = fs.createWriteStream(dir + "/logs/request.log", { flags: "a" });
    logFile.write("\n-----------------------------" + date + "-----------------------------\n");
    //Format the request object as a string before writing to the file.
    logFile.write(util.format(req));
    logFile.write("\n---------------------------------------" + "END" + "---------------------------------------\n");
};
