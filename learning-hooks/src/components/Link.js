import React from "react";

const Link = ({ href, className, child }) => {
  const onLinkClick = (e) => {
      if (e.metaKey || e.ctrlKey) {
          return;
      }

      // If ctrl is not pressed
      e.preventDefault();
      window.history.pushState({}, '', href);

      const naveEvent = new PopStateEvent('popstate');
      window.dispatchEvent(naveEvent);
  };

  return (
    <a className={className} onClick={onLinkClick} href={href}>
      {child} 
    </a>
  );
};

export default Link;
