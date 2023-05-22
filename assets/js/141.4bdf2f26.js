(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{596:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),s("h3",{attrs:{id:"连接指定的ip地址-端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接指定的ip地址-端口"}},[t._v("#")]),t._v(" 连接指定的IP地址（端口）")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("adb connect "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"查看当前连接设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看当前连接设备"}},[t._v("#")]),t._v(" 查看当前连接设备：")]),t._v(" "),s("ul",[s("li",[t._v("查看当前连接设备：")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("adb devices\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("如果发现多个设备：")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("adb -s 设备号 其他指令\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("断开连接")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("adb disconnect "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"安装apk文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装apk文件"}},[t._v("#")]),t._v(" 安装apk文件：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("adb "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xxx.apk\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("此安装方式，如果已经存在，无法安装；\n推荐使用"),s("strong",[t._v("覆盖安装：")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("adb install -r xxx.apk\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"卸载app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载app"}},[t._v("#")]),t._v(" 卸载App:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("adb uninstall com.zhy.app\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("如果想要保留数据，则：")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("adb uninstall -k com.zhy.app\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"传递文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传递文件"}},[t._v("#")]),t._v(" 传递文件：")]),t._v(" "),s("ul",[s("li",[t._v("往手机SDCard传递文件：")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("adb push 文件名 手机端SDCard路径\n\n例如：adb push 帅照.jpg  /sdcard/\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("从手机端下载文件：")])]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("adb pull /sdcard/xxx.txt\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"查看日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看日志"}},[t._v("#")]),t._v(" 查看日志")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("logcat "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("filterspecs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\noptions:\n\t-s\t\t\t\t设置输出日志的标签, 只显示该标签的日志"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t-f\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t将日志输出到文件, 默认输出到标准输出流中"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t-r\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("kbytes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t按照每千字节输出日志, 需要 -f 参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t-n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\t设置日志输出的最大数目, 需要 -r 参数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t-v\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("format"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t设置日志的输出格式, 注意只能设置一项"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t-c\t\t\t\t清空所有的日志缓存信息"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t-d\t\t\t\t将缓存的日志输出到屏幕上并退出, 并且不会阻塞"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t-t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\t输出最近的几行日志, 输出完退出, 不阻塞"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t-g\t\t\t\t查看日志缓冲区信息"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t-b\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("buffer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t加载一个日志缓冲区, 默认是 main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t-B\t\t\t\t以二进制形式输出日志"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\nfilterspecs:\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(":priority"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  标签:日志等级, 默认的日志过滤项是 *:I "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    V \t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" \tVerbose "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("明细"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    D \t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\tDebug "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("调试"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    I \t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" \tInfo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("信息"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    W \t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" \tWarn "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("警告"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    E \t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" \tError "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("错误"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    F \t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" \tFatal "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("严重错误"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    S \t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" \tSilent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Super all output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])]),s("h3",{attrs:{id:"pm命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pm命令"}},[t._v("#")]),t._v(" pm命令")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pm list packages：显示所有已经安装的apk包名\npm list packages -f：显示所有已安装的apk包名及相应的apk的路径\npm install apk名称：安装 apk  此命令需要先将文件拷贝到设备的/data/local/tmp/下再进行安装\npm install -r apk 名称：强制安装，安装过的会覆盖\npm uninstall 包名：卸载apk\npm path 包名：通过包名反查apk所在路径\npm clear com.example.packagename 注：该命令清除掉APP的缓存，还能把APP的数据给清空。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"am命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#am命令"}},[t._v("#")]),t._v(" am命令")]),t._v(" "),s("p",[t._v("命令列表：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("功能")]),t._v(" "),s("th",[t._v("实现方法")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("am start [options]")]),t._v(" "),s("td",[t._v("启动Activity")]),t._v(" "),s("td",[t._v("startActivityAsUser")])]),t._v(" "),s("tr",[s("td",[t._v("am startservice")]),t._v(" "),s("td",[t._v("启动Service")]),t._v(" "),s("td",[t._v("startService")])]),t._v(" "),s("tr",[s("td",[t._v("am stopservice")]),t._v(" "),s("td",[t._v("停止Service")]),t._v(" "),s("td",[t._v("stopService")])]),t._v(" "),s("tr",[s("td",[t._v("am broadcast")]),t._v(" "),s("td",[t._v("发送广播")]),t._v(" "),s("td",[t._v("broadcastIntent")])]),t._v(" "),s("tr",[s("td",[t._v("am restart")]),t._v(" "),s("td",[t._v("重启")]),t._v(" "),s("td",[t._v("restart")])]),t._v(" "),s("tr",[s("td",[t._v("am dumpheap [pid] [file]")]),t._v(" "),s("td",[t._v("进程pid的堆信息输出到file")]),t._v(" "),s("td",[t._v("dumpheap")])]),t._v(" "),s("tr",[s("td",[t._v("am send-trim-memory [pid] [level]")]),t._v(" "),s("td",[t._v("收紧进程的内存")]),t._v(" "),s("td",[t._v("setProcessMemoryTrimLevel")])]),t._v(" "),s("tr",[s("td",[t._v("am kill [PACKAGE]")]),t._v(" "),s("td",[t._v("杀指定后台进程")]),t._v(" "),s("td",[t._v("killBackgroundProcesses")])]),t._v(" "),s("tr",[s("td",[t._v("am kill-all")]),t._v(" "),s("td",[t._v("杀所有后台进程")]),t._v(" "),s("td",[t._v("killAllBackgroundProcesses")])]),t._v(" "),s("tr",[s("td",[t._v("am force-stop [PACKAGE]")]),t._v(" "),s("td",[t._v("强杀进程")]),t._v(" "),s("td",[t._v("forceStopPackage")])]),t._v(" "),s("tr",[s("td",[t._v("am hang")]),t._v(" "),s("td",[t._v("系统卡住")]),t._v(" "),s("td",[t._v("hang")])]),t._v(" "),s("tr",[s("td",[t._v("am monitor")]),t._v(" "),s("td",[t._v("监控")]),t._v(" "),s("td",[t._v("MyActivityController.run")])])])]),t._v(" "),s("h3",{attrs:{id:"intent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intent"}},[t._v("#")]),t._v(" Intent")]),t._v(" "),s("p",[t._v("Intent的参数和flags较多，为了方便，这里分为3种类型参数，常用参数，Extra参数，Flags参数")]),t._v(" "),s("h4",{attrs:{id:"常用参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用参数"}},[t._v("#")]),t._v(" 常用参数")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("-a "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ACTION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(": 指定Intent action， 实现原理Intent.setAction()；\n-n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("COMPONENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(": 指定组件名，格式为{包名}/.{主Activity名}，实现原理Intent.setComponent(）；\n-d "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DATA_URI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(": 指定Intent data URI\n-t "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MIME_TYPE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(": 指定Intent MIME Type\n-c "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CATEGORY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" [-c "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CATEGORY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("] ...]:指定Intent category，实现原理Intent.addCategory()\n-p "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PACKAGE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(": 指定包名，实现原理Intent.setPackage();\n-f "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FLAGS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(": 添加flags，实现原理Intent.setFlags(int )，紧接着的参数必须是int型；\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("实例")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("am start -a android.intent.action.VIEW\nam start -n mobi.infolife.ezweather.locker.locker_2/.LockerActivity\nam start -d content://contacts/people/1\nam start -t image/png\nam start -c android.intent.category.APP_CONTACTS\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h4",{attrs:{id:"extra参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extra参数"}},[t._v("#")]),t._v(" Extra参数")]),t._v(" "),s("p",[s("strong",[t._v("(1). 基本类型")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("-e/-es")]),t._v(" "),s("th",[t._v("-esn")]),t._v(" "),s("th",[t._v("-ez")]),t._v(" "),s("th",[t._v("-ei")]),t._v(" "),s("th",[t._v("-el")]),t._v(" "),s("th",[t._v("-ef")]),t._v(" "),s("th",[t._v("-eu")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("类型")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("(String)")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("long")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("uri")])])])]),t._v(" "),s("p",[t._v("参数es是Extra String首字母简称，实例：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("am start -n com.cnr.tlive/.MainActivity -es "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("(2). 数组类型")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("-esa")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("-eia")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("-ela")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("-efa")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("数组类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("String[]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("int[]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("long[]")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("float[]")])])])]),t._v(" "),s("p",[t._v("参数eia，是Extra int array首字母简称，多个value值之间以逗号隔开，实例：")]),t._v(" "),s("div",{staticClass:"language-undefined line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("am start -n com.cnr.tlive/com.cnr.tlive.activity.MainActivity -ela day 1,2,3,4,5\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("(3). ArrayList类型")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("-esal")]),t._v(" "),s("th",[t._v("-eial")]),t._v(" "),s("th",[t._v("-elal")]),t._v(" "),s("th",[t._v("-efal")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("List类型")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("int")]),t._v(" "),s("td",[t._v("long")]),t._v(" "),s("td",[t._v("float")])])])]),t._v(" "),s("p",[t._v("参数efal，是Extra float Array List首字母简称，多个value值之间以逗号隔开，实例：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("am start -n com.cnr.tlive.activity.MainActivity -efal nums "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.2")]),t._v(",2.2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("am start 包名/完整Activity路径\n如果启动带有参数，则使用**-e**标签，比如有一个SecondActivity，需要传入一个agrus_name参数，如：\nam start com.example.crime/com.example.crime.SecondActivity -e argus_name QiuShui\n\nam start -a android.intent.action.VIEW -d http://www.baidu.com：打开百度网页\n\nam boardcast -a com.smz.myboardcast\t发送一个广播（-a表示动作）\nam broadcast -a "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"broadcastactionfilter"')]),t._v(" -e name zhy  带参\n\nam startservice com.ctv.newfactorytest/.FactoryTestService：启动一个服务\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("blockquote",[s("ul",[s("li",[t._v("启动带的参数一般是Key-value形式，这里的key是argus_name,Value是QiuShui.")]),t._v(" "),s("li",[t._v("除了默认启动的activity外，打开其他的activity时，需要在清单文件中添加"),s("strong",[t._v('android:exported="true"属性。')])]),t._v(" "),s("li",[t._v("要启动一个隐式的Intent，也就是说需要传入action等参数，在ADB调试桥中可以得知Intent的参数规范，比如**-a"),s("strong",[t._v("表示")]),t._v("action**,"),s("strong",[t._v("-c")]),t._v("表示"),s("strong",[t._v("category")]),t._v(","),s("strong",[t._v("-d")]),t._v("表示"),s("strong",[t._v("data_uri")]),t._v(", "),s("strong",[t._v("-e")]),t._v("表示添加额外Key-Value信息。")])])]),t._v(" "),s("p",[s("strong",[t._v("service list")]),t._v("来查看dumpsys能提供查询信息的服务")]),t._v(" "),s("p",[t._v("dumpsys window w | grep name：查看当前Activity;")]),t._v(" "),s("p",[t._v("使用dumpsys package 包名    查看指定包的信息，其中就有包名和完整Activity路径")]),t._v(" "),s("h3",{attrs:{id:"setprop、getprop命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setprop、getprop命令"}},[t._v("#")]),t._v(" setprop、getprop命令")]),t._v(" "),s("p",[t._v("设置、获取系统property变量值")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("adb shell getprop\t\t获取所有系统属性\nadb shell getprop ro.product.board\nadb shell setprop dalvik.vm.heapgrowthlimit 128m\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"settings命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings命令"}},[t._v("#")]),t._v(" settings命令")]),t._v(" "),s("p",[t._v("使用这个命令可以对settings数据库进行增删改查，其中**“namespace”**是system、secure或者global其中之一。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("settings list "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\t查看system、secure或者global表的全部值。\n\nsettings get "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" key\t查看指定key对应的值\n\nsettings put "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" key\t添加/修改指定key的值\n\nsettings delete "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("namespace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" key\t\t删除指定key\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"wm命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wm命令"}},[t._v("#")]),t._v(" wm命令")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("wm size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("reset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("WxH"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("WdpxHdp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\t不指定参数时是查看屏幕宽高。指定参数后即是设置（重设）屏幕宽高。\n\nwm density "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("reset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("DENSITY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\t不指定参数时是查看屏幕密度。指定参数后即是设置（重设）密度。\n\nwm overscan "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("reset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("LEFT,TOP,RIGHT,BOTTOM"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\t设置overcan区域\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("blockquote",[s("p",[t._v("Overscan（过扫描）是一种独特的调整画面显示效果的方法，常见于老式电视机。它是通过裁剪画面外边缘的方式，将所需显示的内容填满整个电视屏幕，以达到全屏显示的要求。")])]),t._v(" "),s("h3",{attrs:{id:"content命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content命令"}},[t._v("#")]),t._v(" content命令")]),t._v(" "),s("p",[t._v("Content Provider增删改查:")]),t._v(" "),s("div",{staticClass:"language-sqlite line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("在secure表中添加一条记录:\nINSERT INTO secure ('name','value') VALUES('test','hello')\n\ncontent insert --uri content://settings/secure --bind name:s:test --bind value:s:hello\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("div",{staticClass:"language-sqlite line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("在secure表中删除一条记录:\nDELETE FROM secure WHERE name='test'\n\ncontent delete --uri content://settings/secure --where \"name='test'\"\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("div",{staticClass:"language-sqlite line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("在secure表中更新一条记录:\nUPDATE secure SET value='hello' WHERE name='test'\n\ncontent update --uri content://settings/secure --bind value:s:hello --where \"name='test'\"\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("div",{staticClass:"language-sqlite line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("在secure表中查询\nSELECT name,value FROM secure WHERE name='test' ORDER BY name DESC\n\ncontent query --uri content://settings/secure --projection name:value --where \"name='test'\" --sort \"name DESC\"\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("字段类型:\n\tb – boolean \n\ts – String\n\ti – int\n\tl – long\n\tf – float\n\td – double\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"sqlite3命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sqlite3命令"}},[t._v("#")]),t._v(" sqlite3命令")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v(".database\t\t\t显示数据库信息，包括数据库所在位置\n.table"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(".tables\t\t显示表名称\n.schema "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TABLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\t查看建表语句\n.header on"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("off\t\t是/否显示表头\n.mode csv"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("column")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("insert"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("line"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("tabs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("tcl\t\t改变输出格式\n.quit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(".exit\t\t\t退出\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h3",{attrs:{id:"input命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input命令"}},[t._v("#")]),t._v(" input命令")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("input text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TEXT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\t\t\t模拟输入文本信息\ninput keyevent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("KEYCODE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t模拟按键事件\ninput tap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\t\t\t模拟点击"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X,Y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninput swipe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("X"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("1")]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("X"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Y"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\t\t模拟滑动事件，从"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X1,Y1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("到"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X2,Y2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("（时长为TIME）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"屏幕截图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#屏幕截图"}},[t._v("#")]),t._v(" 屏幕截图：")]),t._v(" "),s("ul",[s("li",[t._v("可以使用screencap命令来进行手机屏幕截图，例如：")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("adb shell screencap /sdcard/screen.png\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"录制视频"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#录制视频"}},[t._v("#")]),t._v(" 录制视频：")]),t._v(" "),s("p",[t._v("可以使用screenrecord[options] filename命令来录制屏幕视频，例如：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("adb shell screenrecord /sdcard/demo.mp4\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("adb start-server")]),t._v(" "),s("p",[t._v("​\t打开ADB服务进程")]),t._v(" "),s("p",[t._v("adb kill-server")]),t._v(" "),s("p",[t._v("​\t结束ADB服务进程")]),t._v(" "),s("p",[t._v("adb [-s [specific device] shell")]),t._v(" "),s("p",[t._v("​\t进入命令行模式")]),t._v(" "),s("h2",{attrs:{id:"部分问题解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部分问题解决"}},[t._v("#")]),t._v(" 部分问题解决")]),t._v(" "),s("h3",{attrs:{id:"_1-拒绝连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-拒绝连接"}},[t._v("#")]),t._v(" 1.拒绝连接")]),t._v(" "),s("p",[t._v("当使用cmd进行连接电视的时候，可能会出现连接失败。\n输入adb connect 172.16.2.253，结果连接失败，\n提示由于目标计算机积极拒绝，无法连接，\n解决办法，在CRT中输入命令settings put global adb_enabled 1\n再进行连接，即可成功。")]),t._v(" "),s("h3",{attrs:{id:"_2-通过apk报名列出包的信息-然后启动activity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过apk报名列出包的信息-然后启动activity"}},[t._v("#")]),t._v(" 2.通过apk报名列出包的信息，然后启动Activity")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("pm list package "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#列出全部的包名,在这些包名中找出和apk相似的包 如 com.demo.hmi.onstarservices.tbox")]),t._v("\ndumpsys package com.demo.hmi.onstarservices.tbox "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#列出包的信息")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("其中有如下一行,可知要启动的package和activity")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("am start com.demo.hmi.onstarservices.tbox/.MainActivity\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/qq_39969226/article/details/87897863?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166113364816782184610975%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166113364816782184610975&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-87897863-null-null.142%5Ev42%5Epc_rank_34_1,185%5Ev2%5Econtrol&utm_term=adb%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4&spm=1018.2226.3001.4187",target:"_blank",rel:"noopener noreferrer"}},[t._v("ADB常用命令及其用法大全"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/2802683923e0",target:"_blank",rel:"noopener noreferrer"}},[t._v("am,pm,dumpsys 命令用法"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);