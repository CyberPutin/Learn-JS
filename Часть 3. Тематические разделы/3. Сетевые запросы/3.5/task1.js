// Задача-1

// Существует HTTP-заголовок Referer, который обычно содержит адрес страницы, инициировавшей сетевой запрос.

// Например, при запросе (fetch) http://google.com с http://javascript.info/some/url заголовки выглядят так:

// Accept: */*
// Accept-Charset: utf-8
// Accept-Encoding: gzip,deflate,sdch
// Connection: keep-alive
// Host: google.com
// Origin: http://javascript.info
// Referer: http://javascript.info/some/url

// Почему нужен Origin, если Referer содержит даже больше информации?
// Возможно ли отсутствие Referer или Origin, или это неправильно?

//Ответ 

// Origin нужен, потому что иногда Referer отсутствует.
// Например, когда мы запрашиваем через fetch HTTP-страницу с HTTPS, то Referer нет.

// Content Security Policy может запретить отправление Referer.

// У fetch есть опции, которые предотвращают отправку Referer и даже позволяют изменять его (в пределах того же сайта).

// Согласно спецификации, Referer является необязательным HTTP-заголовком.

// Из-за ненадёжности Referer и был изобретён Origin.
// Браузер гарантирует наличие правильного Origin при запросах на другой источник.