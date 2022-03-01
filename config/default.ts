const dbName = "TypeMongoAPI";

export default {
  port: 8888,
  dbName,
  dbUri: `mongodb://root:alohomora@localhost:27017/${dbName}?authSource=admin&readPreference=primary&ssl=false`,
  saltWorkFactor: 10,
};
