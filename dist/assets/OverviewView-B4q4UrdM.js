import{A as a}from"./loadApp-CMJG_X3Y.js";import{d as n,f as d,g as e,x as t,t as s,u as l,y as m,o as i}from"./index-CZXa0kT3.js";const p={class:"demo-page"},u={class:"demo-grid"},c={class:"demo-card"},g={class:"demo-card__text"},v={class:"demo-table"},B={class:"demo-note"},C=n({__name:"OverviewView",setup(f){const r="https://melt-js.github.io/comps-vue3-3d/hel_dist/hel-meta.json";return(S,o)=>(i(),d("div",p,[o[16]||(o[16]=e("header",null,[e("p",{class:"demo-page__eyebrow"},"Overview"),e("h1",{class:"demo-page__title"},"远程组件 demo（three 场景 / 二维视觉 / 三维 UI）"),e("p",{class:"demo-page__lead"},[t(" 这是一个 hel 消费方示例：宿主页面只写组件标签，场景与组件实现全部来自远程包 "),e("code",null,"comps-vue3-3d"),t("、"),e("code",null,"comps-vue3-2d"),t("、"),e("code",null,"comps-vue3-3d-ui"),t("； npm 依赖只提供轻量代理和类型。 ")])],-1)),e("div",u,[e("article",c,[o[0]||(o[0]=e("h2",{class:"demo-card__title"},"远端地址",-1)),e("p",g,[e("code",null,s(l(r)),1)]),o[1]||(o[1]=e("p",{class:"demo-card__text"},"dev / build 默认使用托管组件；本地联调时 REMOTE_TARGET=local 指向本机端口。",-1))]),o[2]||(o[2]=m('<article class="demo-card"><h2 class="demo-card__title">加载方式</h2><p class="demo-card__text"><code>bindVueRuntime({ Vue })</code> → <code>preloadHelLibs</code> → <code>import(&#39;./loadApp&#39;)</code>，业务页面具名导入组件，最后挂载应用。 </p></article><article class="demo-card"><h2 class="demo-card__title">依赖形态</h2><p class="demo-card__text"> three.js 随远程包打进 bundle，宿主不需要单独安装 three；共享运行时 vue 由宿主注入，避免双实例。 </p></article><article class="demo-card"><h2 class="demo-card__title">上游来源</h2><p class="demo-card__text"> 轨道球体背景内化自开源 <a href="https://threeui.com" target="_blank" rel="noreferrer">threeui</a> （MengTo/threeui，npm <code>@designcodeio/threeui</code>）的 orbital-sphere， 由 React 包装层改写为 Vue 3 封装。 </p></article>',3))]),e("section",null,[o[15]||(o[15]=e("h2",{class:"demo-page__section-title"},"远端信息",-1)),e("table",v,[e("tbody",null,[o[12]||(o[12]=e("tr",null,[e("th",null,"hel 组名"),e("td",null,[e("code",null,"comps-vue3-3d"),t(" · "),e("code",null,"comps-vue3-2d"),t(" · "),e("code",null,"comps-vue3-3d-ui")])],-1)),e("tr",null,[o[3]||(o[3]=e("th",null,"当前远端",-1)),e("td",null,[e("code",null,s(l(r)),1)])]),o[13]||(o[13]=e("tr",null,[e("th",null,"远程组件"),e("td",null,[e("span",{class:"demo-tag"},"OrbitalSphereBackground"),e("span",{class:"demo-tag"},"StructureFlowCollection"),e("span",{class:"demo-tag"},"WarpFieldBackground"),e("span",{class:"demo-tag"},"EmeraldHorizonBackground"),e("span",{class:"demo-tag"},"DotMatrixBackground"),e("span",{class:"demo-tag"},"LiquidFormBackground"),e("span",{class:"demo-tag"},"LaserCollection"),e("span",{class:"demo-tag"},"GlobeCollection"),e("span",{class:"demo-tag"},"RibbonFieldBackground"),e("span",{class:"demo-tag"},"StreamConvergenceBackground"),e("span",{class:"demo-tag"},"BellFieldBackground"),e("span",{class:"demo-tag"},"CrtBackground"),e("span",{class:"demo-tag"},"CondensationBackground"),e("span",{class:"demo-tag"},"UplinkLoader"),e("span",{class:"demo-tag"},"GenerativeTree"),e("span",{class:"demo-tag"},"PredictiveArcCanvas"),e("span",{class:"demo-tag"},"TypographyVortexCanvas"),e("span",{class:"demo-tag"},"TextPathStudies"),e("span",{class:"demo-tag"},"BallStudy"),e("span",{class:"demo-tag"},"ClothStudy"),e("span",{class:"demo-tag"},"MorphingGlyphCloud"),e("span",{class:"demo-tag"},"OutlineTypeflow"),e("span",{class:"demo-tag"},"RippleStudy"),e("span",{class:"demo-tag"},"BrandOrbs"),e("span",{class:"demo-tag"},"SemanticBloom"),e("span",{class:"demo-tag"},"LumenCta"),e("span",{class:"demo-tag"},"SparkBadge"),e("span",{class:"demo-tag"},"CircleButtons"),e("span",{class:"demo-tag"},"RectangleButtons"),e("span",{class:"demo-tag"},"ArticleHeadings"),e("span",{class:"demo-tag"},"EditorialIntroSection"),e("span",{class:"demo-tag"},"NewsletterFooterSection")])],-1)),e("tr",null,[o[11]||(o[11]=e("th",null,"本地端口",-1)),e("td",null,[o[4]||(o[4]=t("本 demo ",-1)),e("code",null,s(l(a).port),1),o[5]||(o[5]=t(" · 3d ",-1)),o[6]||(o[6]=e("code",null,"20110",-1)),o[7]||(o[7]=t(" · 2d ",-1)),o[8]||(o[8]=e("code",null,"20120",-1)),o[9]||(o[9]=t(" · 3d-ui ",-1)),o[10]||(o[10]=e("code",null,"20130",-1))])]),o[14]||(o[14]=e("tr",null,[e("th",null,"远程包状态"),e("td",null,"已预加载")],-1))])])]),o[17]||(o[17]=e("section",null,[e("h2",{class:"demo-page__section-title"},"宿主入口（src/main.ts）"),e("pre",{class:"demo-code-block"},[e("code",null,`import * as Vue from 'vue'
import { bindVueRuntime } from 'hel-micro'
import { preloadHelLibs } from '@melt-js/libs-core'

bindVueRuntime({ Vue })
await preloadHelLibs({
  deps: [
    { name: 'libs-vue3-leva', host: import.meta.env.VITE_PANEL_HOST,
      requiredExports: ['PropsPlayground', 'DemoTabs', 'DemoToolbar'] },
    { name: 'comps-vue3-3d', host: import.meta.env.VITE_REMOTE_HOST,
      requiredExports: ['OrbitalSphereBackground', 'LiquidFormBackground', 'LaserCollection', 'GlobeCollection', 'RibbonFieldBackground', 'StreamConvergenceBackground', 'BellFieldBackground', 'CrtBackground'] },
    { name: 'comps-vue3-2d', host: import.meta.env.VITE_2D_HOST,
      requiredExports: ['CondensationBackground', 'UplinkLoader', 'PredictiveArcCanvas', 'TypographyVortexCanvas', 'TextPathStudies', 'BallStudy', 'ClothStudy', 'MorphingGlyphCloud', 'OutlineTypeflow', 'RippleStudy', 'BrandOrbs', 'SemanticBloom', 'GenerativeTree'] },
    { name: 'comps-vue3-3d-ui', host: import.meta.env.VITE_UI3D_HOST,
      requiredExports: ['LumenCta', 'SparkBadge', 'CircleButtons', 'RectangleButtons', 'ArticleHeadings', 'EditorialIntroSection', 'NewsletterFooterSection'] },
  ],
  loading: true,
  loadApp: () => import('./loadApp').then(app => app.ready),
})
// 业务页面：import { OrbitalSphereBackground } from '@melt-js/comps-vue3-3d'
//          import { StructureFlowCollection } from '@melt-js/comps-vue3-3d'
//          import { WarpFieldBackground } from '@melt-js/comps-vue3-3d'
//          import { EmeraldHorizonBackground } from '@melt-js/comps-vue3-3d'
//          import { DotMatrixBackground } from '@melt-js/comps-vue3-3d'
//          import { LiquidFormBackground } from '@melt-js/comps-vue3-3d'
//          import { LaserCollection } from '@melt-js/comps-vue3-3d'
//          import { GlobeCollection } from '@melt-js/comps-vue3-3d'
//          import { RibbonFieldBackground } from '@melt-js/comps-vue3-3d'
//          import { StreamConvergenceBackground } from '@melt-js/comps-vue3-3d'
//          import { BellFieldBackground } from '@melt-js/comps-vue3-3d'
//          import { CrtBackground } from '@melt-js/comps-vue3-3d'
//          import { CondensationBackground } from '@melt-js/comps-vue3-2d'
//          import { PredictiveArcCanvas } from '@melt-js/comps-vue3-2d'
//          import { TypographyVortexCanvas } from '@melt-js/comps-vue3-2d'
//          import { TextPathStudies } from '@melt-js/comps-vue3-2d'
//          import { BallStudy } from '@melt-js/comps-vue3-2d'
//          import { ClothStudy } from '@melt-js/comps-vue3-2d'
//          import { MorphingGlyphCloud } from '@melt-js/comps-vue3-2d'
//          import { OutlineTypeflow } from '@melt-js/comps-vue3-2d'
//          import { RippleStudy } from '@melt-js/comps-vue3-2d'
//          import { BrandOrbs } from '@melt-js/comps-vue3-2d'
//          import { SemanticBloom } from '@melt-js/comps-vue3-2d'
//          import { GenerativeTree } from '@melt-js/comps-vue3-2d'
//          import { LumenCta } from '@melt-js/comps-vue3-3d-ui'
//          import { CircleButtons } from '@melt-js/comps-vue3-3d-ui'
//          import { RectangleButtons } from '@melt-js/comps-vue3-3d-ui'
//          import { ArticleHeadings } from '@melt-js/comps-vue3-3d-ui'
//          import { EditorialIntroSection } from '@melt-js/comps-vue3-3d-ui'
//          import { NewsletterFooterSection } from '@melt-js/comps-vue3-3d-ui'
// 属性面板：import { PropsPlayground } from '@melt-js/libs-vue3-leva'`)])],-1)),e("p",B," 使用托管组件时只需启动本 demo（"+s(l(a).port)+"）。示例页在导航栏切换到对应标签即可查看效果； UplinkLoader 已按上游内化 HTML 以 iframe srcDoc 内嵌；SparkBadge 当前仍为占位实现，后续按上游逻辑补全。 ",1)]))}});export{C as default};
