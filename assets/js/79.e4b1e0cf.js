(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{534:function(a,s,t){"use strict";t.r(s);var n=t(0),r=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"java函数式接口之comparable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java函数式接口之comparable"}},[a._v("#")]),a._v(" Java函数式接口之Comparable")]),a._v(" "),s("p",[s("strong",[a._v("-able接口 在Java中一般表示能力，例如Comparable 比较能力，Iterable迭代能力等等")])]),a._v(" "),s("h3",{attrs:{id:"_1-comparable接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-comparable接口"}},[a._v("#")]),a._v(" 1. Comparable接口")]),a._v(" "),s("p",[s("strong",[a._v("Comparable接口，如其名，实现它后，实现类具有比较比较能力。在Java中是一个FunctionalInterface接口，里面包含一个compareTo方法")])]),a._v(" "),s("p",[a._v("这里引入源代码来分析, 具体如下：")]),a._v(" "),s("ol",[s("li",[a._v("实现该接口的每个类对象会被强加一个总排序，被称之为自然排序，compareTo方法被称之为自然排序法")]),a._v(" "),s("li",[a._v("List、Array等对象实现了该接口，可以自动排序。")]),a._v(" "),s("li",[a._v("compareTo禁止接收null值 会抛出空指针异常，null不是任何类的实例")]),a._v(" "),s("li",[a._v("强烈推荐自然排序和equal结果是一致的，例如 compareTo一致相当于equal方法返回true，"),s("strong",[a._v("但未要求")])]),a._v(" "),s("li",[a._v("compareTo 使用特定对象来比较顺序 返回 一个负数 或者 0 或者正数 来表示 小于 等于 大于")]),a._v(" "),s("li",[a._v("compareTo必须满足交换性、传递性等特性")]),a._v(" "),s("li",[s("strong",[a._v("排序输出默认是升序")])])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Comparable")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * 使用特定对象来比较顺序 返回 一个负数 或者 0 或者正数 来表示 小于 等于 大于\n     * 必须确保交换性 x.compareTo(y)的结果和y.compareTo(x)结果一致\n     * 传递性\n     * 强烈推荐 x.compareTo比较相同的话 equals值也相等\n     * 一般来说 返回值 通常定义三种 -1、0或者 1 这类似一种约定 当然你负数 正数其他值也可以\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("compareTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h4",{attrs:{id:"_1-已实现comparable接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-已实现comparable接口"}},[a._v("#")]),a._v(" 1. 已实现Comparable接口")]),a._v(" "),s("ol",[s("li",[a._v("List集合，一般排序借助于Collections工具类")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("listSort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//第一种排序方法")]),a._v("\n       \tlist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//第二种排序方法 底层使用第一种方法")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Collections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("Array排序 一般排序借助于Arrays工具类")])]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//在原有基础上排序")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("arraySort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//第一种排序")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Arrays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//第二种排序")]),a._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" newArr "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Arrays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("stream")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sorted")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("toArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Arrays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h3",{attrs:{id:"_2-comparator类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-comparator类"}},[a._v("#")]),a._v(" 2. Comparator类")]),a._v(" "),s("p",[a._v("Comparator,一个比较的功能类，也是一个FunctionalInterface.提供了compare方法，接受两个参数，并返回比较值，比较值的规则和Comparable一致，")]),a._v(" "),s("p",[a._v("也可以实现Comparable相同的比较效果")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//其他方法省略")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@FunctionalInterface")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Comparator")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**比较两个参数顺序 返回 负数 0 或 正数 分别表示 小于 等于 大于\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("compare")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" o1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("T")]),a._v(" o2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h3",{attrs:{id:"_3-comparable和comparator区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-comparable和comparator区别"}},[a._v("#")]),a._v(" 3. Comparable和Comparator区别")]),a._v(" "),s("p",[a._v("Java设计了Comparable接口，那么为什么还需要设计Comparator接口呢，两者区别是什么呢。")]),a._v(" "),s("p",[s("strong",[a._v("首先Comparable接口和Comparator接口 都能提供比较能力并返回结果。这是他们的相同点，这是设计的初衷")])]),a._v(" "),s("p",[a._v("不同点：")]),a._v(" "),s("ol",[s("li",[a._v("Comparable 表示一种能力，一般需要对象实现其接口，使其获取比较的能力。实现后 相当于本身具有比较能力。直接调用compareTo方法")]),a._v(" "),s("li",[a._v("Comparator 是一种工具，通过这种工具，可以将两种不具备比较的对象，区分出顺序。是借助外部工具")])]),a._v(" "),s("h3",{attrs:{id:"_4-java设计方式思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-java设计方式思考"}},[a._v("#")]),a._v(" 4. Java设计方式思考")]),a._v(" "),s("p",[s("strong",[a._v("Java中有其实还有其他类似的设计。例如Iterable和iterator.都是这样。针对相同的能力尽可能的提供更多的渠道，可以实现它，或者使用工具，最终的目的都是达到需要实现的目的。根据这种类似案例，是否以后在开发业务或工具时，也提供更多的渠道供其他调用者使用")])]),a._v(" "),s("h3",{attrs:{id:"_5-其他类似案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-其他类似案例"}},[a._v("#")]),a._v(" 5. 其他类似案例")]),a._v(" "),s("p",[a._v("Iterable和Iterator")]),a._v(" "),s("h3",{attrs:{id:"_6-升序or降序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-升序or降序"}},[a._v("#")]),a._v(" 6. 升序Or降序")]),a._v(" "),s("p",[a._v("在写比较器的时候老是纠结与到底哪个返回值是升序（从小到大），哪个返回值是降序（从大到小）。"),s("br"),a._v("\n翻找源码，可以知道Comparator本质上是个交换（swap）")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("low "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("compare")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("j"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" dest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n                    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("swap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("dest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("上述代码的意思是，当"),s("code",[a._v("dest[j-1] - dest[j] > 0")]),a._v("时，就交换两个元素。")]),a._v(" "),s("p",[a._v("这样做其实就是从小到大排序（升序)，对应我们重写compareTo方法中，arg0-arg1；并且，我们可以从源码中理解，当两者相等或者j-1小于j时，是不会有任何处理的即：")]),a._v(" "),s("p",[s("strong",[a._v("那么，如何从大到小（降序）进行排序呢？")])]),a._v(" "),s("p",[a._v("我们会在CompareTo方法中重写为arg1-arg0；明身处在j-1这个下标之后的dest[j]却往前了，产生了的效果就是大的放在了前面，小的放在了后面。")]),a._v(" "),s("h3",{attrs:{id:"_6-总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-总结"}},[a._v("#")]),a._v(" 6. 总结")]),a._v(" "),s("ol",[s("li",[a._v("无论是arg0-arg1，还是arg1-arg0，都只需要看大于号的情况，小于等于的情况不需要管，即大于才交换原则。")]),a._v(" "),s("li",[a._v("arg0代表的是下标靠前的一个数，arg1代表的是下标靠后的一个数。")])]),a._v(" "),s("p",[a._v("本篇文章其实是FunctionalInterface函数式接口的扩展。在常用的Supplier、Consumer、Function、Predicate的FunctionalInterface以及各种类型扩展后。介绍了Comparable接口。并扩展介绍Comparable的功能含义以及Comparable和Comparator比较。")]),a._v(" "),s("p",[a._v("其实本篇在介绍Comparable接口功能时，列举的案例，输出结果都是都是升序的，那么你有没有想过，如果列举出倒序的结果呢，又有哪几种方式呢?")]),a._v(" "),s("p",[a._v("本文转自 "),s("a",{attrs:{href:"https://blog.csdn.net/for2018/article/details/128212226",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/for2018/article/details/128212226"),s("OutboundLink")],1),a._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);s.default=r.exports}}]);