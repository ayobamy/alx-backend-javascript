const fs = require('fs');

function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf-8');
    // convert to string and split
    data = data.toString().split('\n');
    data = data.slice(1, data.length - 1); // slice data
    console.log(`Number of students: ${data.length}`);

    const fields = {};
    for (const row of data) {
      const student = row.split(',');
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }
    for (const field in fields) {
      if (field) {
        const fieldLen = fields[field].length;
        const stuName = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${fieldLen}. List: ${stuName}`);
      }
    }
    // catch error
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
