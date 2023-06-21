module.exports = (app) => {
    const stds = require('../controllers/std.controller')

    app.post('/students', stds.create);

    // Retrieve all students
    app.get('/students', stds.findAll);

    // Retrieve a single student by id
    app.get('/students/:id', stds.findOne);

    // Update a student with id
    app.put('/students/:id', stds.update);

    // Delete a student by id
    app.delete('/students/:id', stds.delete);

}