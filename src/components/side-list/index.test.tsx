import { render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import SideList from "./index";

const mockList = [
  {
    title: "Test Item 1",
    to: "/test1",
    tip: "Tooltip 1",
  },
  {
    title: "Test Item 2",
    to: "/test2",
  },
];

describe("SideList Component", () => {
  const renderComponent = () => {
    return render(
      <HashRouter>
        <SideList title="Test List" list={mockList} />
      </HashRouter>
    );
  };

  it("renders the title correctly", () => {
    renderComponent();
    expect(screen.getByText("Test List")).toBeInTheDocument();
  });

  it("renders all list items", () => {
    renderComponent();
    expect(screen.getByText("Test Item 1")).toBeInTheDocument();
    expect(screen.getByText("Test Item 2")).toBeInTheDocument();
  });

  it("adds tooltip when tip prop is provided", () => {
    renderComponent();
    const listItem = screen.getByText("Test Item 1").closest("li");
    expect(listItem).toHaveAttribute("title", "Tooltip 1");
  });

  it("uses title as tooltip when tip is not provided", () => {
    renderComponent();
    const listItem = screen.getByText("Test Item 2").closest("li");
    expect(listItem).toHaveAttribute("title", "Test Item 2");
  });
});
