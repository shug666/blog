(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{524:function(a,t,s){"use strict";s.r(t);var r=s(0),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"一、准备工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、准备工具"}},[a._v("#")]),a._v(" 一、准备工具")]),a._v(" "),t("p",[t("strong",[a._v("(1) 使用工具介绍：")])]),a._v(" "),t("p",[t("strong",[a._v("1.apktool 最新版 jar 包")]),a._v("\n作用：资源文件获取，可以提取出图片文件和布局文件进行使用查看\n"),t("strong",[a._v("2.dex2 jar 的zip包")]),a._v("\n作用：将apk反编译成java源码（classes.dex转化成jar文件）\n"),t("strong",[a._v("3.jd-gui 工具")]),a._v("\n作用：查看APK中classes.dex转化成出的jar文件，即源码文件")]),a._v(" "),t("p",[t("strong",[a._v("(2) 使用工具下载与安装：")])]),a._v(" "),t("p",[t("strong",[a._v("1.apktool_2.3.4 jar 包")]),a._v("\n官网下载地址：https://bitbucket.org/iBotPeaches/apktool/downloads/")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/1483449-20181101212900787-424863520.jpg",alt:"img"}})]),a._v(" "),t("p",[t("strong",[a._v("2.dex2 2.0 jar 包")]),a._v("\n官网下载地址：http://sourceforge.net/projects/dex2jar/files/")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/1483449-20181101212914656-383424119.jpg",alt:"img"}})]),a._v(" "),t("p",[t("strong",[a._v("3.jd-gui 1.4.0")])]),a._v(" "),t("p",[a._v("官网下载地址：http://jd.benow.ca/")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/image-20220919192515379.png",alt:"image-20220919192515379"}})]),a._v(" "),t("h2",{attrs:{id:"二、apk-反编译步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、apk-反编译步骤"}},[a._v("#")]),a._v(" 二、Apk 反编译步骤")]),a._v(" "),t("p",[t("strong",[a._v("(1) 使用 apktool 反编译 apk 得到图片、XML配置、语言资源等文件")])]),a._v(" "),t("p",[a._v("1.将上述下载好的 3 个工具统一放到一个文件夹中（目录最好不好有中文），并解压 zip 文件")]),a._v(" "),t("p",[a._v("2.打开 cmd/终端，进入上述工具目录")]),a._v(" "),t("p",[a._v("3.运行apktool_2.3.4.jar这个jar文件来将 apk文件进行反编译，在java中，运行可执行jar包的命令是：")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("java -jar apktool_2.3.4.jar d -f apk文件绝对路径 -o 输出的目录")])])]),a._v(" "),t("p",[t("strong",[a._v("例如：")]),a._v(" 使用如下的命令运行apktool_2.0.1.jar反编译MMTS-release-1.0.2.apk")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("java -jar apktool_2.3.4.jar d -f D:\\apkDecompile\\ocrTest.apk -o source")])])]),a._v(" "),t("p",[a._v("这个命令是启动 apktool_2.3.4.jar 将位于 D:\\apkDecompile\\ocrTest.apk 文件执行反编译，然后将反编译生成的文件存放到 apk 文件同级的 source 目录下，然后就会生成源文件的目录，以上就是使用 apktool 这个工具将一个 apk 反编译得到图片、XML配置、语言资源等文件的过程，截图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/image-20220919192630537.png",alt:"image-20220919192630537"}})]),a._v(" "),t("p",[t("strong",[a._v("(2) 使用 dex2jar 反编译 apk 得到 Jar 包")])]),a._v(" "),t("p",[a._v("将要反编译的 APK 后缀名改为 .rar 或者 .zip，并解压，得到其中的classes.dex 文件（它就是java文件编译再通过dx工具打包而成的），如下图所示：")]),a._v(" "),t("p",[a._v("将获取到的classes.dex放到之前解压出来的工具【dex2jar-2.0】文件夹内，如下图所示：")]),a._v(" "),t("p",[a._v('在命令行下进入到 dex2jar.bat 所在目录，输入"d2j-dex2jar classes.dex"')]),a._v(" "),t("p",[a._v("命令执行完成之后，在当前目录下就可以看到生成的Jar文件了，如下图所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/image-20220919192719298.png",alt:"image-20220919192719298"}})]),a._v(" "),t("p",[a._v("反编译 classes.dex 得到 classes-dex2jar.jar 文件之后，就可以使用【jd-gui】工具将 class 文件反编译成 java 源代码了")]),a._v(" "),t("p",[t("strong",[a._v("(3) 使用 jd-gui.exe 工具将 class 文件反编译成 java 源代码")])]),a._v(" "),t("p",[a._v("1.打开 jd-gui.exe 程序（不需要安装，之前 zip 包解压即可）")]),a._v(" "),t("p",[a._v("2.选择 class 文件就可以看到 java 源代码：")]),a._v(" "),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[a._v("#")]),a._v(" 参考链接")]),a._v(" "),t("p",[a._v("apk 反编译https://www.cnblogs.com/xpwi/p/9892680.html")])])}),[],!1,null,null,null);t.default=e.exports}}]);