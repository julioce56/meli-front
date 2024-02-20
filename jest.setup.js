import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image";
  },
}));

jest.mock('next/navigation', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
  useParams() {
    return ({
      id: '123'});
  },
}));