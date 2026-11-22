import{A as r}from"./loadApp-Da_QGcWA.js";import{d as a,e as i,f as e,q as o,t as l,u as s,z as m,o as p}from"./index-DsZLiDIn.js";const u={class:"demo-page"},c={class:"demo-grid"},_={class:"demo-card"},b={class:"demo-card__text"},g={class:"demo-table"},h={class:"demo-note"},V=a({__name:"OverviewView",setup(v){const n=r.remoteLibName,d="https://melt-js.github.io/comps-vue3-3d/hel_dist/hel-meta.json";return(E,t)=>(p(),i("div",u,[t[12]||(t[12]=e("header",null,[e("p",{class:"demo-page__eyebrow"},"Overview"),e("h1",{class:"demo-page__title"},"远程 three.js 3D 组件 demo"),e("p",{class:"demo-page__lead"},[o(" 这是一个 hel 消费方示例：宿主页面只写 "),e("code",null,"<OrbitalSphereBackground />"),o("，场景实现与 three.js 依赖全部来自远程包 "),e("code",null,"comps-vue3-3d"),o("；npm 依赖只提供轻量代理和类型。 ")])],-1)),e("div",c,[e("article",_,[t[0]||(t[0]=e("h2",{class:"demo-card__title"},"远端地址",-1)),e("p",b,[e("code",null,l(s(d)),1)]),t[1]||(t[1]=e("p",{class:"demo-card__text"},"dev / build 默认使用托管组件；本地联调时 REMOTE_TARGET=local 指向本机端口。",-1))]),t[2]||(t[2]=m('<article class="demo-card"><h2 class="demo-card__title">加载方式</h2><p class="demo-card__text"><code>bindVueRuntime({ Vue })</code> → <code>preloadHelLibs</code> → <code>import(&#39;./loadApp&#39;)</code>，业务页面具名导入组件，最后挂载应用。 </p></article><article class="demo-card"><h2 class="demo-card__title">依赖形态</h2><p class="demo-card__text"> three.js 随远程包打进 bundle，宿主不需要单独安装 three；共享运行时 vue 由宿主注入，避免双实例。 </p></article><article class="demo-card"><h2 class="demo-card__title">上游来源</h2><p class="demo-card__text"> 轨道球体背景内化自开源 <a href="https://threeui.com" target="_blank" rel="noreferrer">threeui</a> （MengTo/threeui，npm <code>@designcodeio/threeui</code>）的 orbital-sphere， 由 React 包装层改写为 Vue 3 封装。 </p></article>',3))]),e("section",null,[t[11]||(t[11]=e("h2",{class:"demo-page__section-title"},"远端信息",-1)),e("table",g,[e("tbody",null,[e("tr",null,[t[3]||(t[3]=e("th",null,"hel 组名",-1)),e("td",null,[e("code",null,l(s(n)),1)])]),e("tr",null,[t[4]||(t[4]=e("th",null,"当前远端",-1)),e("td",null,[e("code",null,l(s(d)),1)])]),t[9]||(t[9]=e("tr",null,[e("th",null,"远程组件"),e("td",null,[e("span",{class:"demo-tag"},"OrbitalSphereBackground")])],-1)),e("tr",null,[t[8]||(t[8]=e("th",null,"本地端口",-1)),e("td",null,[t[5]||(t[5]=o("本 demo ",-1)),e("code",null,l(s(r).port),1),t[6]||(t[6]=o(" · 组件包 ",-1)),t[7]||(t[7]=e("code",null,"20110",-1))])]),t[10]||(t[10]=e("tr",null,[e("th",null,"远程包状态"),e("td",null,"已预加载")],-1))])])]),t[13]||(t[13]=e("section",null,[e("h2",{class:"demo-page__section-title"},"宿主入口（src/main.ts）"),e("pre",{class:"demo-code-block"},[e("code",null,`import * as Vue from 'vue'
import { bindVueRuntime } from 'hel-micro'
import { preloadHelLibs } from '@melt-js/libs-core'

bindVueRuntime({ Vue })
await preloadHelLibs({
  deps: [
    { name: 'libs-vue3-leva', host: import.meta.env.VITE_PANEL_HOST,
      requiredExports: ['PropsPlayground', 'DemoTabs', 'DemoToolbar'] },
    { name: 'comps-vue3-3d', host: import.meta.env.VITE_REMOTE_HOST,
      requiredExports: ['OrbitalSphereBackground'] },
  ],
  loading: true,
  loadApp: () => import('./loadApp').then(app => app.ready),
})
// 业务页面：import { OrbitalSphereBackground } from '@melt-js/comps-vue3-3d'
// 属性面板：import { PropsPlayground } from '@melt-js/libs-vue3-leva'`)])],-1)),e("p",h," 使用托管组件时只需启动本 demo（"+l(s(r).port)+"）。示例页在导航栏切到「轨道球体背景」即可查看效果。 ",1)]))}});export{V as default};
