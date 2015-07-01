function paralelExecuter (tasksArray) {
     var promiseArray = [];
     while (tasksArray.length)
         promiseArray.push(tasksArray.shift().call());
     return $.when.apply($, promiseArray);
}

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
  }, 300);

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


paralelExecuter([task1, task2, task3]).
  done(function (ans1, ans2, ans3) {
    console.log('All done!');
    console.log('recieved', ans1, ans2, ans3);
  });

// $.when(task1(), task2(), task3()).then(function () {
//   console.log('All Done!');
// });
