(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{548:function(t,r,a){"use strict";a.r(r);var s=a(0),e=Object(s.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("Android系统开发有一个很麻烦的点就是想看代码调用情况的时候每次打log都要编译系统或者单编模块，费时费力特别影响效率。偶然间发现了framework也可以debug调试，所以写这篇博客记录一下。")]),t._v(" "),r("h2",{attrs:{id:"需要注意的事项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#需要注意的事项"}},[t._v("#")]),t._v(" 需要注意的事项")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("特别注意!")]),t._v("  debug调试的framework的代码是需要与当前系统的framework代码一致，否则会出现设置断点后置灰的问题。不要随便按Android Studio整理代码的快捷键，比如清理无效引用这种快捷功能，否则会导致行数不对，无法debug。")]),t._v(" "),r("li",[r("strong",[t._v("特别注意!")]),t._v(" 不要在Android Studio上直接将framework拷贝进项目。因为Android Studio会改动文件的包路径，所以最好在文件夹里直接操作拷贝黏贴。")]),t._v(" "),r("li",[t._v("**特别注意！**区分好framework代码一些类的运行的进程，比如ViewRootImpl其实运行在应用进程的，并不在system_process(系统进程)中运行。")]),t._v(" "),r("li",[t._v("千万不要在方法上断点，否则会非常卡，这点Android studio也会提示你。尽量在方法里的变量中断点")])]),t._v(" "),r("h2",{attrs:{id:"导入debug流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#导入debug流程"}},[t._v("#")]),t._v(" 导入Debug流程")]),t._v(" "),r("h3",{attrs:{id:"第一步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第一步"}},[t._v("#")]),t._v(" 第一步")]),t._v(" "),r("p",[t._v("首先随便创建一个app工程，然后将framework代码全部放入到目录下：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/1497956-20220822194606063-1265606513.png",alt:""}})]),t._v(" "),r("p",[t._v("你会发现代码都会报错，报错是正常的，什么都不需要修改，特别是不要修改类的路径。因为这些路径其实都是对应着系统中真正framework里的路径。")]),t._v(" "),r("h3",{attrs:{id:"第二步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第二步"}},[t._v("#")]),t._v(" 第二步")]),t._v(" "),r("p",[t._v("执行 adb root 命令，获得root权限")]),t._v(" "),r("h3",{attrs:{id:"第三步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第三步"}},[t._v("#")]),t._v(" 第三步")]),t._v(" "),r("p",[t._v("点击debug图标")]),t._v(" "),r("p",[t._v("勾选show all processes，这样你才能看到全部应用进程包括系统进程。 然后点击system_process，点击ok。")]),t._v(" "),r("h3",{attrs:{id:"第四步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第四步"}},[t._v("#")]),t._v(" 第四步")]),t._v(" "),r("p",[t._v("验证debug调试，在ActivityStarter中的startActivity方法里添加断点(因为Activity创建的第一个方法就是这里调用的)。然后启动一个App")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img2022.cnblogs.com/blog/1497956/202208/1497956-20220822200238829-646039895.png",alt:""}})]),t._v(" "),r("p",[t._v("断点成功")])])}),[],!1,null,null,null);r.default=e.exports}}]);