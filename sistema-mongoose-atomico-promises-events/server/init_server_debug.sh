#sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
clear
export DEBUG=server:server ; PORT=3000 ; nodemon bin/www
