(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{527:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"默认情况下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认情况下"}},[s._v("#")]),s._v(" 默认情况下")]),s._v(" "),a("p",[a("code",[s._v("git push")]),s._v("会推送暂存区所有提交（也即"),a("code",[s._v("HEAD")]),s._v("及其之前的提交），使用下面的命令可以改变此默认行为：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remotename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit SHA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remotebranchname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("举例如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin 248ed23e2:branchname\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"推送某一条提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送某一条提交"}},[s._v("#")]),s._v(" 推送某一条提交：")]),s._v(" "),a("h3",{attrs:{id:"第一种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一种方式"}},[s._v("#")]),s._v(" 第一种方式")]),s._v(" "),a("p",[s._v("即符合git操作的规则，从"),a("strong",[s._v("最初的commit")]),s._v("开始一个一个提交，但是不能实现指定某一个commit,基本满足日常的开发异常情况了**（只能按顺序提交）**")]),s._v(" "),a("p",[s._v("图一")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/d61420705ce243819ac2b119bb22bb1b.png",alt:""}})]),s._v(" "),a("p",[s._v("本地commit了3次提交但是并不想一下push到远程，根据功能或者时间的原因，想一个一个提交")]),s._v(" "),a("p",[s._v("此时可以使用：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("// 最下面的 一条为最老的一条，优先推送\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin 9267dd9:test  \n// 接着第二条同样的命令，commit换掉即可\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin 9267dd9:test\n\n// "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 依次按顺序一个一个提交"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"第二种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二种方式"}},[s._v("#")]),s._v(" 第二种方式")]),s._v(" "),a("p",[s._v("采用cherry-pick用新分支去拉取当前分支的指定commit记录，之后推送到当前分支远程仓库实现推送指定历史提交的功能")]),s._v(" "),a("p",[a("strong",[s._v("1. 创建临时分支")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("// localbranch 为本地分支名  origin/feat 为远程目标分支\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b  localbranch  --track origin/feat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("2.  执行cherry-pick，将修改bug的记录同步过来")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick fcf254130f\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("后续操作就是将临时分支记录推到目标分支！！！")])])}),[],!1,null,null,null);a.default=n.exports}}]);