const busHours = [{hour: '9:00am'}, {hour:'10:00am'}, {hour:'11:00am'}, {hour:'12:00pm'}, {hour: '1:00pm'}, {hour: '2:00pm'}, {hour: '3:00pm'}, {hour:'4:00pm'}, {hour: '5:00pm'}];
let userInput2 = localStorage.getItem("userInput");
$('user-input').text(userInput2);   

// Retrieves current date
function getDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}


busHours.forEach(function(eachHour) {
    
    
    
    // creates rows
    const hourRow = $("<form>").attr("class", "row");
    $(".container").append(hourRow);
    
    // Displays hour per row
    const hourText = $('<div>').text(`${eachHour.hour}`).attr({'class': 'col-sml-2'});
    $(hourRow).append(hourText);

    // Input box
    const textArea = $('<textarea>').attr({'class': 'col-lg-9', 'id': 'user-input'});
    $(hourRow).append(textArea);

    // Save Button
    const saveButton = $('<button>').text('Save').attr({'class': 'col-md-1 save-button'});
    $(hourRow).append(saveButton);

    
    
    
});

getDate();

$('.save-button').on('click', function(event) {
    event.preventDefault();
    let userInput = $('#user-input').val();
    localStorage.setItem("userInput", userInput);
});