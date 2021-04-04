// This extension will need information from a persistent variable as soon as its installed

let color = '#3aa757';

/*
IMPORTANT: most APIs, including the storage API, must be registered under the
"permissions" field in the manifest for the extension to use them.
*/

// onInstalled listener -> set a value using the storage API.
// allows multiple extension components to access that value and update it.

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
