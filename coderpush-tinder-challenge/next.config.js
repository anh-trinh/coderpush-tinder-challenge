/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://anhtrinh01:trinhngoctheanh@cluster0.e1orb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  }
};

module.exports = nextConfig;
