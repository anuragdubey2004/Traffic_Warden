A Node.js and Redis-powered backend service implementing custom rate-limiting logic to manage API traffic efficiently.
Features a robust middleware system to prevent server overload and ensure fair resource distribution across multiple users.

<br>
<br>

Successful initial API request showing the server tracking the client's IP address and starting the request count.
<br/>
<img width="1568" height="563" alt="image" src="https://github.com/user-attachments/assets/8ababdc0-ff8f-46f1-955f-1d963538a366" />

<br>
<br>

Real-time console logs demonstrating the Redis-backed counter incrementing with each consecutive request from the same IP.
<br/>
<img width="1538" height="572" alt="image" src="https://github.com/user-attachments/assets/ed678b60-ea65-4617-9464-e4a7613c66ba" />

<br>
<br>
Automatic blocking of the 6th request with a '429 Too Many Requests' response, successfully enforcing the security threshold.
<br/>
<img width="1565" height="583" alt="image" src="https://github.com/user-attachments/assets/269e2fab-360a-40ce-af2b-f26c3d3b1387" />


