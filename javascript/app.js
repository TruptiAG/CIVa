d3.csv("data/civ_data.csv").then(function (data)
    {

        var civ = data;
        var button = d3.select("#button");
        var form = d3.select("#form");
        button.on("click", runEnter);
        form.on("submit", runEnter);
// Defining the function
    function runEnter() {

// This line of code selects the <tbody> from the html and clears it. If this is not used, then the results would appear on top of the previous result.
        d3.select("tbody").html("");
        d3.selectAll("p").classed('noresults', true).html("");

// This code is needed to prevent the page from reloading.
       // d3.event.preventDefault();

// This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id. It will get the value and store it in our inputValue variable
        var inputElement = d3.select("#user-input");
        var inputValue = inputElement.property("value").toUpperCase().trim();


        var filteredChroms = civ.filter(civ => civ.SYMBOL==inputValue);
        //console.log(filteredChroms);

        // Once I had all the values in my output variable, all I needed was to loop through them and add them to the table one by one. This was done using d3, where I inserted the value for each one of the columns I wanted using the necessary html to fit each table row.
        for (var i = 0; i < filteredChroms.length; i++) {


            d3.select("tbody").insert("tr").html(
                "<td>" + [i+1] + "</td>" +
                "<td>" + (filteredChroms[i]['Feature'])+"</td>" +
                "<td>" + (filteredChroms[i]['Protein position'])+"</td>"+
                "<td>" + (filteredChroms[i]['Amino acids'])+"</td>" +
                "<td>" + (filteredChroms[i]['N_Hom_E_LGH'])+"</td>" +
                "<td>" + (filteredChroms[i]['N_Hom_BiB'])+"</td>"+
                "<td>" + (filteredChroms[i]['N_Hom_Birm'])+"</td>" +
                "<td>" + (filteredChroms[i]['N_Cosmic'])+"</td>"+
                "<td>" + (filteredChroms[i]['Cancer tissues'])+"</td>"+
                "<td>" + (filteredChroms[i]['N_Het_Gnomad'])+"</td>") }
        const GSheetReader = require('g-sheets-api')
        GSheetReader(
            options,
            results=> {console.log(results);},
            error=>{console.log("error");}
        );

    }
    });
