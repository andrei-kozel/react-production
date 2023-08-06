import Button from "@/shared/ui/Button/Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("should render", () => {
    render(<Button>test</Button>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
