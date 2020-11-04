export default class Api {
  static API_URL =
    process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1";

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

  static async addSubject(){
    console.log("hello");
  }

  static async getSubject(){
    const data = await fetch(`${API_URL}/subjects/`);
      const fetcheditems = await data.json();
      console.log(fetcheditems.data.gpss);
      setPayscales(fetcheditems.data.gpss);

      if (fetcheditems.data.gpss && fetcheditems.data.gpss.length > 0) {
        const mydata = fetcheditems.data.gpss.map((row) => ({
          payScale: row.payScaleLevel,
          minimumSalary: row.payScaleMinSalary,
          increment: row.payScaleIncrement,
          maximumSalary: row.payScaleMaxSalary,
        }));
        setData(mydata);
  }

 
}
