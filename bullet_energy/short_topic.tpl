<li class="topicList {status}" id="topic_item-{id}">
  <div class="boxTopic avatarMini"><span class="treeIcon" title="{statusTitl}"></span></div>
  <div class="boxTopic topicInfo">
    <h4 style="float: left;">{unreadLinck}{uniqueStatusTopic}&nbsp;[linck]{title}[/linck]</h4>{pageList}
    <div class="icon">{icon}</div>
    <div class="topicPublicInfo">Opublikowany na: {topicPostDate}</div>
    <div class="topicControl">{edit}</div>
  </div>
  <div class="boxTopic statistic">
    <p><strong>Odpowiedzi:</strong> {replyCount}</p>
    <p><strong>Wyświetleń:</strong> {viewCount}</p>
  </div>
  [LastMessage]
  <div class="boxTopic topicLastPost">
    [popupUserCard]<img class="avatarLastAutor" src="{lastAutorAvatarLinck}" alt="" />[/popupUserCard] 
    <p style="padding-top: 8px;"><strong>Autor</strong>: [profile]{lastAutorName}[/profile]</p>
    <p title="Idź do ostatniego posta"><strong>[lastMessageLinck]{lastMessageDate}[/lastMessageLinck]</strong></p>
  </div>
  [/LastMessage]
</li>