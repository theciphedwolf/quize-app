export default class Api {
  static API_URL =
    process.env.REACT_APP_API_URL || "http://localhost:3000/api/v1";

  static async login(username, password) {
    if (username === "admin" && password === "admin") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return { user: { name: "Admin", username: "admin" } };
    }

    throw new Error("Invalid username or password");
  }

  static async logout() {
    localStorage.removeItem("@user");
  }

  static async enroll(datapost) {
   if(a>3){
     console.log("hello")
   }
}
}
