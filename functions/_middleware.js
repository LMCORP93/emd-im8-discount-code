export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'emd-im8-discount-code.pages.dev') {
    url.hostname = 'im8-discount-code.com';
    return Response.redirect(url.toString(), 301);
  }

  if (url.hostname === 'www.im8-discount-code.com') {
    url.hostname = 'im8-discount-code.com';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
