(this["webpackJsonpspelling-game-p2p"]=this["webpackJsonpspelling-game-p2p"]||[]).push([[0],{40:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s,i=n(26),a=n.n(i),c=(n(40),n(1)),r=function(e){var t=e.children;return Object(c.jsx)("div",{className:"globalWrapper",children:t})},o=n(13),d=n(2),l=n(6),u=n(31),h=n(4),m=n(18),j=n(9),f=n.n(j),g=n(14),v=n(32),b=n(11),p=n(35),S={apiKey:"AIzaSyCfIbQmfN8ZWunC13zhJyDoQ1aL34mKvHI",authDomain:"react-p2p-test.firebaseapp.com",databaseURL:"https://react-p2p-test-default-rtdb.europe-west1.firebasedatabase.app",projectId:"react-p2p-test",storageBucket:"react-p2p-test.appspot.com",messagingSenderId:"54650620648",appId:"1:54650620648:web:a3a8bc21fd8bcd4782975d"};!function(e){e.START_GAME="start-game",e.START_BATTLE="start-battle",e.REDUCE_LIFES="reduce-lifes",e.FINISH_EXERCISE="finish-exercise",e.END_GAME="end-game",e.REQUEST_RESTART="request-restart",e.GIVE_UP="give-up"}(s||(s={}));var O,_,x,R={iceServers:[{urls:"stun:stun2.1.google.com:19302"}]},N=function e(t){var n=this,i=t.rootStore;Object(d.a)(this,e),this.db=void 0,this.connectionId=null,this.connection=null,this.channel=null,this.isConnected=!1,this.rootStore=void 0,this.setIsConnected=function(e){n.isConnected=e},this.startHostSession=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.connection=new RTCPeerConnection(R),n.connectionId=Object(p.a)(5),n.connection.oniceconnectionstatechange=function(){var e;"disconnected"===(null===(e=n.connection)||void 0===e?void 0:e.iceConnectionState)&&n.rootStore.gameStore.abortGame()},n.connection.onicecandidate=function(e){e.candidate&&Object(b.e)(Object(b.c)(n.db,"".concat(n.connectionId,"/host-candidate")),{value:JSON.stringify(e.candidate)})},n.setChannel(n.connection.createDataChannel("channel")),e.next=7,n.connection.createOffer();case 7:return t=e.sent,e.next=10,n.connection.setLocalDescription(t);case 10:return e.next=12,Object(b.e)(Object(b.c)(n.db,"".concat(n.connectionId,"/offer")),{value:JSON.stringify(t)});case 12:Object(b.b)(Object(b.c)(n.db,"".concat(n.connectionId,"/answer")),(function(e){if(n.connection&&e.exists()){var t=JSON.parse(e.val().value);n.connection.setRemoteDescription(t)}})),Object(b.b)(Object(b.c)(n.db,"".concat(n.connectionId,"/client-candidate")),(function(e){if(n.connection&&e.exists()){var t,s=JSON.parse(e.val().value);null===(t=n.connection)||void 0===t||t.addIceCandidate(new RTCIceCandidate(s)),n.setIsConnected(!0)}}));case 14:case"end":return e.stop()}}),e)}))),this.startClientSession=function(){var e=Object(g.a)(f.a.mark((function e(t){var s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.connectionId=t,n.connection=new RTCPeerConnection(R),s=function(e){n.setChannel(e.channel)},n.connection.ondatachannel=s,n.connection.onicecandidate=function(e){e.candidate&&Object(b.e)(Object(b.c)(n.db,"".concat(n.connectionId,"/client-candidate")),{value:JSON.stringify(e.candidate)})},Object(b.b)(Object(b.c)(n.db,"".concat(n.connectionId,"/offer")),function(){var e=Object(g.a)(f.a.mark((function e(t){var s,i,a,c,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.connection||!t.exists()){e.next=12;break}return c=JSON.parse(t.val().value),e.next=4,null===(s=n.connection)||void 0===s?void 0:s.setRemoteDescription(c);case 4:return e.next=6,null===(i=n.connection)||void 0===i?void 0:i.createAnswer();case 6:return r=e.sent,e.next=9,null===(a=n.connection)||void 0===a?void 0:a.setLocalDescription(r);case 9:return e.next=11,Object(b.e)(Object(b.c)(n.db,"".concat(n.connectionId,"/answer")),{value:JSON.stringify(r)});case 11:Object(b.b)(Object(b.c)(n.db,"".concat(n.connectionId,"/host-candidate")),(function(e){if(e.exists()){var t,s=JSON.parse(e.val().value);null===(t=n.connection)||void 0===t||t.addIceCandidate(new RTCIceCandidate(s)),n.setIsConnected(!0)}}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.setChannel=function(e){n.channel=e,n.channel.onmessage=function(e){var t=JSON.parse(e.data);console.log("got data by channel",t),n.handleMessage(t)},n.channel.onclose=function(){n.rootStore.gameStore.abortGame()}},this.sendMessage=function(e){var t;null===(t=n.channel)||void 0===t||t.send(JSON.stringify(e))},this.closeConnection=function(){var e,t;Object(b.d)(Object(b.c)(n.db,"".concat(n.connectionId))),null===(e=n.channel)||void 0===e||e.close(),null===(t=n.connection)||void 0===t||t.close(),n.channel=null,n.connection=null,n.connectionId=null,n.isConnected=!1},this.handleMessage=function(e){switch(e.type){case s.START_GAME:n.rootStore.gameStore.startGame();break;case s.START_BATTLE:n.rootStore.gameStore.startBattle(e.exercise);break;case s.REDUCE_LIFES:n.rootStore.gameStore.reduceRivalLifes();break;case s.FINISH_EXERCISE:n.rootStore.gameStore.saveBattleResult({secondsLeft:e.secondsLeft,lifesLeft:e.lifesLeft},!0);break;case s.END_GAME:n.rootStore.gameStore.endGame();break;case s.REQUEST_RESTART:n.rootStore.gameStore.saveRestartRequest(!0);break;case s.GIVE_UP:n.rootStore.gameStore.giveUp(!0)}},Object(h.e)(this,{connectionId:h.f,isConnected:h.f,setIsConnected:h.b,closeConnection:h.b}),this.rootStore=i;var a=Object(v.a)(S);this.db=Object(b.a)(a)},L=n(5);!function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(O||(O={})),function(e){e.HOST="host",e.CLIENT="client"}(_||(_={}));var k,w=(x={},Object(L.a)(x,O.EASY,[{word:"\u0440\u043e\u043c\u0430\u0448\u043a\u0430",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_10/2.10_urok_3.4.mp3",imageSrc:"../..//romashka.jpg"},{word:"\u0441\u0430\u043c\u043e\u043b\u0435\u0442",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_9/2.9_urok_5.3.mp3",imageSrc:"../..//samolet.jpg"},{word:"\u0430\u043f\u0435\u043b\u044c\u0441\u0438\u043d",soundSrc:" https://cms-content.uchi.ru/audios/reading/lesson_2_11/2.11_urok_5.2.1.mp3",imageSrc:"../..//apelsin.jpg"},{word:"\u0430\u043a\u0443\u043b\u0430",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_7/2.7_UROK_1.8.mp3",imageSrc:"../..//akula.jpg"},{word:"\u0441\u043e\u0431\u0430\u043a\u0430",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_9/2.9_urok_2.6.mp3",imageSrc:"../..//sobaka.jpg"},{word:"\u043e\u0431\u0435\u0437\u044c\u044f\u043d\u0430",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_11/2.11_urok_1.7.mp3",imageSrc:"../..//obezana.jpg"},{word:"\u043b\u044f\u0433\u0443\u0448\u043a\u0430",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_11/2.11_urok_1.5.mp3",imageSrc:"../..//lagushka.jpg"},{word:"\u043f\u043e\u043c\u0438\u0434\u043e\u0440",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_11/2.11_urok_2.6.mp3",imageSrc:"../..//pomidor.jpg"},{word:"\u0441\u0442\u0440\u0435\u043a\u043e\u0437\u0430",soundSrc:" https://cms-content.uchi.ru/audios/reading/lesson_2_10/2.10_urok_1.2.mp3",imageSrc:"../..//strekoza.jpg"},{word:"\u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_10/2.10_urok_1.4.mp3",imageSrc:"../..//tciplenok.jpg"}]),Object(L.a)(x,O.MEDIUM,[{word:"\u0433\u0443\u0441\u0435\u043d\u0438\u0446\u0430",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_10/2.10_urok_1.6.mp3",imageSrc:"../..//gusenica.jpg"},{word:"\u0431\u0430\u043d\u0430\u043d",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_10/2.10_urok_2.5.mp3",imageSrc:"../..//banan.jpg"},{word:"\u0431\u043e\u0447\u043a\u0430",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_10/2.10_urok_4.7.mp3",imageSrc:"../..//bochka.jpg"},{word:"\u043a\u043e\u0440\u043e\u0432\u0430",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_9/2.9_urok_2.5.mp3",imageSrc:"../..//corowa.jpg"},{word:"\u043b\u0438\u043b\u0438\u044f",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_10/2.10_urok_3.5.mp3",imageSrc:"../..//lilia.jpg"},{word:"\u0431\u0430\u043a\u043b\u0430\u0436\u0430\u043d",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_11/2.11_urok_5.4.mp3",imageSrc:"../..//baklajan.jpg"},{word:"\u0440\u0430\u043a\u0435\u0442\u0430",soundSrc:" https://cms-content.uchi.ru/audios/reading/lesson_2_9/2.9_urok_5.9.mp3",imageSrc:"../..//raketa.jpg"},{word:"\u0434\u0435\u043b\u044c\u0444\u0438\u043d",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_1_9/D/1.9_urok_d6.7.mp3",imageSrc:"https../..//delfin.jpg"},{word:"\u0437\u0435\u0431\u0440\u0430",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_1_13/1.13_urok_%20YUE2.4.mp3",imageSrc:"https../..//zebra.jpg"},{word:"\u0444\u043e\u043d\u0430\u0440\u0438\u043a",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_11/2.11_urok_3.5.mp3",imageSrc:"../..//fonarik.jpg"}]),Object(L.a)(x,O.HARD,[{word:"\u043f\u0438\u0446\u0446\u0430",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_1_10/1.10_urok_z6.7.mp3",imageSrc:"../..//picca.jpg"},{word:"\u0441\u043b\u043e\u043d",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_1_10/1.10_ZS_1.2.mp3",imageSrc:"../..//slon.jpg"},{word:"\u0437\u043e\u043d\u0442",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_1_10/1.10_ZS_1.4.mp3",imageSrc:"../..//zont.jpg"},{word:"\u043b\u043e\u0434\u043a\u0430",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_8/2.8_urok_1.6.mp3",imageSrc:"../..//lodka.jpg"},{word:"\u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044c",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_11/2.11_urok_5.3.1.mp3",imageSrc:"../..//kartofel.jpg"},{word:"\u043b\u0438\u043c\u043e\u043d",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_7/2.7_UROK_3.10.mp3",imageSrc:"../..//limon.jpeg"},{word:"\u043a\u0430\u043b\u044c\u043c\u0430\u0440",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_7/2.7_UROK_5.2.mp3",imageSrc:"../..//kalmar.jpg"},{word:"\u043e\u0447\u043a\u0438",soundSrc:" https://cms-content.uchi.ru/audios/reading/lesson_2_6/2.6_urok3.6.mp3",imageSrc:"../..//ochki.jpg"},{word:"\u0442\u0443\u0444\u043b\u0438",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_2_6/2.6_urok5.7.mp3",imageSrc:"../..//tufli.jpg"},{word:"\u0434\u044f\u0442\u0435\u043b",soundSrc:"https://cms-content.uchi.ru/audios/reading/lesson_1_9/D/1.9_urok_d6.6.mp3",imageSrc:"../..//datel.jpg"}]),x),I=function e(t){var n=this,i=t.rootStore;Object(d.a)(this,e),this.START_LIFES_AMOUNT=3,this.REWARD_FOR_SECOND=100,this.REWARD_FOR_LIFE=100,this.difficulty=O.EASY,this.playerType=_.HOST,this.gameId="",this.rootStore=void 0,this.isGameStarted=!1,this.isGameEnded=!1,this.heroScore=0,this.rivalScore=0,this.exercises=[],this.currentBattleIndex=0,this.heroBattleResult=void 0,this.rivalBattleResult=void 0,this.hasRivalRequestedRestart=!1,this.hasHeroRequestedRestart=!1,this.rivalLifesAmount=3,this.setDifficulty=function(e){n.difficulty=e},this.setPlayerType=function(e){n.playerType=e},this.setScore=function(e,t){n.heroScore=e,n.rivalScore=t},this.getExercises=function(){n.exercises=function(e){for(var t=Object(m.a)(e),n=t.length-1;n>0;n--){var s=Math.floor(Math.random()*(n+1)),i=[t[s],t[n]];t[n]=i[0],t[s]=i[1]}return t}(w[n.difficulty]).slice(0,10)},this.startGame=function(){n.setScore(0,0),n.currentBattleIndex=0,n.hasRivalRequestedRestart=!1,n.hasHeroRequestedRestart=!1,n.rivalLifesAmount=n.START_LIFES_AMOUNT,n.rootStore.pageStore.changePage("battle"),n.playerType===_.HOST&&(n.rootStore.connectionStore.sendMessage({type:s.START_GAME}),n.getExercises(),n.startBattle())},this.startBattle=function(e){if(n.rivalBattleResult=null,n.heroBattleResult=null,n.isGameStarted=!0,e)n.rootStore.battleStore.startBattle(e);else{var t=n.exercises[n.currentBattleIndex];n.rootStore.connectionStore.sendMessage({type:s.START_BATTLE,exercise:t}),n.rootStore.battleStore.startBattle(t)}},this.addScores=function(){var e,t,s,i;n.heroScore+=(null===(e=n.heroBattleResult)||void 0===e?void 0:e.lifesLeft)&&(null===(t=n.heroBattleResult)||void 0===t?void 0:t.secondsLeft)?100*n.heroBattleResult.lifesLeft+100*n.heroBattleResult.secondsLeft:0,n.rivalScore+=(null===(s=n.rivalBattleResult)||void 0===s?void 0:s.lifesLeft)&&(null===(i=n.rivalBattleResult)||void 0===i?void 0:i.secondsLeft)?100*n.rivalBattleResult.lifesLeft+100*n.rivalBattleResult.secondsLeft:0},this.saveBattleResult=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?(n.rivalBattleResult=e,n.heroBattleResult&&n.endBattle()):(n.rootStore.connectionStore.sendMessage(Object(u.a)({type:s.FINISH_EXERCISE},e)),n.heroBattleResult=e,n.rivalBattleResult&&n.endBattle())},this.endGame=function(){n.isGameEnded=!0,n.rootStore.pageStore.changePage("battleInfo")},this.endBattle=function(){n.currentBattleIndex++,n.addScores(),n.currentBattleIndex>=10&&n.playerType===_.HOST&&(n.rootStore.connectionStore.sendMessage({type:s.END_GAME}),n.endGame())},this.saveRestartRequest=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?n.hasRivalRequestedRestart=!0:(n.hasHeroRequestedRestart=!0,n.rootStore.connectionStore.sendMessage({type:s.REQUEST_RESTART})),n.hasHeroRequestedRestart&&n.hasRivalRequestedRestart&&n.playerType===_.HOST&&n.startGame()},this.reduceRivalLifes=function(){n.rivalLifesAmount--},this.abortGame=function(){n.rootStore.pageStore.changePage("mainMenu"),n.rootStore.connectionStore.closeConnection(),n.gameId=""},this.giveUp=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?n.rivalScore=-1:(n.heroScore=-1,n.rootStore.connectionStore.sendMessage({type:s.GIVE_UP})),n.endGame()},Object(h.e)(this,{difficulty:h.f,playerType:h.f,gameId:h.f,isGameStarted:h.f,isGameEnded:h.f,heroScore:h.f,rivalScore:h.f,heroBattleResult:h.f,rivalBattleResult:h.f,hasRivalRequestedRestart:h.f,hasHeroRequestedRestart:h.f,rivalLifesAmount:h.f,setDifficulty:h.b,setPlayerType:h.b,setScore:h.b,getExercises:h.b,startGame:h.b,startBattle:h.b,addScores:h.b,saveBattleResult:h.b,endGame:h.b,endBattle:h.b,saveRestartRequest:h.b,reduceRivalLifes:h.b,abortGame:h.b,giveUp:h.b}),this.rootStore=i,this.heroBattleResult=null,this.rivalBattleResult=null},T=function e(){var t=this;Object(d.a)(this,e),this.activePageName="mainMenu",this.changePage=function(e){t.activePageName=e},Object(h.e)(this,{activePageName:h.f,changePage:h.b})},E=function e(t){var n=this,i=t.rootStore;Object(d.a)(this,e),this.exerciseData=null,this.rootStore=void 0,this.counterLife=void 0,this.listLetter=void 0,this.isMistake=void 0,this.isPlayingSound=void 0,this.isCorrectAnswer=void 0,this.activeLetter=void 0,this.counterTimer=void 0,this.timerId=void 0,this.deadline=void 0,this.losing=void 0,this.startBattle=function(e){n.counterTimer=20,n.listLetter=[],n.counterLife=n.rootStore.gameStore.START_LIFES_AMOUNT,n.timerId=0,n.deadline="20",n.exerciseData=e,n.isMistake=!1,n.activeLetter="",n.isPlayingSound=!1,n.isCorrectAnswer=!1,n.losing=!1},this.updateTimer=function(){n.counterTimer-=1,n.deadline="".concat(n.counterTimer),n.counterTimer<10&&(n.deadline="0".concat(n.counterTimer)),0===n.counterTimer&&n.limitDeadline()},this.timer=function(){n.timerId=window.setInterval(n.updateTimer,1e3)},this.startTimer=function(){n.timer()},this.limitDeadline=function(){n.losing=!0,n.addLetters(),n.endBattle()},this.setActiveLetter=function(e){n.activeLetter=e},this.getMistake=function(){return n.isMistake},this.setPlayingSound=function(e){n.isPlayingSound=e},this.setMistake=function(e){n.isMistake=e},this.getListLetter=function(){return n.listLetter},this.setLetter=function(e){if(n.setActiveLetter(e),n.checkMistake(n.checkLetter(e)),n.isMistake)return n.counterLife-=1,n.rootStore.connectionStore.sendMessage({type:s.REDUCE_LIFES}),void n.checkCountLife();n.listLetter.push(e),n.setActiveLetter(""),n.checkWord()},this.checkCountLife=function(){0===n.counterLife&&(n.losing=!0,n.addLetters(),n.endBattle())},this.checkWord=function(){var e;n.listLetter.length===(null===(e=n.exerciseData)||void 0===e?void 0:e.word.length)&&n.endBattle()},this.checkMistake=function(e){n.setMistake(e)},this.checkLetter=function(e){var t,s=n.listLetter.length;return(null===(t=n.exerciseData)||void 0===t?void 0:t.word[s])!==e},this.addLetters=function(){var e,t=n.listLetter.length,s=null===(e=n.exerciseData)||void 0===e?void 0:e.word,i=null===s||void 0===s?void 0:s.slice(t);null===i||void 0===i||i.split("").map((function(e){return n.listLetter.push(e)}))},this.endBattle=function(){n.losing||(n.isCorrectAnswer=!0),clearInterval(n.timerId);var e={secondsLeft:n.counterTimer,lifesLeft:n.counterLife};n.rootStore.gameStore.saveBattleResult(e)},Object(h.e)(this,{counterLife:h.f,listLetter:h.f,isMistake:h.f,activeLetter:h.f,isPlayingSound:h.f,isCorrectAnswer:h.f,counterTimer:h.f,timerId:h.f,deadline:h.f,exerciseData:h.f,losing:h.f,setLetter:h.b,setMistake:h.b,setActiveLetter:h.b,setPlayingSound:h.b,timer:h.b,updateTimer:h.b,startBattle:h.b,endBattle:h.b}),this.rootStore=i,this.counterLife=this.rootStore.gameStore.START_LIFES_AMOUNT,this.listLetter=[],this.isMistake=!1,this.activeLetter="",this.isPlayingSound=!1,this.isCorrectAnswer=!1,this.counterTimer=20,this.timerId=0,this.deadline="20",this.losing=!1},y=function e(){Object(d.a)(this,e),this.pageStore=void 0,this.gameStore=void 0,this.connectionStore=void 0,this.battleStore=void 0,this.pageStore=new T,this.gameStore=new I({rootStore:this}),this.connectionStore=new N({rootStore:this}),this.battleStore=new E({rootStore:this})},C=Object(l.createContext)({}),A=function(){return Object(l.useContext)(C)},B=(n(44),n(45),n(12)),M=(n(46),Object(o.a)((function(){var e=Object(l.useState)(""),t=Object(B.a)(e,2),n=t[0],s=t[1],i=Object(l.useState)(!1),a=Object(B.a)(i,2),r=a[0],o=a[1],d=A(),u=d.pageStore,h=d.connectionStore,m=h.isConnected,j=function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,h.startClientSession(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){m&&u.changePage("battleInfo")}),[m]),Object(c.jsxs)("div",{className:"connectionForm",children:[r?"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435...":Object(c.jsxs)("form",{className:"formWrapper",onSubmit:j,children:["\u0412\u0432\u0435\u0434\u0438 \u043a\u043e\u0434 \u0438\u0433\u0440\u044b:",Object(c.jsx)("input",{value:n,onChange:function(e){return s(e.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434",className:"input"}),Object(c.jsx)("input",{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f",type:"submit",className:"button"})]}),Object(c.jsx)(J,{})]})}))),W=(n(47),Object(o.a)((function(){var e=A(),t=e.gameStore,n=e.connectionStore,s=n.isConnected,i=n.connectionId,a=t.playerType,r=t.isGameEnded,o=t.hasHeroRequestedRestart,d=t.heroScore,l=t.rivalScore,u=!1,h=!1,m=!1;d>l&&(u=!0),l>d&&(h=!0),l===d&&(m=!0);var j=o?Object(c.jsx)("div",{className:"waiting",children:"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430"}):Object(c.jsx)(z,{type:"game"});return Object(c.jsxs)("div",{className:"battleInfo",children:[a===_.HOST&&!s&&Object(c.jsxs)("div",{className:"battleCode",children:["\u041a\u043e\u0434 \u0438\u0433\u0440\u044b: ",i,". \u041e\u0442\u043f\u0440\u0430\u0432\u044c \u0435\u0433\u043e \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0443 \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f."]}),Object(c.jsxs)("div",{className:"fighter hero",children:[Object(c.jsx)("div",{className:"avatarHero"}),r&&Object(c.jsxs)("div",{className:"counterResult",children:[d," ",Object(c.jsx)("span",{children:"\u043e\u0447\u043a\u043e\u0432"})]}),r&&u&&Object(c.jsx)("div",{className:"cup"})]}),Object(c.jsxs)("div",{className:"versus",children:["VS",r&&m&&Object(c.jsx)("div",{className:"deadHeat"})]}),s?Object(c.jsxs)("div",{className:"fighter rival",children:[Object(c.jsx)("div",{className:"avatarRival"}),r&&Object(c.jsxs)("div",{className:"counterResult",children:[l," ",Object(c.jsx)("span",{children:"\u043e\u0447\u043a\u043e\u0432"})]}),r&&h&&Object(c.jsx)("div",{className:"cup"})]}):"\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0430...",Object(c.jsx)(J,{}),a===_.HOST&&s&&j,a===_.CLIENT&&r&&j]})}))),D=n(33),P=n.n(D),G=n(16),F=n.n(G),U=(n(55),{mainMenu:function(){var e=A(),t=e.gameStore,n=e.pageStore,s=e.connectionStore;return Object(c.jsxs)("div",{className:"mainPage",children:[Object(c.jsx)("div",{className:"titlePage",children:"\u0421\u043b\u043e\u0432\u0430\u0440\u043d\u0430\u044f \u0431\u0438\u0442\u0432\u0430"}),Object(c.jsxs)("div",{className:"wrapperButton",children:[Object(c.jsx)(q,{handleClick:function(){t.setPlayerType(_.HOST),n.changePage("difficultyChoice"),s.startHostSession()},text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0431\u0438\u0442\u0432\u0443"}),Object(c.jsx)(q,{handleClick:function(){t.setPlayerType(_.CLIENT),n.changePage("connectionForm")},text:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0441\u044f \u043a \u0431\u0438\u0442\u0432\u0435"})]})]})},difficultyChoice:function(){var e,t=A(),n=t.gameStore,s=t.pageStore,i=(e={},Object(L.a)(e,O.EASY,"\u041b\u0435\u0433\u043a\u0438\u0439"),Object(L.a)(e,O.MEDIUM,"\u0421\u0440\u0435\u0434\u043d\u0438\u0439"),Object(L.a)(e,O.HARD,"\u0422\u044f\u0436\u0451\u043b\u044b\u0439"),e);return Object(c.jsxs)("div",{className:"difficultyPage",children:[Object(c.jsx)("div",{className:"titlePage",children:"\u0412\u044b\u0431\u043e\u0440 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438"}),Object(c.jsx)("div",{className:"wrapperButton",children:Object.values(O).map((function(e){return Object(c.jsx)(q,{handleClick:function(){return function(e){n.setDifficulty(e),s.changePage("battleInfo")}(e)},text:i[e]},e)}))}),Object(c.jsx)(J,{})]})},connectionForm:M,battleInfo:W,battle:Object(o.a)((function(){var e=A(),t=e.battleStore,n=e.gameStore,s=t.counterLife,i=t.exerciseData,a=t.isPlayingSound,r=t.isCorrectAnswer,o=t.deadline,d=t.losing,u=n.playerType,m=n.heroBattleResult,j=n.rivalBattleResult,f=n.rivalLifesAmount,g=t.getListLetter(),v={backgroundImage:"url(".concat(null===i||void 0===i?void 0:i.imageSrc,")")},b=m&&j,p=Object(l.useState)(!1),S=Object(B.a)(p,2),O=S[0],x=S[1];Object(l.useEffect)((function(){x(!0),console.log(Object(h.h)(i))}),[i]);var R=F()("exercise",{correctAnswer:r,losing:d});return Object(c.jsxs)("div",{className:"pageBattle",children:[Object(c.jsxs)("div",{className:"headerWrapper",children:[Object(c.jsxs)("div",{className:"leftContainer characterInfoContainer",children:[Object(c.jsxs)("div",{className:"topLine",children:[Object(c.jsx)("div",{className:"avatar"}),Object(c.jsxs)("div",{className:"nameContainer",children:[Object(c.jsx)("div",{className:"nickname",children:"\u0422\u044b"}),Object(c.jsx)(Q,{count:s})]})]}),Object(c.jsx)($,{})]}),Object(c.jsx)("div",{className:"centerContainer",children:"0:".concat(o)}),Object(c.jsxs)("div",{className:"rightContainer characterInfoContainer",children:[Object(c.jsxs)("div",{className:"topLine",children:[Object(c.jsx)("div",{className:"avatar"}),Object(c.jsxs)("div",{className:"nameContainer",children:[Object(c.jsx)("div",{className:"nickname",children:"\u0421\u043e\u043f\u0435\u0440\u043d\u0438\u043a"}),Object(c.jsx)(Q,{count:f})]})]}),Object(c.jsx)($,{isRival:!0})]})]}),b?Object(c.jsxs)("div",{className:"battleResultWrapper",children:[Object(c.jsx)(ee,{}),Object(c.jsx)(ee,{isRival:!0})]}):O?Object(c.jsx)(Z,{callback:function(){x(!1),t.setPlayingSound(!0),t.startTimer()}}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"exerciseContainer",children:Object(c.jsxs)("div",{className:R,children:[Object(c.jsxs)("div",{className:"imageExercise",style:v,onClick:function(){t.setPlayingSound(!0)},children:[i&&Object(c.jsx)(P.a,{src:i.soundSrc,playing:a,onEnd:function(){t.setPlayingSound(!1)},format:["mp3"]}),Object(c.jsx)("div",{className:"soundIcon"})]}),Object(c.jsx)(V,{letters:g,isCorrectAnswer:r,losing:d})]})}),Object(c.jsx)("div",{className:"keyBoardWrapper",children:Object(c.jsx)("div",{className:"keyBoardContainer",children:Object(c.jsx)("div",{className:"keyBoardItem"})})}),Object(c.jsx)(J,{})]}),u===_.HOST&&b&&Object(c.jsx)(z,{type:"battle"})]})}))}),H=Object(o.a)((function(){var e=A().pageStore,t=U[e.activePageName];return Object(c.jsx)(t,{})}));n(56);!function(e){e.MAIN_MENU="mainMenu",e.START_GAME="startGame"}(k||(k={}));var q=function(e){var t=e.type,n=e.handleClick,s=e.text;return Object(c.jsx)("div",{className:F()("button",t),onClick:n,children:s})},J=function(){var e=A().gameStore,t=e.isGameStarted,n=e.isGameEnded,s=t&&!n;return Object(c.jsx)(q,{type:k.MAIN_MENU,handleClick:function(){return s?e.giveUp():e.abortGame()},text:s?"\u0421\u0434\u0430\u0442\u044c\u0441\u044f":"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})},z=function(e){var t=e.type,n=A().gameStore,s=n.isGameEnded;return Object(c.jsx)(q,{type:k.START_GAME,handleClick:function(){switch(t){case"game":s?n.saveRestartRequest():n.startGame();break;case"battle":n.startBattle()}},text:function(){switch(t){case"game":return s?"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430":"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443";case"battle":return"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0441\u043b\u043e\u0432\u043e";default:return""}}()})},K=(n(57),function(e){var t=e.isDisabled,n=F()("lifeElement",{disabledElem:t});return Object(c.jsx)("div",{className:n})}),Q=(n(58),Object(o.a)((function(e){for(var t=e.count,n=[],s=1;s<4;s++)s<=t?n.push(Object(c.jsx)(K,{isDisabled:!1},"lifeItem_".concat(s))):n.push(Object(c.jsx)(K,{isDisabled:!0},"lifeItem_".concat(s)));return Object(c.jsx)("div",{className:"lifeList",children:n})}))),Y=(n(59),function(e){var t=e.letter;return Object(c.jsx)("div",{className:"letterAnswer",children:t})}),V=(n(60),Object(o.a)((function(e){var t=e.letters,n=e.isCorrectAnswer,s=e.losing;return Object(c.jsxs)("div",{className:"wordAnswer",children:[t.map((function(e,t){return Object(c.jsx)(Y,{letter:e},"LetterAnswer_".concat(t))})),!n&&!s&&Object(c.jsx)(X,{})]})}))),X=(n(61),Object(o.a)((function(){var e=A().battleStore,t=e.activeLetter,n=e.getMistake(),s=F()("inputLetterContainer",{hide:!1,mistake:n});return Object(c.jsx)("div",{className:s,children:Object(c.jsx)("input",{type:"text",className:"inputLetter",autoFocus:!0,maxLength:1,onChange:function(t){var n=t.currentTarget.value;n.length>1&&e.setActiveLetter(""),""!==n?e.setLetter(n):e.setActiveLetter("")},value:t})})}))),Z=(n(62),function(e){var t=e.callback,n=Object(l.useState)(3),s=Object(B.a)(n,2),i=s[0],a=s[1];return Object(l.useEffect)((function(){0===i?t():window.setTimeout((function(){a(i-1)}),1e3)}),[i]),Object(c.jsx)("div",{className:"countdown",children:i})}),$=(n(63),function(e){var t=e.isRival,n=void 0!==t&&t,s=A().gameStore,i=n?s.rivalScore:s.heroScore,a=Object(l.useRef)(i),r=Object(l.useState)(i),o=Object(B.a)(r,2),d=o[0],u=o[1],h=Object(l.useRef)(0),m=function(){var e=Object(g.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0,n=function e(n){t||(t=n);var s=Math.min((n-t)/500,1);u(Math.floor(a.current+s*(i-a.current))),s<1?h.current=window.requestAnimationFrame(e):a.current=i},h.current=window.requestAnimationFrame(n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){window.cancelAnimationFrame(h.current),m()}),[i]),Object(c.jsxs)("div",{className:"scoreWrapper",children:[Object(c.jsx)("div",{className:"scoreNumber",children:d}),Object(c.jsx)("div",{className:"starWrapper",children:Object(c.jsx)("div",{className:"star"})})]})}),ee=(n(64),function(e){var t,n=e.isRival,s=void 0!==n&&n,i=A().gameStore,a=i.REWARD_FOR_LIFE,r=i.REWARD_FOR_SECOND,o=s?i.rivalBattleResult:i.heroBattleResult,d=o.lifesLeft*a,l=o.secondsLeft*r,u=d&&l?d+l:0;return Object(c.jsxs)("div",{className:"battleResult",children:[u>0&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"scoreWrapper life",children:[Object(c.jsx)("div",{className:"scoreImage",children:(t=o.lifesLeft,Array.from({length:t},(function(e,t){return t}))).map((function(e){return Object(c.jsx)("div",{className:"icon"},e)}))}),"* ",a," = ",d]}),Object(c.jsxs)("div",{className:"scoreWrapper time",children:[Object(c.jsxs)("div",{className:"scoreImage",children:[Object(c.jsx)("div",{className:"icon"})," 0:",String(o.secondsLeft).padStart(2,"0")]}),"* ",r," = ",l]})]}),Object(c.jsxs)("div",{className:"scoreWrapper score",children:[Object(c.jsx)("div",{className:"scoreImage",children:Object(c.jsx)("div",{className:"icon"})})," ","+",u]})]})});n(65);function te(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(r,{children:Object(c.jsx)(H,{})})})}var ne;n(68),n(66);!function(){var e=new y;window.DEBUG_STORE=e,a.a.render(Object(c.jsx)(C.Provider,{value:e,children:Object(c.jsx)(te,{})}),document.getElementById("root"))}(),ne&&ne instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(e){var t=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,a=e.getTTFB;t(ne),n(ne),s(ne),i(ne),a(ne)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.0afcf6d5.chunk.js.map