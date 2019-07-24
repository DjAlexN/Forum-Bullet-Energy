[infoBox]
<div class="treeTitl infoBox">
  <div class="inertBox">
    <h3>{infoTitl}</h3>
    <div class="treeDesc">{infoText}</div>
  </div>
</div>
[/infoBox]
<h3 class="treeNameList">{treeName}</h3>
<div id="desTtee">{treeDescription}{treeOption}{treeRss}</div>
<div class="contentBoxTopicList">
  <dl class="headerBox boxList">
    <dt class="avatarMini"><span>Avatar:</span></dt>
    <dd class="topicTitl"><span class="sortTitl">Tytuł</span></dd>
    <dd class="answerTopic"> <span class="sortView">Statystyki</span> </dd>
    <dd class="lastMsg"><span class="sortLastPost">Ostatni Post</span></dd>
  </dl>
  <ol class="listTopicBlock" id="contentBoxAppendTo">
    {listTopic}
  </ol>
  <div class="sepBoxBot"><span>{optionList}</span></div>
</div>
{navigation}
<!--IMPORTANT listTopicBlock, class span sortXXX-->
<script language="javascript" type="text/javascript">
function MenuBuild(m_id) {
  var menu = new Array()
  menu[0] = '<a onclick="topicConfigure(\'clozed\'); return false;" href="#">Zamknij Temat</a>';
  menu[1] = '<a onclick="topicConfigure(\'open\'); return false;" href="#">Otwórz Temat</a>';
  menu[2] = '<a onclick="topicConfigure(\'pin\'); return false;" href="#">Przyklej Temat</a>';
  menu[3] = '<a onclick="topicConfigure(\'unpin\'); return false;" href="#">Odepnij Temat</a>';
  menu[4] = '<a onclick="topicConfigure(\'move\'); return false;" href="#">Przenieś Temat</a>';
  menu[5] = '<a onclick="topicConfigure(\'merge\'); return false;" href="#">Scal Tematy</a>';  
  menu[6] = '<a onclick="topicConfigure(\'delete\'); return false;" href="#">Usuń Temat</a>';  

  return menu;
}
    var loading = false;

$(window).scroll(function(){
    if((($(window).scrollTop()+$(window).height())+250)>=$(document).height()) {
        if(loading == false) {
            loading = true;
                         
              var a = $("#ajaxGetTopic").attr("data-type");
              if (!a) { 
                  loading = true;
                  return false;
              }
    
              ShowLoading("");
              
              $.post(document.URL, {action: "categories",page: a}, function (a) {
                  if (a.param == 1) {
                        $("#paginationForum").replaceWith(a.pagination);
                        $("#ajaxGetTopic").replaceWith(a.linck);
                        $(a.data).appendTo("#contentBoxAppendTo")
                        loading = false;
                  } else {
                        loading = true;
                  }
              }, "json");
              
              HideLoading("");
        }
    }
});
</script>