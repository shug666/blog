(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{516:function(e,n,s){"use strict";s.r(n);var t=s(0),a=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Android Studio升级到3.5后，原先项目引入的是android，现在新建module时有Project needs to be converted to androidx.* dependencies，而且Finish是灰色，无法创建，现在提供两种解决方法：")]),e._v(" "),n("p",[e._v("**参考一篇博客：**https://blog.csdn.net/weixin_40420578/article/details/100132061")]),e._v(" "),n("h2",{attrs:{id:"项目不升级到androidx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目不升级到androidx"}},[e._v("#")]),e._v(" "),n("strong",[e._v("项目不升级到AndroidX")])]),e._v(" "),n("p",[e._v("一开始新建module_test时，如下图：")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/image-20220905200840138.png",alt:"image-20220905200840138"}})]),e._v(" "),n("p",[n("strong",[e._v("步骤一：gradle.properties(Global Properties)下添加：")])]),e._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[e._v("android.useAndroidX=true\nandroid.enableJetifier=true\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("点一下右上角Sync Now")]),e._v(" "),n("p",[n("strong",[e._v("步骤二：新建module_test，这时就没有Project needs to be converted to androidx.* dependencies ：")])]),e._v(" "),n("p",[n("strong",[e._v("步骤三：把module_test的build.gradle——dependencies下引入的androidX包改成android的，如果不知道怎么改，就从原先的module对应的build.gradle里拷贝过来")])]),e._v(" "),n("p",[n("strong",[e._v("步骤四：在步骤一种添加的改成false")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("android.useAndroidX=false\nandroid.enableJetifier=false\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("同步一下即可 Sync Now")])])}),[],!1,null,null,null);n.default=a.exports}}]);