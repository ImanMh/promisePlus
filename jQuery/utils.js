function serialExecute(tasks) {
    //pre resolved promise object
    var looper = $.Deferred().resolve().promise();

    tasks.forEach(function (task) {
        looper = looper.then(task);
    });

    return looper;
}

function paralelExecuter (tasksArray) {
     var promiseArray = [];
     while (tasksArray.length)
         promiseArray.push(tasksArray.shift().call());
     return $.when.apply($, promiseArray);
}
