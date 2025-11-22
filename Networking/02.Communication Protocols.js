//--------------------------------
//Communicattion Protocols
//--------------------------------

// Protocols are a set of rules that determine how data is transmitted and received over a network.
// They ensure that devices can communicate effectively and understand each other.

// Common Communication Protocols:
// 1. HTTP (Hypertext Transfer Protocol): Used for transmitting web pages over the internet.
// 2. HTTPS (Hypertext Transfer Protocol Secure): A secure version of HTTP that uses encryption.
// 3. FTP (File Transfer Protocol): Used for transferring files between computers on a network.

//------------------------
// HTTP
//------------------------

// It will make a request to the server and get a response back through the TCP/IP protocol.
// Example of an HTTP request using Fetch API in JavaScript:
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
// In this example, we are making a GET request to the specified URL and logging the response data to the console.

//--------------------------------
// TCP (Transmission Control Protocol)
// ------------------------

/*
Sender                  Receiver
  | SYN ---------------->    |
  | <--------------- SYN-ACK |
  | ACK ---------------->    |
Connection established! */

// It is a three handshake protocol.
// It is a connection-oriented protocol.
// It establishes a connection between the sender and receiver before data is transmitted.
// It breaks data into packets for transmission and reassembles them at the destination.
// It send a synchronization (SYN) packet to the receiver to initiate the connection.
// The receiver responds with a synchronization-acknowledgment (SYN-ACK) packet.
// The sender sends an acknowledgment (ACK) packet to confirm the connection is established.
// TCP guarantees the delivery of data packets. Numbered packets are sent, and the receiver acknowledges the receipt of each packet.
// If a packet is lost or corrupted, TCP will retransmit it.
// TCP also manages flow control to prevent network congestion by adjusting the rate of data transmission based on the receiver's capacity.
// It is reliable and ensures that data is delivered in the correct order.
//

//UseCase of HTTP
// It is used for applications that require high reliability, such as web browsing, email, and file transfer, restful APIs.

//------------------------
// HTTP/3
//------------------------
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log("HTTP/3 GET Response:", data))
  .catch((error) => console.error("Error:", error));
// The latest version of HTTP that uses QUIC as its transport protocol for improved performance and security.
// It establishes UDP connections instead of TCP, allowing for faster data transfer and reduced latency.
// It is designed to reduce latency and improve the overall user experience on the web.
// Headers are compressed to reduce overhead.
// It supports multiplexing, allowing multiple requests and responses to be sent over a single connection simultaneously.
// It is more resilient to network changes, such as switching between Wi-Fi and cellular networks.
// Better Network Congestion Control

// UseCase of HTTP/3
// It is used for Iot, video streaming, virtual Reality and online gaming, where low latency and high performance are critical.

//------------------------
// UDP (User Datagram Protocol)
//------------------------

/*
Sender Receiver
| DATA --------------> | 
| DATA --------------> |
| DATA --------------> |
(No ACK, just sent!)*/

// It is a connectionless protocol.
// It does not establish a connection before data is transmitted.
// It sends data packets without ensuring their delivery or order.
// It is faster than TCP but less reliable.
// It is used for applications that require low latency and can tolerate some data loss, such as video streaming, online gaming, and VoIP (Voice over Internet Protocol).

// UseCase of UDP
// live video streaming, online gaming, and voice over IP (VoIP) applications.

//------------------------
// TCP vs UDP analogy
//------------------------

// TCP is like sending a letter through a certified mail service where you get a receipt confirming delivery.
// If the letter gets lost, the service will resend it until it reaches the recipient.
// UDP is like sending a postcard through regular mail where there is no confirmation of delivery.
// If the postcard gets lost, it is not resent, and the sender has no way of knowing if it reached the recipient.
// Both TCP and UDP are essential protocols in networking, each serving different purposes based on the requirements of the application.

//------------------------
//HTTPS
//------------------------
console.log("HTTPS: Encrypted version of HTTP for secure data transmission");
// It is a secure version of HTTP that uses encryption to protect data transmitted between the client and server.
// It uses SSL/TLS (Secure Sockets Layer/Transport Layer Security) protocols to encrypt the data, ensuring that it cannot be intercepted or tampered with by third parties.
// It is commonly used for online banking, e-commerce, and any website that requires secure data transmission.

/* 
Client (Sender)         Server (Receiver)
| ClientHello ----------------->      |    // Initiates handshake with supported TLS versions and cipher suites
| <------------------ ServerHello     |    // Server selects TLS version and cipher suite
| <------------------ Certificate     |    // Server sends its certificate (includes public key)
| <------------------ ServerHelloDone |    // Indicates end of server hello messages
| ClientKeyExchange ------------->    |    // Client generates pre-master secret, encrypts it with server's public key, sends it
| Key Derivation ----------------->   |    // Both sides derive session keys (symmetric encryption)
| ChangeCipherSpec --------------->   |    // Client switches to encrypted mode
| Finished ---------------------->    |    // Client verifies handshake is successful
| <------------------ Finished        |    // Server verifies handshake
| GET /index.html ---------------->   |    // Client sends encrypted HTTP request
| <------------------ 200 OK / HTML   |    // Server responds with encrypted HTTP response
| <------------------ Encrypted Data  |    // Server continues sending encrypted data
| Connection Closed ----------------> |    // Connection closes (or reused via keep-alive)
*/

//--- 
// WebSocket
//-- 

/*
Client (Sender)                Server (Receiver)
| HTTP Upgrade -----------------> |   // Client requests WebSocket upgrade
| <------------------ 101 Switching Protocols |   // Server agrees to upgrade
| WebSocket Connection Open -----> |   // Full-duplex channel established
| <----------------------------> |   // Messages can flow in both directions
| <----------------------------> |   // Continuous bidirectional communication
| Connection Closed -------------> |   // Either side closes the WebSocket
*/

//------------------------
// SMTP (Simple Mail Transfer Protocol)
//------------------------
// Protocol for sending emails over the Internet.
// Works on TCP (usually port 25, 587 for submission, 465 for SSL/TLS).
// Uses commands like HELO/EHLO, MAIL FROM, RCPT TO, DATA, QUIT.
// Ensures reliable delivery of emails from client to server.
// Supports extensions like authentication and encryption (STARTTLS).

// UseCase of SMTP
// Sending emails from email clients or applications to mail servers.
// Used by email services like Gmail, Outlook, and any mail server communication.

/*
Client (Sender)                SMTP Server (Receiver)
| HELO/EHLO -----------------> |   // Introduces client to server
| <------------------ 250 OK   |   // Server acknowledges
| MAIL FROM:<sender> ----------> |   // Specifies sender email
| <------------------ 250 OK   |   // Server acknowledges
| RCPT TO:<recipient> ----------> |   // Specifies recipient email
| <------------------ 250 OK   |   // Server acknowledges
| DATA -----------------------> |   // Begins email content transfer
| <------------------ 354 Start mail input | // Server ready for data
| Email Content ----------------> |   // Sends email body
| <------------------ 250 OK   |   // Server confirms receipt
| QUIT -----------------------> |   // Ends session
| <------------------ 221 Bye  |   // Server closes connection
*/

//------------------------
// FTP (File Transfer Protocol)
//------------------------
// Protocol for transferring files between client and server.
// Works on TCP (port 21 for commands, port 20 for data in active mode).
// Supports commands like USER, PASS, CWD, LIST, RETR, STOR, QUIT.
// Can operate in Active or Passive mode for data connections.
// Provides authentication, but plain FTP is unencrypted (use FTPS or SFTP for security).

// UseCase of FTP
// Uploading and downloading files to/from web servers.
// Managing website files, backups, or large data transfers between machines.

/*
Client (Sender)                FTP Server (Receiver)
| USER username ----------------> |   // Client sends username
| <------------------ 331 Password required | // Server asks for password
| PASS password -----------------> |   // Client sends password
| <------------------ 230 Logged in |   // Server confirms login
| CWD /path/to/directory --------> |   // Change working directory
| <------------------ 250 OK       |   // Server confirms directory change
| LIST --------------------------> |   // List files in directory
| <------------------ File list    |   // Server returns directory listing
| RETR file.txt ------------------> |   // Request to download file
| <------------------ File data    |   // Server sends file
| STOR newfile.txt ----------------> |   // Upload file to server
| <------------------ 226 OK       |   // Server confirms upload
| QUIT ---------------------------> |   // End FTP session
| <------------------ 221 Goodbye  |   // Server closes connection
*/
//  


