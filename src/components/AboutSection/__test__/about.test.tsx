import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/(main)/about/page";

describe("About Page", () => {
  it("renders title and career items", () => {
    render(<AboutPage />);

    expect(screen.getByText(/ABOUT ME/i)).toBeInTheDocument();
    expect(screen.getByText(/코드스테이츠/i)).toBeInTheDocument();
    expect(screen.getByText(/셀러노트/i)).toBeInTheDocument();
  });

  it("has toggle button", () => {
    const { container } = render(<AboutPage />);
    expect(container.querySelector("button")).toBeInTheDocument();
  });
});
