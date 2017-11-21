$("button").on("click",function(){
  var apiKey= "apikey=46a00b50-ba60-11e7-9df9-2d8103528170"
  var resource= "/object?"
  var keyword= "keyword="+$("#keyword").val()
  $.get("https://api.harvardartmuseums.org"+resource+keyword+"&"+apiKey,function(r){
    console.log(r.records[0])
    $("h3").text(r.records[0].title)
    $(".culture").text(r.records[0].culture)
    $(".dated").text(r.records[0].dated)
    $("img").attr("src",r.records[0].primaryimageurl)
  })
})
