/** 所有检测规则都需要符合这个标准导出 */
export type Rule = {
  name: string;
  dectect: () => boolean;
  tags: string[];
};
