// ================================
// Communication Protocols Notes
// ================================

// Protocols are a set of rules that determine how data is transmitted and received over a network.
// They ensure that devices can communicate effectively and understand each other.

// ------------------------
// Common Communication Protocols
// ------------------------

// 1. HTTP (Hypertext Transfer Protocol)
console.log("HTTP: Transmits web pages over the internet");

// Example HTTP request using Fetch API
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log("HTTP GET Response:", data))
  .catch((error) => console.error("Error:", error));

// Use case: Websites, RESTful APIs, Web services

// 2. HTTPS (HTTP Secure)
console.log("HTTPS: Encrypted version of HTTP for secure data transmission");

// 3. FTP (File Transfer Protocol)
console.log("FTP: Transfers files between computers on a network");

// ------------------------
// TCP (Transmission Control Protocol)
// ------------------------

// Characteristics of TCP
console.log("TCP Characteristics:");
console.log("- Connection-oriented protocol");
console.log("- Ensures data delivery in order");
console.log("- Performs three-way handshake before transmitting data");
console.log("- Reliable and manages flow control");

// TCP Three-way handshake example (conceptual)
console.log("TCP Handshake: SYN -> SYN-ACK -> ACK");

// Use case: Web browsing, Email, File transfer

// ------------------------
// UDP (User Datagram Protocol)
// ------------------------

// Characteristics of UDP
console.log("UDP Characteristics:");
console.log("- Connectionless protocol");
console.log("- Sends packets without ensuring delivery or order");
console.log("- Faster than TCP but less reliable");

// Use case: Live video streaming, Online gaming, VoIP

// ------------------------
// HTTP/3
// ------------------------

// HTTP/3 uses QUIC (over UDP) for faster connections
console.log("HTTP/3: Uses QUIC protocol over UDP for reduced latency");

// ------------------------
// TCP vs UDP analogy
// ------------------------
console.log("TCP vs UDP Analogy:");
console.log("- TCP: Certified mail with receipt confirmation");
console.log("- UDP: Postcard sent without confirmation");

// ------------------------
// Notes
// ------------------------
// - This file is Copilot-friendly
// - Add new protocols as new sections
// - Include code examples inside code blocks
