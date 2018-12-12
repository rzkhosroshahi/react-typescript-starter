import * as React from "react";
import { render } from "react-testing-library";
import { HelloWorld } from "../helloWorld";

test("Home page error occurred", () => {
  const { container } = render(<HelloWorld />);
  expect(container.textContent).toBe("Hello World");
});
