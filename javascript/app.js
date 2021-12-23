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
        console.log(filteredChroms);
        //if (filteredChroms.length === 0){
          //  d3.select("p").classed('noresults2', true).html("<strong>No record to match this symbol. Please contact to add this to our database!</strong>")

       // }

         //using d3 populate the table
        for (let i = 0; i < filteredChroms.length; i++) {
            console.log(filteredChroms);


            d3.select("tbody").insert("td").html(

                "<tr>" + [i+1] + "</tr>" +
                "<tr>" + (filteredChroms[i]['Feature'])+"</tr>" +
                "<tr>" + (filteredChroms[i]['Protein position'])+"</tr>"+
                "<tr>" + (filteredChroms[i]['Amino acids'])+"</tr>" +
                "<tr>" + (filteredChroms[i]['N_Hom_E_LGH'])+"</tr>" +
                "<tr>" + (filteredChroms[i]['N_Hom_BiB'])+"</tr>"+
                "<tr>" + (filteredChroms[i]['N_Hom_Birm'])+"</tr>" +
                "<tr>" + (filteredChroms[i]['N_Cosmic'])+"</tr>"+
                "<tr>" + (filteredChroms[i]['Cancer tissues'])+"</tr>"+
                "<tr>" + (filteredChroms[i]['N_Het_Gnomad'])+"</tr>") }



    }
    });
