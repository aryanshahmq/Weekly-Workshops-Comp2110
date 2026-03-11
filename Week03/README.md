Questions and answers for Week 3

Inspect HTTP request:
    Index.html uses GET as it's html method
    304 response code is found
    Information: What date, what the last-modified date was, the user, host ip and port.

Task 2:
Under payload the query string parameters show name is student and theme is dark. 
When Javascripy is added, the payload section no longer shows.

 Task 3:
 Load times decrease when enabling caching
 Cache control: is how long the browser can cache the file before revalidating with the server 
 E-tag: A unique fingerprint of the file; browser sends this back on next request, server replies 304 Not Modified if unchanged
 Last-Modified: Timestamp of when the file last changed; used similarly to ETag for revalidation

Task 4:
Created and Ran server.js