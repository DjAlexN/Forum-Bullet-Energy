<li class="msg">
  <div class="msgAutorInfo">
    <div class="boxInert">
      <div class="avatar">[popupUserCard]<img src="{foto}" alt="" />[/popupUserCard]</div>
      [online]<span class="online"><span></span>Online</span>[/online]
      [offline]<span class="offline"><span></span>Offline</span>[/offline]
      <div class="autorInfo">
        <p>[popupUserCard]{autorName}[/popupUserCard]</p>
        [titleUser]
        <p>Tytuł: {titleUser}</p>
        [/titleUser]
        <p>{userGroup}</p>
        <p class="msgUserCount">Postów: {forumPostNum}</p>
        [isUserTrophies]
        <p class="trophiesCount">Nagrody Użytkownika: [userTrophies]{countTrophies}[/userTrophies]</p>
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
  <div class="msgInfo">
    <div>{messageDate}</div>
  </div>
</li>
