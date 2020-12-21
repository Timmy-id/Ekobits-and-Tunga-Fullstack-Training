const { Client } = require("pg"); // include the Client constructor from the pg module

// make a new instance of the Client constructor and specify which db to connect to using the connectionString key
const client = new Client({
    connectionString: "postgres://postgres:password@localhost:5432/pg_lesson_one"
});

// connect!
client.connect();

// let's make a function to get all the rows in our students table!
async function getStudents() {
  const results = await client.query("SELECT * FROM students");
  console.log(results.rows);
}

async function addStudent(name) {
    const results = await client.query(
        "INSERT INTO students (name) VALUES ($1) RETURNING *",
        [name]
    );
    console.log(results.rows[0]);
}

async function getStudent(id) {
    const result = await client.query(`SELECT * FROM students WHERE id=${id}`);
    console.log(result.rows);
}

async function updateStudent(name, id) {
    const result = await client.query("UPDATE students SET name=$1 WHERE id=$2 RETURNING *", [name, id]);
    console.log(result.rows);
}

async function deleteStudent(id) {
    const result = await client.query(`DELETE FROM students WHERE id=${id}`);
    console.log("Deleted");
}


// updateStudent("Timmy", 4).then(() => process.exit(0));
// addStudent("Love").then(() => process.exit(0));
// getStudents().then(() => process.exit(0));
// getStudent(2).then(() => process.exit(0));
// deleteStudent(5).then(() => process.exit(0));
