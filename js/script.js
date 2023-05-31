/*
    author : @Farman Saleh
 	date   : May 31/2023
 	github : github.com/farmansaleh
**/

$("#eng_text").keyup(function(){
  
    var sourceText = $(this).val();
    var sourceLang = 'en';
    var targetLang = 'kn';
    
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    
    $.getJSON(url, function(data) {
        $('textarea#knd_text').val(data[0][0][0]);
    });

});