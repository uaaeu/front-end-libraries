//Access Props Using this.props
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Access props in es6 class component with using this.props */}
        <p>
          Your temporary password is: <strong>{this.props.tempPassword}</strong>
        </p>
      </div>
    );
  }
}

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Reset Password</h2>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings ASAP.</h3>
        {/* Assign a value of a string that is at least 8 characters long */}
        <ReturnTempPassword tempPassword={"asd123f4"} />
      </div>
    );
  }
}
