# 2hTest

#Consigna 

se encuentra en `FullStack Excercise - 2hdesign.pdf`. El ejercicio tira este error

(node:25156) UnhandledPromiseRejectionWarning: Error: Unauthorized
    at Request.http [as _callback] (node_modules/@sendgrid/client/src/classes/client.js:124:25)
    at Request.self.callback (node_modules/request/request.js:185:22)
    at Request.emit (events.js:198:13)
    at Request.<anonymous> (node_modules/request/request.js:1161:10)
    at Request.emit (events.js:198:13)
    at IncomingMessage.<anonymous> (node_modules/request/request.js:1083:12)
    at Object.onceWrapper (events.js:286:20)
    at IncomingMessage.emit (events.js:203:15)
    at endReadableNT (_stream_readable.js:1129:12)
    at process._tickCallback (internal/process/next_tick.js:63:19)
(node:25156) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 3)

El ejercicio esta resuelto, capaz es un error de api (Usa Sendgrid). 