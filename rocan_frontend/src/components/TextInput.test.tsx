import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput from "./TextInput";

test("renders TextInput component", async () => {
  const user = userEvent.setup();
  render(<TextInput />);
  const textElement = screen.getByText("Enter Text:");
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.getByLabelText("text-input");
  await user.type(inputElement, "Hello, World!");
  expect(screen.getByText("Enter Text: Hello, World!")).toBeInTheDocument();
});
