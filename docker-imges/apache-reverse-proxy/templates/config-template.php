<?php
  $static_ip = getenv('STATIC_APP')
?>

<?php 
  $dynamic_ip = getenv('DYNAMIC_APP')
?>

<VirtualHost *:80>
        ServerName lab.res.ch

        ProxyPass '/api/cities/' 'http://<?php print "$dynamic_ip"?>/'
        ProxyPassReverse '/api/cities/' 'http://<?php print "$dynamic_ip"?>/'

        ProxyPass '/' 'http://<?php print "$static_ip"?>/'
        ProxyPassReverse '/' 'http://<?php print "$static_ip"?>/'

</VirtualHost>

