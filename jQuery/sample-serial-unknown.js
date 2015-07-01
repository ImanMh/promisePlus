function task1 () {
  var taskDfd = $.Deferred();

  setTimeout(function () {
    console.log('task1 done');
    taskDfd.resolve('ans1');
  }, 500);

  return taskDfd.promise();
}

function task2 () {
  var taskDfd = $.Deferred();

  setTimeout(function () {
    console.log('task2 done');
    taskDfd.resolve('ans2');
  }, 900);

  return taskDfd.promise();
}

function task3 () {
  var taskDfd = $.Deferred();

  setTimeout(function () {
    console.log('task3 done');
    taskDfd.resolve('ans3');
  }, 400);

  return taskDfd.promise();
}


function serialExecute(tasks) {
    //pre resolved promise object
    var looper = $.Deferred().resolve().promise();

    tasks.forEach(function (task) {
        looper = looper.then(task);
    });

    return looper;
}

serialExecute([task1, task2, task3]).
  done(function () {
    console.log('all done');
  }).
  fail(function () {
    console.log('one failed');
  });
