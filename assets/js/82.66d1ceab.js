(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{536:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("hr"),t._v(" "),a("h2",{attrs:{id:"_1-事件-intent-的分类-显式-和-隐式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-事件-intent-的分类-显式-和-隐式"}},[t._v("#")]),t._v(" 1.事件（Intent）的分类：显式 和 隐式")]),t._v(" "),a("p",[t._v('那么，为什么加上 filter.addDataScheme("file"); 就可以了呢？')]),t._v(" "),a("p",[t._v("为了解决这个问题，我们要先学习Intent的分类。Intent分为两大类，显式和隐式。")]),t._v(" "),a("p",[t._v("显式事件，就是指通过 component Name 属性，明确指定了目标组件的事件。")]),t._v(" "),a("p",[t._v('比如我们新建一个Intent，指名道姓的说，此事件用于启动名为"com.silenceburn.XXXX”的Activity，那么这就是一个显式事件。')]),t._v(" "),a("p",[t._v("隐式事件，就是指没有 component Name 属性，没有明确指定目标组件的事件。")]),t._v(" "),a("p",[t._v("比如系统向所有监控通话情况的程序发送的“来电话了！”的事件，由于系统不确定谁会处理这个事件，")]),t._v(" "),a("p",[t._v("因此系统不会明确指定目标组件，也就是说没有目标组件，那么这就是个隐式的事件。")]),t._v(" "),a("p",[t._v("此处只是简介显式和隐式事件，更精确详细的描述请查阅SDK文档，")]),t._v(" "),a("p",[t._v("我们只需要记住一点，两种事件的最大区别是 "),a("strong",[t._v("component Name 属性是否为空。")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_2-事件过滤策略-和-intentfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-事件过滤策略-和-intentfilter"}},[t._v("#")]),t._v(" 2.事件过滤策略 和 IntentFilter")]),t._v(" "),a("p",[t._v("系统在传送显式事件时非常方便，因为如果把Intent比作一封信，那么component Name就是一个详细的收件人地址，")]),t._v(" "),a("p",[t._v("系统可以精确的把显式事件送达目标组件。")]),t._v(" "),a("p",[t._v("而传送隐式事件时，就比较麻烦了。因为这封信的信封上，没有写收信地址！")]),t._v(" "),a("p",[t._v("那怎么办呢？系统做了一个艰难的决定，就是把信拆开看看。通过信件内容里面的线索，去寻找合适的收件人。")]),t._v(" "),a("p",[t._v("比如信中的线索描述到：“收信人是男性，快30岁了，未婚，喜欢玩游戏”，那么系统就在小区里面去找这样的人。")]),t._v(" "),a("p",[t._v("非常值得庆幸的事情是，这个小区的人素质非常高，每户人家都写了点自我介绍在门口，")]),t._v(" "),a("p",[t._v("比如张三写道：“我是男性，90后，未婚，喜欢玩游戏”，李四写道：“我是女性，快30岁了，未婚，喜欢逛街”等等等等。")]),t._v(" "),a("p",[t._v("有了每户人家的自我介绍，系统就能很快的定位真正的收件人了！")]),t._v(" "),a("p",[t._v("上面是一个类比的例子，不过android系统处理隐式事件的策略，基本上就是上述这种模式了。")]),t._v(" "),a("p",[t._v("首先系统会通过观察Intent的内容（打开信件看内容），取得匹配线索，系统所需的线索是如下三种 ：")]),t._v(" "),a("p",[t._v("action")]),t._v(" "),a("p",[t._v("data (both URI and data type)")]),t._v(" "),a("p",[t._v("category")]),t._v(" "),a("p",[t._v("其次，系统中每个组件，如果想收取隐式事件，则必须声明自己的IntentFilter（自我介绍，我对什么样的信件感兴趣）。")]),t._v(" "),a("p",[t._v("至于怎么写IntentFilter，已经相当明了了，那就是应该是这样写：")]),t._v(" "),a("p",[t._v('"我是组件XXXX，我想要接收这样的隐式事件：它的ACTION必须是 XXX，它的 category 必须是 YYYY ，它包含的data必须是ZZZZ "')]),t._v(" "),a("p",[t._v("如果组件不声明IntentFilter，那么所有的隐式事件都不会发送给该组件。"),a("strong",[t._v("（注意，这并不影响向该组件发送显式事件。）")])]),t._v(" "),a("p",[t._v("对于系统中发生的每个隐式事件，系统都会尝试将 action, data , category 和系统中各个组件声明的 IntentFilter 去进行匹配，")]),t._v(" "),a("p",[t._v("以找到合适的接收者。")]),t._v(" "),a("p",[t._v("上述是android系统的事件过滤策略的简单原理，实际情况远比这要复杂，考虑本文的目的，此处不再展开，SDK文档中都有详尽描述。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_3-分析u盘插拔事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-分析u盘插拔事件"}},[t._v("#")]),t._v(" 3. 分析U盘插拔事件")]),t._v(" "),a("p",[t._v("由上节可知，对于显式事件，系统可以精确送达。对于隐式事件，系统分析事件的 action, data , category 内容，")]),t._v(" "),a("p",[t._v("并和各个组件声明的IntentFilter进行匹配，找出匹配的组件进行送达。")]),t._v(" "),a("p",[t._v("因此SD卡插拔事件能否被我们自定义的Recevier收到就取决于如下子问题了：")]),t._v(" "),a("p",[t._v("1. SD卡插拔事件是显式事件，还是隐式事件")]),t._v(" "),a("p",[t._v("2. SD卡插拔事件的action, data , category 的内容是什么")]),t._v(" "),a("p",[t._v("3. 我们自定义的Receiver组件的IntentFilter是如何声明的")]),t._v(" "),a("p",[t._v("为了解决上述3个问题，我们修改一下代码，将SD卡插拔事件的内容打印到logcat中进行观察。")]),t._v(" "),a("p",[t._v('修改后的代码如下：（注意这里我们要添加好 filter.addDataScheme("file"); 以确保事件可以被接收到）')]),t._v(" "),a("p",[t._v("通过日志输出我们可以得知挂载SD卡事件的 Componet 是null ，因此它是一个隐式事件。")]),t._v(" "),a("p",[t._v("因此能否送达，需要看事件的 action, data , category 和 IntentFilter是否匹配。")]),t._v(" "),a("p",[t._v("它的ACTION是 android.intent.action.MEDIA_MOUNTED，")]),t._v(" "),a("p",[t._v("和我们定义的IntentFilter的 filter.addAction(Intent.ACTION_MEDIA_MOUNTED); 语句相匹配。")]),t._v(" "),a("p",[t._v("因此action部分是匹配的。")]),t._v(" "),a("p",[t._v("它的Categories是null，而我们定义的 IntentFilter 也没有使用addCategory方法增加category定义，")]),t._v(" "),a("p",[t._v("null ==  null，因此 categories也是匹配的。")]),t._v(" "),a("p",[t._v("action, data , category 中的两个要素已经匹配，那么能否匹配成功的关键，就是看data是否匹配了。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_4-data匹配规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-data匹配规则"}},[t._v("#")]),t._v(" 4. data匹配规则")]),t._v(" "),a("p",[t._v("首先务必认识到，data是一个相对复杂的要素。 data由URI来描述和定位，URI由三部分组成，")]),t._v(" "),a("p",[a("strong",[t._v("scheme://host:port/path      模式://主机:端口/路径")])]),t._v(" "),a("p",[t._v("例如我们截获的挂载SD卡事件，它的data的URI是 file:///mnt/sdcard")]),t._v(" "),a("p",[t._v("其中模式部分是 file ， 主机:端口部分是空的， path部分是 mnt/sdcard")]),t._v(" "),a("p",[t._v("此外在事件中，还可以设置data的MIME类型，作为事件的datatype属性。")]),t._v(" "),a("p",[t._v("综上所述，data是一个较复杂的要素，因此其匹配规则也格外复杂，")]),t._v(" "),a("p",[t._v("首先明确一个匹配原则，就是对于URI的匹配，只比较filter中声明的部分。")]),t._v(" "),a("p",[a("strong",[t._v("部分匹配原则：只要filter中声明的部分匹配成功，就认为整个URI匹配成功。")])]),t._v(" "),a("p",[t._v("举例来说，           content://com.silenceburn.SdCardTester:1000/mydata/private/")]),t._v(" "),a("p",[t._v("和filter定义为  content://com.silenceburn.SdCardTester:1000/     是可以匹配的。")]),t._v(" "),a("p",[t._v("注意filter中并没有定义path部分，但是依然可以匹配成功，因为filter不声明的部分不进行比较。")]),t._v(" "),a("p",[t._v("换句话讲，任何符合content://com.silenceburn.SdCardTester:1000/的事件，无论path是什么，都可以匹配成功。")]),t._v(" "),a("p",[t._v("接下来是真正的data部分的，也就是URI的匹配规则如下：")]),t._v(" "),a("p",[a("strong",[t._v("1. 如果data的URI和datatype为空，则 filter 的URI和type也必须为空，才能匹配成功")])]),t._v(" "),a("p",[a("strong",[t._v("2. 如果data的URI不为空，但是datatype为空，则 filter 必须定义URI并匹配成功，且type为空，才能匹配成功")])]),t._v(" "),a("p",[a("strong",[t._v("3. 如果data的URI为空，但是datatype不为空，则 filter 必须URI为空，定义type并匹配成功，才能匹配成功")])]),t._v(" "),a("p",[a("strong",[t._v("4. 如果data的URI和data都不为空，则 filter 的URI和type都必须定义并匹配成功，才能匹配成功。")])]),t._v(" "),a("p",[a("strong",[t._v("对于URI部分，有一个特殊处理，就是即使filter没有定义URI，content和file两种URI也作为既存的URI存在。")])]),t._v(" "),a("p",[t._v("（举个例子，对于 content 和 file 两种模式的data，只要filter定义的datatype可以和事件匹配，就认为匹配成功，")]),t._v(" "),a("p",[t._v("filter不需要显式的增加 content 和 file 两种模式，这两种模式内置支持 ）")]),t._v(" "),a("p",[t._v("有了规则，有了对SD卡插拔事件的内容的分析，我们就可以按图索骥照章办事了。")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"_5-u盘插拔事件的匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-u盘插拔事件的匹配"}},[t._v("#")]),t._v(" 5.U盘插拔事件的匹配")]),t._v(" "),a("p",[t._v("首先如第6节所述，SD卡插拔是一个隐式事件，而且 action 和 category 部分和我们的 filter 均可以匹配成功。")]),t._v(" "),a("p",[t._v("其data部分的URI为 file:///mnt/sdcard ，datatype为 null ，因此应用第6节比较规则中的 2 号规则：")]),t._v(" "),a("p",[a("strong",[t._v("2. 如果data的URI不为空，但是datatype为空，则 filter 必须定义URI并匹配成功，且type为空，才能匹配成功")])]),t._v(" "),a("p",[t._v("我们的filter中没有使用 addtype 方法 ，因此 filter 的type为空， datatype部分匹配成功。")]),t._v(" "),a("p",[t._v('data的URI为file:///mnt/sdcard ，我们使用 filter.addDataScheme("file"); 语句定义 schema 为 file，')]),t._v(" "),a("p",[t._v("根据部分匹配规则，data匹配成功。")]),t._v(" "),a("p",[t._v('至此，整个事件匹配成功，至此，我们就明白了文初的问题，为什么必须添加  filter.addDataScheme("file"); 语句才能收到事件！')]),t._v(" "),a("p",[t._v('我们可以尝试把 filter.addDataScheme("file"); 后面增加语句')]),t._v(" "),a("p",[t._v('filter.addDataPath("mnt/sdcard", PatternMatcher.PATTERN_LITERAL);')]),t._v(" "),a("p",[t._v("依然可以匹配成功，收到SD卡插拔事件。因为这样就组成了一个URI的完全匹配。")]),t._v(" "),a("p",[t._v("我们可以尝试把给 filter 增加 datatype 属性，")]),t._v(" "),a("p",[t._v('try { filter.addDataType("text/*"); } catch (MalformedMimeTypeException e) { // TODO Auto-generated catch block e.printStackTrace(); }')]),t._v(" "),a("p",[t._v("这样就无法匹配成功了。因为SD卡插拔事件的datatype是null，")]),t._v(" "),a("p",[t._v('而我们定义的filter的datatype是MIME"text/*" 。')]),t._v(" "),a("h2",{attrs:{id:"常见的广播"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的广播"}},[t._v("#")]),t._v(" 常见的广播")]),t._v(" "),a("p",[t._v("MediaScanner相关的：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntentFilter")]),t._v(" intentFilter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntentFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_MEDIA_MOUNTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    intentFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_MEDIA_UNMOUNTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    intentFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_MEDIA_SCANNER_STARTED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    intentFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_MEDIA_SCANNER_FINISHED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    intentFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_MEDIA_EJECT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    intentFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addDataScheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要添加此行")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("package相关的广播，应用安装与卸载（Launcher开发）")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    filter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntentFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_PACKAGE_ADDED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_PACKAGE_REMOVED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ACTION_PACKAGE_CHANGED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addDataScheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("SMS短信相关：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    intentFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DATA_SMS_RECEIVED_ACTION"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    intentFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addDataScheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sms"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);