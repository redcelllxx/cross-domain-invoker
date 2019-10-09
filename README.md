# cross-domain-invoker
A JQuery plugin for resolving cross-domain issues

Step 1: import invoke.min.js file to both container page and IFrame page.

Step 2: add custom attribute invoker="iframe-name" to your <iframe> tag.
  
Step 3: use $.invoke("iframe-name", "function name", argument1, argument2 ...) to invoke the target function

iframe-name: the name defined in step 2. if iframe-name is "container" or null, the plugin will invoke the function in container page.
function-name: the name of the function be invoked
