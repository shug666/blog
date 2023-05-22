(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{573:function(a,s,t){"use strict";t.r(s);var n=t(0),r=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("[TOC]")]),a._v(" "),s("h2",{attrs:{id:"一、as编译不过的原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、as编译不过的原因"}},[a._v("#")]),a._v(" 一、AS编译不过的原因")]),a._v(" "),s("h3",{attrs:{id:"具备全部api的framework-jar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具备全部api的framework-jar"}},[a._v("#")]),a._v(" 具备全部API的Framework.jar")]),a._v(" "),s("p",[a._v("Android Studio编译都过不了，原因是虽然在系统层已经做了适配，但是Android Studio它的API还是根据google默认的API来进行编译，google怎么会知道你自己要新增什么方法。那么我们怎么办才能正常生成apk呢?  首先找到你的项目源码，")]),a._v(" "),s("p",[a._v("找到 "),s("code",[a._v("out\\target\\common\\obj\\JAVA_LIBRARIES\\framework_intermediates")]),a._v(" 目录下的classes.jar文件，这个文件就是我们要的framework.jar包")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/image-20230106152648019.png",alt:"image-20230106152648019"}})]),a._v(" "),s("p",[a._v("其中，Android 11默认编译不会生成framework的classes.jar，需要在已经完整编译后，使用下面这条命令来编译生成对应的classes.jar。命令中javac-check 是指用javac编译 java文件或模块。make javac-check-framework 意思是用 javac 编译 framework 模块。")]),a._v(" "),s("div",{staticClass:"language-makefile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-makefile"}},[s("code",[a._v("make javac-check-framework\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("命令执行后可生成如下路径的jar包，改名为framework.jar或其他你喜欢的名字就可以用来导入AS工程")]),a._v(" "),s("p",[a._v("这个jar包才是可以供AS使用的，它有自己一定的大小，我这里是19M左右，因平台而异。")]),a._v(" "),s("blockquote",[s("p",[a._v("而如果你天真的直接在out目录下搜索framework.jar也是可以搜到的，但是这些jar包都是不起作用的，我刚开始在网上搜一些资料，大部分没有点名这个问题，导致自己也走了很多的弯路，这些jar包都是几kb左右，所以大家一定要找对文件（一定是有大小的，而不是几kb），不要走这样的弯路。")])]),a._v(" "),s("h2",{attrs:{id:"二、替换sdk下的android-jar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、替换sdk下的android-jar"}},[a._v("#")]),a._v(" 二、替换SDK下的android.jar")]),a._v(" "),s("p",[a._v("备份原有的android.jar，替换新的jar")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/2737084-20220517114518803-154205959.png",alt:"img"}})]),a._v(" "),s("h3",{attrs:{id:"_1、从安卓设备拿到framework-jar包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、从安卓设备拿到framework-jar包"}},[a._v("#")]),a._v(" 1、从安卓设备拿到framework.jar包")]),a._v(" "),s("ol",[s("li",[a._v("确认目标平台（手机/模拟器）")]),a._v(" "),s("li",[a._v("下载jar（adb pull /system/framework/framework.jar）")]),a._v(" "),s("li",[a._v("获取framework-classes.zip（jar替换为zip，获取classes.dex，dex2jar将其转为classes.jar，重命名framework-classes.zip）")]),a._v(" "),s("li",[a._v("替换原android.jar（原android.jar站zip,解压，用3内容替换）")])]),a._v(" "),s("h3",{attrs:{id:"_2、网上下载已经编译好的android-jar包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、网上下载已经编译好的android-jar包"}},[a._v("#")]),a._v(" 2、网上下载已经编译好的android.jar包")]),a._v(" "),s("p",[a._v("也可以直接是使用网上编译好的framework jar包，比如"),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[a._v("开源项目"),s("OutboundLink")],1),s("a",{attrs:{href:"https://github.com/Reginer/aosp-android-jar",target:"_blank",rel:"noopener noreferrer"}},[a._v("aosp-android-jar"),s("OutboundLink")],1),a._v("，对应找到自己需要的Android版本SDK下载导入即可。")]),a._v(" "),s("h3",{attrs:{id:"_3、源码生成android-jar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、源码生成android-jar"}},[a._v("#")]),a._v(" 3、源码生成android.jar")]),a._v(" "),s("p",[s("strong",[a._v("采用原生的SDK的android.jar和系统隐藏接口的jar包做一个合并操作，生成自定义的android.jar来编译")])]),a._v(" "),s("ol",[s("li",[a._v("找到sdk目录对应的android.jar路径，如 ”platforms\\android-31“，把android.jar拷贝出来，并且解压到new_android_jar目录下")]),a._v(" "),s("li",[a._v("在编译好的aosp源码中，找到classes-header.jar，一般路径在 “out/target/common/obj/JAVA_LIBRARIES/framework_intermediates/class-header.jar”,同样解压到new_android_jar，覆盖同名的文件")]),a._v(" "),s("li",[a._v('文件合并之后，需要打包，"jar cvf android.jar -C new_android_jar/ .",生成新的android.jar包')]),a._v(" "),s("li",[a._v("生成的android.jar覆盖原来的android.jar即可")])]),a._v(" "),s("h2",{attrs:{id:"三、将framework-jar添加到as项目中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、将framework-jar添加到as项目中"}},[a._v("#")]),a._v(" 三、将framework.jar添加到AS项目中")]),a._v(" "),s("p",[s("strong",[a._v("步骤一：拷贝framework.jar到模块的libs路径下")])]),a._v(" "),s("p",[s("strong",[a._v("步骤二：在模块中的build.gradle中使用compileOnly引入framework.jar")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("compileOnly "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("'libs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("framework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jar'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("blockquote",[s("p",[a._v("如果使用的类为framework.jar中新定义的类，和SDK中原有不冲突，使用步骤一，步骤二即可，如和Android SDK中同名，会优先使用SDK中的类，framework.jar中的类不会优先使用，如果优先使用framework中的类，需要配置步骤三，步骤四。")])]),a._v(" "),s("p",[s("strong",[a._v("步骤三：在模块中的build.gradle中配置如下，在Xbootclasspath(android节点)增加framework.jar")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("gradle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("projectsEvaluated "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("withType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JavaCompile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Set")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" fileSet "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bootstrapClasspath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getFiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" newFileList "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        newFileList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("File")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"libs/framework.jar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        newFileList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("fileSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bootstrapClasspath "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("newFileList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("toArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("或者在项目根目录的build.gradle中配置如下")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("allprojects "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("google")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("jcenter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//添加  其中app 根据你的module的名称进行替换， 后面的路径文件名都可以根据实际情况进行替换，但是开头的-Xbootclasspath/p:  这个是关键字")]),a._v("\n    gradle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("projectsEvaluated "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        tasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("withType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JavaCompile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("compilerArgs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Xbootclasspath/p:${rootProject.projectDir}/app/libs/framework.jar"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[s("strong",[a._v("步骤四：在模块中的build.gradle中配置如下（经测试，貌似非必需，可不添加此处代码），使得framework.jar优先于android.jar")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("preBuild "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    doLast "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 注意：iml的路径要根据自己的实际情况来写")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// def imlFile = "${rootProject.projectDir}/.idea/modules/${project.name}/${rootProject.name}.${project.name}.iml"')]),a._v("\n        def imlFile "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"${rootProject.projectDir}/.idea/modules/${project.name}/${rootProject.name}.${project.name}.iml"')]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            def parsedXml "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("XmlParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("imlFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            def jdkNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" parsedXml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("orderEntry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("find "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" it"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token char"}},[a._v("'@type'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[a._v("'jdk'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n            parsedXml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("jdkNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            def sdkString "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Android API "')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("compileSdkVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("substring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"android-"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('" Platform"')]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("groovy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parsedXml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("component"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 'orderEntry"),s("span",{pre:!0,attrs:{class:"token char"}},[a._v("', ['")]),a._v("type"),s("span",{pre:!0,attrs:{class:"token char"}},[a._v("': '")]),a._v("jdk"),s("span",{pre:!0,attrs:{class:"token char"}},[a._v("', '")]),a._v("jdkName'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" sdkString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 'jdkType"),s("span",{pre:!0,attrs:{class:"token char"}},[a._v("': '")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Android")]),a._v(" SDK'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("groovy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("XmlUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("serialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("parsedXml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileOutputStream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("imlFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("catch")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FileNotFoundException")]),a._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/shug666/image/main/images/image-20230106151541512.png",alt:"image-20230106151541512"}})]),a._v(" "),s("p",[s("strong",[a._v("步骤五：编译运行")])])])}),[],!1,null,null,null);s.default=r.exports}}]);