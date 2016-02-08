# floodlight-WebUI
SDN Controller  WebUI

WebUI is a new user interface for floodlight controller developed by using HTML and JQuery. It can be deployed on (Windows) IIS or Apache (Linux) server.  

NOTE: Before starting to run you have to change the controller ip address in all html pages manually for now. 

Example for main page (index.html):  

 //Controller status
 
        $.ajax({
            url: "http://controller ip address/wm/core/health/json", ....

Web UI Modules : 

Controller Status 
Controller Role Management
Controller Memory Consume
Loaded  Controller Modules
Switches 
Switch Role Management
Hosts
Switch Statistics 
Topology View
Firewall Module
Access Control Lists Module
Statistics Management




