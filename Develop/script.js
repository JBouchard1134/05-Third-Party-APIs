const busHours = ['9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm'];

let myTasks = [];


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
    $myTask.addClass('col-lg-9');
    $myTask.attr({'id': 'my-task'});
    $($form).append($myTask);

    // Adds Save Button
    const $saveBtn = $('<button>');
    $saveBtn.addClass('col-md-1 save-btn');
    $saveBtn.text('Save');
    $($form).append($saveBtn);
    
    //
};

function init() {
    // Write code here to check if there are todos in localStorage
    if (localStorage.getItem('myTasks')) {
        const savedTodos = JSON.parse(localStorage.getItem('myTasks'))
        myTasks.push(...savedTasks);
      console.log(myTasks);
    }
  }

function storeTasks() {
    // Add code here to stringify the todos array and save it to the "todos" key in localStorage
    localStorage.setItem('myTasks', JSON.stringify(myTasks));
  }

$('.save-btn').on('click', function(event) {
    event.preventDefault();
    const myTask = $('form>textarea').val().trim();
    myTasks.push(myTask);
    storeTasks();
});  

init();