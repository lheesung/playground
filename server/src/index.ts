import express, { Request, Response } from "express";
import axios from "axios";
import { ID, SECRET } from "./constants/config";

const app = express();
const client_id = ID;
const client_secret = SECRET;

const query = "번역할 문장을 입력하세요.";

console.log(client_id);
console.log(client_secret);

app.get("/translate", async (req: Request, res: Response) => {
  const API = "https://openapi.naver.com/v1/papago/n2mt";
  const options = {
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };

  try {
    const response = await axios.post(
      API,
      { source: "ko", target: "en", text: query },
      options
    );

    res.status(response.status).json(response.data);
  } catch (error: any) {
    if (error.response) {
      res.status(error.response.status).end();
      console.error("error =", error.response.status);
    } else {
      res.status(500).end();
      console.error("error =", error.message);
    }
  }
});

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000/translate app listening on port 3000.");
});
