(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{528:function(t,i,e){"use strict";e.r(i);var s=e(0),r=Object(s.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v('一、提供进程优先级，降低进程被杀死的概率  方法一：监控手机锁屏解锁事件，在屏幕锁屏时启动1像素的Activity，在用户解锁时将Activity销毁。方法二、启动前台service。方法三：提升service优先级：在AndroidManifest.xml文件中对于intentfilter 可以通过android:priority="1000"这个属性设置最高优先级，1000是最高值，如果数字越小则优先级越低，同时适用于广播。')]),this._v(" "),t("p",[this._v("二、在进程被杀死后，进行拉活 方法一：注册高频率广播接收器，唤起进程。如网络变化，解锁屏幕，开机等  方法二：双进程相互唤起。方法三：依靠系统唤起。方法四：onDestroy 方法里重启service：service+broadcast方式，就是当service走ondestory的时候，发动一个自定义的广播，当收到广播的时候，重新启动service。")]),this._v(" "),t("p",[this._v("三、依靠第三方 根据终端不同，在小米手机（包括MINI）接入小米推送、华为手机接入华为推送；其他手机可以考虑接入腾讯信鸽或极光推送与小米推送做A/B Test。")])])}),[],!1,null,null,null);i.default=r.exports}}]);