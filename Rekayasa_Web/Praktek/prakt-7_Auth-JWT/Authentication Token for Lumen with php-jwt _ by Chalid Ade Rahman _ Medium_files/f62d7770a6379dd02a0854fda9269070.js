document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-aa244c59879c.css">')
document.write('<div id=\"gist98640940\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-jwtmiddleware-php\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-php  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">    Show hidden characters\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path d=\"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table data-hpc class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"PHP\" data-tagsearch-path=\"JwtMiddleware.php\">\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-ent>&lt;?php<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>namespace<\/span> <span class=pl-v>App<\/span>\\<span class=pl-v>Http<\/span>\\<span class=pl-v>Middleware<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>use<\/span> <span class=pl-v>Closure<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>use<\/span> <span class=pl-v>Exception<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>use<\/span> <span class=pl-v>App<\/span>\\<span class=pl-v>User<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>use<\/span> <span class=pl-v>Firebase<\/span>\\<span class=pl-c1>JWT<\/span>\\<span class=pl-c1>JWT<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>use<\/span> <span class=pl-v>Firebase<\/span>\\<span class=pl-c1>JWT<\/span>\\<span class=pl-v>ExpiredException<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>class<\/span> <span class=pl-v>JwtMiddleware<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC9\" class=\"blob-code blob-code-inner js-file-line\">{<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>public<\/span> <span class=pl-k>function<\/span> <span class=pl-en>handle<\/span>(<span class=pl-s1><span class=pl-c1>\$<\/span>request<\/span>, <span class=pl-smi><span class=pl-smi>Closure<\/span><\/span> <span class=pl-s1><span class=pl-c1>\$<\/span>next<\/span>, <span class=pl-s1><span class=pl-c1>\$<\/span>guard<\/span> = <span class=pl-c1>null<\/span>)<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC11\" class=\"blob-code blob-code-inner js-file-line\">    {<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC12\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1><span class=pl-c1>\$<\/span>token<\/span> = <span class=pl-s1><span class=pl-c1>\$<\/span>request<\/span>-&gt;<span class=pl-en>get<\/span>(<span class=pl-s>&#39;token&#39;<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC13\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC14\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-k>if<\/span>(!<span class=pl-s1><span class=pl-c1>\$<\/span>token<\/span>) {<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC15\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-c>// Unauthorized response if token not there<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L16\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"16\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC16\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>return<\/span> response()-&gt;<span class=pl-en>json<\/span>([<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L17\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"17\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC17\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-s>&#39;error&#39;<\/span> =&gt; <span class=pl-s>&#39;Token not provided.&#39;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L18\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"18\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC18\" class=\"blob-code blob-code-inner js-file-line\">            ], <span class=pl-c1>401<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L19\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"19\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC19\" class=\"blob-code blob-code-inner js-file-line\">        }<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L20\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"20\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC20\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-k>try<\/span> {<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L21\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"21\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC21\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-s1><span class=pl-c1>\$<\/span>credentials<\/span> = <span class=pl-c1>JWT<\/span>::<span class=pl-en>decode<\/span>(<span class=pl-s1><span class=pl-c1>\$<\/span>token<\/span>, env(<span class=pl-s>&#39;JWT_SECRET&#39;<\/span>), [<span class=pl-s>&#39;HS256&#39;<\/span>]);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L22\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"22\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC22\" class=\"blob-code blob-code-inner js-file-line\">        } <span class=pl-k>catch<\/span>(<span class=pl-smi><span class=pl-smi>ExpiredException<\/span><\/span> <span class=pl-s1><span class=pl-c1>\$<\/span>e<\/span>) {<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L23\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"23\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC23\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>return<\/span> response()-&gt;<span class=pl-en>json<\/span>([<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L24\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"24\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC24\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-s>&#39;error&#39;<\/span> =&gt; <span class=pl-s>&#39;Provided token is expired.&#39;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L25\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"25\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC25\" class=\"blob-code blob-code-inner js-file-line\">            ], <span class=pl-c1>400<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L26\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"26\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC26\" class=\"blob-code blob-code-inner js-file-line\">        } <span class=pl-k>catch<\/span>(<span class=pl-smi><span class=pl-smi>Exception<\/span><\/span> <span class=pl-s1><span class=pl-c1>\$<\/span>e<\/span>) {<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L27\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"27\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC27\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>return<\/span> response()-&gt;<span class=pl-en>json<\/span>([<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L28\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"28\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC28\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-s>&#39;error&#39;<\/span> =&gt; <span class=pl-s>&#39;An error while decoding token.&#39;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L29\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"29\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC29\" class=\"blob-code blob-code-inner js-file-line\">            ], <span class=pl-c1>400<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L30\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"30\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC30\" class=\"blob-code blob-code-inner js-file-line\">        }<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L31\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"31\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC31\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1><span class=pl-c1>\$<\/span>user<\/span> = <span class=pl-v>User<\/span>::<span class=pl-en>find<\/span>(<span class=pl-s1><span class=pl-c1>\$<\/span>credentials<\/span>-&gt;<span class=pl-c1>sub<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L32\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"32\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC32\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-c>// Now let&#39;s put the user in the request class so that you can grab it from there<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L33\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"33\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC33\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-s1><span class=pl-c1>\$<\/span>request<\/span>-&gt;<span class=pl-c1>auth<\/span> = <span class=pl-s1><span class=pl-c1>\$<\/span>user<\/span>;<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L34\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"34\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC34\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-k>return<\/span> <span class=pl-s1><span class=pl-c1>\$<\/span>next<\/span>(<span class=pl-s1><span class=pl-c1>\$<\/span>request<\/span>);<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L35\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"35\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC35\" class=\"blob-code blob-code-inner js-file-line\">    }<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-jwtmiddleware-php-L36\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"36\"><\/td>\n          <td id=\"file-jwtmiddleware-php-LC36\" class=\"blob-code blob-code-inner js-file-line\">}<\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/chalidade/f62d7770a6379dd02a0854fda9269070/raw/fe901faa7806b5107e38f713d086219aa7bea90e/JwtMiddleware.php\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/chalidade/f62d7770a6379dd02a0854fda9269070#file-jwtmiddleware-php\">\n          JwtMiddleware.php\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
