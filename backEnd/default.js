import { data } from "./constants/data.js";
import News from "./modal/news.js";

const DefaultData = async () => {
  try {
    await News.deleteMany({});
    await News.insertMany(data);
    console.log("Data Imported Successfully");
  } catch (error) {
    console.log("Error", error.message);
  }
};
export default DefaultData;
