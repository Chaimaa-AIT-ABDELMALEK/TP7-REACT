const reportWebVitals = (callbackMesure) => {
  if (typeof callbackMesure === 'function') {
    import('web-vitals').then((mesures) => {
      mesures.getCLS(callbackMesure);
      mesures.getFID(callbackMesure);
      mesures.getFCP(callbackMesure);
      mesures.getLCP(callbackMesure);
      mesures.getTTFB(callbackMesure);
    });
  }
};

export default reportWebVitals;