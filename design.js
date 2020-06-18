// select size and color input
// select color input
var height, width, color;

var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');
var pixel = document.getElementById('pixelCanvas');
var picker = document.getElementById('sizePicker');

pixel.addEventListener('submit', function(e) {
    pixelCanvas.innHTML = '';
    e.preventDefault();
    makeGrid();

    let width = $('#inputWidth').value();
    let hight = $('#inputHeight').value();
});


function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $pixelElement.append('<td></td>');
    };

    for(let i = 0; i < width; i++) {
        $('td').append('<td></td>');
    };
};

function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarger).css("backgroundcolor", color)
    });
};
