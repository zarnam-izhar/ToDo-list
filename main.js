//
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Select an operation",
            choice: ["Add", "Update", "View", "Delete", "Exit"]
        }
    ]);
    if (todoQuestions.select === "Add") {
        let addTodo = await inquirer.prompt([{
                name: "todo",
                type: "input",
                message: "Add items in the list",
                validate: function (input) {
                    if (input.trim() == "") {
                        return "Please enter a nonempty item.";
                    }
                    return true;
                }
            }]);
        if (addTodo.todo.trim() !== "") {
            todo.push(addTodo.todo);
            todo.forEach(todo => console.log(todo));
        }
        ;
    }
    if (todoQuestions.select === "Update") {
        let updateTodo = await inquirer.prompt([{
                name: "todo",
                type: "list",
                message: "Update items in the list",
                choices: todo.map(item => item)
            }]);
        let addTodo = await inquirer.prompt([{
                name: "todo",
                type: "input",
                message: "Add items in the list",
            }]);
        let newTodo = todo.filter(val => val !== updateTodo.todo);
        todo = [...newTodo, addTodo.todo];
        todo.forEach(todo => console.log(todo));
    }
    if (todoQuestions.select === "View") {
        console.log("*****TO Do List*****");
        todo.forEach(todo => console.log(todo));
    }
    if (todoQuestions.select === "Delete") {
        let deleteTodo = await inquirer.prompt([{
                name: "todo",
                type: "list",
                message: "Select item to delete",
                choices: todo.map(item => item)
            }]);
        let newTodo = todo.filter(val => val !== deleteTodo.todo);
        todo = [...newTodo];
        todo.forEach(todo => console.log(todo));
    }
    if (todoQuestions.select === "Exit") {
        console.log("Exiting program...");
        condition = false;
    }
}
