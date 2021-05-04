var dict = {
    "": "",
    "csv-file": ".csv<p>Format: Material, Processing Parameters, Melt Pool Geometry or Classification</p>",
    "thermal": "images or videos",
    "optical": "images or videos",
    "acoustic": "",
    "CT-scanning-images": "images"
};

var dropdown = document.getElementById("dropdown");
var typeMsg = document.getElementById("typeMsg");
dropdown.addEventListener("click", function() {
    var value = dropdown.value;
    typeMsg.innerHTML = "Supported data: " + dict[value];
});
