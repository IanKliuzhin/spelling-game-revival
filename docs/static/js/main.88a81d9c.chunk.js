(this["webpackJsonpspelling-game-p2p"]=this["webpackJsonpspelling-game-p2p"]||[]).push([[0],{40:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c,a=n(26),r=n.n(a),s=(n(40),n(2)),i=function(e){var t=e.children;return Object(s.jsx)("div",{className:"globalWrapper",children:t})},o=n(13),l=n(1),d=n(6),u=n(31),h=n(4),S=n(18),f=n(11),b=n.n(f),j=n(14),v=n(32),m=n(10),g=n(35),O={apiKey:"AIzaSyCfIbQmfN8ZWunC13zhJyDoQ1aL34mKvHI",authDomain:"react-p2p-test.firebaseapp.com",databaseURL:"https://react-p2p-test-default-rtdb.europe-west1.firebasedatabase.app",projectId:"react-p2p-test",storageBucket:"react-p2p-test.appspot.com",messagingSenderId:"54650620648",appId:"1:54650620648:web:a3a8bc21fd8bcd4782975d"};!function(e){e.START_GAME="start-game",e.START_BATTLE="start-battle",e.FINISH_EXERCISE="finish-exercise",e.END_GAME="end-game",e.REQUEST_RESTART="request-restart"}(c||(c={}));var p,x,w,C={iceServers:[{urls:"stun:stun2.1.google.com:19302"}]},N=function e(t){var n=this,a=t.rootStore;Object(l.a)(this,e),this.db=void 0,this.connectionId=null,this.connection=null,this.channel=null,this.isConnected=!1,this.rootStore=void 0,this.setIsConnected=function(e){n.isConnected=e},this.startHostSession=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.connection=new RTCPeerConnection(C),n.connectionId=Object(g.a)(5),n.connection.oniceconnectionstatechange=function(){var e;"disconnected"===(null===(e=n.connection)||void 0===e?void 0:e.iceConnectionState)&&n.rootStore.gameStore.resetGame()},n.connection.onicecandidate=function(e){console.log("event.candidate",e.candidate),e.candidate&&Object(m.e)(Object(m.c)(n.db,"".concat(n.connectionId,"/host-candidate")),{value:JSON.stringify(e.candidate)})},n.setChannel(n.connection.createDataChannel("channel")),e.next=7,n.connection.createOffer();case 7:return t=e.sent,e.next=10,n.connection.setLocalDescription(t);case 10:return e.next=12,Object(m.e)(Object(m.c)(n.db,"".concat(n.connectionId,"/offer")),{value:JSON.stringify(t)});case 12:Object(m.b)(Object(m.c)(n.db,"".concat(n.connectionId,"/answer")),(function(e){if(n.connection&&e.exists()){var t=JSON.parse(e.val().value);n.connection.setRemoteDescription(t)}})),Object(m.b)(Object(m.c)(n.db,"".concat(n.connectionId,"/client-candidate")),(function(e){if(n.connection&&e.exists()){var t,c=JSON.parse(e.val().value);null===(t=n.connection)||void 0===t||t.addIceCandidate(new RTCIceCandidate(c)),n.setIsConnected(!0)}}));case 14:case"end":return e.stop()}}),e)}))),this.startClientSession=function(){var e=Object(j.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.connectionId=t,n.connection=new RTCPeerConnection(C),c=function(e){n.setChannel(e.channel)},n.connection.ondatachannel=c,n.connection.onicecandidate=function(e){console.log("event.candidate",e.candidate),e.candidate&&Object(m.e)(Object(m.c)(n.db,"".concat(n.connectionId,"/client-candidate")),{value:JSON.stringify(e.candidate)})},Object(m.b)(Object(m.c)(n.db,"".concat(n.connectionId,"/offer")),function(){var e=Object(j.a)(b.a.mark((function e(t){var c,a,r,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.connection||!t.exists()){e.next=12;break}return s=JSON.parse(t.val().value),e.next=4,null===(c=n.connection)||void 0===c?void 0:c.setRemoteDescription(s);case 4:return e.next=6,null===(a=n.connection)||void 0===a?void 0:a.createAnswer();case 6:return i=e.sent,e.next=9,null===(r=n.connection)||void 0===r?void 0:r.setLocalDescription(i);case 9:return e.next=11,Object(m.e)(Object(m.c)(n.db,"".concat(n.connectionId,"/answer")),{value:JSON.stringify(i)});case 11:Object(m.b)(Object(m.c)(n.db,"".concat(n.connectionId,"/host-candidate")),(function(e){if(e.exists()){var t,c=JSON.parse(e.val().value);null===(t=n.connection)||void 0===t||t.addIceCandidate(new RTCIceCandidate(c)),n.setIsConnected(!0)}}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.setChannel=function(e){n.channel=e,n.channel.onmessage=function(e){var t=JSON.parse(e.data);console.log("got data by channel",t),n.handleMessage(t)},n.channel.onclose=function(){var e;null===(e=n.channel)||void 0===e||e.send("Data Channel closed"),n.rootStore.gameStore.resetGame()},n.channel.onerror=function(e){console.log("Data Channel Error:",e)},n.channel.onopen=function(){var e;null===(e=n.channel)||void 0===e||e.send("Data Channel open")}},this.sendMessage=function(e){var t;null===(t=n.channel)||void 0===t||t.send(JSON.stringify(e))},this.closeConnection=function(){var e,t;Object(m.d)(Object(m.c)(n.db,"".concat(n.connectionId))),null===(e=n.channel)||void 0===e||e.close(),null===(t=n.connection)||void 0===t||t.close(),n.channel=null,n.connection=null,n.connectionId=null,n.isConnected=!1},this.handleMessage=function(e){switch(e.type){case c.START_GAME:n.rootStore.gameStore.startGame();break;case c.START_BATTLE:n.rootStore.gameStore.startBattle(e.exercise);break;case c.FINISH_EXERCISE:n.rootStore.gameStore.saveBattleResult({secondsLeft:e.secondsLeft,lifesLeft:e.lifesLeft},!0);break;case c.END_GAME:n.rootStore.gameStore.endGame();break;case c.REQUEST_RESTART:n.rootStore.gameStore.saveRestartRequest()}},Object(h.e)(this,{connectionId:h.f,isConnected:h.f,setIsConnected:h.b,closeConnection:h.b}),this.rootStore=a;var r=Object(v.a)(O);this.db=Object(m.a)(r)},y=n(5);!function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(p||(p={})),function(e){e.HOST="host",e.CLIENT="client"}(x||(x={}));var I,T=(w={},Object(y.a)(w,p.EASY,[{word:"\u043d\u0430\u0440\u043e\u0434",soundSrc:"/",imageSrc:"/"},{word:"\u0441\u043b\u0435\u0432\u0430",soundSrc:"/",imageSrc:"/"},{word:"\u0445\u0430\u043b\u0430\u0442",soundSrc:"/",imageSrc:"/"},{word:"\u0440\u0435\u043a\u043e\u0440\u0434",soundSrc:"/",imageSrc:"/"},{word:"\u0432\u043e\u043a\u0440\u0443\u0433",soundSrc:"/",imageSrc:"/"},{word:"\u043f\u0430\u043a\u0433\u0430\u0443\u0437",soundSrc:"/",imageSrc:"/"},{word:"\u0434\u0430\u0432\u0438\u0442\u044c",soundSrc:"/",imageSrc:"/"},{word:"\u043d\u0430\u043b\u0435\u0432\u043e",soundSrc:"/",imageSrc:"/"},{word:"\u0433\u0430\u0440\u0430\u0436",soundSrc:"/",imageSrc:"/"},{word:"\u043e\u043f\u0443\u0448\u043a\u0430",soundSrc:"/",imageSrc:"/"},{word:"\u0430\u0434\u044a\u044e\u043d\u043a\u0442",soundSrc:"/",imageSrc:"/"},{word:"\u0430\u0440\u0445\u0430\u0438\u0437\u043c",soundSrc:"/",imageSrc:"/"},{word:"\u0430\u043a\u043a\u043e\u0440\u0434",soundSrc:"/",imageSrc:"/"},{word:"\u043e\u0437\u043e\u043d",soundSrc:"/",imageSrc:"/"},{word:"\u043a\u043e\u0440\u0437\u0438\u043d\u0430",soundSrc:"/",imageSrc:"/"}]),Object(y.a)(w,p.MEDIUM,[{word:"\u043d\u043e\u044f\u0431\u0440\u044c",soundSrc:"/",imageSrc:"/"},{word:"\u043f\u0438\u0442\u043e\u043c\u0435\u0446",soundSrc:"/",imageSrc:"/"},{word:"\u043a\u043e\u043b\u043e\u0441\u0441",soundSrc:"/",imageSrc:"/"},{word:"\u0441\u0443\u0432\u0435\u043d\u0438\u0440",soundSrc:"/",imageSrc:"/"},{word:"\u043c\u044f\u0442\u0435\u0436",soundSrc:"/",imageSrc:"/"},{word:"\u0436\u044e\u0440\u0438",soundSrc:"/",imageSrc:"/"},{word:"\u044d\u0442\u0438\u043a\u0435\u0442",soundSrc:"/",imageSrc:"/"},{word:"\u0432\u0438\u0442\u044f\u0437\u044c",soundSrc:"/",imageSrc:"/"},{word:"\u0434\u0438\u043f\u043b\u043e\u043c",soundSrc:"/",imageSrc:"/"},{word:"\u043a\u0438\u043f\u044f\u0442\u043e\u043a",soundSrc:"/",imageSrc:"/"},{word:"\u0432\u0442\u0440\u043e\u0439\u043d\u0435",soundSrc:"/",imageSrc:"/"},{word:"\u0441\u043a\u0430\u043d\u0435\u0440",soundSrc:"/",imageSrc:"/"},{word:"\u043e\u0433\u0443\u0440\u0435\u0446",soundSrc:"/",imageSrc:"/"},{word:"\u043f\u0448\u0435\u043d\u0438\u0446\u0430",soundSrc:"/",imageSrc:"/"},{word:"\u043f\u0430\u043d\u0446\u0438\u0440\u044c",soundSrc:"/",imageSrc:"/"}]),Object(y.a)(w,p.HARD,[{word:"\u0431\u0430\u0433\u0430\u0436",soundSrc:"/",imageSrc:"/"},{word:"\u043c\u0430\u0441\u0441\u0430\u0436",soundSrc:"/",imageSrc:"/"},{word:"\u0432\u0431\u0440\u043e\u0434",soundSrc:"/",imageSrc:"/"},{word:"\u0434\u043e\u043d\u044b\u043d\u0435",soundSrc:"/",imageSrc:"/"},{word:"\u043f\u043e\u0440\u0442\u0440\u0435\u0442",soundSrc:"/",imageSrc:"/"},{word:"\u0441\u0435\u0430\u043d\u0441",soundSrc:"/",imageSrc:"/"},{word:"\u043e\u0441\u0438\u043d\u0430",soundSrc:"/",imageSrc:"/"},{word:"\u043b\u0430\u0434\u043e\u0448\u0438",soundSrc:"/",imageSrc:"/"},{word:"\u0430\u043c\u043f\u043b\u0443\u0430",soundSrc:"/",imageSrc:"/"},{word:"\u0438\u043d\u0442\u0435\u0440\u0435\u0441",soundSrc:"/",imageSrc:"/"},{word:"\u0431\u0430\u043b\u0435\u0442",soundSrc:"/",imageSrc:"/"},{word:"\u043f\u0440\u0435\u0441\u0442\u043e\u043b",soundSrc:"/",imageSrc:"/"},{word:"\u0449\u0435\u043a\u043e\u043b\u0434\u0430",soundSrc:"/",imageSrc:"/"},{word:"\u043f\u0440\u0438\u043c\u0435\u0440",soundSrc:"/",imageSrc:"/"},{word:"\u043c\u0435\u0431\u0435\u043b\u044c",soundSrc:"/",imageSrc:"/"}]),w),E=function e(t){var n=this,a=t.rootStore;Object(l.a)(this,e),this.difficulty=p.EASY,this.playerType=x.HOST,this.gameId="",this.rootStore=void 0,this.isGameStarted=!1,this.isGameEnded=!1,this.heroScore=0,this.rivalScore=0,this.exercises=[],this.currentBattleIndex=0,this.heroBattleResult=void 0,this.rivalBattleResult=void 0,this.setDifficulty=function(e){n.difficulty=e},this.setPlayerType=function(e){n.playerType=e},this.setScore=function(e,t){n.heroScore=e,n.rivalScore=t},this.getExercises=function(){n.exercises=function(e){for(var t=Object(S.a)(e),n=t.length-1;n>0;n--){var c=Math.floor(Math.random()*(n+1)),a=[t[c],t[n]];t[n]=a[0],t[c]=a[1]}return t}(T[n.difficulty]).slice(0,10),console.log("this.exercises",n.exercises)},this.startGame=function(){n.getExercises(),n.setScore(0,0),n.isGameStarted=!0,n.rootStore.pageStore.changePage("battle"),n.playerType===x.HOST&&n.startBattle()},this.startBattle=function(e){if(n.rivalBattleResult=null,n.heroBattleResult=null,e)n.rootStore.battleStore.startBattle(e);else{var t=n.exercises[n.currentBattleIndex];n.rootStore.connectionStore.sendMessage({type:c.START_BATTLE,exercise:t}),n.rootStore.battleStore.startBattle(t)}},this.addScores=function(){var e,t,c,a,r,s,i,o;n.heroScore+=100*(null!==(e=null===(t=n.heroBattleResult)||void 0===t?void 0:t.lifesLeft)&&void 0!==e?e:0)+100*(null!==(c=null===(a=n.heroBattleResult)||void 0===a?void 0:a.secondsLeft)&&void 0!==c?c:0),n.rivalScore+=100*(null!==(r=null===(s=n.rivalBattleResult)||void 0===s?void 0:s.lifesLeft)&&void 0!==r?r:0)+100*(null!==(i=null===(o=n.rivalBattleResult)||void 0===o?void 0:o.secondsLeft)&&void 0!==i?i:0)},this.saveBattleResult=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?(n.rivalBattleResult=e,n.heroBattleResult&&n.endBattle()):(n.rootStore.connectionStore.sendMessage(Object(u.a)({type:c.FINISH_EXERCISE},e)),n.heroBattleResult=e,n.rivalBattleResult&&n.endBattle())},this.endGame=function(){n.isGameEnded=!0,n.rootStore.pageStore.changePage("battleInfo")},this.endBattle=function(){n.currentBattleIndex++,n.currentBattleIndex>=10&&n.playerType===x.HOST&&(n.rootStore.connectionStore.sendMessage({type:c.END_GAME}),n.endGame())},this.saveRestartRequest=function(){},this.resetGame=function(){n.rootStore.pageStore.changePage("mainMenu"),n.rootStore.connectionStore.closeConnection(),n.gameId=""},Object(h.e)(this,{difficulty:h.f,playerType:h.f,gameId:h.f,isGameStarted:h.f,isGameEnded:h.f,heroScore:h.f,rivalScore:h.f,heroBattleResult:h.f,rivalBattleResult:h.f,setDifficulty:h.b,setPlayerType:h.b,setScore:h.b,getExercises:h.b,startGame:h.b,startBattle:h.b,addScores:h.b,saveBattleResult:h.b,endGame:h.b,endBattle:h.b,saveRestartRequest:h.b,resetGame:h.b}),this.rootStore=a,this.heroBattleResult=null,this.rivalBattleResult=null},L=function e(){var t=this;Object(l.a)(this,e),this.activePageName="mainMenu",this.changePage=function(e){t.activePageName=e},Object(h.e)(this,{activePageName:h.f,changePage:h.b})},R=function e(){var t=this;Object(l.a)(this,e),this.exerciseData=void 0,this.counterLife=void 0,this.listLetter=void 0,this.isMistake=void 0,this.isPlayingSound=void 0,this.isCorrectAnswer=void 0,this.activeLetter=void 0,this.setActiveLetter=function(e){t.activeLetter=e},this.getMistake=function(){return t.isMistake},this.setPlayingSound=function(e){t.isPlayingSound=e},this.setMistake=function(e){t.isMistake=e},this.getListLetter=function(){return t.listLetter},this.setLetter=function(e){t.setActiveLetter(e),t.checkMistake(t.checkLetter(e)),t.getMistake()||(t.listLetter.push(e),t.setActiveLetter(""),t.checkWord())},this.checkWord=function(){t.listLetter.length===t.exerciseData.word.length&&t.endBattle()},this.checkMistake=function(e){t.setMistake(e)},this.checkLetter=function(e){return t.exerciseData.word.indexOf(e)!==t.listLetter.length},this.startBattle=function(e){console.log("exercise",e)},this.endBattle=function(){t.isCorrectAnswer=!0},Object(h.e)(this,{counterLife:h.f,listLetter:h.f,isMistake:h.f,activeLetter:h.f,isPlayingSound:h.f,isCorrectAnswer:h.f,setLetter:h.b,setMistake:h.b,setActiveLetter:h.b,setPlayingSound:h.b}),this.counterLife=3,this.listLetter=["\u0433","\u0435"],this.isMistake=!1,this.activeLetter="",this.isPlayingSound=!1,this.isCorrectAnswer=!1,this.exerciseData={word:"\u0433\u0435\u043f\u0430\u0440\u0434",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_12/2.12._urok_5.3.mp3",imageSrc:"https://mirplaneta.ru/images/6/1214.jpg"}},B=function e(){Object(l.a)(this,e),this.pageStore=void 0,this.gameStore=void 0,this.connectionStore=void 0,this.battleStore=void 0,this.pageStore=new L,this.gameStore=new E({rootStore:this}),this.connectionStore=new N({rootStore:this}),this.battleStore=new R},k=Object(d.createContext)({}),A=function(){return Object(d.useContext)(k)},M=(n(44),n(45),n(12)),P=(n(46),Object(o.a)((function(){var e=Object(d.useState)(""),t=Object(M.a)(e,2),n=t[0],c=t[1],a=Object(d.useState)(!1),r=Object(M.a)(a,2),i=r[0],o=r[1],l=A(),u=l.pageStore,h=l.connectionStore,S=h.isConnected,f=function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,h.startClientSession(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){S&&u.changePage("battleInfo")}),[S]),Object(s.jsxs)("div",{className:"connectionForm",children:[i?"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435...":Object(s.jsxs)("div",{className:"formWrapper",children:["\u0412\u0435\u0434\u0438 \u043a\u043e\u0434 \u0438\u0433\u0440\u044b:",Object(s.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)}}),Object(s.jsx)(U,{handleClick:function(){return f()},text:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f"})]}),Object(s.jsx)(q,{})]})}))),D=(n(47),Object(o.a)((function(){var e=A(),t=e.gameStore,n=e.connectionStore,c=n.isConnected,a=n.connectionId,r=t.playerType;return Object(s.jsxs)("div",{className:"battleInfo",children:[r===x.HOST&&Object(s.jsxs)("div",{className:"battleCode",children:["\u041a\u043e\u0434 \u0438\u0433\u0440\u044b: ",a,". \u041e\u0442\u043f\u0440\u0430\u0432\u044c \u0435\u0433\u043e \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0443 \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f."]}),Object(s.jsx)("div",{className:"fighter hero"}),Object(s.jsx)("div",{className:"versus",children:"VS"}),c?Object(s.jsx)("div",{className:"fighter rival"}):"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0430...",Object(s.jsx)(q,{}),c&&r===x.HOST&&Object(s.jsx)(Q,{type:"game"})]})}))),G=n(33),_=n.n(G),H=n(16),J=n.n(H),F=(n(55),{mainMenu:function(){var e=A(),t=e.gameStore,n=e.pageStore,c=e.connectionStore;return Object(s.jsx)("div",{className:"mainPage",children:Object(s.jsxs)("div",{className:"wrapperButton",children:[Object(s.jsx)(U,{handleClick:function(){t.setPlayerType(x.HOST),n.changePage("difficultyChoice"),c.startHostSession()},text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0431\u0438\u0442\u0432\u0443"}),Object(s.jsx)(U,{handleClick:function(){t.setPlayerType(x.CLIENT),n.changePage("connectionForm")},text:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043a \u0431\u0438\u0442\u0432\u0435"})]})})},difficultyChoice:function(){var e=A(),t=e.gameStore,n=e.pageStore;return Object(s.jsxs)("div",{className:"difficultyPage",children:[Object(s.jsx)("div",{className:"wrapperButton",children:Object.values(p).map((function(e){return Object(s.jsx)(U,{handleClick:function(){return function(e){t.setDifficulty(e),n.changePage("battleInfo")}(e)},text:e},e)}))}),Object(s.jsx)(q,{})]})},connectionForm:P,battleInfo:D,battle:Object(o.a)((function(){var e=A(),t=e.battleStore,n=e.gameStore,c=t.counterLife,a=t.exerciseData,r=t.isPlayingSound,i=t.isCorrectAnswer,o=n.playerType,l=n.heroScore,u=n.rivalScore,h=n.heroBattleResult,S=n.rivalBattleResult,f=t.getListLetter(),b={backgroundImage:a.imageSrc},j=h&&S,v=Object(d.useState)(!1),m=Object(M.a)(v,2),g=m[0],O=m[1];Object(d.useEffect)((function(){t.setPlayingSound(!0)}),[]),Object(d.useEffect)((function(){O(!0)}),[a]);var p=J()("exercise",{correctAnswer:i});return Object(s.jsxs)("div",{className:"pageBattle",children:[Object(s.jsxs)("div",{className:"headerWrapper",children:[Object(s.jsxs)("div",{className:"leftContainer characterInfoContainer",children:[Object(s.jsxs)("div",{className:"topLine",children:[Object(s.jsx)("div",{className:"avatar"}),Object(s.jsxs)("div",{className:"nameContainer",children:[Object(s.jsx)("div",{className:"nickname",children:"\u0422\u044b"}),Object(s.jsx)(Y,{count:c})]})]}),Object(s.jsxs)("div",{className:"glassesWrapper",children:[Object(s.jsx)("span",{className:"glassesTitle",children:"\u041e\u0447\u043a\u0438:"}),Object(s.jsx)("span",{className:"glassesNumber",children:l})]})]}),Object(s.jsx)("div",{className:"centerContainer",children:"0:12"}),Object(s.jsxs)("div",{className:"rightContainer characterInfoContainer",children:[Object(s.jsxs)("div",{className:"topLine",children:[Object(s.jsx)("div",{className:"avatar"}),Object(s.jsx)("div",{className:"nameContainer",children:Object(s.jsx)("div",{className:"nickname",children:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a"})})]}),Object(s.jsxs)("div",{className:"glassesWrapper",children:[Object(s.jsx)("span",{className:"glassesNumber",children:u}),Object(s.jsx)("span",{className:"glassesTitle",children:":\u041e\u0447\u043a\u0438"})]})]})]}),g?Object(s.jsx)(Z,{callback:function(){O(!1)}}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"exerciseContainer",children:Object(s.jsxs)("div",{className:p,children:[Object(s.jsxs)("div",{className:"imageExercise",style:b,onClick:function(){t.setPlayingSound(!0)},children:[Object(s.jsx)(_.a,{src:a.soundSrc,playing:r,onEnd:function(){t.setPlayingSound(!1)}}),Object(s.jsx)("div",{className:"soundIcon"})]}),Object(s.jsx)(K,{letters:f,isCorrectAnswer:i})]})}),Object(s.jsx)("div",{className:"keyBoardWrapper",children:Object(s.jsx)("div",{className:"keyBoardContainer",children:Object(s.jsx)("div",{className:"keyBoardItem"})})})]}),o===x.HOST&&j&&Object(s.jsx)(Q,{type:"battle"})]})}))}),W=Object(o.a)((function(){var e=A().pageStore,t=F[e.activePageName];return Object(s.jsx)(t,{})}));n(56);!function(e){e.MAIN_MENU="mainMenu",e.START_GAME="startGame"}(I||(I={}));var U=function(e){var t=e.type,n=e.handleClick,c=e.text;return Object(s.jsx)("div",{className:J()("button",t),onClick:n,children:c})},q=function(){var e=A().gameStore;return Object(s.jsx)(U,{type:I.MAIN_MENU,handleClick:function(){return e.resetGame()},text:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})},Q=function(e){var t=e.type,n=A(),a=n.gameStore,r=n.connectionStore,i=a.isGameEnded;return Object(s.jsx)(U,{type:I.START_GAME,handleClick:function(){switch(t){case"game":r.sendMessage({type:c.START_GAME}),a.startGame();break;case"battle":a.startBattle()}},text:function(){switch(t){case"game":return i?"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430":"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443";case"battle":return"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0441\u043b\u043e\u0432\u043e";default:return""}}()})},X=(n(57),function(e){var t=e.isDisabled,n=J()("lifeElement",{disabledElem:t});return Object(s.jsx)("div",{className:n})}),Y=(n(58),function(e){for(var t=e.count,n=[],c=1;c<4;c++)c<t?n.push(Object(s.jsx)(X,{isDisabled:!1},"lifeItem_".concat(c))):n.push(Object(s.jsx)(X,{isDisabled:!0},"lifeItem_".concat(c)));return Object(s.jsx)("div",{className:"lifeList",children:n})}),z=(n(59),function(e){var t=e.letter;return Object(s.jsx)("div",{className:"letterAnswer",children:t})}),K=(n(60),Object(o.a)((function(e){var t=e.letters,n=e.isCorrectAnswer,c=[];for(var a in t)c.push(Object(s.jsx)(z,{letter:t[a]},"LetterAnswer_".concat(a)));return Object(s.jsxs)("div",{className:"wordAnswer",children:[c,!n&&Object(s.jsx)(V,{})]})}))),V=(n(61),Object(o.a)((function(){var e=A().battleStore,t=e.activeLetter,n=e.getMistake(),c=J()("inputLetterContainer",{hide:!1,mistake:n});return Object(s.jsx)("div",{className:c,children:Object(s.jsx)("input",{type:"text",className:"inputLetter",autoFocus:!0,maxLength:1,onChange:function(t){var n=t.target.value;n.length>1&&(t.target.value=n[0]),e.setLetter(n)},value:t})})}))),Z=(n(62),function(e){var t=e.callback,n=Object(d.useState)(3),c=Object(M.a)(n,2),a=c[0],r=c[1];return Object(d.useEffect)((function(){0===a?t():window.setTimeout((function(){r(a-1)}),1e3)}),[a]),Object(s.jsx)("div",{className:"countdown",children:a})});n(63);function $(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(i,{children:Object(s.jsx)(W,{})})})}var ee;n(66),n(64);!function(){var e=new B;window.DEBUG_STORE=e,r.a.render(Object(s.jsx)(k.Provider,{value:e,children:Object(s.jsx)($,{})}),document.getElementById("root"))}(),ee&&ee instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(ee),n(ee),c(ee),a(ee),r(ee)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.88a81d9c.chunk.js.map