d3.csv("data/civ_data.csv").then(function (data)
    {

        const civ = data;
        const button = d3.select("#button");
        const form = d3.select("#form");
        button.on("click", runEnter);
        form.on("submit", runEnter);
// Defining the function
    function runEnter() {

// This line of code selects the <tbody> from the html and clears it. If this is not used, then the results would appear on top of the previous result.
        d3.select("tbody").html("");
        d3.selectAll("p").classed('noresults', true).html("");

// This code is needed to prevent the page from reloading.
        //d3.event.preventDefault();

// This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id. It will get the value and store it in our inputValue variable
        const inputElement = d3.select("#user-input");
        const inputValue = inputElement.property("value").toUpperCase().trim();



        const filteredChroms = civ.filter(civ => {
            return civ.SYMBOL === inputValue; // checks datatype
        });
        //console.log(filteredChroms);
        if (filteredChroms.length === 0){
            d3.select("p").classed('noresults2', true).html("<strong>We don't a record to match this symbol. Please contact to add this to our database!</strong>")

        }

         //using d3 populate the table
        for (let i = 0; i < filteredChroms.length; i++) {


            d3.select("tbody").insert("tr td").html(

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



    }
    });
