import * as vtil from "./index";

it("总测试", () => {
  // when - 调用被测函数
  const result = vtil?.testFunc();

  // then - 断言结果
  expect(result).toBe("this is a test");
});
