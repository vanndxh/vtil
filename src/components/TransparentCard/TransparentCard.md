# TransparentCard

## params

- children 内部 dom，直接继承
- width 宽度 default = auto
- height 高度 default = auto
- blurDegree 背景模糊度 default = 8
- borderRadius 圆角度 default = 0
- bgOpacity 白底透明度: 0-完成透明 1-完全白底 default = 0.5

## example

```tsx
<TransparentCard
  width="100px"
  height="100px"
  blurDegree={12}
  borderRadius={4}
  bgOpacity={0.7}
>
  test
</TransparentCard>
```
