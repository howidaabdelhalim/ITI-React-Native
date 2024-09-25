let xhr = new XMLHttpRequest();
xhr.open("GET","../Data/rockbands.json");
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        bandsData = JSON.parse(xhr.responseText);
        populateBands();
    }
};
xhr.send();

function populateBands() {
    var bandsDropdown = document.getElementById("bands");
    for (let band in bandsData) {
        let option = document.createElement("option");
        option.value = band;
        option.text = band;
        bandsDropdown.add(option);
    }
}

function updateArtists() {
    var artistsDropdown = document.getElementById("artists");
    var selectedBand = document.getElementById("bands").value;
    // console.log(selectedBand);
    artistsDropdown.length = 1;
    
    if (selectedBand && bandsData[selectedBand]) {
        let artists = bandsData[selectedBand];
        for (let artist of artists) {
            let option = document.createElement("option");
            option.value = artist.value;
            option.text = artist.name;
            artistsDropdown.add(option);
        }
    }
}


function openArtistLink() {
    var selectedArtistUrl = document.getElementById("artists").value;
    if (selectedArtistUrl) {
        window.open(selectedArtistUrl, "_blank");
    }
}
