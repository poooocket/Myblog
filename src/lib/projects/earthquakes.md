---
title: "地球脉动"
category: "地球脉动是一套基于三维球体场景的地震可视化系统，帮助用户快速理解地震的空间分布、聚集规律及时间节奏。"
year: "2025"
image: "/images/projects/earthquakes/0.png"
color: "#4F46E5"
---


<script>
  import SideBySide from '$lib/components/SideBySide.svelte';
</script>

## 地球脉动是一套基于三维球体场景的地震可视化系统，帮助用户快速理解地震的空间分布、聚集规律及时间节奏。

我的角色

竞品调研、界面设计、开发实现、部署上线

![Detail Shot 0](/images/projects/earthquakes/0.png)

参观项目：https://earthquakes-ten.vercel.app/



本项目面向小朋友的地震科普。在调研 USGS、EMSC 等平台时，我发现这些工具对非专业用户存在一些体验挑战：
![Detail Shot 0](/images/projects/earthquakes/1.png)

### 视觉层面

- 二维点图虽能看到局部聚集，但难以理解深源—浅源关系和地震带三维走向。
- 用户无法直观获取全球地震的结构信息。

### 交互层面：

- 多为表格 + 平面地图，用户不知道从何开始探索。
- 筛选操作存在，但缺乏引导发现模式的逻辑。

### 叙事层面
- 时间维度展示静态，缺少地震节奏感。
- 用户难以感受事件的聚集性和时间演变规律

这些痛点直接指导了我的设计思路：通过三维可视化 + 分层筛选 + 动态时间呈现，让用户在探索中快速理解地震信息。


## 界面设计

### 数据分层
![Detail Shot 0](/images/projects/earthquakes/2.png)
### 视觉语言
![Detail Shot 0](/images/projects/earthquakes/3.png)
### 核心交互
![Detail Shot 0](/images/projects/earthquakes/4.png)
### 动效设计
<SideBySide reverse={true}>
  	<div slot="text">
		<h3>飞行动画</h3>
		<p>基点击地震点，摄像机沿球面平滑移动至目标位置，增强探索流畅性与空间定位感</p>

		<h3>涟漪高亮</h3>
		<p>突出选中事件，强化焦点感和空间感知</p>

  	</div>
  	<img slot="media" src="/images/projects/earthquakes/5.gif" alt="UI" />
</SideBySide>


## 技术实现

- 前端框架：Svelte 5
    
    利用 Svelte 的反应性特性，让筛选器、图层开关或时间轴的变化能自动更新界面和三维场景逻辑，无需手动维护状态同步。
    
- 三维渲染：Three.js
    
    构建地球模型、地震点、深度柱和板块边界。
    
- 交互控制：OrbitControls
    
    支持旋转、缩放、平移，保持用户探索自由度。
    
- 性能优化：
    动态裁剪渲染数量，确保高帧率；组件销毁时回收资源，防止内存泄漏。

## 数据来源

- 地震事件：USGS Earthquake Catalog
- 活动断层：GEM Global Active Faults Database
- 板块边界与俯冲带：PB2002 构造板块模型（fraxen/tectonicplates）

## 部署

- 架构：纯前端静态应用
- 托管：Vercel，CI/CD 自动化部署