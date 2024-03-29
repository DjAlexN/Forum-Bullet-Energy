<div class="contentBoxTopicList treeBox searchBox">
  <ol>
    <li class="treeItem">
      <dl class="ListParam">
        <dt>Szukaj według słów kluczowych:</dt>
        <dd>
          <input autocomplete="off" type="text" class="forum_input" maxlength="200" size="50" value="{keyValue}" name="query">
        </dd>
        <dd class="margLeft">
          <label for="search_titl">
            <input type="checkbox" {keyOnliTitle} value="1" id="search_titl" name="search_titl">
            Tylko tytuł</label>
        </dd>
      </dl>
      <dl class="ListParam">
        <dt>Szukaj według postach:</dt>
        <dd>
          <input type="text" autocomplete="off" class="forum_input" maxlength="200" size="50" value="{keyUser}" name="user">
        </dd>
        <dd class="margLeft">Nick/Autor (oddziel przecinkami)</dd>
      </dl>
      <dl class="ListParam">
        <dt>Szukaj według daty:</dt>
        <dd>
          <input id="datepicker_o" autocomplete="off" style="width:162px" type="text" class="forum_input" maxlength="200" size="50" value="{keyDate}" name="date">
          -
          <input id="datepicker_e" autocomplete="off" style="width:162px" type="text" class="forum_input" maxlength="200" size="50" value="{keyDateOut}" name="date_end">
        </dd>
      </dl>
      <dl class="ListParam">
        <dt>Obszar wyszukiwania:</dt>
        <dd><select id="treeSelectSearch" name="tree" multiple="multiple" style="min-height:150px">{tree}</select></dd>
      </dl>
      <dl class="ListParam">
        <dt>Sortuj według:</dt>
        <dd  class="margLeft" style="margin-top:5px">
          <select name="sort">
             <option {keyRelSort} value="2">Najbardziej Popularnych</option>
              <option {keyReplySort} value="0">Łączna liczba odpowiedzi</option>
            <option {keyDateSort} value="1">Data dodania</option>
          
          </select>
        </dd>
      </dl>
      <dl class="ListParam">
        <dt>Sort results by:</dt>
        <dd  class="margLeft" style="margin-top:3px">
          <select name="order">
            <option {sortDesc} value="0">Malejąco (Z to A or 9 to 0)</option>
            <option {sortAsc} value="1">Rosnąco (A to Z or 0 to 9)</option>
          </select>
        </dd>
      </dl>
      <dl class="ListParam">
        <dd>
          <div style="margin:5px 0 5px 170px">
            <button class="b01" value="new_search" type="submit" name="search">Search</button>
          </div>
        </dd>
      </dl>
    </li>
  </ol>
</div>
