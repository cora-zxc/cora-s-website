
var aboutMe = [
	{
		"date":"ABOUT ME",
		"topic":"我是一個正在學習新事物的人. 神奇寶貝進化中...",
		"text":"Make ourself a better man, make the world a better place."
	}
];

var notesHtml = [
	{
		"date":"2020/09/13",
		"topic":"HTML的六階標題",
		"text":"<div>\
		        <hr width=50% align=left>\
		        依序是h1至h6的頭尾標籤，<br>\
		        可見h1用於主標題，h2為次標題，<br>\
		        最小標題則為h6。<br><br>\
		        效果如下:<br>\
		        <h1>這是h1的標題大小</h1>\
		        <h2>這是h2的標題大小</h2>\
		        <h3>這是h3的標題大小</h3>\
		        <h4>這是h4的標題大小</h4>\
		        <h5>這是h5的標題大小</h5>\
		        <h6>這是h6的標題大小</h6>\
		     </div>"
	},
	{
		"date":"2020/09/15",
		"topic":"插入background",
		"text":"<div>\
		     	<ol>\
		     		<li>先找好你的背景圖片</li>\
					<li>養好習慣把圖片都統一存放在稱為image(或其他名稱)的資料夾中</li>\
					<li>假設背景圖檔檔名為:bg01.jpg</li>\
					<li>在style.css的檔案中,寫入如下語法 -> \
						background-image: url('+'image/bg01.jpg'+'')</li>\
					<li>有沒有把圖檔存放在資料夾, 差異在於語法需在背景圖檔檔名前加上圖檔文件夾名稱+/';\
				</ol>\
		     </div>"
	},
	{
		"date":"2020/09/16",
		"topic":"十六進位色碼標示法(Hex Color Codes)",
		"text":"<div>\
		     	<ol>\
		     		<li>RGB 代表的是三原色光中的紅綠藍，之間依不同比例即可組合出各種顏色</li>\
		     		<li>十六進位就是由數字0到9加上字母A到F來表示，後者可視為數字10到15</li>\
		     			<ul>\
		     				<li>0明度最低</li>\
		     				<li>8明度中間</li>\
		     				<li>F明度最高</li>\
		     				<li>數值越低越接近黑色,越高則為白色</li>\
		     			</ul>\
		     		<li>在瀏覽器搜尋關鍵字\
		     			<a href='https://www.google.com/search?client=firefox-b-d&q=color+picker'\
						target='_blank'>\
							color picker\
						</a>\
					</li>\
				</ol>\
		     </div>\
		     <image src='image/RGB16.png' class='img-thumbnail' alt='Hex Color Codes' title='RGB'/>"
	},
	{
		"date":"2021/01/11",
		"topic":"清單",
		"text":"<div>\
		     	<ul>\
		     		<li>編號清單使用數字</li>\
		     		<li>項目清單使用符號</li>\
		     		<li>定義清單用來定義名詞術語</li>\
		     	</ul>\
		     </div>\
		     <image src='image/list00.png' class='img-thumbnail' alt='' title=''/>"
	},
	{
		"date":"2021/01/11",
		"topic":"超連結",
		"text":"<div>\
		     	<ul>\
					<li>\
						絕對URL-連結到其他網站 ex:\
						<a href='https://www.google.com/' target='_blank'>\
							Google\
						</a>\
					</li>\
				</ul>\
				<div class='exampleStyleBox'>\
					&lt;\
					a href='https://www.google.com/'\
					&gt;\
					Google\
					&lt;\
					/a\
					&gt;\
				</div>\
				<ul>\
					<li>\
						相對URL-連結到同一網站的不同頁面 ex: \
						<a href='home.html' target='_blank'>\
							home\
						</a>\
					</li>\
				</ul>\
				<div class='exampleStyleBox'>\
					&lt;\
					a href='資料夾名/檔名home.html'\
					&gt;\
					home\
					&lt;\
					/a\
					&gt;\
				</div>\
				<i>\
					<font size='2'>\
						若欲呈現另開視窗的效果,則在絕對/相對URL後加入字串target='_blank'即可;<br>\
						否則會蓋過原頁面.\
					</font>\
				</i>\
				<ul>\
					<li>\
						EMAIL連結-連結到信箱並寄信給某收件人 ex: \
						<a href='mailto:zxc188950@yahoo.com.tw'>\
							email me\
						</a>\
					</li>\
				</ul>\
				<div class='exampleStyleBox'>\
					&lt;\
					a href='mailto:<strong>置入email address</strong>'\
					&gt;\
					email me\
					&lt;\
					/a\
					&gt;\
				</div>\
				<ul>\
					<li>連結到同網頁的某個部分</li>\
						<ol>\
							<li>先在選定的HTML元素上指派id屬性(單一網頁,id屬性名稱不可重複) ex: id=alink</li>\
							<li>在超連結a標籤中, 加入字串href=''<strong>#</strong>alink''\
						</ol>\
				</ul>\
				<div class='exampleStyleBox'>\
					&lt;\
					a href=''#alink''\
					&gt;\
					我會連到頁面上有id=alink的地方唷\
					&lt;\
					/a\
					&gt;\
				</div>\
		     </div>"
	},
	{
		"date":"2021/01/15",
		"topic":"影像",
		"text":"<div>\
		     	<ol>\
		     		<li>img元素為空白元素,沒有結尾標記.</li>\
		     		<li>src & title & alt屬性都直接寫在img標籤內即可</li>\
		     			<ul>\
		     				<li>src屬性:影像檔案名稱, 以相對URL表示</li>\
		     				<li>alt屬性:圖片替代文字, 提供該影像之詳細描述. \
		     				若影像無法呈現, 會顯示此屬性之描述.</li>\
		     				<li>title屬性:滑鼠移經顯示文字標示</li>\
		     			</ul>\
		     	</ol>\
				<div class='exampleStyleBox'>\
					&lt;\
						<strong>\
							img\
						</strong>\
						<strong>\
							<i>src</i>\
						</strong>='檔案夾名稱/影像檔案名稱ex:image/img-ring.jpg'\
						<strong>\
							<i>alt</i>\
						</strong>\
						='圖片替代文字ex:這是Tim和Cora的第一對情侶手工對戒'\
						<strong>\
							<i>title</i>\
						</strong>'滑鼠移經顯示文字標示ex:Couple Ring'\
					&gt;\
				</div>\
		     </div>\
		     <image src='image/img-ring.jpg' class='img-thumbnail' alt='這是Tim和Cora的第一對情侶手工對戒' title='Couple Ring'>"
	},
	{
		"date":"2021/01/15",
		"topic":"表格",
		"text":"<div>\
		     	<ul>\
					<li>使用table元素,至於最外層</li>\
					<li>使用tr元素製作每一橫列</li>\
					<li>表格內容使用td元素,標題則使用th元素</li>\
					<li>在td和th元素內使用rowspan/colspan,則有跨列/跨攔的效果.</li>\
				</ul>\
				<table class='table table-hover' 'width='300px' border='3' bgcolor='#f7f0dc'>\
					<tr>\
						<th></th>\
						<th>周一</th>\
						<th>周二</th>\
						<th>周三</th>\
						<th>周四</th>\
						<th>周五</th>\
					</tr>\
					<tr>\
						<th>第一節</th>\
						<td>國</td>\
						<td>英</td>\
						<td>數</td>\
						<td>自</td>\
						<td>社</td>\
					</tr>\
					<tr>\
						<th>第二節</th>\
						<td>體</td>\
						<td>國</td>\
						<td>數</td>\
						<td>自</td>\
						<td>美</td>\
					</tr>\
					<tr>\
						<th>第三節</th>\
						<td>數</td>\
						<td>自</td>\
						<td>政</td>\
						<td>國</td>\
						<td>英</td>\
					</tr>\
					<tr>\
						<th>第四節</th>\
						<td>英</td>\
						<td>國</td>\
						<td>社</td>\
						<td>美</td>\
						<td>數</td>\
					</tr>\
					<tr>\
						<th colspan='6'>中午</th>\
					</tr>\
				</table>\
				<div class='exampleStyleBox'>\
					&lt;table width=''300px'' border=''3'' bgcolor=''#f7f0dc''&gt;<br>\
						&nbsp;&nbsp;&lt;tr&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;&lt;/th&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;周一&lt;/th&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;周二&lt;/th&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;周三&lt;/th&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;周四&lt;/th&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;周五&lt;/th&gt;<br>\
						&nbsp;&nbsp;&lt;/tr&gt;<br>\
						&nbsp;&nbsp;&lt;tr&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;第一節&lt;/th&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;國&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;英&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;數&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;自&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;社&lt;/td&gt;<br>\
						&nbsp;&nbsp;&lt;/tr&gt;<br>\
						&nbsp;&nbsp;&lt;tr&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;第二節&lt;/th&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;體&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;國&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;數&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;自&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;美&lt;/td&gt;<br>\
						&nbsp;&nbsp;&lt;/tr&gt;<br>\
						&nbsp;&nbsp;&lt;tr&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;第三節&lt;/th&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;數&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;自&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;政&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;國&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;英&lt;/td&gt;<br>\
						&nbsp;&nbsp;&lt;/tr&gt;<br>\
						&nbsp;&nbsp;&lt;tr&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;第四節&lt;/th&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;英&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;國&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;社&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;美&lt;/td&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;數&lt;/td&gt;<br>\
						&nbsp;&nbsp;&lt;/tr&gt;<br>\
						&nbsp;&nbsp;&lt;tr&gt;<br>\
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;th colspan=''6''&gt;中午&lt;/th&gt;<br>\
						&nbsp;&nbsp;&lt;/tr&gt;<br>\
					&lt;/table&gt;\
				</div>\
		     </div>"
	},
	{
		"date":"2021/01/11",
		"topic":"表單",
		"text":"<div>\
		     	<form action=''>\
					<fieldset style='width:500px'>\
					<legend>文字輸入</legend>\
						<p>\
							&nbsp;&nbsp;Name:<input type='text' name='name' size='30'>\
						</p>\
					</fieldset>\
				</form>\
				<form action=''>\
					<fieldset style='width:500px'>\
					<legend>密碼輸入</legend>\
						<p>\
							&nbsp;&nbsp;Password:<input type='password' name='password' size='30' maxlength='6'>\
						</p>\
					</fieldset>\
				</form>\
				<form action=''>\
					<fieldset style='width:500px'>\
					<legend>文字區塊</legend>\
						<p>\
							&nbsp;&nbsp;Comments:\
						</p>\
							&nbsp;&nbsp;\
							<textarea name='comments' col='150' row='200'>\
								leave your comments...\
							</textarea>\
					</fieldset>\
				</form>\
				<form action=''>\
					<fieldset style='width:500px'>\
					<legend>單選紐 </legend>\
						<p>\
							&nbsp;&nbsp;你覺得學網頁很難嗎?\
							<input type='radio' name='網頁難嗎' value='簡單'>簡單\
							<input type='radio' name='網頁難嗎' value='普通'>普通\
							<input type='radio' name='網頁難嗎' value='困難'>困難\
						</p>\
					</fieldset>\
				</form>\
				<form action=''>\
					<fieldset style='width:500px'>\
					<legend>勾選框 (*可複選)</legend>\
						<p>\
							&nbsp;&nbsp;喜歡的水果?\
							<input type='checkbox' name='喜歡的水果' value='香蕉'>香蕉\
							<input type='checkbox' name='喜歡的水果' value='葡萄'>葡萄\
							<input type='checkbox' name='喜歡的水果' value='蘋果'>蘋果\
						</p>\
					</fieldset>\
				</form>\
				<form action=''>\
					<fieldset style='width:500px'>\
					<legend>下搭選單攔位 (*單選)</legend>\
						<p>\
							<select name='最高學歷'>\
								<option value='預設'>預設\
								<option value='國中'>國中\
								<option value='高中'>高中\
								<option value='大學'>大學\
								<option value='研究所'>研究所\
								<option value='博士'>博士\
							</select>\
						</p>\
					</fieldset>\
				</form>\
				<form action='' method='post'>\
					<fieldset style='width:500px'>\
					<legend>檔案輸入區塊</legend>\
						<p>\
							&nbsp;&nbsp;請上傳大頭照\
							<input type='file' name='大頭照'><br>\
							&nbsp;&nbsp;<input type='button' value='上傳'>\
						</p>\
					</fieldset>\
				</form>\
				<form action=''>\
					<fieldset style='width:500px'>\
					<legend>送出按鈕</legend>\
						<p>\
							&nbsp;&nbsp;請分享一節你最喜愛的經文\
							<input type='text' name='最愛的經文'>\
							<input type='button' value='分享'>\
						</p>\
					</fieldset>\
				</form>\
				<form action=''>\
					<fieldset style='width:500px'>\
						<legend>影像按鈕</legend>\
						<p>\
							&nbsp;&nbsp;請分享一節你最喜愛的經文\
							<input type='text' name='最愛的經文'>\
							<input type='image' src='image/subscribe-button.png' width='80' height='30'>\
						</p>\
					</fieldset>\
				</form>\
				<form action=''>\
					<fieldset style='width:500px'>\
					<legend>Email/URL輸入</legend>\
						<p>\
							&nbsp;&nbsp;請輸入email\
							<input type='email' name='email'>\
							<input type='button' value='提交'>\
						</p>\
						<p>\
							&nbsp;&nbsp;請輸入URL\
							<input type='url' name='URL'>\
							<input type='button' value='提交'>\
						</p>\
					</fieldset>\
				</form>\
				<form action=''>\
					<fieldset style='width:500px'>\
					<legend>搜尋輸入</legend>\
						<p>\
							&nbsp;&nbsp;搜尋\
							<input type='search' name='搜尋' placeholder='關鍵字...'>\
							<input type='button' value='search'>\
						</p>\
					</fieldset>\
				</form>\
		     </div>"
	},
	{
		"date":"2021/01/15",
		"topic":"iframe",
		"text":"<div>\
		     	<h4>在網頁切出小窗戶嵌入其他html網頁</h4>\
				<p>範例:<br>\
					Google map search : 台灣\
				</p>\
					<iframe width='600' height='450'\
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7497902.0225315625!2d115.58905080082596!3d23.\
					42129748404592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ef3065c07572f%3A0xe711f004bf9c5469!\
					2z5Y-w54Gj!5e0!3m2!1szh-TW!2stw!4v1611028100836!5m2!1szh-TW!2stw' frameborder='0'>\
					</iframe>\
		     </div>"
	},
	{
		"date":"2021/01/19",
		"topic":"視訊和音訊",
		"text":"<div>\
		     	<p>視訊&lt;video&gt;</p>\
		     		<div class='exampleStyleBox'>\
						&lt;video src='video/視訊檔案名稱ex: 2020-bolomi.mp4'<br>\
							&nbsp;&nbsp;poster='image/播放前的畫面ex: img-ring.jpg'<br>\
							&nbsp;&nbsp;width='400px' height='500px'<br>\
							&nbsp;&nbsp;preload='none'&gt;<br>\
						&lt;/video&gt;<br>\
					</div>\
				<p>音訊&lt;audio&gt;</p>\
					<div class='exampleStyleBox'>\
						&lt;audio&gt;<br>\
							&nbsp;&nbsp;&lt;source src='audio/音訊檔案名稱.mp3'&gt;<br>\
						&lt;/audio&gt;\
					</div>\
		     </div>"
	}
];
var itemsNotesHtml = [
	{
		"title":"HTML的六階標題",
		"type":"0"
	},
	{
		"title":"插入background",
		"type":"1"
	},
	{
		"title":"十六進位色碼標示法",
		"type":"2"
	},
	{
		"title":"清單",
		"type":"3"
	},
	{
		"title":"超連結",
		"type":"4"
	},
	{
		"title":"影像",
		"type":"5"
	},
	{
		"title":"表格",
		"type":"6"
	},
	{
		"title":"表單",
		"type":"7"
	},
	{
		"title":"iframe",
		"type":"8"
	},
	{
		"title":"視訊&音訊",
		"type":"9"
	}
];

var itemsNotesCss = [
	{
		"title":"updating",
		"type":"0"
	},
	{
		"title":"updating",
		"type":"1"
	},
	{
		"title":"updating",
		"type":"2"
	}
];

var treasureMemory = [
	{
		"date":"Coming soon",
		"topic":"Please wait.",
		"text":""
	},
	{
		"date":"Coming soon",
		"topic":"Please wait.",
		"text":""
	},
	{
		"date":"2020/09/18",
		"topic":"Barn dance-the US traditional group dance",
		"text":"<strong>Song: oh susanna</strong><br>\
			lyrics: <br>\
			1. <br>I come from Alabama with A banjo on my knee. <br>\
			I'm goin'to Louisiana. My true love for to see. <br>Oh Susanna. Oh don't you cry for me. <br>\
			I've come from Alabama with My banjo on my knee. <br>\
			2.<br> It rained all night The day I left. The weather it was dry. <br>\
			The sun so hot I froze to death. Susanna don't you cry. <br>Oh Susanna. Don't you cry for me. <br>\
			I've come from Alabama with My banjo on my knee. <br>\
			3. <br>Oh Susanna. Don't you cry for me. <br>Cause I've come from Alabama with My banjo on my knee. <br>\
			Cause I've come from Alabama with My banjo on my kne-e-e-e. Hey <br><br> \
			**<i>Reference Link: <a href='https://www.youtube.com/watch?v=k3GpysVsa3s'\
			target='_blank'>Barn dance-oh susanna</a></i>"
	}
];
var itemsTreasureMemory = [
	{
		"title":"updating",
		"type":"0"
	},
	{
		"title":"updating",
		"type":"1"
	},
	{
		"title":"Barn dance",
		"type":"2"
	}
]