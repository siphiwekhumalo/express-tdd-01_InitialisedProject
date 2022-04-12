
const TodoController = require("../../controllers/todo.controller");
describe("TodoConroller.createTodo", () => {
    it("should have createTodo function", () => {
        expect(typeof TodoController.createTodo).toBe("function");
    });
});
