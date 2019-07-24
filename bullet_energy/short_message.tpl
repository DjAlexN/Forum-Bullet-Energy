<li class="msg" id="message-{messageId}">
  <div class="msgAutorInfo">
    <div class="boxInert">
      <div class="avatar">[popupUserCard]<img src="{foto}" alt="" />[/popupUserCard]</div>
      [online]<span class="online"><span></span>Online</span>[/online]
      [offline]<span class="offline"><span></span>Offline</span>[/offline]
      <div class="autorInfo">
        <p>[profile]{autorName}[/profile]</p>
        [titleUser]
        <p>Tytuł: {titleUser}</p>
        [/titleUser]
        <p>{userGroup}</p>
        <p class="msgUserCount">Postów: {forumPostNum}</p>
        [isUserTrophies]
        <p class="trophiesCount">Nagrody użytkowników: [userTrophies]{countTrophies}[/userTrophies]</p>
        [/isUserTrophies]
        [isAccessWarning]
        <p>Ostrzeżeń: {countWarning}</p>
        [/isAccessWarning] </div>
    </div>
  </div>
  <div class="msgText">{messageText}
    [signatureBox]
    <p class="signature">{signature}</p>
    [/signatureBox] </div>
    
  <div class="msgInfo"><div class="clr"></div>
    <div>{moderatorOptionInput}{messageDate} / {messageLinck} </div>
  </div>
  [not-group=5] 
  <!--controlMsgBox important-->
  <div class="controlMsgBox msgIControl"> [complaint]Zgłoś[/complaint]
    [deleteMsg]Usuń[/deleteMsg] 
    [msgEdit]Edytuj[/msgEdit] 
    [fast]Odpisz[/fast]{like} </div>
  [/not-group] </li>
