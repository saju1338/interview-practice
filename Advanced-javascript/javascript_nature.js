// Is javascript is synchronous or asychronous in nature

JavaScript is always synchronous and single-threaded. If you're executing a JavaScript block of code on a page then no other JavaScript on that page will currently be executed.

JavaScript is only asynchronous in the sense that it can make, for example, Ajax calls. The Ajax call will stop executing and other code will be able to execute until the call returns (successfully or otherwise), at which point the callback will run synchronously. No other code will be running at this point. It won't interrupt any other code that's currently running.