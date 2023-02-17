(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{527:function(a,e,v){"use strict";v.r(e);var _=v(0),d=Object(_.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("apk本质上就是一个zip包")]),a._v(" "),e("h2",{attrs:{id:"_1-apk安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-apk安装"}},[a._v("#")]),a._v(" 1. Apk安装")]),a._v(" "),e("p",[a._v("常见的apk安装方式有三种:")]),a._v(" "),e("ol",[e("li",[a._v("系统自带的应用和厂商预装的应用. 没错, 系统自带的应用其实也是apk, 其安装是在系统首次启动时完成的. 这也就是为什么root后可以卸载系统自带应用.没有安装界面.")]),a._v(" "),e("li",[a._v("通过存储介质安装. 最常见的就是通过sd卡放置apk或者网上下载apk方式安装.通过 packageinstaller.apk来处理安装及卸载的过程的界面")]),a._v(" "),e("li",[a._v("adb命令安装. 这应该是开发者最熟悉的安装方式了, 包括"),e("code",[a._v("adb install")]),a._v("和"),e("code",[a._v("adb pm install")]),a._v(".没有安装界面.")])]),a._v(" "),e("p",[a._v("三种安装方式, 在安装apk时最终都是同一套流程, 即处理apk文件的流程. 安装过程可以归结为以下几个步骤:")]),a._v(" "),e("ol",[e("li",[a._v("将apk文件拷贝到指定目录下. 系统应用是在"),e("code",[a._v("/system/app")]),a._v(", 第三方应用在"),e("code",[a._v("/data/app")]),a._v("下.")]),a._v(" "),e("li",[a._v("解压apk, 拷贝文件. 创建UID, 创建"),e("code",[a._v("/data/data/${package_name}")]),a._v("目录, 设置权限. 这个就是应用的数据目录.")]),a._v(" "),e("li",[a._v("从apk中提取dex, 放到"),e("code",[a._v("/data/dalvik-cache")]),a._v("目录.")]),a._v(" "),e("li",[a._v("解析"),e("code",[a._v("AndroidManifest.xml")]),a._v("文件, 提取信息添加到"),e("code",[a._v("PMS")]),a._v("中, "),e("strong",[a._v("更新PMS中相应的数据结构. 具体是, 将提取到的包信息更新到"),e("code",[a._v("/data/system/packages.list")]),a._v("和"),e("code",[a._v("/data/system/packages.xml")])]),a._v(".")]),a._v(" "),e("li",[a._v("发送广播"),e("code",[a._v("Intent.ACTION_PACKAGE_ADDED")]),a._v("或者"),e("code",[a._v("Intent.ACTION_PACKAGE_REPLACED")]),a._v(". 从名字可以判断分别对应全新安装和覆盖安装.")])]),a._v(" "),e("p",[a._v("Android中每个app都要一个"),e("code",[a._v("userId(UID)")]),a._v("的原因：Android在系统设计上把每个应用当做Linux系统上的一个用户对待,这样就可以利用已有的Linux用户管理机制来设计Android应用,比如应用目录/应用权限/应用进程管理等.")]),a._v(" "),e("ul",[e("li",[a._v("系统自带的以及厂商预装的app, 在手机首次启动时, 会通过扫描"),e("code",[a._v("/system/app")]),a._v(" "),e("code",[a._v("/system/framework")]),a._v(" "),e("code",[a._v("/vendor/app")]),a._v("等目录下面的APK文件, 完成安装. 原生系统没有"),e("code",[a._v("vendor")]),a._v("(供应商)目录.")]),a._v(" "),e("li",[a._v("至于通过"),e("code",[a._v("adb push")]),a._v("的方式, 如果root过, 完全可以推送到系统目录, 以系统应用的方式进行安装. 系统应用的好处是系统在启动的时候就会将apk进行解压复制, 坏处是没办法热更新等. 推送到一般目录, 则可以使用系统命令"),e("code",[a._v("/bin/pm")]),a._v("安装apk文件. "),e("code",[a._v("pm")]),a._v("就是一个可执行文件版的"),e("code",[a._v("PackageManager")]),a._v(". 最终调用"),e("code",[a._v("PackageManager.installPackage() -> PackageManagerService.installPacakge()")]),a._v("进行安装. 顺便一提, 具有"),e("code",[a._v("INSTALL_PACKAGES")]),a._v("权限就可以自己调用这个方法进行apk安装.")])]),a._v(" "),e("h3",{attrs:{id:"安装过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装过程"}},[a._v("#")]),a._v(" 安装过程")]),a._v(" "),e("p",[a._v("扫描apk安装， 主要是"),e("code",[a._v("PackageManagerService")]),a._v("进行安装包扫描和解析工作. 信息解析完毕后存在特定数据结构中("),e("code",[a._v("PackageParser.Package")]),a._v("), 此后需要进行信息同步工作. 这是因为, 扫描到的APK可能是已经更名的包/disable的包/需要升级的包/已经安装但签名冲突的包/替换了系统包的非系统包等情况, 需要处理这些情况, 保证最终信息正确."),e("br"),a._v("\n如果包需要进行"),e("code",[a._v("Rename")]),a._v("或者"),e("code",[a._v("Update")]),a._v(", 则需要签名比较."),e("br"),a._v("\n而使用"),e("code",[a._v("adb shell pm")]),a._v("安装略有不同, 是由"),e("code",[a._v("com.android.commands.pm.Pm")]),a._v("中的"),e("code",[a._v("runInstall")]),a._v("来安装的("),e("code",[a._v("adb install")]),a._v("最终也是调用的"),e("code",[a._v("shell pm")]),a._v(").")]),a._v(" "),e("h3",{attrs:{id:"核心函数scanpackagedirtyli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心函数scanpackagedirtyli"}},[a._v("#")]),a._v(" 核心函数scanPackageDirtyLI")]),a._v(" "),e("p",[a._v("系统最初调用"),e("code",[a._v("installPackageAsUser")]),a._v("检查是否有安装权限, 安装APK的整个过程在"),e("code",[a._v("PackageHandler")]),a._v("中进行, 主要分为 拷贝APK(检查是否有足够空间)->扫描APK->安装后处理(主要是发送广播信息), 其中最关键的一步就是扫描APK, 由函数"),e("code",[a._v("scanPackageLI")]),a._v("完成, 该函数里面调用"),e("code",[a._v("scanPackageDirtyLI")]),a._v("."),e("br"),a._v(" "),e("code",[a._v("scanPackageDirtyLI()")]),a._v("源码位于"),e("code",[a._v("frameworks/base/services/core/java/com/android/server/pm/PackageManagerService.java")]),a._v("中（基于7.0源码）：\n参考http://blog.hjhjw1991.com/android/2018/01/02/Apk%E5%AE%89%E8%A3%85%E5%8D%B8%E8%BD%BD%E5%8E%9F%E7%90%86/")]),a._v(" "),e("h3",{attrs:{id:"安装后的目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装后的目录结构"}},[a._v("#")]),a._v(" 安装后的目录结构")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("目录")]),a._v(" "),e("th",[a._v("含义")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("/system/app")]),a._v(" "),e("td",[a._v("系统自带的应用程序,获得 root 权限才能删除")])]),a._v(" "),e("tr",[e("td",[a._v("/data/app")]),a._v(" "),e("td",[a._v("第三方应用apk文件.安装时把apk文件复制到此目录")])]),a._v(" "),e("tr",[e("td",[a._v("/data/anr")]),a._v(" "),e("td",[a._v("存放anr信息（/data/anr/traces.txt用于存放app ANR信息）")])]),a._v(" "),e("tr",[e("td",[a._v("/data/data")]),a._v(" "),e("td",[a._v("应用程序数据")])]),a._v(" "),e("tr",[e("td",[a._v("/data/data/${package_name}")]),a._v(" "),e("td",[a._v("特定应用程序数据目录")])]),a._v(" "),e("tr",[e("td",[a._v("/data/data/${package_name}/cache")]),a._v(" "),e("td",[a._v("临时文件，系统会自动清理")])]),a._v(" "),e("tr",[e("td",[a._v("/data/data/${package_name}/databases")]),a._v(" "),e("td",[a._v("数据库")])]),a._v(" "),e("tr",[e("td",[a._v("/data/data/${package_name}/files")]),a._v(" "),e("td",[a._v("一般文件")])]),a._v(" "),e("tr",[e("td",[a._v("/data/data/${package_name}/shared_pres")]),a._v(" "),e("td",[a._v("SharedPreference")])]),a._v(" "),e("tr",[e("td",[a._v("/data/data/${package_name}/lib")]),a._v(" "),e("td",[a._v("so文件")])]),a._v(" "),e("tr",[e("td",[a._v("/data/dalvik-cache")]),a._v(" "),e("td",[a._v("存放odex文件.将apk中的dex文件安装到dalvik-cache目录下(dex文件是dalvik虚拟机的可执行文件,ART模式的可执行文件格式为.aot,启动ART时,系统会执行dex文件转换至aot文件)")])]),a._v(" "),e("tr",[e("td",[a._v("/data/system/packages.list")]),a._v(" "),e("td",[a._v("类似于Window的注册表,该文件是解析apk时由writeLP()创建的。记录了系统的permissons,以及解析apk的AndroidManifest获取的应用name,codePath,flag,ts,version,userid等信息。解析完apk后将更新信息写入这个文件并保存到flash,下次开机的时候直接从里面读取相关信息并添加到内存相关列表中.当有apk升级,安装或删除时会更新这个文件。")])]),a._v(" "),e("tr",[e("td",[a._v("/data/system/packages.xml")]),a._v(" "),e("td",[a._v("指定应用的默认存储位置/data/data/com.xx.xx/package.xml中包含了该应用申请的权限,签名和代码所在的位置等信息系,并且两者都有同一个userld.")])]),a._v(" "),e("tr",[e("td",[a._v("/data/user/0")]),a._v(" "),e("td",[a._v("软链接，指向/data/data")])]),a._v(" "),e("tr",[e("td",[a._v("/data/user_de/0/${package_name}")]),a._v(" "),e("td",[a._v("设备存储保护区，在快速启动模式可以访问这个文件夹")])]),a._v(" "),e("tr",[e("td",[a._v("/proc/cpuinfo")]),a._v(" "),e("td",[a._v("cpu信息")])]),a._v(" "),e("tr",[e("td",[a._v("/proc/smaps")]),a._v(" "),e("td",[a._v("内存占用信息")])]),a._v(" "),e("tr",[e("td",[a._v("/sdcard")]),a._v(" "),e("td",[a._v("软链接，最终指向/storage/emulated/0【跟Android版本和ROM版本有关】")])]),a._v(" "),e("tr",[e("td",[a._v("/storage/emulated/0")]),a._v(" "),e("td",[a._v("外部存储的根目录")])]),a._v(" "),e("tr",[e("td",[a._v("/storage/emulated/0/Android/data/${package_name}")]),a._v(" "),e("td",[a._v("应用的额外数据")])]),a._v(" "),e("tr",[e("td",[a._v("/system/app")]),a._v(" "),e("td",[a._v("系统应用apk文件")])]),a._v(" "),e("tr",[e("td",[a._v("/system/lib")]),a._v(" "),e("td",[a._v("系统应用so库")])])])]),a._v(" "),e("p",[a._v("在"),e("code",[a._v("/data/data/包名")]),a._v("目录下，每个app都有自己的目录，目录名就是应用程序在"),e("code",[a._v("AndroidManifest.xml")]),a._v("文件中定义的包。每个应用程序的代码，对自己的目录是有绝对的控制权限的。在每个目录下，一般有如下几个子目录（结合上面的表格）：")]),a._v(" "),e("ul",[e("li",[a._v("databases : 存放数据库")]),a._v(" "),e("li",[a._v("cache : 存放缓存数据")]),a._v(" "),e("li",[a._v("files : 存放应用程序自己控制的文件")]),a._v(" "),e("li",[a._v("lib : 存放使用的包")])]),a._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结：")]),a._v(" "),e("p",[a._v("在第三方app安装后，会创建的目录、文件以及记录的信息：")]),a._v(" "),e("ol",[e("li",[a._v("拷贝的apk文件，位于"),e("code",[a._v("/data/app")]),a._v("下")]),a._v(" "),e("li",[a._v("创建的app数据目录"),e("code",[a._v("/data/data/${package_name}")])]),a._v(" "),e("li",[a._v("从apk中提取的dex文件，位于"),e("code",[a._v("/data/dalvik-cache")]),a._v("目录下")]),a._v(" "),e("li",[e("code",[a._v("/data/system/packages.list")]),a._v("和"),e("code",[a._v("/data/system/packages.xml")]),a._v("中关于app的记录信息")])]),a._v(" "),e("p",[a._v("另外，app在运行期间有可能会使用到外部存储目录"),e("code",[a._v("/storage/emulated/0/Android/data/${package_name}")]),a._v("，该目录只有在app运行时调用相关函数时才创建，app安装后不会创建的。")]),a._v(" "),e("h2",{attrs:{id:"_2-apk卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-apk卸载"}},[a._v("#")]),a._v(" 2. Apk卸载")]),a._v(" "),e("p",[a._v("卸载是安装的逆过程, "),e("strong",[a._v("删除在创建过程中三个路径下产生的文件夹")]),a._v("，以及有可能后面创建的外部存储目录"),e("code",[a._v("/storage/emulated/0/Android/data/${package_name}")]),a._v("。"),e("br"),a._v("\n通过系统来卸载App通常是，点击卸载后，就会发送一个"),e("code",[a._v("Intent")]),a._v("给"),e("code",[a._v("UninstallerActivity")]),a._v("，在"),e("code",[a._v("UninstallerActivity")]),a._v("最后会启动"),e("code",[a._v("UninstallAppProgress")]),a._v("的"),e("code",[a._v("initView")]),a._v("方法，调用到"),e("code",[a._v("ApplicantPackageManger.java")]),a._v("的"),e("code",[a._v("deletePackage")]),a._v("方法，通过"),e("code",[a._v("Binder")]),a._v("绑定，其实是调用"),e("code",[a._v("PMS")]),a._v("中的"),e("code",[a._v("deletePackageAsUser")]),a._v("方法, 同样位于"),e("code",[a._v("/frameworks/base/services/core/java/com/android/server/pm/PackageManagerService.java")]),a._v("。"),e("br"),a._v("\n源码参考：http://blog.hjhjw1991.com/android/2018/01/02/Apk%E5%AE%89%E8%A3%85%E5%8D%B8%E8%BD%BD%E5%8E%9F%E7%90%86/")]),a._v(" "),e("p",[a._v("卸载第三方app最后由"),e("code",[a._v("deleteInstalledPackageLI()")]),a._v("方法来完成，分两步走：")]),a._v(" "),e("ol",[e("li",[a._v("第一步删除"),e("code",[a._v("/data/data")]),a._v("下面的数据目录，并从PMS的内部数据结构上清除当前卸载的package信息\n"),e("ol",[e("li",[e("code",[a._v("deleteInstalledPackageLI()")]),a._v("–>（表示调用，下同）"),e("code",[a._v("removePackageDataLI()")]),a._v("。"),e("code",[a._v("removePackageDataLI()")]),a._v("–>"),e("code",[a._v("removePackageLI()")]),a._v("–>mPackages的"),e("code",[a._v("remove()")]),a._v("：删除apk。"),e("code",[a._v("removePackageLI()")]),a._v("–>"),e("code",[a._v("cleanPackageDataStructuresLILPw()")]),a._v("：将package的"),e("code",[a._v("providers")]),a._v("、"),e("code",[a._v("services")]),a._v("、"),e("code",[a._v("receivers")]),a._v("、"),e("code",[a._v("activities")]),a._v("等信息去PMS的全局数据结构上移除。")]),a._v(" "),e("li",[e("code",[a._v("removePackageDataLI()")]),a._v("–>"),e("code",[a._v("removeDataDirsLI()")]),a._v("–>installd的"),e("code",[a._v("remove()")]),a._v("：删除目录"),e("code",[a._v("/data/data/${package_name}")])]),a._v(" "),e("li",[e("code",[a._v("removePackageDataLI()")]),a._v("–>"),e("code",[a._v("schedulePackageCleaning()")]),a._v("：安排清理动作。向"),e("code",[a._v("PackageHandler")]),a._v("发送"),e("code",[a._v("START_CLEANING_PACKAGE")]),a._v("消息，PMS会调用"),e("code",[a._v("ContainService")]),a._v("的函数去删除"),e("code",[a._v("/storage/sdcard0/Android/data")]),a._v("和"),e("code",[a._v("/storage/sdcard0/Android/media")]),a._v("下面与"),e("code",[a._v("package")]),a._v("相关的文件")]),a._v(" "),e("li",[e("code",[a._v("removePackageDataLI()")]),a._v("–>Settings的"),e("code",[a._v("removePackageLPw()")]),a._v("：首先从"),e("code",[a._v("mPackages")]),a._v("这个"),e("code",[a._v("map")]),a._v("中删除"),e("code",[a._v("PackageSettings")]),a._v("信息，即删除对应的"),e("code",[a._v("Package UID")]),a._v("信息")]),a._v(" "),e("li",[e("code",[a._v("removePackageDataLI()")]),a._v("–>"),e("code",[a._v("updatePermissionsLPw()")]),a._v("：检查"),e("code",[a._v("mPermissionTrees")]),a._v("和"),e("code",[a._v("mPermissions")]),a._v("两个数组中的权限是否是被删除的"),e("code",[a._v("Package")]),a._v("提供，如果有，则删除。")]),a._v(" "),e("li",[e("code",[a._v("removePackageDataLI()")]),a._v("–>Settings的"),e("code",[a._v("updateSharedUserPermsLPw()")]),a._v("：清除"),e("code",[a._v("sharedUser")]),a._v("不用的"),e("code",[a._v("gid")]),a._v("信息，防止权限泄露。")]),a._v(" "),e("li",[e("code",[a._v("removePackageDataLI()")]),a._v("–>Settings的"),e("code",[a._v("writeLPr()")]),a._v("：将修改的信息写到"),e("code",[a._v("Package.xml")]),a._v("中")])])]),a._v(" "),e("li",[a._v("第二步就删除code和resource文件\n"),e("ol",[e("li",[a._v("分别构造"),e("code",[a._v("FileInstallArgs")]),a._v("和"),e("code",[a._v("AsecInstallArgs")]),a._v("来完成code和resource资源的清除")]),a._v(" "),e("li",[e("code",[a._v("FileInstallArgs")]),a._v("的"),e("code",[a._v("doPostDeleteLI()")]),a._v("–>"),e("code",[a._v("cleanUpResourcesLI()")]),a._v("–>"),e("code",[a._v("cleanUp()")]),a._v("：删除code、resource以及library文件")]),a._v(" "),e("li",[e("code",[a._v("cleanUpResourcesLI()")]),a._v("–>installd的"),e("code",[a._v("rmdex()")]),a._v("：删除存在"),e("code",[a._v("/data/dalvik-cache")]),a._v("文件")])])])]),a._v(" "),e("p",[a._v("参考："),e("br"),a._v(" "),e("a",{attrs:{href:"https://blog.csdn.net/xinsong1989/article/details/78527439",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/xinsong1989/article/details/78527439"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"http://blog.hjhjw1991.com/android/2018/01/02/Apk%E5%AE%89%E8%A3%85%E5%8D%B8%E8%BD%BD%E5%8E%9F%E7%90%86/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://blog.hjhjw1991.com/android/2018/01/02/Apk%E5%AE%89%E8%A3%85%E5%8D%B8%E8%BD%BD%E5%8E%9F%E7%90%86/"),e("OutboundLink")],1)]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/hanfengzqh/article/details/82790896",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/hanfengzqh/article/details/82790896"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=d.exports}}]);