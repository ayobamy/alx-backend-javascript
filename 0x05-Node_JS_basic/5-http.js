const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
const path = process.argv[2];

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const printOut = [];
      const dataLines = data.split('\n'); // split each in to separate lines
      let students = dataLines.filter((item) => item);
      students = students.map((item) => item.split(','));
      const printItem = `Number of students: ${students.length - 1}`;
      console.log(printItem);
      printOut.push(printItem);

      const fields = {};
      for (const student in students) {
        if (student !== 0) {
          if (!fields[students[student][3]]) {
            fields[students[student][3]] = [];
          }
          fields[students[student][3]].push(students[student][0]);
        }
      }
      delete fields.field;
      for (const key of Object.keys(fields)) {
        const fieldLen = fields[key].length;
        const stuName = fields[key].join(', ');
        const printItem = `Number of students in ${key}: ${fieldLen}. List: ${stuName}`;
        console.log(printItem);
        printOut.push(printItem);
      }
      resolve(printOut);
    }
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(path)
      .then((data) => {
        res.end(`This is the list of our students\n${data.join('\n')}`);
      })
      .catch((error) => {
        res.end(error);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
