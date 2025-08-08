// A preload script to attempt to bypass the minimum screen width check by removing the error message from the DOM.

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      // We're looking for a node that contains the text "1024". This is a bit of a guess, but it's likely to be unique to the error message.
      if (node.textContent && node.textContent.includes('1024')) {
        // We've found the node, so we'll remove it.
        node.remove();
      }
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
