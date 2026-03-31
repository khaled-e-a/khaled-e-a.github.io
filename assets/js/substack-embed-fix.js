// This script fixes a bug in the official Substack embed script where 
// regular expressions with the 'g' flag maintain lastIndex state, causing 
// only odd-numbered embeds (1st, 3rd, 5th, etc.) to render correctly.
(function () {
  // Removed the /g flag to prevent regex state bleeding across iterations
  const postLinkRegex = new RegExp(/(?<url>.*)\/p\/(?<slug>.*)/);
  const commentLinkRegex = new RegExp(/(?<url>.*)(\/profile.*|\/@.*)\/note\/c-(?<commentId>.*)/);

  document.querySelectorAll('.substack-post-embed').forEach((element) => {
    const getIframeWidth = () => {
      const elWidth = element.clientWidth;
      let width = 500;
      if (elWidth < 500) {
        width = elWidth;
      }
      return width;
    };

    const postLink = element.querySelector('[data-post-link]');
    const commentLink = element.querySelector('[data-comment-link]');

    if (!postLink && !commentLink) {
      return;
    }

    let iframeDestination = '';
    let url = '';
    
    if (postLink) {
      const href = postLink.getAttribute('href');
      const r = postLinkRegex.exec(href);
      if (!r || !r.groups || !r.groups.url || !r.groups.slug) {
        return;
      }
      url = r.groups.url;
      const slug = r.groups.slug;
      iframeDestination = `${url}/embed/p/${slug}`;
    } else {
      const href = commentLink.getAttribute('href');
      const r = commentLinkRegex.exec(href);
      if (!r || !r.groups || !r.groups.url || !r.groups.commentId) {
        return;
      }
      url = r.groups.url;
      const commentId = r.groups.commentId;
      iframeDestination = `${url}/embed/c/${commentId}`;
    }

    // Set up the iframe with meta properties
    const frameId = `substack-frame-${Math.round(Math.random() * 10000)}`;
    const iframe = document.createElement('iframe');
    iframe.id = frameId;
    const frameURL = new URL(iframeDestination);
    frameURL.searchParams.append('origin', window.location.origin);
    frameURL.searchParams.append('fullURL', window.location.href);

    iframe.src = frameURL.toString();
    iframe.scrolling = 'no';
    iframe.sandbox = 'allow-scripts allow-same-origin allow-top-navigation allow-popups';
    iframe.allow = 'clipboard-read clipboard-write allow-top-navigation allow-scripts allow-same-origin allow-popups';

    // Set up iframe styles
    iframe.style.border = 'none';
    iframe.style.display = 'block';
    iframe.height = '470px';
    iframe.style.width = getIframeWidth() + 'px';
    iframe.style.flexGrow = '1';

    // Set parent container's styles
    element.style.maxWidth = '500px';
    element.style.marginTop = '10px';
    element.style.marginBottom = '10px';
    element.style.display = 'flex';

    // When the window resizes, we can set the width of the iframe.
    window.addEventListener('resize', () => {
      iframe.style.width = getIframeWidth() + 'px';
    });

    // Update iframe height on child frame message
    window.addEventListener('message', function (event) {
      if (event.origin === url && event.source === iframe.contentWindow) {
        if (event.data.iframeHeight) {
          iframe.height = event.data.iframeHeight;
        }
      }
    });

    // Replace embedded content with iframe
    element.replaceChildren(iframe);
  });
})();
