// just pass through Franz
module.exports = Franz => class Clubhouse extends Franz {
  overrideUserAgent() {
    const useragent = window.navigator.userAgent;
    const parts = useragent.split('(KHTML, like Gecko)');

    return parts.join('(KHTML, like Gecko) clubhouse/0.0.1').replace('Electron', 'Clubhouse').replace('Franz', 'Clubhouse');
  }
};
