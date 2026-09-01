<!DOCTYPE html>
<html lang="km">
<head>
<meta charset="UTF-8">

<meta name="viewport"
      content="width=device-width,
      initial-scale=1.0,
      maximum-scale=1.0,
      user-scalable=no">

<title>Chat</title>

<style>

/* =====================================================
                     GLOBAL
===================================================== */

*{
  box-sizing:border-box;
  -webkit-tap-highlight-color:transparent;
}

:root{
  --sky:#8fdcf4;
  --sky2:#eafaff;
  --card:rgba(255,255,255,.94);
  --text:#173944;
  --muted:#718993;
  --primary:#1498dc;
  --soft:#e4f6fb;
  --border:#cfe3e9;
  --danger:#e35d6a;

  --chatGreen:#dcefc9;
  --chatGreen2:#eef8dc;
  --chatBubble:#ffffff;
}

body.dark{
  --sky:#102c36;
  --sky2:#193e4a;
  --card:rgba(25,49,58,.96);
  --text:#eefcff;
  --muted:#a9c1c9;
  --primary:#32b3ee;
  --soft:#244b58;
  --border:#42636d;

  --chatGreen:#27493f;
  --chatGreen2:#1d3e37;
  --chatBubble:#29454a;
}

html,
body{
  width:100%;
  height:100%;
  margin:0;
  overflow:hidden;

  font-family:
    Arial,
    "Noto Sans Khmer",
    sans-serif;
}

body{
  background:var(--sky);
  color:var(--text);
}

button,
input,
textarea,
select{
  font:inherit;
}

button{
  cursor:pointer;
}

.app{
  position:relative;

  width:100%;
  max-width:520px;
  height:100dvh;

  margin:auto;
  overflow:hidden;

  background:
    radial-gradient(
      circle at 12% 7%,
      rgba(255,255,255,.78),
      transparent 27%
    ),
    radial-gradient(
      circle at 90% 15%,
      rgba(255,255,255,.55),
      transparent 28%
    ),
    linear-gradient(
      180deg,
      var(--sky),
      var(--sky2)
    );
}


/* =====================================================
                       SCREENS
===================================================== */

.screen{
  position:absolute;
  inset:0;

  display:none;

  overflow-y:auto;

  padding:14px 14px 105px;
}

.screen.active{
  display:block;
}


/* =====================================================
                       COMMON
===================================================== */

.topbar{
  min-height:52px;

  display:flex;
  align-items:center;
  gap:10px;

  margin-bottom:10px;
}

.topbar h1{
  flex:1;
  margin:0;
  font-size:25px;
}

.icon{
  width:44px;
  height:44px;

  border:0;
  border-radius:14px;

  background:var(--card);
  color:var(--text);

  font-size:20px;

  box-shadow:
    0 5px 18px
    rgba(20,80,100,.12);
}

.card{
  background:var(--card);

  border:1px solid
    rgba(255,255,255,.7);

  border-radius:20px;

  padding:14px;
  margin-bottom:11px;

  box-shadow:
    0 6px 22px
    rgba(20,80,100,.10);
}

.input,
.select,
.textarea{
  width:100%;

  border:1px solid var(--border);

  border-radius:14px;

  background:var(--card);
  color:var(--text);

  outline:none;

  padding:12px 14px;
  margin-bottom:9px;
}

.input{
  height:48px;
}

.textarea{
  min-height:110px;
  resize:none;
}

.primary{
  width:100%;
  height:49px;

  border:0;
  border-radius:14px;

  background:var(--primary);
  color:white;

  font-weight:bold;
}

.secondary{
  width:100%;
  height:47px;

  border:0;
  border-radius:14px;

  background:var(--soft);
  color:var(--text);

  margin-top:8px;
}

.muted{
  color:var(--muted);
}

.hidden{
  display:none!important;
}


/* =====================================================
                         SIGN UP
===================================================== */

#signup{
  padding:25px 18px;
}

.brand{
  text-align:center;
  padding:20px 0;
}

.brandIcon{
  font-size:58px;
}

.brand h1{
  margin:8px 0 4px;
  font-size:31px;
}

.brand p{
  margin:0;
}

.step{
  font-size:13px;
  color:var(--muted);
}

.otp{
  display:flex;
  gap:6px;
}

.otp input{
  width:0;
  flex:1;

  height:54px;

  text-align:center;

  border:1px solid var(--border);
  border-radius:12px;

  background:var(--card);
  color:var(--text);

  font-size:22px;
  outline:none;
}


/* =====================================================
                           HOME
===================================================== */

.homeSearch{
  display:none;
  margin-bottom:12px;
}

.newsHeading{
  font-size:19px;
  font-weight:bold;
  margin:12px 3px 9px;
}

.newsCard{
  padding:0;
  overflow:hidden;
}

.newsImage{
  height:185px;

  display:flex;
  justify-content:center;
  align-items:center;

  font-size:72px;

  background:
    linear-gradient(
      135deg,
      #d4f3fb,
      #8bcfe8
    );
}

.newsBody{
  padding:14px;
}

.newsTitle{
  font-size:18px;
  line-height:1.4;
  font-weight:bold;
}

.newsMeta{
  color:var(--muted);
  font-size:13px;
  margin-top:6px;
}

.newsText{
  color:var(--muted);
  font-size:14px;
  line-height:1.6;
  margin-top:8px;
}

.article{
  display:none;
}

.article.show{
  display:block;
}

.articleImage{
  height:235px;

  border-radius:21px;

  display:flex;
  align-items:center;
  justify-content:center;

  font-size:85px;

  background:var(--soft);
}

.article h1{
  font-size:24px;
  line-height:1.4;
}

.articleContent{
  line-height:1.85;
  font-size:16px;
}


/* =====================================================
                          CHATS
===================================================== */

.chat{
  display:flex;
  align-items:center;
  gap:12px;
}

.chatAvatar{
  width:56px;
  height:56px;

  flex-shrink:0;

  border-radius:50%;

  display:flex;
  align-items:center;
  justify-content:center;

  background:
    linear-gradient(
      135deg,
      #729af6,
      #625de0
    );

  color:white;

  font-weight:bold;
  font-size:20px;

  box-shadow:
    0 3px 10px
    rgba(50,70,150,.18);
}

.chatInfo{
  flex:1;
  min-width:0;
}

.chatInfo b,
.chatInfo small{
  display:block;
}

.chatInfo small{
  color:var(--muted);
  margin-top:5px;
}


/* =====================================================
                    CHAT DETAIL SCREEN
===================================================== */

/*
   ទម្រង់នេះធ្វើតាមរូបដែលអ្នកផ្ញើ
*/

#chatDetail{
  padding:0;

  overflow:hidden;

  background:
    linear-gradient(
      135deg,
      #a8d9a2 0%,
      #e5ed9b 45%,
      #83c5b2 100%
    );
}


/* Chat background */

.chatWindow{
  position:relative;

  width:100%;
  height:100%;

  overflow:hidden;

  background:
    radial-gradient(
      circle at 10% 15%,
      rgba(90,170,100,.20),
      transparent 28%
    ),
    radial-gradient(
      circle at 88% 20%,
      rgba(255,255,255,.25),
      transparent 25%
    ),
    radial-gradient(
      circle at 40% 60%,
      rgba(220,240,130,.28),
      transparent 32%
    ),
    linear-gradient(
      135deg,
      var(--chatGreen),
      var(--chatGreen2)
    );
}


/*
  Pattern ស្រាលៗ
  ដើម្បីឲ្យមានអារម្មណ៍ដូច Telegram
*/

.chatWindow:before{
  content:"";

  position:absolute;
  inset:0;

  opacity:.13;

  background-image:
    radial-gradient(
      circle,
      rgba(50,100,50,.35) 1px,
      transparent 1.5px
    );

  background-size:25px 25px;

  pointer-events:none;
}


/* =====================================================
                       CHAT HEADER
===================================================== */

.chatHeader{
  position:absolute;

  z-index:20;

  top:0;
  left:0;
  right:0;

  height:82px;

  display:flex;
  align-items:center;

  padding:
    11px
    14px
    8px;

  gap:9px;

  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,.38),
      rgba(255,255,255,.10)
    );

  backdrop-filter:blur(7px);
}


/* Back button */

.chatBack{
  width:53px;
  height:53px;

  flex-shrink:0;

  border:0;
  border-radius:50%;

  background:
    rgba(255,255,255,.82);

  color:#111;

  font-size:34px;

  display:flex;
  align-items:center;
  justify-content:center;

  box-shadow:
    0 4px 15px
    rgba(0,0,0,.08);
}


/* Center name */

.chatHeaderName{
  flex:1;

  min-width:0;

  height:57px;

  display:flex;
  align-items:center;
  justify-content:center;

  flex-direction:column;

  background:
    rgba(255,255,255,.88);

  border-radius:32px;

  padding:4px 15px;

  color:#111;

  box-shadow:
    0 4px 18px
    rgba(0,0,0,.08);

  cursor:pointer;
}

.chatHeaderName strong{
  font-size:22px;

  line-height:1.1;

  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;

  max-width:100%;
}

.chatHeaderName small{
  font-size:14px;

  color:#718078;

  margin-top:3px;
}


/* Profile on right */

.chatProfile{
  width:58px;
  height:58px;

  flex-shrink:0;

  border:4px solid
    rgba(255,255,255,.85);

  border-radius:50%;

  background:
    linear-gradient(
      135deg,
      #7da8fa,
      #655ce5
    );

  color:white;

  display:flex;
  align-items:center;
  justify-content:center;

  font-size:24px;
  font-weight:bold;

  box-shadow:
    0 3px 13px
    rgba(50,70,150,.25);

  cursor:pointer;
}


/* =====================================================
                     CHAT MESSAGES
===================================================== */

.messages{
  position:absolute;

  z-index:3;

  top:82px;
  left:0;
  right:0;
  bottom:83px;

  overflow-y:auto;

  padding:
    18px
    13px
    20px;

  display:flex;
  flex-direction:column;

  justify-content:flex-end;

  gap:7px;
}


/* date */

.chatDate{
  align-self:center;

  background:
    rgba(70,110,65,.60);

  color:white;

  padding:
    6px
    13px;

  border-radius:15px;

  font-weight:bold;

  font-size:13px;

  margin-bottom:5px;
}


/* joined */

.joined{
  align-self:center;

  background:
    rgba(78,120,65,.58);

  color:white;

  padding:
    7px
    13px;

  border-radius:16px;

  font-weight:bold;

  font-size:14px;

  text-align:center;
}


/* message bubble */

.messageRow{
  display:flex;
  width:100%;
}

.messageRow.mine{
  justify-content:flex-end;
}

.messageBubble{
  max-width:78%;

  padding:
    9px
    12px;

  border-radius:17px;

  background:
    var(--chatBubble);

  color:#203238;

  box-shadow:
    0 2px 5px
    rgba(0,0,0,.07);

  font-size:15px;

  line-height:1.45;
}

.messageRow.mine
.messageBubble{
  background:
    #d9ffc9;
}


/* =====================================================
                      CHAT INPUT
===================================================== */

.chatInputBar{
  position:absolute;

  z-index:30;

  left:0;
  right:0;
  bottom:0;

  height:82px;

  display:flex;
  align-items:center;

  gap:8px;

  padding:
    10px
    12px;

  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,.05),
      rgba(255,255,255,.28)
    );

  backdrop-filter:blur(8px);
}


/* Attachment */

.attachButton{
  width:54px;
  height:54px;

  flex-shrink:0;

  border:0;
  border-radius:50%;

  background:
    rgba(255,255,255,.90);

  color:#111;

  font-size:30px;

  transform:rotate(-20deg);
}


/* message field */

.messageField{
  flex:1;

  min-width:0;

  height:55px;

  border:0;

  outline:none;

  border-radius:28px;

  padding:
    0
    18px;

  background:
    rgba(255,255,255,.86);

  color:#26363a;

  font-size:18px;
}

.messageField::placeholder{
  color:#8d9694;
}


/* Right microphone */

.micButton{
  width:55px;
  height:55px;

  flex-shrink:0;

  border:0;
  border-radius:50%;

  background:
    rgba(255,255,255,.88);

  color:#111;

  font-size:28px;
}


/* send */

.sendButton{
  display:none;

  width:55px;
  height:55px;

  flex-shrink:0;

  border:0;
  border-radius:50%;

  background:
    var(--primary);

  color:white;

  font-size:24px;
}


/* =====================================================
                FRIEND PROFILE / CALL PANEL
===================================================== */

.friendPanel{
  position:absolute;

  z-index:100;

  inset:0;

  display:none;

  align-items:flex-end;

  background:
    rgba(0,0,0,.30);
}

.friendPanel.show{
  display:flex;
}

.friendSheet{
  width:100%;

  max-height:88%;

  overflow-y:auto;

  padding:
    18px
    16px
    25px;

  background:
    var(--sky2);

  border-radius:
    28px
    28px
    0
    0;

  color:var(--text);

  animation:
    sheetUp .22s ease;
}

@keyframes sheetUp{
  from{
    transform:translateY(100%);
  }

  to{
    transform:translateY(0);
  }
}

.friendHandle{
  width:45px;
  height:5px;

  border-radius:10px;

  background:#9eb9c2;

  margin:
    0 auto
    16px;
}

.friendLargeAvatar{
  width:105px;
  height:105px;

  margin:auto;

  border-radius:50%;

  display:flex;
  align-items:center;
  justify-content:center;

  background:
    linear-gradient(
      135deg,
      #7da8fa,
      #655ce5
    );

  color:white;

  font-size:43px;
  font-weight:bold;

  border:5px solid
    rgba(255,255,255,.85);

  box-shadow:
    0 7px 25px
    rgba(30,50,120,.20);
}

.friendName{
  text-align:center;

  font-size:25px;

  margin:
    11px
    0
    3px;
}

.friendStatus{
  text-align:center;

  color:var(--muted);

  margin-bottom:17px;
}


/* Call buttons */

.callActions{
  display:flex;

  gap:10px;

  margin-bottom:12px;
}

.callButton{
  flex:1;

  min-height:70px;

  border:0;

  border-radius:18px;

  background:
    var(--soft);

  color:var(--text);

  font-weight:bold;

  font-size:16px;
}

.callButton .callIcon{
  display:block;

  font-size:28px;

  margin-bottom:3px;
}

.callButton.call{
  background:#dff6e6;
  color:#1d8b50;
}

.callButton.video{
  background:#e3edff;
  color:#3567cf;
}

.closeFriend{
  width:100%;

  height:48px;

  border:0;

  border-radius:15px;

  background:
    var(--soft);

  color:var(--text);

  font-weight:bold;
}


/* =====================================================
                           MUSIC
===================================================== */

.musicHeader{
  height:52px;

  display:flex;
  align-items:center;

  margin-bottom:8px;
}

.musicHeader h1{
  flex:1;

  margin:0;

  font-size:25px;
}

.searchMusic{
  width:44px;
  height:44px;

  border:0;
  border-radius:14px;

  background:var(--card);
  color:var(--text);

  font-size:20px;
}

.musicSearchPanel{
  display:none;
  margin-bottom:10px;
}

.musicSearchPanel.show{
  display:block;
}

.sectionTitle{
  font-size:18px;
  font-weight:bold;

  margin:
    14px
    3px
    9px;
}

.song{
  display:flex;
  align-items:center;

  gap:11px;
}

.cover{
  width:65px;
  height:65px;

  flex-shrink:0;

  border-radius:17px;

  display:flex;
  align-items:center;
  justify-content:center;

  font-size:30px;

  background:var(--soft);
}

.songInfo{
  flex:1;
  min-width:0;
}

.songInfo b,
.songInfo small{
  display:block;
}

.songInfo b{
  white-space:nowrap;

  overflow:hidden;

  text-overflow:ellipsis;
}

.songInfo small{
  color:var(--muted);

  margin-top:5px;
}

.roundButton{
  width:42px;
  height:42px;

  border:0;
  border-radius:50%;

  background:var(--primary);

  color:white;
}


/* =====================================================
                    ARTIST / MEDIA
===================================================== */

.artistCard{
  display:flex;

  gap:12px;

  align-items:center;
}

.artistPhoto{
  width:72px;
  height:72px;

  border-radius:18px;

  display:flex;

  justify-content:center;
  align-items:center;

  background:var(--soft);

  font-size:35px;
}

.artistInfo{
  flex:1;
}

.artistInfo b,
.artistInfo small{
  display:block;
}

.artistInfo small{
  color:var(--muted);
  margin-top:5px;
}

.videoBox{
  height:190px;

  border-radius:18px;

  background:#142d36;

  color:white;

  display:flex;

  align-items:center;
  justify-content:center;

  font-size:60px;
}


/* =====================================================
                       MINI PLAYER
===================================================== */

.mini{
  position:absolute;

  z-index:40;

  left:9px;
  right:9px;

  bottom:82px;

  height:67px;

  display:none;

  align-items:center;

  gap:10px;

  padding:
    7px
    10px;

  border-radius:18px;

  background:var(--card);

  box-shadow:
    0 8px 30px
    rgba(20,70,90,.23);
}

.miniCover{
  width:52px;
  height:52px;

  flex-shrink:0;

  border-radius:13px;

  display:flex;

  justify-content:center;
  align-items:center;

  background:var(--soft);

  font-size:26px;
}

.miniInfo{
  flex:1;
  min-width:0;
}

.miniInfo b,
.miniInfo small{
  display:block;
}

.miniInfo b{
  white-space:nowrap;

  overflow:hidden;

  text-overflow:ellipsis;
}

.miniInfo small{
  color:var(--muted);

  margin-top:3px;

  white-space:nowrap;

  overflow:hidden;

  text-overflow:ellipsis;
}

.miniPlay{
  width:44px;
  height:44px;

  border:0;

  border-radius:50%;

  background:var(--primary);

  color:white;
}


/* =====================================================
                        FULL PLAYER
===================================================== */

.player{
  position:absolute;

  z-index:90;

  inset:0;

  display:none;

  background:
    rgba(10,40,50,.35);
}

.player.show{
  display:block;
}

.playerSheet{
  position:absolute;

  left:0;
  right:0;
  bottom:0;

  height:89%;

  padding:15px;

  background:var(--sky2);

  border-radius:
    28px
    28px
    0
    0;

  transform:translateY(100%);

  transition:.3s;
}

.player.show
.playerSheet{
  transform:translateY(0);
}

.handle{
  width:45px;
  height:5px;

  border-radius:10px;

  background:#9eb9c2;

  margin:
    0
    auto
    13px;
}

.closePlayer{
  position:absolute;

  right:14px;
  top:11px;

  width:42px;
  height:42px;

  border:0;

  border-radius:13px;

  background:var(--card);

  color:var(--text);
}

.bigCover{
  width:100%;
  height:285px;

  border-radius:24px;

  background:var(--soft);

  display:flex;

  align-items:center;
  justify-content:center;

  font-size:88px;
}

.playerTitle{
  text-align:center;

  margin:
    14px
    0
    4px;
}

.playerArtist{
  text-align:center;

  color:var(--muted);
}

.actions{
  display:flex;

  gap:9px;

  margin-top:18px;
}

.actions button{
  flex:1;

  height:45px;

  border:0;

  border-radius:14px;

  background:var(--soft);

  color:var(--text);

  font-size:18px;
}

.controls{
  display:flex;

  justify-content:center;
  align-items:center;

  gap:20px;

  margin-top:20px;
}

.controls button{
  width:51px;
  height:51px;

  border:0;

  border-radius:50%;

  background:var(--soft);

  color:var(--text);

  font-size:18px;
}

.controls .play{
  width:64px;
  height:64px;

  background:var(--primary);

  color:white;
}


/* =====================================================
                         SETTINGS
===================================================== */

.profile{
  text-align:center;
}

.profileAvatar{
  width:90px;
  height:90px;

  margin:auto;

  border-radius:50%;

  background:#183c49;

  color:white;

  display:flex;

  align-items:center;
  justify-content:center;

  font-size:38px;
}

.setting{
  display:flex;

  align-items:center;

  gap:10px;
}

.settingIcon{
  width:40px;

  text-align:center;

  font-size:22px;
}

.settingText{
  flex:1;
}

.settingText b,
.settingText small{
  display:block;
}

.settingText small{
  color:var(--muted);

  margin-top:4px;
}

.arrow{
  border:0;

  background:transparent;

  color:var(--text);

  font-size:21px;
}


/* =====================================================
                      OWNER SETTINGS
===================================================== */

.ownerBadge{
  border:1px solid #e4bd55;

  background:
    linear-gradient(
      135deg,
      rgba(255,235,145,.55),
      rgba(255,255,255,.85)
    );
}

.ownerTitle{
  font-weight:bold;
  font-size:18px;
}

.ownerOnly{
  display:none;
}

.ownerOnly.show{
  display:block;
}

.adminGrid{
  display:grid;

  grid-template-columns:
    1fr 1fr;

  gap:9px;
}

.adminButton{
  min-height:75px;

  border:0;

  border-radius:17px;

  background:var(--soft);

  color:var(--text);

  font-weight:bold;

  padding:10px;
}


/* =====================================================
                      BOTTOM NAV
===================================================== */

.bottomNav{
  position:absolute;

  z-index:45;

  left:9px;
  right:9px;
  bottom:8px;

  height:68px;

  display:none;

  background:var(--card);

  border-radius:22px;

  box-shadow:
    0 7px 27px
    rgba(20,70,90,.2);
}

.nav{
  flex:1;

  border:0;

  background:transparent;

  color:var(--muted);

  font-size:11px;

  font-weight:bold;
}

.nav span{
  display:block;

  font-size:23px;

  margin-bottom:2px;
}

.nav.active{
  color:var(--primary);
}


/* =====================================================
                          MODAL
===================================================== */

.modal{
  position:absolute;

  z-index:120;

  inset:0;

  display:none;

  align-items:flex-end;

  background:
    rgba(0,0,0,.32);
}

.modal.show{
  display:flex;
}

.modalBox{
  width:100%;

  max-height:90%;

  overflow-y:auto;

  padding:20px;

  background:var(--sky2);

  border-radius:
    25px
    25px
    0
    0;
}

.modalBox h2{
  margin-top:0;
}


/* =====================================================
                          TOAST
===================================================== */

.toast{
  position:absolute;

  z-index:200;

  left:50%;

  bottom:160px;

  transform:translateX(-50%);

  display:none;

  padding:
    10px
    16px;

  border-radius:13px;

  background:#183b49;

  color:white;

  white-space:nowrap;
}


/* =====================================================
                          UPLOAD
===================================================== */

.uploadBox{
  border:
    2px dashed
    #9fcbd8;

  border-radius:18px;

  padding:18px;

  text-align:center;

  margin-bottom:10px;
}

.uploadBox input{
  width:100%;
}


/* =====================================================
                          SWITCH
===================================================== */

.switch{
  position:relative;

  width:51px;
  height:29px;
}

.switch input{
  opacity:0;

  width:0;
  height:0;
}

.slider{
  position:absolute;

  inset:0;

  border-radius:30px;

  background:#b6cbd2;
}

.slider:before{
  content:"";

  position:absolute;

  width:21px;
  height:21px;

  left:4px;
  top:4px;

  border-radius:50%;

  background:white;

  transition:.2s;
}

.switch input:checked
+ .slider{
  background:var(--primary);
}

.switch input:checked
+ .slider:before{
  transform:translateX(22px);
}


/* =====================================================
                     CALL SCREEN
===================================================== */

.callOverlay{
  position:absolute;

  z-index:180;

  inset:0;

  display:none;

  flex-direction:column;

  align-items:center;
  justify-content:center;

  background:
    linear-gradient(
      180deg,
      #152e38,
      #08191e
    );

  color:white;

  text-align:center;
}

.callOverlay.show{
  display:flex;
}

.callAvatar{
  width:120px;
  height:120px;

  border-radius:50%;

  display:flex;
  align-items:center;
  justify-content:center;

  background:
    linear-gradient(
      135deg,
      #7da8fa,
      #655ce5
    );

  border:5px solid
    rgba(255,255,255,.8);

  font-size:48px;
  font-weight:bold;

  margin-bottom:18px;
}

.callName{
  font-size:26px;
  font-weight:bold;
}

.callType{
  color:#b7c8ce;

  margin-top:6px;
}

.callButtons{
  display:flex;

  gap:18px;

  margin-top:45px;
}

.callControl{
  width:62px;
  height:62px;

  border:0;

  border-radius:50%;

  background:
    rgba(255,255,255,.15);

  color:white;

  font-size:25px;
}

.endCall{
  background:#e4515e;
}


/* =====================================================
                       RESPONSIVE
===================================================== */

@media(max-width:390px){

  .chatHeader{
    padding-left:9px;
    padding-right:9px;
  }

  .chatBack{
    width:49px;
    height:49px;
  }

  .chatProfile{
    width:53px;
    height:53px;
  }

  .chatHeaderName strong{
    font-size:19px;
  }

  .chatHeaderName small{
    font-size:12px;
  }

}

</style>
</head>


<body>

<div class="app">


<!-- =====================================================
                         SIGN UP
===================================================== -->

<section
  id="signup"
  class="screen active">

  <div class="brand">

    <div class="brandIcon">
      💬
    </div>

    <h1>
      Chat
    </h1>

    <p class="muted">
      បង្កើតគណនីរបស់អ្នក
    </p>

  </div>


  <div class="card">

    <div
      id="signupStep"
      class="step">
      ជំហាន 1 / 5
    </div>

    <div
      id="signupContent">
    </div>

  </div>

</section>


<!-- =====================================================
                           HOME
===================================================== -->

<section
  id="home"
  class="screen">

  <div class="topbar">

    <h1>
      🏠 Home
    </h1>

    <button
      class="icon"
      onclick="toggleHomeSearch()">
      🔍
    </button>

  </div>


  <div
    id="homeSearch"
    class="homeSearch">

    <input
      id="newsSearch"
      class="input"
      placeholder="ស្វែងរកព័ត៌មាន..."
      oninput="renderNews()">

  </div>


  <div
    id="newsList">
  </div>


  <div
    id="article"
    class="article">

    <button
      class="icon"
      onclick="closeArticle()">
      ←
    </button>

    <div
      id="articleImage"
      class="articleImage">
      📰
    </div>

    <h1
      id="articleTitle">
    </h1>

    <div
      id="articleMeta"
      class="newsMeta">
    </div>

    <div
      id="articleContent"
      class="articleContent">
    </div>

  </div>

</section>


<!-- =====================================================
                           CHATS
===================================================== -->

<section
  id="chats"
  class="screen">

  <div class="topbar">

    <h1>
      💬 Chats
    </h1>

  </div>


  <input
    id="chatSearch"
    class="input"
    placeholder="ស្វែងរក Chat..."
    oninput="renderChats()">


  <div
    id="chatList">
  </div>

</section>


<!-- =====================================================
                    CHAT DETAIL
===================================================== -->

<section
  id="chatDetail"
  class="screen">

  <div
    class="chatWindow">


    <!-- ================= HEADER ================= -->

    <div class="chatHeader">

      <!-- Back -->

      <button
        class="chatBack"
        onclick="closeChatDetail()">
        ‹
      </button>


      <!-- Name center -->

      <div
        class="chatHeaderName"
        onclick="openFriendPanel()">

        <strong
          id="detailName">
          Chau Cheo
        </strong>

        <small
          id="detailStatus">
          last seen 28/08/26
        </small>

      </div>


      <!-- Profile right -->

      <button
        id="detailAvatar"
        class="chatProfile"
        onclick="openFriendPanel()">
        C
      </button>

    </div>


    <!-- ================= MESSAGES ================= -->

    <div
      id="messages"
      class="messages">

      <div class="chatDate">
        April 3
      </div>

      <div class="joined">
        Chau Cheo joined Chat
      </div>

    </div>


    <!-- ================= INPUT ================= -->

    <div class="chatInputBar">

      <button
        class="attachButton"
        onclick="showToast('📎 Attachment')">
        📎
      </button>


      <input
        id="messageInput"
        class="messageField"
        placeholder="Message"
        autocomplete="off">


      <button
        id="micButton"
        class="micButton"
        onclick="showToast('🎙️ Voice message')">
        🎙️
      </button>


      <button
        id="sendButton"
        class="sendButton"
        onclick="sendMessage()">
        ➤
      </button>

    </div>

  </div>

</section>


<!-- =====================================================
               FRIEND PROFILE + CALL PANEL
===================================================== -->

<div
  id="friendPanel"
  class="friendPanel">

  <div class="friendSheet">

    <div class="friendHandle">
    </div>


    <div
      id="friendLargeAvatar"
      class="friendLargeAvatar">
      C
    </div>


    <h2
      id="friendName"
      class="friendName">
      Chau Cheo
    </h2>


    <div
      id="friendStatus"
      class="friendStatus">
      last seen 28/08/26
    </div>


    <!-- CALL + VIDEO -->

    <div class="callActions">

      <button
        class="callButton call"
        onclick="startCall(false)">

        <span
          class="callIcon">
          📞
        </span>

        Call

      </button>


      <button
        class="callButton video"
        onclick="startCall(true)">

        <span
          class="callIcon">
          📹
        </span>

        Video Call

      </button>

    </div>


    <button
      class="closeFriend"
      onclick="closeFriendPanel()">
      បិទ
    </button>

  </div>

</div>


<!-- =====================================================
                          MUSIC
===================================================== -->

<section
  id="music"
  class="screen">

  <div class="musicHeader">

    <h1>
      🎵 Music
    </h1>

    <button
      class="searchMusic"
      onclick="toggleMusicSearch()">
      🔍
    </button>

  </div>


  <div
    id="musicSearchPanel"
    class="musicSearchPanel">

    <input
      id="musicSearch"
      class="input"
      placeholder="ស្វែងរក Music..."
      oninput="renderMusic()">

  </div>


  <div class="sectionTitle">
    🎤 សិល្បករ និងបទចម្រៀងថ្មីៗ
  </div>


  <div
    id="artistList">
  </div>


  <div class="sectionTitle">
    🎵 បទចម្រៀង
  </div>


  <div
    id="musicList">
  </div>


  <div class="sectionTitle">
    ⬇️ Downloads
  </div>


  <div
    id="downloadList">
  </div>

</section>


<!-- =====================================================
                         SETTINGS
===================================================== -->

<section
  id="settings"
  class="screen">

  <div class="topbar">

    <h1>
      ⚙️ Cài đặt
    </h1>

  </div>


  <div class="card profile">

    <div class="profileAvatar">
      👤
    </div>

    <h2 id="profileName">
      អ្នកប្រើប្រាស់
    </h2>

    <p
      id="profileEmail"
      class="muted">
    </p>

    <button
      class="primary"
      onclick="openProfile()">
      កែ Profile
    </button>

  </div>


  <div
    class="card setting"
    onclick="showToast('Notifications')">

    <div class="settingIcon">
      🔔
    </div>

    <div class="settingText">

      <b>
        Notifications
      </b>

      <small>
        ការជូនដំណឹង
      </small>

    </div>

    <button class="arrow">
      ›
    </button>

  </div>


  <div
    class="card setting"
    onclick="toggleDarkMode()">

    <div class="settingIcon">
      🌙
    </div>

    <div class="settingText">

      <b>
        Dark Mode
      </b>

      <small>
        Light / Dark
      </small>

    </div>

    <button
      id="darkSwitch"
      class="arrow">
      ›
    </button>

  </div>


  <div
    class="card setting"
    onclick="showToast('Privacy & Security')">

    <div class="settingIcon">
      🔒
    </div>

    <div class="settingText">

      <b>
        Privacy & Security
      </b>

      <small>
        សុវត្ថិភាព និងភាពឯកជន
      </small>

    </div>

    <button class="arrow">
      ›
    </button>

  </div>


  <div
    class="card setting"
    onclick="openFontSettings()">

    <div class="settingIcon">
      🔤
    </div>

    <div class="settingText">

      <b>
        Font
      </b>

      <small>
        ពុម្ពអក្សរ និងទំហំ
      </small>

    </div>

    <button class="arrow">
      ›
    </button>

  </div>


  <div
    class="card setting"
    onclick="openLanguageSettings()">

    <div class="settingIcon">
      🌐
    </div>

    <div class="settingText">

      <b>
        Language
      </b>

      <small id="languageLabel">
        ខ្មែរ
      </small>

    </div>

    <button class="arrow">
      ›
    </button>

  </div>


  <div
    class="card setting"
    onclick="openStorageSettings()">

    <div class="settingIcon">
      📶
    </div>

    <div class="settingText">

      <b>
        Data & Storage
      </b>

      <small>
        Downloads និង Storage
      </small>

    </div>

    <button class="arrow">
      ›
    </button>

  </div>


  <div
    class="card setting"
    onclick="clearCache()">

    <div class="settingIcon">
      🗑️
    </div>

    <div class="settingText">

      <b>
        Clear Cache
      </b>

      <small>
        សម្អាតទិន្នន័យបណ្ដោះអាសន្ន
      </small>

    </div>

    <button class="arrow">
      ›
    </button>

  </div>


  <!-- OWNER -->

  <div
    id="ownerArea"
    class="ownerOnly">

    <div class="card ownerBadge">

      <div class="ownerTitle">
        👑 Owner / Admin
      </div>

      <small>
        មុខងារនេះសម្រាប់ម្ចាស់ App ប៉ុណ្ណោះ
      </small>

    </div>


    <div class="card">

      <div class="sectionTitle">
        👑 Owner Control
      </div>


      <div class="adminGrid">

        <button
          class="adminButton"
          onclick="openAdmin('users')">
          👥<br>Users
        </button>

        <button
          class="adminButton"
          onclick="openAdmin('music')">
          🎵<br>Music
        </button>

        <button
          class="adminButton"
          onclick="openAdmin('artists')">
          🎤<br>Artists
        </button>

        <button
          class="adminButton"
          onclick="openAdmin('news')">
          📰<br>News
        </button>

        <button
          class="adminButton"
          onclick="openAdmin('media')">
          🖼️<br>Media
        </button>

        <button
          class="adminButton"
          onclick="openAdmin('reports')">
          🚨<br>Reports
        </button>

        <button
          class="adminButton"
          onclick="openAdmin('statistics')">
          📊<br>Statistics
        </button>

        <button
          class="adminButton"
          onclick="openAdmin('age')">
          🎂<br>Age
        </button>

        <button
          class="adminButton"
          onclick="openAdmin('fonts')">
          🔤<br>Fonts
        </button>

        <button
          class="adminButton"
          onclick="openAdmin('notifications')">
          🔔<br>Notifications
        </button>

      </div>

    </div>

  </div>


  <div
    class="card setting"
    onclick="logout()">

    <div class="settingIcon">
      🚪
    </div>

    <div class="settingText">

      <b>
        Logout
      </b>

      <small>
        ចាកចេញពីគណនី
      </small>

    </div>

    <button class="arrow">
      ›
    </button>

  </div>

</section>


<!-- =====================================================
                       MINI PLAYER
===================================================== -->

<div
  id="mini"
  class="mini">

  <div
    id="miniCover"
    class="miniCover">
    🌆
  </div>


  <div
    class="miniInfo"
    onclick="openPlayer()">

    <b id="miniTitle">
      Phành phố sương mờ
    </b>

    <small id="miniArtist">
      Young Quá, NhoxJet
    </small>

  </div>


  <button
    id="miniPlay"
    class="miniPlay"
    onclick="
      event.stopPropagation();
      togglePlay();
    ">
    ▶️
  </button>

</div>


<!-- =====================================================
                        FULL PLAYER
===================================================== -->

<div
  id="player"
  class="player">

  <div class="playerSheet">

    <div class="handle">
    </div>

    <button
      class="closePlayer"
      onclick="closePlayer()">
      ✕
    </button>


    <div
      id="bigCover"
      class="bigCover">
      🌆
    </div>


    <h2
      id="playerTitle"
      class="playerTitle">
      Phành phố sương mờ
    </h2>


    <div
      id="playerArtist"
      class="playerArtist">
      Young Quá, NhoxJet
    </div>


    <div class="actions">

      <button
        onclick="
          showToast('👎 មិនចូលចិត្ត')
        ">
        👎
      </button>

      <button
        onclick="
          showToast('👍 ចូលចិត្ត')
        ">
        👍
      </button>

      <button
        onclick="shareSong()">
        ✉️
      </button>

    </div>


    <div class="controls">

      <button
        onclick="previousSong()">
        ⏮
      </button>

      <button
        id="mainPlay"
        class="play"
        onclick="togglePlay()">
        ▶️
      </button>

      <button
        onclick="nextSong()">
        ⏭
      </button>

    </div>

  </div>

</div>


<!-- =====================================================
                    PROFILE MODAL
===================================================== -->

<div
  id="profileModal"
  class="modal">

  <div class="modalBox">

    <h2>
      👤 Profile
    </h2>

    <input
      id="editName"
      class="input"
      placeholder="ឈ្មោះ">

    <input
      id="editEmail"
      class="input"
      placeholder="Gmail">

    <button
      class="primary"
      onclick="saveProfile()">
      រក្សាទុក
    </button>

    <button
      class="secondary"
      onclick="
        closeModal('profileModal')
      ">
      បិទ
    </button>

  </div>

</div>


<!-- =====================================================
                       FONT MODAL
===================================================== -->

<div
  id="fontModal"
  class="modal">

  <div class="modalBox">

    <h2>
      🔤 Font
    </h2>

    <p class="muted">
      ជ្រើសពុម្ពអក្សរ
    </p>

    <select
      id="fontSelect"
      class="select"
      onchange="applyFont()">

      <option value="Arial">
        Arial
      </option>

      <option value="Georgia">
        Georgia
      </option>

      <option value="Verdana">
        Verdana
      </option>

      <option value="Tahoma">
        Tahoma
      </option>

      <option value="Times New Roman">
        Times New Roman
      </option>

      <option value="monospace">
        Monospace
      </option>

    </select>


    <label>
      ទំហំអក្សរ
    </label>

    <input
      id="fontSize"
      type="range"
      min="13"
      max="24"
      value="16"
      style="width:100%"
      oninput="applyFont()">


    <div class="uploadBox">

      <b>
        📁 បញ្ចូល Font របស់អ្នក
      </b>

      <p class="muted">
        ជ្រើសឯកសារ Font
      </p>

      <input
        type="file"
        accept=".ttf,.otf,.woff,.woff2"
        onchange="loadCustomFont(event)">

    </div>


    <button
      class="primary"
      onclick="
        saveFont();
        closeModal('fontModal');
      ">
      រក្សាទុក
    </button>

  </div>

</div>


<!-- =====================================================
                     LANGUAGE MODAL
===================================================== -->

<div
  id="languageModal"
  class="modal">

  <div class="modalBox">

    <h2>
      🌐 Language
    </h2>


    <button
      class="secondary"
      onclick="setLanguage('ខ្មែរ')">
      🇰🇭 ខ្មែរ
    </button>


    <button
      class="secondary"
      onclick="setLanguage('English')">
      🇺🇸 English
    </button>


    <button
      class="secondary"
      onclick="setLanguage('Tiếng Việt')">
      🇻🇳 Tiếng Việt
    </button>


    <button
      class="secondary"
      onclick="
        closeModal('languageModal')
      ">
      បិទ
    </button>

  </div>

</div>


<!-- =====================================================
                     STORAGE MODAL
===================================================== -->

<div
  id="storageModal"
  class="modal">

  <div class="modalBox">

    <h2>
      📶 Data & Storage
    </h2>


    <div class="card">

      <b>
        Downloads
      </b>

      <p
        id="storageInfo"
        class="muted">
        0 បទ
      </p>

    </div>


    <button
      class="primary"
      onclick="clearDownloads()">
      🗑️ លុប Downloads
    </button>


    <button
      class="secondary"
      onclick="
        closeModal('storageModal')
      ">
      បិទ
    </button>

  </div>

</div>


<!-- =====================================================
                       ADMIN MODAL
===================================================== -->

<div
  id="adminModal"
  class="modal">

  <div class="modalBox">

    <h2
      id="adminTitle">
      👑 Owner
    </h2>


    <div
      id="adminContent">
    </div>


    <button
      class="secondary"
      onclick="
        closeModal('adminModal')
      ">
      បិទ
    </button>

  </div>

</div>


<!-- =====================================================
                       CALL OVERLAY
===================================================== -->

<div
  id="callOverlay"
  class="callOverlay">

  <div
    id="callAvatar"
    class="callAvatar">
    C
  </div>


  <div
    id="callName"
    class="callName">
    Chau Cheo
  </div>


  <div
    id="callType"
    class="callType">
    Calling...
  </div>


  <div class="callButtons">

    <button
      class="callControl"
      onclick="
        showToast('🔇 Microphone')
      ">
      🎙️
    </button>


    <button
      class="callControl endCall"
      onclick="endCall()">
      📞
    </button>


    <button
      class="callControl"
      onclick="
        showToast('🔊 Speaker')
      ">
      🔊
    </button>

  </div>

</div>


<!-- =====================================================
                      BOTTOM NAV
===================================================== -->

<nav
  id="bottomNav"
  class="bottomNav">

  <button
    class="nav active"
    data-page="home"
    onclick="go('home')">

    <span>
      🏠
    </span>

    Home

  </button>


  <button
    class="nav"
    data-page="chats"
    onclick="go('chats')">

    <span>
      💬
    </span>

    Chats

  </button>


  <button
    class="nav"
    data-page="music"
    onclick="go('music')">

    <span>
      🎵
    </span>

    Music

  </button>


  <button
    class="nav"
    data-page="settings"
    onclick="go('settings')">

    <span>
      ⚙️
    </span>

    Cài đặt

  </button>

</nav>


<div
  id="toast"
  class="toast">
</div>

</div>


<script>

/* =====================================================
                         CONFIG
===================================================== */

const OWNER_EMAIL =
  "chauchung2007a@gmail.com";

const TEST_OTP =
  "000000";


/* =====================================================
                          STATE
===================================================== */

let user = null;

let signupStep = 1;

let currentSong = 0;

let playing = false;

let minimumAge = 13;

let ageRestrictionEnabled = false;


/* =====================================================
                     CURRENT CHAT
===================================================== */

let currentChat = null;


/* =====================================================
                         DATA
===================================================== */

const songs = [

  {
    title:"Phành phố sương mờ",
    artist:"Young Quá, NhoxJet",
    cover:"🌆"
  },

  {
    title:"Tránh Duyên",
    artist:"Đình Dũng",
    cover:"🎤"
  },

  {
    title:"Y Que Fue?",
    artist:"Don Miguelo",
    cover:"🎧"
  },

  {
    title:"Girl In My Dream",
    artist:"Louch Sokchea",
    cover:"💜"
  },

  {
    title:"បទចម្រៀងថ្មី",
    artist:"សិល្បករថ្មី",
    cover:"🎙️"
  }

];


const artists = [

  {
    name:"Young Quá",
    description:"សិល្បករ",
    photo:"🎤",
    video:"🎬"
  },

  {
    name:"NhoxJet",
    description:"សិល្បករ",
    photo:"🎧",
    video:"🎬"
  },

  {
    name:"Louch Sokchea",
    description:"សិល្បករថ្មី",
    photo:"🎙️",
    video:"🎬"
  }

];


const news = [

  {
    title:"ព័ត៌មានថ្មីៗប្រចាំថ្ងៃ",
    source:"Chat News",
    time:"10 នាទីមុន",
    image:"📰",
    text:
      "នេះជាកន្លែងសម្រាប់បង្ហាញព័ត៌មានថ្មីៗ និងព័ត៌មានដែលអ្នកអាចចុចចូលអានបាន។"
  },

  {
    title:"ព័ត៌មានបច្ចេកវិទ្យាថ្មីៗ",
    source:"Technology",
    time:"30 នាទីមុន",
    image:"💻",
    text:
      "អានព័ត៌មានថ្មីៗទាក់ទងនឹងបច្ចេកវិទ្យា កម្មវិធីទូរស័ព្ទ និងការច្នៃប្រឌិតថ្មីៗ។"
  },

  {
    title:"ព័ត៌មានសិល្បករ និងតន្ត្រី",
    source:"Music News",
    time:"1 ម៉ោងមុន",
    image:"🎤",
    text:
      "ព័ត៌មានថ្មីៗពីសិល្បករ បទចម្រៀងថ្មី និងវីដេអូដែលទើបត្រូវបានបង្ហោះ។"
  },

  {
    title:"ព័ត៌មានកីឡាថ្មីៗ",
    source:"Sport",
    time:"2 ម៉ោងមុន",
    image:"⚽",
    text:
      "ព័ត៌មាន និងលទ្ធផលកីឡាថ្មីៗដែលកំពុងទទួលបានការចាប់អារម្មណ៍។"
  }

];


const chats = [

  {
    name:"Chau Cheo",
    message:"សួស្តី 👋",
    avatar:"C",
    status:"last seen 28/08/26"
  },

  {
    name:"BEEP",
    message:"សារថ្មី",
    avatar:"B",
    status:"online"
  },

  {
    name:"Group krang chai",
    message:"3 សារ",
    avatar:"G",
    status:"last seen recently"
  },

  {
    name:"Volunteer Support",
    message:"Choose an option",
    avatar:"V",
    status:"online"
  }

];


/* =====================================================
                       SIGN UP
===================================================== */

function renderSignup(){

  let html = "";


  if(signupStep === 1){

    html = `

      <h2>
        ចុះឈ្មោះ
      </h2>

      <input
        id="signupEmail"
        class="input"
        type="email"
        placeholder="Gmail">

      <button
        class="primary"
        onclick="nextSignup()">
        បន្ត
      </button>

    `;

  }


  if(signupStep === 2){

    html = `

      <h2>
        ថ្ងៃខែឆ្នាំកំណើត
      </h2>

      <p class="muted">
        សូមបញ្ចូលថ្ងៃខែឆ្នាំកំណើត
      </p>

      <input
        id="birthDate"
        class="input"
        type="date">

      <button
        class="primary"
        onclick="checkAgeAndNext()">
        បន្ត
      </button>

    `;

  }


  if(signupStep === 3){

    html = `

      <h2>
        បញ្ចូលកូដ OTP
      </h2>

      <p class="muted">
        សម្រាប់សាកល្បង៖
        <b>000000</b>
      </p>

      <div class="otp">

        <input maxlength="1"
               inputmode="numeric">

        <input maxlength="1"
               inputmode="numeric">

        <input maxlength="1"
               inputmode="numeric">

        <input maxlength="1"
               inputmode="numeric">

        <input maxlength="1"
               inputmode="numeric">

        <input maxlength="1"
               inputmode="numeric">

      </div>

      <button
        class="primary"
        onclick="verifyOTP()">
        បន្ត
      </button>

    `;

  }


  if(signupStep === 4){

    html = `

      <h2>
        ព័ត៌មានរបស់អ្នក
      </h2>

      <input
        id="signupName"
        class="input"
        placeholder="ឈ្មោះ">

      <input
        id="signupUsername"
        class="input"
        placeholder="Username">

      <button
        class="primary"
        onclick="nextSignup()">
        បន្ត
      </button>

    `;

  }


  if(signupStep === 5){

    html = `

      <h2>
        រួចរាល់ 🎉
      </h2>

      <p class="muted">
        គណនី Chat របស់អ្នកបានរៀបចំរួចរាល់។
      </p>

      <button
        class="primary"
        onclick="finishSignup()">
        ចូល Chat
      </button>

    `;

  }


  document.getElementById(
    "signupStep"
  ).textContent =
    "ជំហាន " +
    signupStep +
    " / 5";


  document.getElementById(
    "signupContent"
  ).innerHTML =
    html;


  if(signupStep === 3){

    const boxes =
      document.querySelectorAll(
        ".otp input"
      );


    boxes.forEach(
      (box,index)=>{

        box.addEventListener(
          "input",
          ()=>{

            if(
              box.value &&
              index <
                boxes.length - 1
            ){

              boxes[
                index + 1
              ].focus();

            }

          }
        );


        box.addEventListener(
          "keydown",
          e=>{

            if(
              e.key === "Backspace" &&
              !box.value &&
              index > 0
            ){

              boxes[
                index - 1
              ].focus();

            }

          }
        );

      }
    );


    boxes[0].focus();

  }

}


/* =====================================================
                       AGE
===================================================== */

function calculateAge(date){

  const birth =
    new Date(date);

  const today =
    new Date();

  let age =
    today.getFullYear() -
    birth.getFullYear();

  const month =
    today.getMonth() -
    birth.getMonth();


  if(
    month < 0 ||
    (
      month === 0 &&
      today.getDate() <
      birth.getDate()
    )
  ){

    age--;

  }


  return age;

}


function checkAgeAndNext(){

  const value =
    document.getElementById(
      "birthDate"
    ).value;


  if(!value){

    showToast(
      "សូមបញ្ចូលថ្ងៃខែឆ្នាំកំណើត"
    );

    return;

  }


  const age =
    calculateAge(value);


  if(age < 0){

    showToast(
      "ថ្ងៃខែឆ្នាំមិនត្រឹមត្រូវ"
    );

    return;

  }


  if(
    ageRestrictionEnabled &&
    age < minimumAge
  ){

    showToast(
      "អាយុរបស់អ្នកមិនទាន់គ្រប់"
    );

    return;

  }


  user =
    user || {};


  user.birthDate =
    value;


  signupStep++;

  renderSignup();

}


/* =====================================================
                    SIGNUP NEXT
===================================================== */

function nextSignup(){

  if(signupStep === 1){

    const email =
      document.getElementById(
        "signupEmail"
      ).value.trim();


    if(
      !email ||
      !email.includes("@")
    ){

      showToast(
        "សូមបញ្ចូល Gmail"
      );

      return;

    }


    user = {
      email:email
    };


    signupStep++;

    renderSignup();

    return;

  }


  if(signupStep === 4){

    const name =
      document.getElementById(
        "signupName"
      ).value.trim();


    if(!name){

      showToast(
        "សូមបញ្ចូលឈ្មោះ"
      );

      return;

    }


    user.name =
      name;


    user.username =
      document.getElementById(
        "signupUsername"
      ).value.trim() ||
      name;


    signupStep++;

    renderSignup();

  }

}


/* =====================================================
                         OTP
===================================================== */

function verifyOTP(){

  const code =
    [
      ...document.querySelectorAll(
        ".otp input"
      )
    ]
    .map(
      input=>input.value
    )
    .join("");


  if(code !== TEST_OTP){

    showToast(
      "OTP សាកល្បងគឺ 000000"
    );

    return;

  }


  signupStep++;

  renderSignup();

}


/* =====================================================
                     FINISH SIGNUP
===================================================== */

function finishSignup(){

  if(!user)
    return;


  localStorage.setItem(
    "chat_user",
    JSON.stringify(user)
  );


  enterApp();

}


/* =====================================================
                      ENTER APP
===================================================== */

function enterApp(){

  const saved =
    localStorage.getItem(
      "chat_user"
    );


  if(saved){

    user =
      JSON.parse(saved);

  }


  document
    .querySelectorAll(
      ".screen"
    )
    .forEach(
      screen=>{
        screen.classList.remove(
          "active"
        );
      }
    );


  document
    .getElementById("home")
    .classList.add("active");


  document.getElementById(
    "bottomNav"
  ).style.display =
    "flex";


  updateProfile();

  renderNews();

  renderChats();

  renderMusic();

  selectSong(0);


  document.getElementById(
    "mini"
  ).style.display =
    "none";


  checkOwner();

}


/* =====================================================
                     NAVIGATION
===================================================== */

function go(page){

  if(page === "chatDetail"){
    return;
  }


  document
    .querySelectorAll(
      ".screen"
    )
    .forEach(
      screen=>{
        screen.classList.remove(
          "active"
        );
      }
    );


  document
    .getElementById(page)
    .classList.add("active");


  document
    .querySelectorAll(".nav")
    .forEach(
      nav=>{
        nav.classList.toggle(
          "active",
          nav.dataset.page === page
        );
      }
    );


  const mini =
    document.getElementById(
      "mini"
    );


  if(page === "music"){

    mini.style.display =
      "flex";

  }else{

    mini.style.display =
      "none";

    closePlayer();

  }


  closeArticle();

}


/* =====================================================
                         HOME
===================================================== */

function toggleHomeSearch(){

  const el =
    document.getElementById(
      "homeSearch"
    );


  el.style.display =
    el.style.display === "block"
      ? "none"
      : "block";


  if(
    el.style.display === "block"
  ){

    document
      .getElementById(
        "newsSearch"
      )
      .focus();

  }

}


function renderNews(){

  const search =
    (
      document.getElementById(
        "newsSearch"
      )?.value ||
      ""
    ).toLowerCase();


  const list =
    news.filter(
      item=>
        (
          item.title +
          item.source +
          item.text
        )
        .toLowerCase()
        .includes(search)
    );


  document.getElementById(
    "newsList"
  ).innerHTML = `

    <div class="newsHeading">
      📰 ព័ត៌មានថ្មីៗ
    </div>

    ${
      list.length

      ? list.map(
          item=>{

            const index =
              news.indexOf(item);


            return `

              <article
                class="card newsCard"
                onclick="
                  openArticle(${index})
                ">

                <div class="newsImage">
                  ${item.image}
                </div>

                <div class="newsBody">

                  <div class="newsTitle">
                    ${item.title}
                  </div>

                  <div class="newsMeta">
                    ${item.source}
                    •
                    ${item.time}
                  </div>

                  <div class="newsText">
                    ${item.text}
                  </div>

                </div>

              </article>

            `;

          }
        ).join("")

      : `

        <div class="card muted">
          មិនមានព័ត៌មានទេ។
        </div>

      `
    }

  `;

}


function openArticle(index){

  const item =
    news[index];


  if(!item)
    return;


  document.getElementById(
    "newsList"
  ).style.display =
    "none";


  document.getElementById(
    "homeSearch"
  ).style.display =
    "none";


  document.getElementById(
    "article"
  ).classList.add("show");


  document.getElementById(
    "articleImage"
  ).textContent =
    item.image;


  document.getElementById(
    "articleTitle"
  ).textContent =
    item.title;


  document.getElementById(
    "articleMeta"
  ).textContent =
    item.source +
    " • " +
    item.time;


  document.getElementById(
    "articleContent"
  ).textContent =
    item.text +
    " " +
    item.text +
    " " +
    item.text;

}


function closeArticle(){

  const article =
    document.getElementById(
      "article"
    );


  article.classList.remove(
    "show"
  );


  document.getElementById(
    "newsList"
  ).style.display =
    "block";

}


/* =====================================================
                         CHATS
===================================================== */

function renderChats(){

  const search =
    (
      document.getElementById(
        "chatSearch"
      )?.value ||
      ""
    ).toLowerCase();


  const list =
    chats.filter(
      item=>
        (
          item.name +
          item.message
        )
        .toLowerCase()
        .includes(search)
    );


  document.getElementById(
    "chatList"
  ).innerHTML =

    list.map(
      (item,index)=>`

        <div
          class="card chat"
          onclick="
            openChatDetail(${index})
          ">

          <div class="chatAvatar">
            ${item.avatar}
          </div>

          <div class="chatInfo">

            <b>
              ${item.name}
            </b>

            <small>
              ${item.message}
            </small>

          </div>

        </div>

      `
    ).join("");

}


/* =====================================================
                    OPEN CHAT DETAIL
===================================================== */

function openChatDetail(index){

  const chat =
    chats[index];


  if(!chat)
    return;


  currentChat =
    chat;


  document.getElementById(
    "detailName"
  ).textContent =
    chat.name;


  document.getElementById(
    "detailStatus"
  ).textContent =
    chat.status;


  document.getElementById(
    "detailAvatar"
  ).textContent =
    chat.avatar;


  document.getElementById(
    "friendLargeAvatar"
  ).textContent =
    chat.avatar;


  document.getElementById(
    "friendName"
  ).textContent =
    chat.name;


  document.getElementById(
    "friendStatus"
  ).textContent =
    chat.status;


  document.getElementById(
    "callAvatar"
  ).textContent =
    chat.avatar;


  document.getElementById(
    "callName"
  ).textContent =
    chat.name;


  /*
     Hide normal screens
  */

  document
    .querySelectorAll(
      ".screen"
    )
    .forEach(
      screen=>{
        screen.classList.remove(
          "active"
        );
      }
    );


  /*
     Show Chat Detail
  */

  document
    .getElementById(
      "chatDetail"
    )
    .classList.add("active");


  /*
     Hide bottom navigation
  */

  document.getElementById(
    "bottomNav"
  ).style.display =
    "none";


  /*
     Hide music player
  */

  document.getElementById(
    "mini"
  ).style.display =
    "none";


  closePlayer();


  closeFriendPanel();


  /*
     Reset sample messages
  */

  renderChatMessages();

}


/* =====================================================
                   CLOSE CHAT DETAIL
===================================================== */

function closeChatDetail(){

  document
    .getElementById(
      "chatDetail"
    )
    .classList.remove(
      "active"
    );


  document
    .getElementById(
      "chats"
    )
    .classList.add(
      "active"
    );


  document
    .querySelectorAll(
      ".nav"
    )
    .forEach(
      nav=>{
        nav.classList.toggle(
          "active",
          nav.dataset.page ===
          "chats"
        );
      }
    );


  document.getElementById(
    "bottomNav"
  ).style.display =
    "flex";


  closeFriendPanel();

}


/* =====================================================
                  RENDER CHAT MESSAGES
===================================================== */

function renderChatMessages(){

  const messages =
    document.getElementById(
      "messages"
    );


  messages.innerHTML = `

    <div class="chatDate">
      April 3
    </div>

    <div class="joined">
      ${currentChat?.name || "Chau Cheo"}
      joined Chat
    </div>

  `;


  /*
     Saved messages
  */

  const saved =
    JSON.parse(
      localStorage.getItem(
        "chat_messages"
      ) ||
      "{}"
    );


  const key =
    currentChat?.name ||
    "Chau Cheo";


  const list =
    saved[key] ||
    [];


  list.forEach(
    message=>{

      addMessageBubble(
        message.text,
        message.mine,
        false
      );

    }
  );


  setTimeout(
    ()=>{
      messages.scrollTop =
        messages.scrollHeight;
    },
    50
  );

}


/* =====================================================
                   ADD MESSAGE BUBBLE
===================================================== */

function addMessageBubble(
  text,
  mine=true,
  scroll=true
){

  const messages =
    document.getElementById(
      "messages"
    );


  const row =
    document.createElement(
      "div"
    );


  row.className =
    "messageRow" +
    (mine ? " mine" : "");


  const bubble =
    document.createElement(
      "div"
    );


  bubble.className =
    "messageBubble";


  bubble.textContent =
    text;


  row.appendChild(
    bubble
  );


  messages.appendChild(
    row
  );


  if(scroll){

    messages.scrollTop =
      messages.scrollHeight;

  }

}


/* =====================================================
                     SEND MESSAGE
===================================================== */

function sendMessage(){

  const input =
    document.getElementById(
      "messageInput"
    );


  const text =
    input.value.trim();


  if(!text)
    return;


  addMessageBubble(
    text,
    true,
    true
  );


  /*
     Save locally
  */

  const saved =
    JSON.parse(
      localStorage.getItem(
        "chat_messages"
      ) ||
      "{}"
    );


  const key =
    currentChat?.name ||
    "Chau Cheo";


  if(!saved[key]){
    saved[key] = [];
  }


  saved[key].push({
    text:text,
    mine:true
  });


  localStorage.setItem(
    "chat_messages",
    JSON.stringify(saved)
  );


  input.value = "";

  updateMessageButtons();

}


/* =====================================================
                 MESSAGE INPUT BUTTONS
===================================================== */

function updateMessageButtons(){

  const input =
    document.getElementById(
      "messageInput"
    );

  const mic =
    document.getElementById(
      "micButton"
    );

  const send =
    document.getElementById(
      "sendButton"
    );


  if(!input)
    return;


  if(input.value.trim()){

    mic.style.display =
      "none";

    send.style.display =
      "flex";

    send.style.alignItems =
      "center";

    send.style.justifyContent =
      "center";

  }else{

    mic.style.display =
      "flex";

    send.style.display =
      "none";

  }

}


/* =====================================================
               FRIEND PROFILE PANEL
===================================================== */

/*
  ចុចឈ្មោះកណ្ដាល
  ឬ Profile ខាងស្ដាំ
  → មកទីនេះ
*/

function openFriendPanel(){

  if(!currentChat)
    return;


  document.getElementById(
    "friendPanel"
  ).classList.add(
    "show"
  );

}


function closeFriendPanel(){

  document.getElementById(
    "friendPanel"
  ).classList.remove(
    "show"
  );

}


/* =====================================================
                         CALL
===================================================== */

function startCall(video=false){

  if(!currentChat)
    return;


  document.getElementById(
    "callAvatar"
  ).textContent =
    currentChat.avatar;


  document.getElementById(
    "callName"
  ).textContent =
    currentChat.name;


  document.getElementById(
    "callType"
  ).textContent =
    video
      ? "📹 Video Calling..."
      : "📞 Calling...";


  closeFriendPanel();


  document.getElementById(
    "callOverlay"
  ).classList.add(
    "show"
  );

}


function endCall(){

  document.getElementById(
    "callOverlay"
  ).classList.remove(
    "show"
  );


  showToast(
    "ការហៅត្រូវបានបញ្ចប់"
  );

}


/* =====================================================
                         MUSIC
===================================================== */

function toggleMusicSearch(){

  document
    .getElementById(
      "musicSearchPanel"
    )
    .classList.toggle(
      "show"
    );


  if(
    document
      .getElementById(
        "musicSearchPanel"
      )
      .classList.contains(
        "show"
      )
  ){

    document
      .getElementById(
        "musicSearch"
      )
      .focus();

  }

}


function renderMusic(){

  const search =
    (
      document.getElementById(
        "musicSearch"
      )?.value ||
      ""
    ).toLowerCase();


  const filteredSongs =
    songs.filter(
      song=>
        (
          song.title +
          song.artist
        )
        .toLowerCase()
        .includes(search)
    );


  const filteredArtists =
    artists.filter(
      artist=>
        (
          artist.name +
          artist.description
        )
        .toLowerCase()
        .includes(search)
    );


  document.getElementById(
    "artistList"
  ).innerHTML =

    filteredArtists.map(
      artist=>`

        <div
          class="card artistCard">

          <div class="artistPhoto">
            ${artist.photo}
          </div>

          <div class="artistInfo">

            <b>
              ${artist.name}
            </b>

            <small>
              ${artist.description}
            </small>

          </div>

          <button
            class="roundButton"
            onclick="
              showToast(
                'វីដេអូរបស់ ${artist.name}'
              )
            ">
            ▶
          </button>

        </div>

      `
    ).join("");


  document.getElementById(
    "musicList"
  ).innerHTML =

    filteredSongs.map(
      song=>{

        const index =
          songs.indexOf(song);


        return `

          <div
            class="card song"
            onclick="
              selectSong(${index})
            ">

            <div class="cover">
              ${song.cover}
            </div>

            <div class="songInfo">

              <b>
                ${song.title}
              </b>

              <small>
                ${song.artist}
              </small>

            </div>

            <button
              class="roundButton"
              onclick="
                event.stopPropagation();
                downloadSong(${index});
              ">
              ⬇️
            </button>

          </div>

        `;

      }
    ).join("");


  renderDownloads();

}


function renderDownloads(){

  const saved =
    JSON.parse(
      localStorage.getItem(
        "chat_downloads"
      ) ||
      "[]"
    );


  const list =
    saved
      .map(
        index=>songs[index]
      )
      .filter(Boolean);


  document.getElementById(
    "downloadList"
  ).innerHTML =

    list.length

    ? list.map(
        song=>{

          const index =
            songs.indexOf(song);


          return `

            <div
              class="card song"
              onclick="
                selectSong(${index})
              ">

              <div class="cover">
                ${song.cover}
              </div>

              <div class="songInfo">

                <b>
                  ${song.title}
                </b>

                <small>
                  ${song.artist}
                </small>

              </div>

              ▶️

            </div>

          `;

        }
      ).join("")

    : `

      <div class="card muted">
        មិនទាន់មានបទចម្រៀង
        ដែលបាន Download។
      </div>

    `;


  updateStorageInfo();

}


/* =====================================================
                     MUSIC PLAYER
===================================================== */

function selectSong(index){

  const song =
    songs[index];


  if(!song)
    return;


  currentSong =
    index;


  document.getElementById(
    "miniCover"
  ).textContent =
    song.cover;


  document.getElementById(
    "miniTitle"
  ).textContent =
    song.title;


  document.getElementById(
    "miniArtist"
  ).textContent =
    song.artist;


  document.getElementById(
    "bigCover"
  ).textContent =
    song.cover;


  document.getElementById(
    "playerTitle"
  ).textContent =
    song.title;


  document.getElementById(
    "playerArtist"
  ).textContent =
    song.artist;

}


function openPlayer(){

  if(
    !document
      .getElementById(
        "music"
      )
      .classList
      .contains(
        "active"
      )
  ){

    return;

  }


  document
    .getElementById(
      "player"
    )
    .classList.add(
      "show"
    );

}


function closePlayer(){

  document
    .getElementById(
      "player"
    )
    .classList.remove(
      "show"
    );

}


function togglePlay(){

  playing =
    !playing;


  document.getElementById(
    "miniPlay"
  ).textContent =
    playing
      ? "⏸️"
      : "▶️";


  document.getElementById(
    "mainPlay"
  ).textContent =
    playing
      ? "⏸️"
      : "▶️";

}


function previousSong(){

  currentSong--;


  if(currentSong < 0){

    currentSong =
      songs.length - 1;

  }


  selectSong(
    currentSong
  );

}


function nextSong(){

  currentSong++;


  if(
    currentSong >=
    songs.length
  ){

    currentSong =
      0;

  }


  selectSong(
    currentSong
  );

}


function downloadSong(index){

  let saved =
    JSON.parse(
      localStorage.getItem(
        "chat_downloads"
      ) ||
      "[]"
    );


  if(
    !saved.includes(index)
  ){

    saved.push(index);

  }


  localStorage.setItem(
    "chat_downloads",
    JSON.stringify(saved)
  );


  renderDownloads();


  showToast(
    "បាន Download ⬇️"
  );

}


function shareSong(){

  const song =
    songs[currentSong];


  if(
    navigator.share
  ){

    navigator.share({
      title:song.title,
      text:
        song.title +
        " - " +
        song.artist
    }).catch(
      ()=>{}
    );

  }else{

    showToast(
      "✉️ Share"
    );

  }

}


/* =====================================================
                        PROFILE
===================================================== */

function updateProfile(){

  document.getElementById(
    "profileName"
  ).textContent =
    user?.name ||
    "អ្នកប្រើប្រាស់";


  document.getElementById(
    "profileEmail"
  ).textContent =
    user?.email ||
    "";

}


function openProfile(){

  document.getElementById(
    "editName"
  ).value =
    user?.name ||
    "";


  document.getElementById(
    "editEmail"
  ).value =
    user?.email ||
    "";


  document
    .getElementById(
      "profileModal"
    )
    .classList.add(
      "show"
    );

}


function saveProfile(){

  user.name =
    document.getElementById(
      "editName"
    ).value.trim() ||
    "អ្នកប្រើប្រាស់";


  user.email =
    document.getElementById(
      "editEmail"
    ).value.trim();


  localStorage.setItem(
    "chat_user",
    JSON.stringify(user)
  );


  updateProfile();

  closeModal(
    "profileModal"
  );


  checkOwner();


  showToast(
    "បានរក្សាទុក Profile"
  );

}


/* =====================================================
                           FONT
===================================================== */

function openFontSettings(){

  document
    .getElementById(
      "fontModal"
    )
    .classList.add(
      "show"
    );

}


function applyFont(){

  const font =
    document.getElementById(
      "fontSelect"
    ).value;


  const size =
    document.getElementById(
      "fontSize"
    ).value;


  document.body.style.fontFamily =
    font;


  document.body.style.fontSize =
    size + "px";

}


function saveFont(){

  localStorage.setItem(
    "chat_font",
    document.getElementById(
      "fontSelect"
    ).value
  );


  localStorage.setItem(
    "chat_font_size",
    document.getElementById(
      "fontSize"
    ).value
  );


  showToast(
    "បានរក្សាទុក Font"
  );

}


function loadCustomFont(event){

  const file =
    event.target.files[0];


  if(!file)
    return;


  const url =
    URL.createObjectURL(
      file
    );


  const fontName =
    "UserCustomFont";


  const face =
    new FontFace(
      fontName,
      `url(${url})`
    );


  face.load()
    .then(
      loaded=>{

        document.fonts.add(
          loaded
        );


        document.body.style.fontFamily =
          fontName;


        showToast(
          "បានបញ្ចូល Font"
        );

      }
    )
    .catch(
      ()=>{

        showToast(
          "មិនអាចបញ្ចូល Font បាន"
        );

      }
    );

}


/* =====================================================
                        LANGUAGE
===================================================== */

function openLanguageSettings(){

  document
    .getElementById(
      "languageModal"
    )
    .classList.add(
      "show"
    );

}


function setLanguage(language){

  localStorage.setItem(
    "chat_language",
    language
  );


  document.getElementById(
    "languageLabel"
  ).textContent =
    language;


  closeModal(
    "languageModal"
  );


  showToast(
    "ភាសា: " + language
  );

}


/* =====================================================
                       DARK MODE
===================================================== */

function toggleDarkMode(){

  document.body.classList.toggle(
    "dark"
  );


  localStorage.setItem(
    "chat_dark",
    document.body.classList.contains(
      "dark"
    )
  );

}


/* =====================================================
                         STORAGE
===================================================== */

function openStorageSettings(){

  updateStorageInfo();


  document
    .getElementById(
      "storageModal"
    )
    .classList.add(
      "show"
    );

}


function updateStorageInfo(){

  const saved =
    JSON.parse(
      localStorage.getItem(
        "chat_downloads"
      ) ||
      "[]"
    );


  const el =
    document.getElementById(
      "storageInfo"
    );


  if(el){

    el.textContent =
      saved.length +
      " បទ";

  }

}


function clearDownloads(){

  localStorage.removeItem(
    "chat_downloads"
  );


  renderDownloads();


  closeModal(
    "storageModal"
  );


  showToast(
    "បានលុប Downloads"
  );

}


function clearCache(){

  showToast(
    "Cache ត្រូវបានសម្អាត"
  );

}


/* =====================================================
                     OWNER / ADMIN
===================================================== */

function checkOwner(){

  const area =
    document.getElementById(
      "ownerArea"
    );


  if(
    user &&
    user.email &&
    user.email.toLowerCase() ===
      OWNER_EMAIL.toLowerCase()
  ){

    area.classList.add(
      "show"
    );

  }else{

    area.classList.remove(
      "show"
    );

  }

}


function openAdmin(section){

  if(
    !user ||
    user.email.toLowerCase() !==
      OWNER_EMAIL.toLowerCase()
  ){

    showToast(
      "មុខងារនេះសម្រាប់ Owner ប៉ុណ្ណោះ"
    );

    return;

  }


  const titles = {

    users:"👥 User Management",

    music:"🎵 Music Management",

    artists:"🎤 Artist Management",

    news:"📰 News Management",

    media:"🖼️ Image / Video Management",

    reports:"🚨 Reports",

    statistics:"📊 Statistics",

    age:"🎂 Age Restriction",

    fonts:"🔤 Font Management",

    notifications:
      "🔔 Notification Management"

  };


  document.getElementById(
    "adminTitle"
  ).textContent =
    titles[section] ||
    "👑 Owner";


  let content = "";


  if(section === "users"){

    content = `

      <div class="card">

        <b>
          👥 Users
        </b>

        <p class="muted">
          គ្រប់គ្រងគណនីអ្នកប្រើប្រាស់។
        </p>

      </div>

      <button
        class="primary"
        onclick="
          showToast(
            'User Management'
          )
        ">
        គ្រប់គ្រង Users
      </button>

    `;

  }


  if(section === "music"){

    content = `

      <div class="card">

        <b>
          🎵 Music
        </b>

        <p class="muted">
          បន្ថែម កែប្រែ ឬលុបបទចម្រៀង។
        </p>

      </div>

      <div class="uploadBox">

        <b>
          🎵 បង្ហោះបទចម្រៀង
        </b>

        <input
          type="file"
          accept="audio/*">

      </div>

    `;

  }


  if(section === "artists"){

    content = `

      <div class="card">

        <b>
          🎤 Artist Management
        </b>

        <p class="muted">
          គ្រប់គ្រងរូបភាព និងព័ត៌មានសិល្បករ។
        </p>

      </div>

      <div class="uploadBox">

        🖼️ រូបភាពសិល្បករ

        <input
          type="file"
          accept="image/*">

      </div>

      <div class="uploadBox">

        🎬 វីដេអូសិល្បករ

        <input
          type="file"
          accept="video/*">

      </div>

    `;

  }


  if(section === "news"){

    content = `

      <input
        class="input"
        placeholder="ចំណងជើងព័ត៌មាន">

      <textarea
        class="textarea"
        placeholder="សរសេរព័ត៌មាន...">
      </textarea>

      <button
        class="primary"
        onclick="
          showToast(
            'បានបង្កើតព័ត៌មាន'
          )
        ">
        📰 Publish News
      </button>

    `;

  }


  if(section === "media"){

    content = `

      <div class="uploadBox">

        🖼️ Upload Image

        <input
          type="file"
          accept="image/*">

      </div>

      <div class="uploadBox">

        🎬 Upload Video

        <input
          type="file"
          accept="video/*">

      </div>

    `;

  }


  if(section === "reports"){

    content = `

      <div class="card">

        🚨 Reports

        <p class="muted">
          Owner អាចពិនិត្យមាតិកាដែល
          អ្នកប្រើបាន Report។
        </p>

      </div>

    `;

  }


  if(section === "statistics"){

    content = `

      <div class="card">
        👥 Users
        <h2>0</h2>
      </div>

      <div class="card">
        🎵 Music
        <h2>${songs.length}</h2>
      </div>

      <div class="card">
        📰 News
        <h2>${news.length}</h2>
      </div>

    `;

  }


  if(section === "age"){

    content = `

      <div class="card">

        <div
          style="
            display:flex;
            align-items:center;
            justify-content:space-between;
          ">

          <b>
            🎂 Age Restriction
          </b>

          <label class="switch">

            <input
              id="ageToggle"
              type="checkbox"
              ${
                ageRestrictionEnabled
                  ? "checked"
                  : ""
              }
              onchange="
                updateAgeSetting()
              ">

            <span class="slider">
            </span>

          </label>

        </div>

      </div>


      <div class="card">

        <label>
          អាយុអប្បបរមា
        </label>

        <input
          id="minimumAge"
          class="input"
          type="number"
          min="1"
          max="100"
          value="${minimumAge}">

        <button
          class="primary"
          onclick="saveAgeSetting()">
          💾 រក្សាទុក
        </button>

      </div>

    `;

  }


  if(section === "fonts"){

    content = `

      <div class="card">

        <b>
          🔤 Font Management
        </b>

        <p class="muted">
          Owner អាចរៀបចំ Font
          ដែលអាចប្រើនៅក្នុង App។
        </p>

      </div>

      <div class="uploadBox">

        📁 បញ្ចូល Font ថ្មី

        <input
          type="file"
          accept=".ttf,.otf,.woff,.woff2">

      </div>

    `;

  }


  if(section === "notifications"){

    content = `

      <textarea
        class="textarea"
        placeholder="សរសេរសារ Notification...">
      </textarea>

      <button
        class="primary"
        onclick="
          showToast(
            'បានផ្ញើ Notification'
          )
        ">
        🔔 ផ្ញើ Notification
      </button>

    `;

  }


  document.getElementById(
    "adminContent"
  ).innerHTML =
    content;


  document
    .getElementById(
      "adminModal"
    )
    .classList.add(
      "show"
    );

}


/* =====================================================
                      AGE SETTINGS
===================================================== */

function updateAgeSetting(){

  const checkbox =
    document.getElementById(
      "ageToggle"
    );


  if(checkbox){

    ageRestrictionEnabled =
      checkbox.checked;

  }

}


function saveAgeSetting(){

  const input =
    document.getElementById(
      "minimumAge"
    );


  const age =
    parseInt(
      input.value
    );


  if(
    !age ||
    age < 1 ||
    age > 100
  ){

    showToast(
      "អាយុមិនត្រឹមត្រូវ"
    );

    return;

  }


  minimumAge =
    age;


  ageRestrictionEnabled =
    document.getElementById(
      "ageToggle"
    ).checked;


  localStorage.setItem(
    "chat_age_enabled",
    ageRestrictionEnabled
  );


  localStorage.setItem(
    "chat_min_age",
    minimumAge
  );


  showToast(
    "បានរក្សាទុក Age Restriction"
  );

}


/* =====================================================
                          MODAL
===================================================== */

function closeModal(id){

  document
    .getElementById(id)
    .classList.remove(
      "show"
    );

}


/* =====================================================
                          TOAST
===================================================== */

function showToast(message){

  const toast =
    document.getElementById(
      "toast"
    );


  toast.textContent =
    message;


  toast.style.display =
    "block";


  clearTimeout(
    window.toastTimer
  );


  window.toastTimer =
    setTimeout(
      ()=>{
        toast.style.display =
          "none";
      },
      1800
    );

}


/* =====================================================
                          LOGOUT
===================================================== */

function logout(){

  localStorage.removeItem(
    "chat_user"
  );


  location.reload();

}


/* =====================================================
                     LOAD SETTINGS
===================================================== */

function loadSettings(){

  const dark =
    localStorage.getItem(
      "chat_dark"
    ) === "true";


  if(dark){

    document.body.classList.add(
      "dark"
    );

  }


  const font =
    localStorage.getItem(
      "chat_font"
    );


  const fontSize =
    localStorage.getItem(
      "chat_font_size"
    );


  if(font){

    document.body.style.fontFamily =
      font;


    const select =
      document.getElementById(
        "fontSelect"
      );


    if(select){

      select.value =
        font;

    }

  }


  if(fontSize){

    document.body.style.fontSize =
      fontSize + "px";


    const range =
      document.getElementById(
        "fontSize"
      );


    if(range){

      range.value =
        fontSize;

    }

  }


  const language =
    localStorage.getItem(
      "chat_language"
    );


  if(language){

    document.getElementById(
      "languageLabel"
    ).textContent =
      language;

  }


  const savedAge =
    localStorage.getItem(
      "chat_min_age"
    );


  const savedAgeEnabled =
    localStorage.getItem(
      "chat_age_enabled"
    );


  if(savedAge){

    minimumAge =
      parseInt(savedAge);

  }


  if(savedAgeEnabled !== null){

    ageRestrictionEnabled =
      savedAgeEnabled === "true";

  }

}


/* =====================================================
                    MESSAGE LISTENER
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  ()=>{

    const input =
      document.getElementById(
        "messageInput"
      );


    if(input){

      input.addEventListener(
        "input",
        updateMessageButtons
      );


      input.addEventListener(
        "keydown",
        event=>{

          if(
            event.key === "Enter" &&
            !event.shiftKey
          ){

            event.preventDefault();

            sendMessage();

          }

        }
      );

    }


    /*
       Click outside Friend Panel
    */

    const panel =
      document.getElementById(
        "friendPanel"
      );


    panel.addEventListener(
      "click",
      event=>{

        if(
          event.target === panel
        ){

          closeFriendPanel();

        }

      }
    );

  }
);


/* =====================================================
                          START
===================================================== */

loadSettings();

renderSignup();


if(
  localStorage.getItem(
    "chat_user"
  )
){

  enterApp();

}

</script>

</body>
</html>
