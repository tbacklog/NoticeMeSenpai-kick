// ==UserScript==
// @name         NoticeMeSenpaiV2
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  kick.com Chat Notification
// @author       TBacklog
// @match        https://kick.com/dashboard/stream
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kick.com
// @grant        none
// ==/UserScript==

setTimeout(() => {
function sleep(milli) {
  return new Promise(resolve => setTimeout(resolve, milli));
}
let available = true;

const audioNotification = new Audio('https://www.myinstants.com/media/sounds/metal-pipe-clang.mp3');

console.log('scaript is active');

const observer = new MutationObserver(async function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList' && available) {
      const addedNodes = mutation.addedNodes;
      for (let node of addedNodes) {
        // Check if the added node or its descendants have the specific class to ignore
        const hasClassToIgnore = node.classList && node.classList.contains('chatroom-history-breaker');
        const hasDescendantWithClass = Array.from(node.querySelectorAll('.chatroom-history-breaker')).length > 0;

        // If neither the added node nor its descendants have the class, proceed with your logic
        if (!hasClassToIgnore && !hasDescendantWithClass) {
           available = false;
          // Play audio notification
          audioNotification.play();

          // Pause time in milliseconds
          await sleep(20000);

          // Set available to true after the pause
          available = true;
        }
      }
    }
  }
});

const options = {
  childList: true,
  subtree: true, // Include descendants in the observation
};

const targetElement = document.querySelector('.overflow-y-scroll.py-3');
observer.observe(targetElement, options);

    //delay before script starts
}, 5000)
