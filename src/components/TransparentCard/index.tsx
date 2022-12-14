/**
 * @file 毛玻璃效果卡片
 * @author vanndxh
 * @param children 内部dom，直接继承
 * @param width 宽度 default = auto
 * @param height 高度 default = auto
 * @param blurDegree 背景模糊度 default = 8
 * @param borderRadius 圆角度 default = 0
 * @param bgOpacity 白底透明度: 0-完成透明 1-完全白底 default = 0.5
 */
import React from "react";

interface Props {
  /** 内部内容 */
  children?: React.ReactNode;
  /** 宽度 */
  width?: string;
  /** 高度 */
  height?: string;
  /** 背景模糊度 default = 8 */
  blurDegree?: number;
  /** 圆角度 default = 0 */
  borderRadius?: number;
  /** 白底透明度: 0-完成透明 1-完全白底（可以当正常card用） */
  bgOpacity?: number;
}

export function TransparentCard(props: Props) {
  const { children, width, height, blurDegree, borderRadius, bgOpacity } =
    props;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: width ? width : "auto",
        height: height ? height : "auto",
        backdropFilter: blurDegree ? `blur(${blurDegree}px)` : "blur(8px)",
        borderRadius: borderRadius ? `${borderRadius}px` : "0",
        background:
          bgOpacity || bgOpacity === 0
            ? `rgba(255, 255, 255, ${bgOpacity})`
            : `rgba(255, 255, 255, 0.5)`,
      }}
    >
      {children}
    </div>
  );
}
