const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '10!GFA25bbTp',
  database: 'todoapp',
});

let toDos = [];

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to Db', err.message);
    return;
  }
  console.log('Connection established');
});

conn.query(`SHOW TABLES;`, (err, result) => {
  console.log(result);
});

const insertToDo = (task_name) => {
  conn.query(`INSERT INTO tasks(task_name) VALUES ('${task_name}');`, (err, result) => {
    if (err) {
      console.log('failure', err.message);
      return;
    }
    console.log(result);
  });
};
insertToDo('My new task');

const getToDos = () => {
  conn.query(`SELECT * FROM tasks;`, (err, result) => {
    if (err) {
      console.log('failure', err.message);
      return;
    }
    result.forEach((elem)  => {
      toDos.push(elem);
      console.log(elem);
    });
    return result;
  });
}
getToDos();

const filterToDoContainingThisLetter = (letter) => {
  conn.query(`SELECT * FROM tasks WHERE task_name LIKE '%${letter}';`, (err, result) => {
    if (err) {
      console.log('failure', err.message);
      return;
    }
    console.log(result);
  });
}
filterToDoContainingThisLetter('a');

const deleteToDo = (id, params) => {
  if(id) {
    conn.query(`DELETE FROM tasks WHERE id = ${id};`, (err, message) => {
      if (err) {
        console.log('failure', err.message);
        return
      }
      console.log(result);
    })
  }
  conn.query(`DELETE FROM tasks WHERE task_name LIKE '${params}';`, (err, result) => {
    if (err) {
      console.log('failure', err.message);
      return;
    }
    console.log(result);
  });
}
deleteToDo();

conn.end();