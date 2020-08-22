const busHours = [{hour: '9AM', task: '', id: '09'}, {hour: '10AM', task: '', id: '10'}, {hour: '11AM', task: '', id: '11'}, {hour: '12PM', task: '', id: '12'}, {hour: '1PM', task: '', id: '13'}, {hour:'2PM', task: '', id: '14'}, {hour: '3PM', task: '', id: '15'}, {hour: '4PM', task: '', id: '16'}, {hour: '5PM', id: '17'}];

// init();

for (let i = 0; i < busHours.length; i++) {
    
    // creates form container
    const $form = $('<form>');
    $form.addClass('row');
    $('.container').append($form);

    // Shows time of day per row
    const $hour = $('<div>');
    $hour.text(busHours[i].hour);
    $hour.addClass('col-sml-2');
    $($form).append($hour);

    // Adds text area
    const $myTask = $('<textarea>');
    $myTask.addClass('col-lg-9 text-area');
    $myTask.attr({'id': busHours[i].hour});
    $($form).append($myTask);

    // Adds Save Button
    const $saveBtn = $('<button>');
    $saveBtn.addClass('col-md-1 save-btn');
    $saveBtn.text('Save');
    $saveBtn.attr({'id': busHours[i].hour});
    $($form).append($saveBtn);

    if (busHours[i].id < moment().format("HH")) {
        $myTask.attr ({"class": "past"})
    } else if (busHours[i].id === moment().format("HH")) {
        $myTask.attr({"class": "present"});
    } else if (busHours[i].id > moment().format("HH")) {
        $myTask.attr({"class": "future"});
        console.log(busHours[i].id)
    }
};

// gets data for the header date
function getDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}

// Render tasks into the textarea
function renderTasks() {
    for (let i = 0; i < busHours.length; i++) {
        $('.text-area').text(myTasks[i]);
    }
}

function init() {
    // Check for existing tasks
    if (localStorage.getItem('myTasks')) {
        const savedTasks = JSON.parse(localStorage.getItem('myTasks'))
        myTasks.push(...savedTasks);
        console.log(myTasks);
    }
    renderTasks();
  }

function storeTasks() {
    // Store myTasks to Local Storage
    localStorage.setItem('myTasks', JSON.stringify(myTasks));
  }

getDate();

$('.save-btn').on('click', function(event) {
    event.preventDefault();
    const textFieldid = $(this).data('letter');
    console.log(textFieldid);
    const myTask = $('#' + textFieldid).val().trim();
    console.log(myTask);
    myTasks.push(myTask);
    storeTasks();
});  

