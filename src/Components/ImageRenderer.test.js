import React from "react";
import {
  render,
  cleanup,
  waitFor,
  screen,
  findAllByTestId,
  findByTestId,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import ImagesRenderer from "./ImagesRenderer";
afterEach(cleanup);
//smoke test
test("ImageRenderer renders", async () => {
  render(<ImagesRenderer />);
});

// testing for "Fetching Data ..." message being displayed before
// Api calling
test("Display Fetching Data... before calling API", async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [
      {
        urls: {
          regular:
            "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
        },

        width: 100,
        hight: 100,
      },
    ],
  });
  render(<ImagesRenderer />);

  expect(screen.getByTestId("ApiCall")).toHaveTextContent("Fetching Data ...");
});

// testing for Gallery being rendered after API call is successfully made
// and returned data

test("API call was successful and gallery was rendered", async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [
      {
        urls: {
          regular:
            "https://media.geeksforgeeks.org/wp-content/uploads/20230306120634/unnamed.jpg",
        },

        width: 100,
        hight: 100,
      },
    ],
  });
  render(<ImagesRenderer />);
  await waitFor(() => expect(axiosMock.get).toHaveBeenCalledTimes(1));
  let gallery = await waitFor(() => screen.findByTestId("gallery"), {
    timeout: 1200,
  });
  expect(gallery).toBeInTheDocument();
});
