import testFunc from ".";

it("测试函数", () => {
  // given - 准备数据
  const products = [
    { name: "nike", price: 200 },
    { name: "adidas", price: 300 },
    { name: "lining", price: 500 },
  ];

  // when - 调用被测函数
  const result = testFunc();

  // then - 断言结果
  expect(result).toBe("this is a test");
});
