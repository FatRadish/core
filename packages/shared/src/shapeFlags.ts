export enum ShapeFlags {
  ELEMENT = 1, // 0001 - 普通 DOM 元素
  FUNCTIONAL_COMPONENT = 1 << 1, // 0010 - 函数式组件
  STATEFUL_COMPONENT = 1 << 2, // 0100 - 有状态组件
  TEXT_CHILDREN = 1 << 3, // 1000 - 文本子节点
  ARRAY_CHILDREN = 1 << 4, // 10000 - 数组子节点
  SLOTS_CHILDREN = 1 << 5, // 100000 - 插槽子节点
  TELEPORT = 1 << 6, // 1000000 - 传送门组件
  SUSPENSE = 1 << 7, // 10000000 - 异步组件
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8, // 应该被 keep-alive 的组件
  COMPONENT_KEPT_ALIVE = 1 << 9, // 已经被 keep-alive 的组件
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT, // 组件（有状态或函数式）
}
