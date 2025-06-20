// utils/db.js
import mysql from "mysql2/promise";

export const database = async () => {
  try {
    // Local Database
    const connection = await mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "vega",
      waitForConnections: true,
      port: 3306,
      connectionLimit: 10,
      queueLimit: 0,
    });
   

    return connection;
  } catch (error) {
    console.error("Database connection error:", error);
    
    throw error; // Rethrow the error to be handled in the calling function
  }
};