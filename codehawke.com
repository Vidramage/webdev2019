server {
       listen 80;
       server_name www.codehawke.com codehawke.com;
       
       root /home/chrhawkes/webapps/codehawke/webdev2019/;
       if ($http_host != "www.codehawke.com") {
                 rewrite ^ http://www.codehawke.com$request_uri permanent;
       }
       # serve static files
       location /static/ {
       alias /home/chrshawkes/webapps/codehawke/webdev2019/dist/;
       expires 365d;
       }
	
       location / {
                proxy_pass http://127.0.0.1:9081;
                proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;

   }
}
