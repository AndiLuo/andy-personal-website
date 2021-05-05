import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => { 
  return props => 
    <div className="page" style={{overflow:"hidden"}}>
        <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={props.match.path === '/about' ? 'SlideIn' : 'SlideOut' || '/' ? 'SlideIn' : 'SlideOut' }
      >
        <Page {...props} /> 
    </ReactCSSTransitionGroup>
    </div>;
};

export default PageShell;