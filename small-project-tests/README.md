System Design Question: 
# Build a URL Shortener 

### Objective: 
Design and partially implement a URL shortener service similar to bit.ly. The system should allow users to input a long URL and receive a shortened version that redirects to the original URL when accessed. 

##### Requirements: 
- Users should be able to input a long URL. 
    - The system should generate a unique short URL. 
    - The short URL should be stored and mapped to the original long URL. 
- Redirect URLs: 
    - When someone accesses the short URL, the system should redirect them to the original long URL. 

###### Optional Features: 
- Users can specify a custom alias for the short URL. 
- The service tracks the number of times a short URL is accessed.

###### Scalability Considerations:
- How would the system handle a large number of URLs ?
- What strategies would you employ to ensure that the shortened URLs remain unique? 


Jamboard session: https://jamboard.google.com/d/15Wu9O-Ep1JpOk14_jAawb0qbvKFoHZHx3bNsHg9ZFu0/viewer?pli=1&f=0
