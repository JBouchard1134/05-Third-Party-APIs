const busHours = [{hour: '9AM', task: ''}, {hour: '10AM', task: ''}, {hour: '11AM', task: ''}, {hour: '12PM', task: ''}, {hour: '1PM', task: ''}, {hour:'2PM', task: ''}, {hour: '3PM', task: ''}, {hour: '4PM', task: ''}, {hour: '5PM', task: ''}];

// init();

for (let i = 0; i < busHours.length; i++) {
    
    // creates form container
    const $form = $('<form>');
    $form.addClass('row');
    $('.container').append($form);

    // Shows time of day per row
    const $hour = $('<div>');
    $hour.text(busHours[i]);
    $hour.addClass('col-sml-2');
    $($form).append($hour);

    // Adds text area
    const $myTask = $('<textarea>');
    $myTask.addClass('col-lg-9 text-area');
    $myTask.attr({'id': busHours[i], 'data-letter': busHours[i]});
    $($form).append($myTask);

    // Adds Save Button
    const $saveBtn = $('<button>');
    $saveBtn.addClass('col-md-1 save-btn');
    $saveBtn.text('Save');
    $saveBtn.attr({'data-letter': busHours[i]});
    $($form).append($saveBtn);
};

function renderTasks() {
    for (let i = 0; i < busHours.length; i++) {
        $('.text-area').text(busHours.task[i]);
    }
}

function init() {
    // Check for existing tasks
    if (localStorage.getItem('myTasks')) {
        const savedTasks = JSON.parse(localStorage.getItem('myTasks'))
        busHours.task.push(...savedTasks);
        console.log(busHours.task);
    }
    renderTasks();
  }

function storeTasks(time) {
    // Store busHours.task to Local Storage
    localStorage.setItem('myTasks', JSON.stringify(busHours.task));
  }

$('.save-btn').on('click', function(event) {
    event.preventDefault();
    const textFieldid = $(this).data('letter');
    console.log(textFieldid);
    const myTask = $('#' + textFieldid).val().trim();
    console.log(myTask);
    busHours.task.push(myTask);
    storeTasks(textFieldid);
});  

