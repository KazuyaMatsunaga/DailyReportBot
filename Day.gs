// TODO: Replace URL with incomingWebhooks's URL
var postUrl = "URL";

function sendSlack() {
  var today = new Date();
  
  var formatDate = Utilities.formatDate(today, "JST","M月d日");
  
  // POSTのパラメータ設定
  var jsonData =
  {
    "username" : "DailyReport",
    "text" : formatDate,
    "link_names" : 1,
    "icon_url" : "http://wiki.2018.miraikeitai.org/index.php?plugin=attach&refer=AP1_%E3%83%AD%E3%82%B4&openfile=Battari_%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB%E3%83%9E%E3%83%BC%E3%82%AF.png"
  };

  // パラメータをJSONに変換
  var payload = JSON.stringify(jsonData);

  // POSTオプションの設定
  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload,
  };
  
  var dayOfWeek = today.getDay();
  var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek];
  
  // 土日は日報を書く必要がないため
  if((dayOfWeekStr != "日") && (dayOfWeekStr != "土")){
    // リクエスト
    UrlFetchApp.fetch(postUrl, options); 
  }
}

function sendRemind() {
  var today = new Date();
  
  var postText = "@channel " + "日報は今日の２０時まで！！まだ書いてない人は急いで書こう！！"
  
  // POSTのパラメータ設定
  var jsonData =
  {
    "username" : "DailyReport",
    "text" : postText,
    "link_names" : 1,
    "icon_url" : "http://wiki.2018.miraikeitai.org/index.php?plugin=attach&refer=AP1_%E3%83%AD%E3%82%B4&openfile=Battari_%E3%82%B7%E3%83%B3%E3%83%9C%E3%83%AB%E3%83%9E%E3%83%BC%E3%82%AF.png"
  };

  // パラメータをJSONに変換
  var payload = JSON.stringify(jsonData);

  // POSTオプションの設定
  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload,
  };
  
  var dayOfWeek = today.getDay();
  var dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek];
  
  // 土日は日報を書く必要がないため
  if((dayOfWeekStr != "日") && (dayOfWeekStr != "土")){
    // リクエスト
    UrlFetchApp.fetch(postUrl, options); 
  }
}