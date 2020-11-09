export default class Api {
  static API_URL =
process.env.REACT_APP_API_URL || "http://95.217.209.124:5000/api/v1";

  static async login(username, password) {
    const data = await fetch(`${this.API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: username, password }),
    });
    const fetcheditems = await data.json();
    if (fetcheditems.status === "success") {
      localStorage.setItem("@token", JSON.stringify(fetcheditems.token));
      return fetcheditems.data;
    }

    throw new Error("Invalid username or password");
  }

  static async signup(values) {
    const data = await fetch(`${this.API_URL}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const fetcheditems = await data.json();
    return fetcheditems;
  }

  static async logout() {
    localStorage.removeItem("@user");
  }

  static async addOne(model, obj) {
    const data = await fetch(`${this.API_URL}/${model}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    const fetcheditems = await data.json();
    return fetcheditems;
  }

  static async getAll(model) {
    const data = await fetch(`${this.API_URL}/${model}`);
    const fetcheditems = await data.json();
    return fetcheditems;
  }

  static async getAllWhere(model, parentModel, id) {
    const data = await fetch(`${this.API_URL}/${model}/${parentModel}/${id}`);
    const fetcheditems = await data.json();
    return fetcheditems;
  }

  static async getOne(model, id) {
    const data = await fetch(`${this.API_URL}/${model}/${id}`);
    const fetcheditem = await data.json();
    return fetcheditem;
  }

  static async updateOne(model, id, obj) {
    const data = await fetch(`${this.API_URL}/${model}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    const fetcheditem = await data.json();
    return fetcheditem;
  }

  static async onFileChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      console.log(info.file.response.data.arr[0]);
      return info.file.response.data.arr[0];
    } else if (info.file.status === "error") {
      return `${info.file.name} file upload failed.`;
    }
  }
}
