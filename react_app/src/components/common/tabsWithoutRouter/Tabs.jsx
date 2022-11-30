// # Import Component Style
import "./Tabs.css";

/* Hearder of Tabs */
function TabNavItem ({ id, title, activeTab, callback }){

  return (
     <li onClick={() => callback(id, title)} className={activeTab === id ? "active" : ""}>
       { title }
     </li>
   );
  };

/* Content of Tabs */
function TabContent ({ id, activeTab, children}) {

  return activeTab === id ? (
    <div className="TabContent">{children}</div>
  ) : null;

};

/* Tabs Component */
function Tabs(props) {
  const data = props.data;
  const activeTab = props.activeTab
  const callback = props.callback

  return (
    <div className="Tabs">
      <ul className="nav">
        {data.map((item) => (
          <TabNavItem
            title={item.name}
            id={item.id}
            activeTab={activeTab}
            callback={callback}
          />
        ))}
      </ul>
      <div className="outlet">
        {data.map((item) => (
          <TabContent id={item.id} activeTab={activeTab}>
          {props.children.map((child) => {
                    if (child.key === item.id) {
                      return child;
                    }})}
          </TabContent>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
