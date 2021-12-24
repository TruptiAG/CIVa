function ShowHideDiv() {
    //var gene = document.getElementById("gene");
    //var uniprot = document.getElementById("uniprot");

    dvGene.style.display = RGene.checked ? "block" : "none";
    dvUniprot.style.display = RUniprot.checked ? "block" : "none";
    d3.select("tbody").html("");
    d3.selectAll("p").classed('noresults', true).html("");
}
d3.csv("data/civ_data.csv").then(function (data)
    {

        var civ = data;
        var button = d3.select("#button");
        var form = d3.select("#form");
        button.on("click", runEnter);
        form.on("submit", runEnter);
// Defining the function

    function runEnter() {
        document.addEventListener('readystatechange', function() {
            if (document.readyState === "complete") {
                ShowHideDiv();
            }
        })


        var inputValue;
        if (document.getElementById('RGene').checked){
            inputValue=document.getElementById('RGene').value;
        }
        else{
            inputValue=document.getElementById('RUniprot').value;
        }
        if (inputValue==='gene') {

            var inputElementGene = d3.select("#user-input-gene");
            var inputValueGene = inputElementGene.property("value").toUpperCase().trim();
            console.log(inputValueGene);
            var filteredChromsGene = civ.filter(civ => civ.Gene_Symbol === inputValueGene); // checks datatype
            console.log(filteredChromsGene);
            console.log(filteredChromsGene.length);
            if (filteredChromsGene.length === 0) {
                d3.select("p").classed('noresults', true).html("<strong>No record to match this symbol. Please contact to add this to the database!</strong>")
            }
            for (var k = 0; k < filteredChromsGene.length; k++) {
                d3.select("tbody").insert("tr").html(
                    "<td>" + [k + 1] + "</td>" +
                    "<td>" + (filteredChromsGene[k]['Transcript_ID']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['N_Het_ELGH']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['N_Het_BiB']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['N_Het_BiB']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['N_Hom_ELGH']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['N_Hom_BiB']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['N_Hom_Birm']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['N_Cosmic']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['Cancer_tissues']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['N_Het_Gnomad']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['N_Hom_Gnomad']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['Allelecount_Gnomad']) + "</td>" +
                    "<td>" + (filteredChromsGene[k]['Allelefreq_Gnomad']) + "</td>")}
        }
        if (inputValue==='uniprot'){

            var inputElementUniprot = d3.select("#user-input-uniprot");
            var inputValueUniprot = inputElementUniprot.property("value").toUpperCase().trim();
            console.log(inputValueUniprot);
            var filteredUniprot = civ.filter(civ => civ.Uniprot_ID===inputValueUniprot); // checks datatype
            console.log(filteredUniprot);
            console.log(filteredUniprot.length);
            if (filteredUniprot.length === 0){
                d3.select("p").classed('noresults', true).html("<strong>No record to match this uniprot id. Please contact to add this to the database!</strong>")
            }
            for (var i = 0; i < filteredUniprot.length; i++) {
                d3.select("tbody").insert("tr").html(
                    "<td>" + [i + 1] + "</td>" +
                    "<td>" + (filteredUniprot[i]['Transcript_ID']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Het_ELGH']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Het_BiB']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Het_BiB']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Hom_ELGH']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Hom_BiB']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Hom_Birm']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Cosmic']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['Cancer_tissues']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Het_Gnomad']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['N_Hom_Gnomad']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['Allelecount_Gnomad']) + "</td>" +
                    "<td>" + (filteredUniprot[i]['Allelefreq_Gnomad']) + "</td>")}


        }

            }

        //d3.event.preventDefault();






    });
