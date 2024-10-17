import axios from "axios";
import fs from "fs";

const url = "https://api.openai.com/v1/audio/speech";
const apiKey =
  "Bearer xxxxxx";

const data = {
  model: "tts-1",
  input: "Đây là một phần mềm giúp chuyển văn bản thành giọng nói. Bạn có thể thử nghiệm với văn bản bất kỳ.",
  voice: "onyx",
  speed: 1.0,
};

axios({
  method: "post",
  url: url,
  headers: {
    Authorization: apiKey,
    "Content-Type": "application/json",
  },
  data: data,
  responseType: "stream",
})
  .then((response) => {
    response.data.pipe(fs.createWriteStream("axios.mp3"));
    console.log("Audio file saved as test1.mp3");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
