const busHours = [{hour: '9:00am'}, {hour:'10:00am'}, {hour:'11:00am'}, {hour:'12:00pm'}, {hour: '1:00pm'}, {hour: '2:00pm'}, {hour: '3:00pm'}, {hour:'4:00pm'}, {hour: '5:00pm'}];
let userInput = ['']; 

// Retrieves current date
function getDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}




busHours.forEach(function(eachHour) {
    
    // creates rows
    const $form = $("<form>").attr("class", "row");
    $(".container").append($form);
    
    // Displays hour per row
    const $div = $('<div>').text(`${eachHour.hour}`);
    $div.addClass('col-sml-2');
    $($form).append($div);

    // Input box
    const $textArea = $('<textarea>');
    $textArea.addClass('col-lg-9').attr({'id': 'user-input'});
    $($form).append($textArea);

    // Save Button
    const saveButton = $('<button>').text('Save');
    saveButton.addClass('col-md-1 save-button');
    $($form).append(saveButton);
});

getDate();

$('.save-button').on('click', function(event) {
    event.preventDefault();
    localStorage.setItem("userInput", JSON.stringify(userInput));
    console.log(userInput);
});