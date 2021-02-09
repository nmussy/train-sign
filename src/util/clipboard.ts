import copy from 'copy-to-clipboard';
import baseroute from '../baseroute';

export const copyUrlToClipboard = (uri: string): boolean =>
  copy(
    uri.startsWith('//') || uri.startsWith('http')
      ? uri
      : [location.origin, baseroute, uri].join(''),
  );
