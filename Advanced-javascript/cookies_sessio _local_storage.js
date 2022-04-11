// Difference between local storage, session storage and cookies

all these three stores on our local browser.

//Local Storage
* total storage space acquire by local storage is 10mb
* in local stograge information is saved in our browser

// cookies
capacity of cookies 4kb

cookies and local storage are available for any window on browser so if you have open different tabs on google chrome then cookies and local storage are available on all the tab but session storage is only available on one tab and as soon as you close the tab, your session will expire. 

validity of local storage is forever unless user end up deleting it.
In cookies you set expiration date by yourself. 

storage location for both session storage and local storage are on browser but cookies, while they are store on the browser, they are sent to the server everytime user request something from the browser that is why they have much smaller capacity. 
All the information in the cookies sent to the server, so if you have lot of cookies that are very large it will slow down your request to the server and the request coming back to the server. 


// syntax for all 3 of them

local storage

localStorage.setItem('name', 'saju') // name indicates key and saju indicates value
localStorage.getItem('name') // output is saju which we have already set
localStorage.removeItem('name') // will remove saju

// session storage syntax is same as local storage

sessionStorage.setItem('name', 'saju') // name indicates key and saju indicates value
sessionStorage.getItem('name') // output is saju which we have already set
sessionStorage.removeItem('name') // will remove saju

//coookies syntax

document.cookie = 'name=saju' // name is name and value is saju
see the cookies under application in console window of the browser and we set all the values like we set name above 
please note: if we write again document.cookie = "expires=2020-01-01"// this will create different cookie in another line, so if we want to add path or expires, then we need to write it in one document.cookie like:
document.cookie = 'name=saju; expires=2020-01-01' 