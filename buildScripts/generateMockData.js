/* This script generates mock data for our project */

/* eslint-disable no-console*/

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import faker from "faker"
import chalk from 'chalk';

jsf.extend("faker", function() {
    return faker;
});

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function(err) {
    if (err) {
        return console.log(chalk.red(err));
    } else {
        return console.log(chalk.green("Mock data generated"));
    }
}); 