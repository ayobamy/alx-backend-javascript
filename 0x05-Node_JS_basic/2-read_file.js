const fs = require('fs');

const countStudents = (path) => {
  try {
    const file = fs.readFileSync(path, 'utf-8');
    const fileString = file.toString(); // convert to string
    const lines = fileString.split('\n'); // split the file into lines
    const data = lines.slice(1, lines.length - 1).length; // slice data
    console.log(`Number of students: ${data}`);

    fields = {};
    for (const row of data) {
      const student = row.split(',');
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }
    for (const field of fields) {
      if (field) {
        const fieldLen = fields[field].length
        const stuName = fields[field].join(', ')
        console.log(`Number of students in ${field}: ${fieldLen}. List: ${stuName}`);
      }
    }
    // catch error
  } catch (e) {
    throw new Error('Cannot load the database');
  }
};
module.exports = countStudents;
