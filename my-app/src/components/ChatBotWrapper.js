import { useEffect, useRef } from 'react';

const ChatBotWrapper = () => {
  const injectScriptRef = useRef(null);
  const configScriptRef = useRef(null);

  useEffect(() => {
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
    injectScript.async = true;
    injectScriptRef.current = injectScript;

    const onLoadHandler = () => {
      const configScript = document.createElement('script');
      configScript.src = 'https://files.bpcontent.cloud/2025/06/07/12/20250607120014-UKH9FBO1.js';
      configScript.async = true;
      configScriptRef.current = configScript;
      document.body.appendChild(configScript);
    };

    injectScript.addEventListener('load', onLoadHandler);
    document.body.appendChild(injectScript);

    return () => {
      if (injectScriptRef.current) {
        injectScriptRef.current.removeEventListener('load', onLoadHandler);
        injectScriptRef.current.remove();
      }
      if (configScriptRef.current) {
        configScriptRef.current.remove();
      }

      const widget = document.querySelector('#bp-web-widget');
      if (widget) widget.remove();

      const style = document.querySelector('#bp-web-widget-style');
      if (style) style.remove();

      document.querySelectorAll('[id^="bp-"]').forEach(el => el.remove());
    };
  }, []);

  return null;
};

export default ChatBotWrapper;
