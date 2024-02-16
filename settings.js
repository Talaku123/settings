




$( ".setting-emoji" ).on("click", function() {
  if( $( "body" ).hasClass( "setSettings" )) {
      $( "body" ).removeClass( "setSettings" );
      $( ".setting-emoji" ).text( "🌓" );
  } else {
      $( "body" ).addClass( "setSettings" );
      $( ".setting-emoji" ).text( "ON" );
  }
});