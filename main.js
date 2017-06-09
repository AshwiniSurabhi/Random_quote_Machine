$(document).ready(function() {
  function getQuote() {
    $.ajax({
      type: "GET",
      url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
      dataType: "json",
      success: function(data) {
        $(".quote").text(data.quoteText);
       // $(".author").html("</br><p>+&dash;"+data.quoteAuthor+"&dash;</p>");
        $(".author").text(data.quoteAuthor);
      },
      error: function(errorMessage) {
        alert(error);
      }
  });
  }
  $("#newq").on("click", function() {
    getQuote();
  });
  $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=");
  });
});
