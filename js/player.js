jQuery(document).ready(function() {
  jwplayer("mediaplayer").setup({
    file: Drupal.settings.islandora_jwplayer.file,
    image: Drupal.settings.islandora_jwplayer.thumbnail,
    width: "100%",  
    aspectratio: "4:3" 
  });
});
