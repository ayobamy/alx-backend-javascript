const fs = require('fs');

const countStudents = (path) => {
  try {
    // convert to string and split
    const file = fs.readFileSync(path, 'utf-8').toString().split('\n');
    file = lines.slice(1, lines.length - 1).length; // slice file
    console.log(`Number of students: ${file}`);

    const fields = {};
    for (const row of file) {
      const student = row.split(',');
      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }
      fields[student[3]].push(student[0]);
    }
    for (const field of fields) {
      if (field) {
        const fieldLen = fields[field].length;
        const stuName = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${fieldLen}. List: ${stuName}`);
      }
    }
    // catch error
  } catch (e) {
    throw new Error('Cannot load the filebase');
  }
};
module.exports = countStudents;
