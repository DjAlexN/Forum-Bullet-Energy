<li class="treeItem {status}">
  <div class="boxTreeItem"><span id="treeId_{treeId}" class="treeIcon" title="{statusTitl}"></span>
    <div class="treeInfoBox">
      <h4>[linckTree]{nameTree}[/linckTree]</h4>
      [blockInfo]
      <div class="countBox">
        <dl>
          <dt>Tematy:</dt>
          <dd>{topic}</dd>
          <dt>Posty:</dt>
          <dd>{message}</dd>
        </dl>{TreeChild}{rssTree}
      </div>
      [/blockInfo]
      [LastMessage]
      <div class="replyLast">
        <p title="Idź do ostatniego posta">Ostatni: <a href="{lastTopicLinck}"> {lastTopicName} </a></p>
        <p>[popupUserCard]{lastAutorName}[/popupUserCard], <i>{lastMessageDate}</i></p>
      </div>
      [/LastMessage]</div>
  </div>
</li>