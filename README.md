# NoticeMeSenpai
Simple javaScript for adding notification sound to kick.com chat when getting new message <br>
Works in https://kick.com/dashboard/stream <br>

If you have any advice suggestion feel free to give them

How to use
1. add Tampermonkey extension to Chrome or Firefox
2. install NoticeMeSenpaiV2.js script
3. it should work in https://kick.com/dashboard/stream
4. if not refresh page

To change notification sound change url in line<br>
const audioNotification = new Audio('https://www.myinstants.com/media/sounds/metal-pipe-clang.mp3');

To change pause/sleeptime betwean notifications change it in line<br>
// Pause time in milliseconds currently set to 20 seconds<br>
await sleep(20000);

