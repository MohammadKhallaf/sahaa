import { fireEvent, render, screen } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { Navbar } from ".";

const renderNavbar = () => {
  return render(
    <HashRouter>
      <Navbar />
    </HashRouter>
  );
};

describe("Navbar", () => {
  it("renders the brand name", () => {
    renderNavbar();
    expect(screen.getByText("Sahaa")).toBeDefined();
  });
});
