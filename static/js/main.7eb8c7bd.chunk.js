(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(3),o=n.n(s),l=(n(15),n(16),n(4)),c=n(5),r=n(7),h=n(6),u=n(1),d=n(8),m=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(r.a)(this,Object(h.a)(e).call(this,t))).state={seconds:0,minutes:0,interval:null},n.handleStart=n.handleStart.bind(Object(u.a)(n)),n.tick=n.tick.bind(Object(u.a)(n)),n.handleStop=n.handleStop.bind(Object(u.a)(n)),n.handleReset=n.handleReset.bind(Object(u.a)(n)),n.handleStopAndReset=n.handleStopAndReset.bind(Object(u.a)(n)),n}return Object(d.a)(e,t),Object(c.a)(e,[{key:"handleStart",value:function(){if(!this.state.interval){var t=setInterval(this.tick,1e3);this.setState({interval:t})}}},{key:"handleStop",value:function(){this.state.interval&&(clearInterval(this.state.interval),this.setState({interval:null}))}},{key:"handleReset",value:function(){this.setState({seconds:0,minutes:0})}},{key:"handleStopAndReset",value:function(){this.handleStop(),this.handleReset()}},{key:"tick",value:function(){var t=this.state.seconds,e=this.state.minutes;(t+=1)>59&&(t=0,e+=1),this.setState({seconds:t,minutes:e})}},{key:"stringify",value:function(){var t="",e=this.state.minutes,n=this.state.seconds;return t+=e>9?e:"0"+e,t+=":",t+=n>9?n:"0"+n}},{key:"render",value:function(){return i.a.createElement("div",{className:"stopwatch"},i.a.createElement("h1",null," ",this.stringify()," "),i.a.createElement("button",{onClick:this.handleStart}," Start "),i.a.createElement("button",{onClick:this.handleStop}," Stop "),i.a.createElement("button",{onClick:this.handleReset}," Reset "),i.a.createElement("button",{onClick:this.handleStopAndReset}," Stop And Reset "),i.a.createElement("p",null," By Nate Donato"),i.a.createElement("a",{href:"https://github.com/natedonato/reactstopwatch/"}," View source and documentation on Github"))}}]),e}(i.a.Component);var v=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.7eb8c7bd.chunk.js.map