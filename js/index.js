$(document).ready(function() {
  var ranAlbum = "Album";
  var ranArtist = "by Artist";
  var ranNum;

  function getAlbum() {
    var album = [
      "Tago Mago",
      "The Velvet Underground & Nico",
      "Loveless",
      "Pet Sounds",
      "Bitches Brew",
      "A Love Supreme",
      "Remain in Light",
      "Sgt. Pepper's Lonely Hearts Club"
    ];
    var artist = [
      "by CAN",
      "by The Velvet Underground & Nico",
      "by My Bloody Valentine",
      "by The Beach Boys",
      "by Miles Davis",
      "by John Coltrane",
      "by Talking Heads",
      "by The Beatles"
    ];

    ranNum = Math.floor(Math.random() * album.length);
    ranAlbum = album[ranNum];
    ranArtist = artist[ranNum];

    $(".album").text(ranAlbum);
    $(".artist").text(ranArtist);
  }
  $("#generate-album").on("click", function() {
    getAlbum();
  });
  $("#tweet").on("click", function() {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        "Now listening to: " +
        ranAlbum +
        " " +
        ranArtist
    );
  });
});
