<div class="contentBoxTopicList treeBox"> [rulesText]
  <div class="treeTitl infoBox">
    <div class="inertBox">
      <div class="treeDesc">{rulesText}</div>
    </div>
  </div>
  [/rulesText]
  <ol>
   
    <li class="treeItem">
      <dl class="ListParam">
        <dt>Tytuł Tematu:</dt>
        <dd>
          <input type="text" class="forum_input" autocomplete="off" maxlength="200" size="50" value="{topicName}" name="topic_name">
        </dd>
      </dl>
      <dl class="ListParam">
        <dt>Opis Tematu:</dt>
        <dd>
          <textarea class="FormDescr" style="min-height:110px"  name="topic_descr" rows="5" cols="60">{topicDescription}</textarea>
        </dd>
      </dl>
      [paramPrivateTopic]
      <dl class="ListParam">
        <dt>Ustawić temat jako prywatny?</dt>
        <dd>
          <input type="checkbox" value="1" id="news_fixed" onclick="blockCase('topic_type','user_topic')" name="topic_type">
        </dd>
      </dl>
      <dl id="user_topic" style="display:none" class="ListParam">
        <dt>Podaj nazwę użytkownika, aby mógł uzyskać dostęp do tego tematu:</dt>
        <dd>
          <textarea class="FormDescr" style="min-height:110px"  name="private_topic_user" rows="5" cols="60"></textarea>
        </dd>
      </dl>
      [/paramPrivateTopic]
      [vote]
      <dl class="ListParam">
        <dt>Dodaj Ankietę</dt>
        <dd>
          <input type="checkbox" value="1" id="news_fixed" onclick="blockCase('isvote','vote_block_topic')" name="isvote">
        </dd>
      </dl>
      <dl id="vote_block_topic" style="display:none" class="ListParam">
        <dt>Pytanie:</dt>
        <dd>
          <input type="text" autocomplete="off" name="vote_titl" value="" size="50" maxlength="200" class="forum_input">
        </dd>
        <dt>Odpowiedź(i):</dt>
        <dd>
          <input type="text" autocomplete="off" name="vote_replic[]" value="" size="50" maxlength="100" class="forum_input">
        </dd>
        <dt class="insert_belov">&nbsp;</dt>
        <dd>
          <input onclick="addReplicVote()" type="button" value="Dodaj Ankietę"  class="forum_input" id="news_fixed" name="vote_multi">
        </dd>
        <dt>&nbsp;</dt>
        <dd>
          <input type="checkbox" value="1" id="news_fixed" name="vote_multi">
          Zezwalaj na wiele zaznaczeń </dd>
        <dt>&nbsp;</dt>
        <dd>
          <input type="checkbox" value="1" id="news_fixed" name="vote_visible_poll">
          Pokaż, kto głosował </dd>
      </dl>
      [/vote]
      <dl class="ListParam">
        <dt>&nbsp;</dt>
        <dd>
          <div class="topicBoxAdd"> {Bbcode}{Form} </div>
        </dd>
      </dl>
      <dl class="ListParam">
        <dt>&nbsp;</dt>
        <dd id="uploaderSwf" style="position:relative;margin:5px 0 5px 125px">
          <button class="b01" value="create" type="submit" name="add">Wyślij</button>
          <button class="b01" value="preview" type="button" name="rev" onclick="doPreview('topic'); return false;">Podgląd</button>
          {Uploader} </dd>
        <!--id uploaderSwf important-->
      </dl>
    </li>
  </ol>
</div>
