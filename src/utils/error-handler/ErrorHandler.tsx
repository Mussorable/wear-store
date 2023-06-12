const ErrorHandler = (errorCode: string) => {
  let message;

  switch (errorCode) {
    case "auth/wrong-password":
      message = "Incorrect password, please try again";
      break;
    case "auth/user-not-found":
      message = "User not found, please try again or Sign Up";
      break;
    case "auth/invalid-email":
      message = "Invalid email";
      break;
    case "auth/email-already-in-use":
      message = "Email already exist, please Sign In or reset your password";
      break;
    case "auth/weak-password":
      message = "Password should be at least 6 characters";
      break;
    default:
      message = "Something went wrong";
  }

  console.error(message);
  //   return message;
};

export default ErrorHandler;
