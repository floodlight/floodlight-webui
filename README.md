#Email cbarrin@g.clemson.edu for bug reports and help.

# floodlight-WebUI
SDN Controller  WebUI

WebUI is a new user interface for floodlight controller developed by using HTML and JQuery. It can be deployed on (Windows) IIS or Apache (Linux) server..

# Any  Dependencies: No.

# Deployment and Install
         Windows :
            IIS 5.0+
         Linux and MAC OS :
            Apache web server or  equivalent one.
    
Not: It can be deployed on any operating system as a web application. Because it is just a html based application. Only thing that you need is a remote controller ip address.
 

NOTE: Before starting to run you have to change the controller ip address in all html pages manually for now. I am developing a start (like login page) page takes the ip address on startup.


Example for main page (index.html):  

 //Controller status
 
        $.ajax({
            url: "http://controller ip address/wm/core/health/json", ....

Web UI Modules : 

        Controller Status,
        Controller Role Management,
        Controller Memory Consume,
        Loaded  Controller Modules,
        Switches,
        Switch Role Management,
        Switch Details,
        Static Flow Pusher,
        Hosts,
        Switch Statistics,
        Topology View,
        Firewall Management,
        Access Control Lists Module,
        Statistics Management

Screen Shots 
![Alt text](/images/0.jpg?raw=true "Optional Title")
![Alt text](/images/1.jpg?raw=true "Optional Title")
![Alt text](/images/2.jpg?raw=true "Optional Title")
![Alt text](/images/3.jpg?raw=true "Optional Title")
![Alt text](/images/4.jpg?raw=true "Optional Title")
![Alt text](/images/5.jpg?raw=true "Optional Title")
![Alt text](/images/6.jpg?raw=true "Optional Title")
![Alt text](/images/7.jpg?raw=true "Optional Title")
![Alt text](/images/8.jpg?raw=true "Optional Title")
