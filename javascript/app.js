d3.csv("data/civ_data_1.csv").then(function (data)
    {

        var civ = data;
        var button = d3.select("#button");
        var form = d3.select("#form");
        button.on("click", runEnter);
        form.on("submit", runEnter);
// Defining the function
    function runEnter() {

        d3.select("tbody").html("");
        d3.selectAll("p").classed('noresults', true).html("");
        //d3.event.preventDefault();
        var inputElement = d3.select("#user-input");
        var inputValue = inputElement.property("value").toUpperCase().trim();
        console.log(inputValue);
        var filteredChroms = civ.filter(civ => civ.SYMBOL==inputValue); // checks datatype
        console.log(filteredChroms);
        console.log(filteredChroms.length);
        if (filteredChroms.length == 0){
            d3.select("p").classed('noresults', true).html("<strong>No record to match this symbol. Please contact to add this to the database!</strong>")
        }
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



    }
    });
