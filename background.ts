/**
 * Background.ts serves as a gateway for communication between hint content UI and workbench content UI.
 * Background.ts. forwards the message from hint to workbench as content scripts cannot communicate directly
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.from === 'hint') {
      // Forward the message to contentScript2
      chrome.tabs.sendMessage(sender.tab.id, { from: 'background', to: message.to, action: message.action }, (response) => {
        if (response && response.status === 'success') {
          sendResponse({ status: 'success' });
        }
      });;
    } 
  });