import React from 'react';
import './App.css';
import DashboardControl from 'devexpress-dashboard-react';
import {DashboardPanelExtension} from 'devexpress-dashboard/common';
import HelloWorldItem from './HelloWorldItem';

function onBeforeRender(e) { 
  var dashboardControl = e.component;
  dashboardControl.registerExtension(new DashboardPanelExtension(dashboardControl));
  dashboardControl.registerExtension(new HelloWorldItem(dashboardControl));
}

function App() {  
  return (
    <div style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}>
      <DashboardControl style={{ height: '100%' }} 
        endpoint="http://localhost:5000/api/dashboard"        
        onBeforeRender = { onBeforeRender }>        
      </DashboardControl>
  </div>
  );
}

export default App;