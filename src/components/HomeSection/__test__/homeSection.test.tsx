import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";
import HomeSection from "..";

jest.mock("framer-motion", () => {
  const Stub = ({ children }: { children: React.ReactNode }) => <>{children}</>;
  return {
    motion: new Proxy(
      {},
      {
        get: () => Stub, // motion.div / motion.span 등 모두 Stub 처리
      },
    ),
    AnimatePresence: Stub,
  };
});

beforeAll(() => jest.useFakeTimers());
afterAll(() => jest.useRealTimers());

describe("HomeSection", () => {
  it("초기 렌더링 시 'JO HYUNG GEUN'과 첫 번째 문구가 표시된다", () => {
    render(<HomeSection />);
    expect(screen.getByText("JO HYUNG GEUN")).toBeInTheDocument();
    expect(screen.getByText("Problem Solver")).toBeInTheDocument();
  });

  test("문구 전환", () => {
    render(<HomeSection />);
    expect(screen.getByText("Problem Solver")).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(2500));

    expect(screen.getByText("Experience Shaper")).toBeInTheDocument();
  });

  it("버튼이 존재하고 '/about' 링크를 가진다", () => {
    render(<HomeSection />);
    const button = screen.getByRole("link", { name: /more about me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/about");
  });
});
