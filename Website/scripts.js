// THIS CODE IS ABSOLUTE GARBAGE SINCE I DO NOT HAVE ANY EXPERIENCE WITH PHP AND FRONTEND

// to be used outside of function
var secondHalfQuery = "";

// stores current state of dropdown
var currentDropdown = "";

function getAllFrom(table) {
    getWholeQuery("SELECT * FROM " + table);
}

function getAllTables() {
    getAllFrom("ENGINE");
    getAllFrom("LIGHTS");
    getAllFrom("SPARK_PLUG");
    getAllFrom("VEHICLE");
    getAllFrom("WHEELS");
    getAllFrom("TIRES");
}

function clearOutput() {
    document.getElementById("output").innerHTML = "";
}

function getWholeQuery(query) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("output").innerHTML += this.responseText;
            }
        }
    xmlhttp.open("GET", "getQuery.php?wholeQuery=" + query, true);
    xmlhttp.send();
}

function showSection(section) {
    if (section == "dropdown") {
        document.getElementById('dropdownSearch').style.display = 'block';
        document.getElementById('viewAll').style.display = 'none';
        document.getElementById('manualEntry').style.display = 'none';
        document.getElementById('output').innerHTML = "";

    } else if (section == "viewAll") {
        document.getElementById('dropdownSearch').style.display = 'none';
        document.getElementById('viewAll').style.display = 'block';
        document.getElementById('manualEntry').style.display = 'none';
        document.getElementById('output').innerHTML = "";
    } else if (section == "manual") {
        document.getElementById('dropdownSearch').style.display = 'none';
        document.getElementById('viewAll').style.display = 'none';
        document.getElementById('manualEntry').style.display = 'block';
        document.getElementById('output').innerHTML = "";
    }
}

function showDropdown(table) {
    var xmlhttp= new XMLHttpRequest();
    xmlhttp.open('GET', table + 'Menu.html', true);
    xmlhttp.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        document.getElementById('dropdowns').innerHTML= this.responseText;
    };
    xmlhttp.send();

    // show search button
    document.getElementById('searchOptions').style.opacity = 1;

    var engine = document.getElementById('compatibleEngine');
    var lights = document.getElementById('compatibleLights');
    var sparkPlug = document.getElementById('compatibleSparkPlug');
    var vehicle = document.getElementById('compatibleVehicle');
    var wheels = document.getElementById('compatibleWheels');
    var tires = document.getElementById('compatibleTires');
    
    // change available selection of compatibility
    if (table == 'engine') {
        engine.style.display = 'none';
        lights.style.display = 'none';
        sparkPlug.style.display = 'block';
        vehicle.style.display = 'block';
        wheels.style.display = 'none';
        tires.style.display = 'none';
        // updates query in case user does not input something first
        secondHalfQuery = "FROM ENGINE";
        // update current dropdown selection
        currentDropdown = "ENGINE";
    } else if (table == 'lights') {
        engine.style.display = 'none';
        lights.style.display = 'none';
        sparkPlug.style.display = 'none';
        vehicle.style.display = 'block';
        wheels.style.display = 'none';
        tires.style.display = 'none';
        secondHalfQuery = "FROM LIGHTS";
        currentDropdown = "LIGHTS";
    } else if (table == 'sparkPlug') {
        engine.style.display = 'block';
        lights.style.display = 'none';
        sparkPlug.style.display = 'none';
        vehicle.style.display = 'block';
        wheels.style.display = 'none';
        tires.style.display = 'none';
        secondHalfQuery = "FROM SPARK_PLUG";
        currentDropdown = "SPARK_PLUG";
    } else if (table == 'vehicle') {
        engine.style.display = 'block';
        lights.style.display = 'block';
        sparkPlug.style.display = 'blcok';
        vehicle.style.display = 'none';
        wheels.style.display = 'block';
        tires.style.display = 'block';
        secondHalfQuery = "FROM VEHICLE";
        currentDropdown = "VEHICLE";
    } else if (table == 'wheels') {
        engine.style.display = 'none';
        lights.style.display = 'none';
        sparkPlug.style.display = 'none';
        vehicle.style.display = 'block';
        wheels.style.display = 'none';
        tires.style.display = 'block';
        secondHalfQuery = "FROM WHEELS";
        currentDropdown = "WHEELS";
    } else if (table == 'tires') {
        engine.style.display = 'none';
        lights.style.display = 'none';
        sparkPlug.style.display = 'none';
        vehicle.style.display = 'block';
        wheels.style.display = 'block';
        tires.style.display = 'none';
        secondHalfQuery = "FROM TIRES";
        currentDropdown = "TIRES";
    }
}

function generateDropdown(query, datalistID) {
    var xmlhttp= new XMLHttpRequest();
    xmlhttp.open('GET', "generateOptions.php?wholeQuery=" + query, true);
    xmlhttp.onreadystatechange= function() {
        if (this.readyState!==4) return;
        if (this.status!==200) return; // or whatever error handling you want
        document.getElementById(datalistID).innerHTML= this.responseText;
    };
    xmlhttp.send();
}

function getOptions(table) {
    var data;
    var engineColumns = ["Engine_modelNum", "Oil", "Fuel", "Cylinder", "Displacement"];
    var lightsColumns = ["Light_partNum", "Wattage", "Voltage", "Socket", "Bulb_type"];
    var sparkPlugColumns = ["Spark_partNum", "Drive_size", "Thread_size", "Seat_style"];
    var vehicleColumns = ["Model_year", "Make", "Model"];
    var wheelsColumns = ["Wheel_partNum", "Rim_size"];
    var tiresColumns = ["Tire_partNum", "Pressure", "Construction", "Diameter", "Width", "Type_Tires"];
    clearOutput();
    if (table == 'engine') {
        data = new Array(5);
        // get data currently in form
        data[0] = document.getElementById('enginePartNum').value;
        data[1] = document.getElementById('oilType').value;
        data[2] = document.getElementById('fuelType').value;
        data[3] = document.getElementById('numCylinders').value;
        data[4] = document.getElementById('displacement').value;

        secondHalfQuery = " FROM ENGINE WHERE ";

        // first get all the data from the form and make the query
        for (var i = 0; i < engineColumns.length; i++) {
            secondHalfQuery += engineColumns[i] + " LIKE '" + data[i] + "%'";
            // add and for every column except the last one
            if (i != engineColumns.length - 1) {
                secondHalfQuery += " AND ";
            }
        } 

        // then generate the datalist for every column
        for (var i = 0; i < engineColumns.length; i++) {
            var query = "SELECT " + engineColumns[i] + secondHalfQuery + " GROUP BY " + engineColumns[i];
            generateDropdown(query, engineColumns[i] + "List");
        }
    } else if (table == "lights") {
        data = new Array(5);
        data[0] = document.getElementById('lightPartNum').value;
        data[1] = document.getElementById('wattage').value;
        data[2] = document.getElementById('voltage').value;
        data[3] = document.getElementById('socket').value;
        data[4] = document.getElementById('bulbType').value;

        secondHalfQuery = " FROM LIGHTS WHERE ";

        for (var i = 0; i < lightsColumns.length; i++) {
            secondHalfQuery += lightsColumns[i] + " LIKE '" + data[i] + "%'";
            if (i != lightsColumns.length - 1) {
                secondHalfQuery += " AND ";
            }
        } 

        for (var i = 0; i < lightsColumns.length; i++) {
            var query = "SELECT " + lightsColumns[i] + secondHalfQuery + " GROUP BY " + lightsColumns[i];
            generateDropdown(query, lightsColumns[i] + "List");
        }
    } else if (table == "sparkPlug") {
        data = new Array(4);
        data[0] = document.getElementById('sparkPartNum').value;
        data[1] = document.getElementById('driveSize').value;
        data[2] = document.getElementById('threadSize').value;
        data[3] = document.getElementById('seatStyle').value;

        secondHalfQuery = " FROM SPARK_PLUG WHERE ";

        for (var i = 0; i < sparkPlugColumns.length; i++) {
            secondHalfQuery += sparkPlugColumns[i] + " LIKE '" + data[i] + "%'";
            if (i != sparkPlugColumns.length - 1) {
                secondHalfQuery += " AND ";
            }
        } 

        for (var i = 0; i < sparkPlugColumns.length; i++) {
            var query = "SELECT " + sparkPlugColumns[i] + secondHalfQuery + " GROUP BY " + sparkPlugColumns[i];
            generateDropdown(query, sparkPlugColumns[i] + "List");
        }
    } else if (table == "vehicle") {
        data = new Array(3);
        data[0] = document.getElementById('modelYear').value;
        data[1] = document.getElementById('make').value;
        data[2] = document.getElementById('model').value;

        secondHalfQuery = " FROM VEHICLE WHERE ";

        for (var i = 0; i < vehicleColumns.length; i++) {
            secondHalfQuery += vehicleColumns[i] + " LIKE '" + data[i] + "%'";
            if (i != vehicleColumns.length - 1) {
                secondHalfQuery += " AND ";
            }
        } 

        for (var i = 0; i < vehicleColumns.length; i++) {
            var query = "SELECT " + vehicleColumns[i] + secondHalfQuery + " GROUP BY " + vehicleColumns[i];
            generateDropdown(query, vehicleColumns[i] + "List");
        }
    } else if (table == "wheels") {
        data = new Array(2);
        data[0] = document.getElementById('wheelPartNum').value;
        data[1] = document.getElementById('rimSize').value;

        secondHalfQuery = " FROM WHEELS WHERE ";

        for (var i = 0; i < wheelsColumns.length; i++) {
            secondHalfQuery += wheelsColumns[i] + " LIKE '" + data[i] + "%'";
            if (i != wheelsColumns.length - 1) {
                secondHalfQuery += " AND ";
            }
        } 

        for (var i = 0; i < wheelsColumns.length; i++) {
            var query = "SELECT " + wheelsColumns[i] + secondHalfQuery + " GROUP BY " + wheelsColumns[i];
            generateDropdown(query, wheelsColumns[i] + "List");
        }
    } else if (table == "tires") {
        data = new Array(6);
        data[0] = document.getElementById('tirePartNum').value;
        data[1] = document.getElementById('pressure').value;
        data[2] = document.getElementById('construction').value;
        data[3] = document.getElementById('diameter').value;
        data[4] = document.getElementById('width').value;
        data[5] = document.getElementById('tireType').value;


        secondHalfQuery = " FROM TIRES WHERE ";

        for (var i = 0; i < tiresColumns.length; i++) {
            secondHalfQuery += tiresColumns[i] + " LIKE '" + data[i] + "%'";
            if (i != tiresColumns.length - 1) {
                secondHalfQuery += " AND ";
            }
        } 

        for (var i = 0; i < tiresColumns.length; i++) {
            var query = "SELECT " + tiresColumns[i] + secondHalfQuery + " GROUP BY " + tiresColumns[i];
            generateDropdown(query, tiresColumns[i] + "List");
        }
    }
}

function getCompatible(table) {
    clearOutput();
    var query = "";
    if (currentDropdown == 'ENGINE') {
        if (table == 'VEHICLE') {
            query = "SELECT * FROM " + table + " WHERE Engine_modelNum IN (SELECT Engine_modelNum " + secondHalfQuery + ")";
        } else if (table == 'SPARK_PLUG') {
            query = "SELECT * FROM " + table + " WHERE Spark_partNum IN (SELECT Spark_partNum " + secondHalfQuery + ")";
        }
    } else if (currentDropdown == 'LIGHTS') {
        if (table == 'VEHICLE') {
            query = "SELECT * FROM " + table + " WHERE Light_partNum IN (SELECT Light_partNum " + secondHalfQuery + ")";
        }
    } else if (currentDropdown == 'SPARK_PLUG') {
        if (table == 'ENGINE') {
            query = "SELECT * FROM " + table + " WHERE Spark_partNum IN (SELECT Spark_partNum " + secondHalfQuery + ")"
        } else if (table == 'VEHICLE') {
            query = "SELECT * FROM " + table + " WHERE Engine_modelNum IN (SELECT Engine_modelNum FROM ENGINE WHERE Spark_partNum IN (SELECT Spark_partNum " + secondHalfQuery + "))";
        }
    } else if (currentDropdown == 'VEHICLE') {
        if (table == 'ENGINE') {
            query = "SELECT * FROM " + table + " WHERE Engine_modelNum IN (SELECT Engine_modelNum " + secondHalfQuery + ")";
        } else if (table == 'LIGHTS') {
            query = "SELECT * FROM " + table + " WHERE Light_partNum IN (SELECT Light_partNum " + secondHalfQuery + ")";
        } else if (table == 'WHEELS') {
            query = "SELECT * FROM " + table + " WHERE Wheel_partNum IN (SELECT Wheel_partNum " + secondHalfQuery + ")";
        } else if (table == 'TIRES') {
            query = "SELECT * FROM " + table + " WHERE Tire_partNum IN (SELECT Tire_partNum FROM WHEELS WHERE Wheel_partNum IN (SELECT Wheel_partNum " + secondHalfQuery + "))";
        }
    } else if (currentDropdown == 'WHEELS') {
        if (table == 'VEHICLE') {
            query = "SELECT * FROM " + table + " WHERE Wheel_partNum IN (SELECT Wheel_partNum " + secondHalfQuery + ")";
        } else if (table == 'TIRES') {
            query = "SElECT * FROM " + table + " WHERE Tire_partNum IN (SELECT Tire_partNum " + secondHalfQuery + ")";
        }
    } else if (currentDropdown == 'TIRES') {
        if (table == 'VEHICLE') {
            query = "SELECT * FROM " + table + " WHERE Wheel_partNum IN (SELECT Wheel_partNum FROM WHEELS WHERE Tire_partNum IN (SELECT Tire_partNum " + secondHalfQuery + "))";
        } else if (table == 'WHEELS') {
            query = "SELECT * FROM " + table + " WHERE Tire_partNum IN (SELECT Tire_partNum " + secondHalfQuery + ")";
        }
    }
    console.log(query);
    getWholeQuery(query);
}