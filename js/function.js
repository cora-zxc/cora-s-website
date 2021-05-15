
/*function func_dropdownmenu(item){
	if(item.style.display=="none" || item.style.display==="")
		item.style.display="block";
	else
		item.style.display="none";	
}*/
/*function showContent(tagStr) {
  const tag = document.querySelector(tagStr);
  const hideName = 'displayNone';
  let temp; // 宣告一個臨時暫存的變數
  // 1.隱藏上次顯示的content 
  // 取得上次顯示內文 的 element
  const preShowTag = document.querySelector('#contain > div:not(.displayNone)');
  // 判斷有沒有抓到上次顯示內文 的 element
  // 是 => 進行1.階段的作業
  // 否 => 跳過1.階段的作業
  if (preShowTag) {
    // 將 上次顯示內文 的 element 的 className 存到暫存變數 temp
    temp = preShowTag.className;
    // 為 temp 添加 hideName 的隱藏效果
    temp += ' ' + hideName;
    // 移除 temp 前後的空白
    temp = temp.trim();
    // 將已賦予隱藏效果的 className 更新回上次顯示內文 的 element 的 className
    preShowTag.className = temp;
  }
  // 2.顯示 tag
  // 將 tag 的 className 存到暫存變數 temp
  temp = tag.className;
  // 為 temp 移除 hideName 的隱藏效果
  temp = temp.replace(hideName, '');
  // 移除 temp 前後的空白
  temp = temp.trim();
  // 將已移除隱藏效果的 className 更新回 tag 的 className
  tag.className = temp;
}*/





function displayToggleByJQuery(item) {
	$(item).slideToggle(500);
}
function linkAboutMeContentToJson(num){
	time.textContent=aboutMe[num].date;
	title.textContent=aboutMe[num].topic;
	contain.innerHTML=aboutMe[num].text
}
function linkNotesHtmlContentToJson(num){
	time.textContent=notesHtml[num].date;
	title.textContent=notesHtml[num].topic;
	contain.innerHTML=notesHtml[num].text
}
function linkTreasureMemoryContentToJson(num){
	time.textContent=treasureMemory[num].date;
	title.textContent=treasureMemory[num].topic;
	contain.innerHTML=treasureMemory[num].text
}
function loadMainListItem(){
	for(var i=0;i<itemsNotesHtml.length;i++){
		document.getElementById("item_a").innerHTML += 
			"<li onclick='linkNotesHtmlContentToJson("+itemsNotesHtml[i].type+")' class='leftItemStyle'>"+
			itemsNotesHtml[i].title+"</li>";
	};
	for(var i=0;i<itemsNotesCss.length;i++){
		document.getElementById("item_b").innerHTML += 
			"<li class='leftItemStyle'>"+
			itemsNotesCss[i].title+"</li>";
	};
	for(var i=0;i<itemsTreasureMemory.length;i++){
		document.getElementById("item_c").innerHTML += 
			"<li onclick='linkTreasureMemoryContentToJson("+itemsTreasureMemory[i].type+")' class='leftItemStyle'>"+
			itemsTreasureMemory[i].title+"</li>";
	}
}



