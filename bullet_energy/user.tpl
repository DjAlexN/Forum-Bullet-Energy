[msg]
<li class="msg userPost">
  <div class="avatarBoxPostAction">[popupUserCard]<img src="{foto}" alt="" />[/popupUserCard]</div>
  <div class="contentPostUser">
    <h3>[linckMessage]{titleTopic}[/linckMessage]</h3>
    <div class="infoPostMsgUser">Wysłany przez [profile]{messageAuthor}[/profile], dnia {messageDate} w sekcji: [linckTree]{nameTree}[/linckTree]</div>
    <div class="postUserBox">{messageText}</div>
  </div>
</li>
[/msg]
[topic]
<li class="msg userPost">
  <div class="avatarBoxPostAction">[popupUserCard]<img src="{foto}" alt="" />[/popupUserCard]</div>
  <div class="contentPostUser">
    <h3>[linckTopic]{titleTopic}[/linckTopic]</h3>
    <div class="infoPostMsgUser">Wysłany przez [profile]{messageAuthor}[/profile], Odpowiedzi: {replyCount}, dnia {messageDate} w sekcji: [linckTree]{nameTree}[/linckTree]</div>
    <div class="postUserBox">{messageText}</div>
  </div>
</li>
[/topic]
[like]
<li class="msg userPost">
  <div class="avatarBoxPostAction">[popupUserLikedCard]<img src="{fotoUserLiked}" alt="" />[/popupUserLikedCard]</div>
  <div class="contentPostUser">
    <h3>[popupUserLikedCard]{userLiked}[/popupUserLikedCard] polubił twoją wiadomość w temcie [linckMessage]{titleTopic}[/linckMessage].</h3>
    <div class="infoPostMsgUser"><span title="{userLiked} podobnie polubił {likedDate}">{likedDate}</span></div>
    <div class="postUserBox">{messageText}</div>
  </div>
</li>
[/like]