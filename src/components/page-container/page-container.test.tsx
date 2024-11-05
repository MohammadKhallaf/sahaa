import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PageContainer from ".";
import { HelmetProvider } from "react-helmet-async";
import type { PropsWithChildren } from "react";

const wrapper = ({ children }: PropsWithChildren) => (
  <HelmetProvider>{children}</HelmetProvider>
);

describe("PageContainer", () => {
  it("renders children correctly", () => {
    render(
      <PageContainer title="Test Page">
        <div data-testid="child">Child content</div>
      </PageContainer>,
      { wrapper }
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("renders header when provided", () => {
    render(
      <PageContainer
        title="Test Page"
        header={<div data-testid="header">Header content</div>}
      >
        <div>Content</div>
      </PageContainer>,
      { wrapper }
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("sets document title correctly", async () => {
    render(
      <PageContainer title="Test Page">
        <div>Content</div>
      </PageContainer>,
      { wrapper }
    );

    await waitFor(() => {
      expect(document.title).toBe("Sahaa | Test Page");
    });
  });

  it("uses default title when no title prop is provided", async () => {
    render(
      <PageContainer>
        <div>Content</div>
      </PageContainer>,
      { wrapper }
    );

    await waitFor(() => {
      expect(document.title).toBe("Sahaa");
    });
  });
});
