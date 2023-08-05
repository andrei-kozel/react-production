import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only one param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with two params", () => {
    expect(classNames("someClass", { active: true })).toBe("someClass active");
  });

  test("with three params", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [
        "additionalClass",
      ])
    ).toBe("someClass additionalClass hovered scrollable");
  });

  test("with one undefined params", () => {
    expect(
      classNames("someClass", { hovered: undefined, scrollable: true }, [
        "additionalClass",
      ])
    ).toBe("someClass additionalClass scrollable");
  });
});
