/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueLater, dueToday } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("must add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("must mark todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("must check retrieval of overdue items", () => {
    expect(overdue().length).toBe(0);
  });

  test("must check retrieval of dueToday items", () => {
    expect(dueToday().length).toBe(2);
  });

  test("must check retrieval of dueLater items", () => {
    expect(dueLater().length).toBe(0);
  });
});
