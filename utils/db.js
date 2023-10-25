import mongoose from "mongoose";
export const connect = (url = process.env.MONGO_URL) => {
  return mongoose
    .connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    })
    .then(() => console.log("Database Connected"));
};
