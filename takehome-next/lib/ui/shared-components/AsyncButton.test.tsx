/**
 * @jest-environment jsdom
 */

import { fireEvent, render, waitFor } from "@testing-library/react";
import { AsyncButton } from "./AsyncButton";

const awaitableTimeout = (shouldSucceed: boolean = true, timeout = 100) =>
  (async () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => (shouldSucceed ? resolve(true) : reject(false)),
        timeout
      );
    });
  })();

describe("Async Button", () => {
  it("renders an Async Button", async () => {
    const { findByTestId } = render(
      <AsyncButton data-testid="test" onClick={async () => true}></AsyncButton>
    );
    expect(await findByTestId("test")).toBeTruthy();
  });

  it("disables the button when performing an async call", async () => {
    const { findByTestId } = render(
      <AsyncButton data-testid="test" onClick={awaitableTimeout}></AsyncButton>
    );
    const el = await findByTestId("test");

    await fireEvent.click(el);
    await waitFor(() => expect(el).toHaveProperty("disabled", true));
  });

  it("enables the button on succes", async () => {
    const { findByTestId } = render(
      <AsyncButton data-testid="test" onClick={awaitableTimeout}></AsyncButton>
    );
    const el = await findByTestId("test");

    await fireEvent.click(el);
    await waitFor(() => expect(el).toHaveProperty("disabled", true));
    await waitFor(() => expect(el).toHaveProperty("disabled", false));
  });

  it("enables the button on an error", async () => {
    const { findByTestId } = render(
      <AsyncButton
        data-testid="test"
        onClick={() => awaitableTimeout(false)}
      ></AsyncButton>
    );
    const el = await findByTestId("test");

    await fireEvent.click(el);
    await waitFor(() => expect(el).toHaveProperty("disabled", true));
    await waitFor(() => expect(el).toHaveProperty("disabled", false));
  });

  it("renders an error message on an error", async () => {
    const { findByTestId } = render(
      <AsyncButton
        data-testid="test"
        onClick={() => awaitableTimeout(false)}
      ></AsyncButton>
    );

    await fireEvent.click(await findByTestId("test"));
    await waitFor(async () =>
      expect(await findByTestId("test-err")).toBeTruthy()
    );
  });

  it("does not render an error message on a success", async () => {
    const { queryByTestId, findByTestId } = render(
      <AsyncButton
        data-testid="test"
        onClick={() => awaitableTimeout(true)}
      ></AsyncButton>
    );

    await fireEvent.click(await findByTestId("test"));
    await waitFor(async () =>
      expect(await queryByTestId("test-err")).toBeFalsy()
    );
  });
});
