const Notification = (props) => {
  //  Write your code here.
  const { className, iconUrl, message } = props;
  const containerClassName = `notification-container ${className}`;
  return (
    <div className={containerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="heading-title">Notification</h1>
    <div className="container-list">
      <div className="blue-container">
        <Notification
          className="primary-bg-color"
          iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          message="Information Message"
        />
      </div>
      <div className="green-container">
        <Notification
          className="success-bg-color"
          iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          message="Success Message"
        />
      </div>
      <div className="yellow-container">
        <Notification
          className="warning-bg-color"
          iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          message="Warning Message"
        />
      </div>
      <div className="red-container">
        <Notification
          className="danger-bg-color"
          iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          message="Error Message"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
