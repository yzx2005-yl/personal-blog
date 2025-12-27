---
title: "CSS Grid vs Flexbox：如何选择"
date: "2024-12-25"
description: "深入对比 CSS Grid 和 Flexbox 的使用场景和最佳实践"
---

CSS Grid 和 Flexbox 都是现代网页布局的强大工具，但它们各有优势。在这篇文章中，我们将深入探讨什么时候使用 Grid，什么时候使用 Flexbox。

## 概览对比

| 特性 | CSS Grid | Flexbox |
|------|----------|---------|
| 维度 | 二维布局 | 一维布局 |
| 主要用途 | 页面整体布局 | 组件内部布局 |
| 控制方向 | 行和列 | 主轴和交叉轴 |
| 复杂度 | 相对复杂 | 相对简单 |

## CSS Grid 的优势

### 1. 真正的二维布局

Grid 可以同时控制行和列：

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  min-height: 100vh;
}
```

### 2. 精确的位置控制

```css
.item {
  grid-column: 2 / 4;    /* 从第2列到第4列 */
  grid-row: 1 / 3;       /* 从第1行到第3行 */
  /* 或者使用命名区域 */
  grid-area: header;     /* 使用命名区域 */
}
```

### 3. 命名网格线

```css
.container {
  display: grid;
  grid-template-columns: [sidebar-start] 250px [sidebar-end main-start] 1fr [main-end];
  grid-template-rows: [header-start] auto [header-end content-start] 1fr [content-end footer-start] auto [footer-end];
}
```

## Flexbox 的优势

### 1. 一维布局的简洁性

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### 2. 内容优先的设计

```css
.card-container {
  display: flex;
  gap: 1rem;
}

.card {
  flex: 1; /* 自动填充剩余空间 */
}
```

### 3. 顺序重排

```css
.flex-container {
  display: flex;
  flex-direction: row-reverse; /* 反向排列 */
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column; /* 移动端改为垂直布局 */
  }
}
```

## 使用场景指南

### 使用 CSS Grid 当：

1. **创建页面整体布局**
2. **需要精确的网格对齐**
3. **处理复杂的多行多列布局**
4. **需要命名网格区域**

```css
/* 经典的三栏布局 */
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

### 使用 Flexbox 当：

1. **组件内部布局**
2. **导航栏和按钮组**
3. **卡片内容对齐**
4. **需要动态内容排列**

```css
/* 导航栏 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

/* 按钮组 */
.button-group {
  display: flex;
  gap: 0.5rem;
}

.button-group button:not(:last-child) {
  margin-right: 0;
}
```

## 实际项目示例

### 卡片网格布局

```html
<div class="card-grid">
  <div class="card">卡片 1</div>
  <div class="card">卡片 2</div>
  <div class="card">卡片 3</div>
  <div class="card">卡片 4</div>
  <div class="card">卡片 5</div>
  <div class="card">卡片 6</div>
</div>
```

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### 响应式表单

```css
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
}
```

## 常见陷阱和解决方案

### 1. Grid 中的子元素高度问题

```css
/* 问题：子元素高度不一致 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

/* 解决：使用 align-items */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start; /* 或者 stretch */
}
```

### 2. Flex 项目换行问题

```css
/* 问题：内容溢出 */
.flex-container {
  display: flex;
}

/* 解决：允许换行 */
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1 1 200px; /* 允许收缩，最小宽度 200px */
}
```

## 性能考虑

1. **Grid 性能**：对于复杂布局，Grid 通常比嵌套的 Flexbox 性能更好
2. **重排重绘**：避免频繁改变 display 属性
3. **动画优化**：使用 transform 和 opacity 进行动画

## 总结

CSS Grid 和 Flexbox 不是互斥的关系，而是互补的工具：

- **Grid 用于页面整体布局**，处理二维空间
- **Flexbox 用于组件内部布局**，处理一维空间

在实际项目中，我们经常需要结合使用两者来创建复杂的布局。理解它们的优势和限制，能帮助我们做出更好的技术选择。

记住：**选择正确的工具，完成正确的工作**。