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
        if (inputValue==='gene'){

            var inputElementGene = d3.select("#user-input-gene");
            var inputValueGene = inputElementGene.property("value").toUpperCase().trim();
            console.log(inputValueGene);
            var filteredChromsGene = civ.filter(civ => civ.Gene_Symbol===inputValueGene); // checks datatype
            console.log(filteredChromsGene);
            console.log(filteredChromsGene.length);
            if (filteredChromsGene.length === 0){
                d3.select("p").classed('noresults', true).html("<strong>No record to match this symbol. Please contact to add this to the database!</strong>")
            }
            for (var i = 0; i < filteredChromsGene.length; i++) {
                d3.select("tbody").insert("tr").html(
                    "<td>" + [i+1] + "</td>" +
                    "<td>" + (filteredChromsGene[i]['Transcript ID'])+"</td>" +
                    "<td>" + (filteredChromsGene[i]['Protein position'])+"</td>"+
                    "<td>" + (filteredChromsGene[i]['Amino acids'])+"</td>" +
                    "<td>" + (filteredChromsGene[i]['N_Hom_E_LGH'])+"</td>" +
                    "<td>" + (filteredChromsGene[i]['N_Hom_BiB'])+"</td>"+
                    "<td>" + (filteredChromsGene[i]['N_Hom_Birm'])+"</td>" +
                    "<td>" + (filteredChromsGene[i]['N_Cosmic'])+"</td>"+
                    "<td>" + (filteredChromsGene[i]['Cancer tissues'])+"</td>"+
                    "<td>" + (filteredChromsGene[i]['N_Het_Gnomad'])+"</td>") }



        }
        if (inputValue==='uniprot'){

            var inputElementUniprot = d3.select("#user-input-uniprot");
            var inputValueUniprot = inputElementUniprot.property("value").toUpperCase().trim();
            console.log(inputValueUniprot);
            var filteredChroms = civ.filter(civ => civ.Uniprot_ID===inputValueUniprot); // checks datatype
            console.log(filteredChroms);
            console.log(filteredChroms.length);
            if (filteredChroms.length === 0){
                d3.select("p").classed('noresults', true).html("<strong>No record to match this uniprot id. Please contact to add this to the database!</strong>")
            }
            for (var i = 0; i < filteredChroms.length; i++) {
                d3.select("tbody").insert("tr").html(
                    "<td>" + [i+1] + "</td>" +
                    "<td>" + (filteredChroms[i]['Transcript ID'])+"</td>" +
                    "<td>" + (filteredChroms[i]['Protein position'])+"</td>"+
                    "<td>" + (filteredChroms[i]['Amino acids'])+"</td>" +
                    "<td>" + (filteredChroms[i]['N_Hom_E_LGH'])+"</td>" +
                    "<td>" + (filteredChroms[i]['N_Hom_BiB'])+"</td>"+
                    "<td>" + (filteredChroms[i]['N_Hom_Birm'])+"</td>" +
                    "<td>" + (filteredChroms[i]['N_Cosmic'])+"</td>"+
                    "<td>" + (filteredChroms[i]['Cancer tissues'])+"</td>"+
                    "<td>" + (filteredChroms[i]['N_Het_Gnomad'])+"</td>") }


        }

            }

        //d3.event.preventDefault();






    });
