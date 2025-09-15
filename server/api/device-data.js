// // import { database } from "../utils/db.js";

// // export default defineEventHandler(async (event) => {
// //   const body = await readBody(event);

// //   console.log(body);

// //   try {
// //     const db = await database();

// //     const query = `
// //       INSERT INTO alpha (
// //         deviceUid, deviceId, fV, pV, configT, configL, timestamp, ldTimestamp,
// //         CI, TC, count, kvStatus, batteryVoltage, batteryPercentage, battery_percentage_FG,
// //         eventTimestamp, Checkpoint, ResetReason,
// //         wifiMacs, wifiMacsCount, wifiMacsBytes,
// //         wifiSSIDs, wakeupDur, tI, hI,
// //         json_prefix, tP1
// //       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// //     `;

// //     const values = [
// //       body.deviceUid,
// //       body.deviceId, // ✅ fixed name here
// //       body.fV,
// //       body.pV,
// //       body.configT,
// //       body.configL,
// //       body.timestamp,
// //       body.ldTimestamp,
// //       body.CI,
// //       body.TC,
// //       body.count,
// //       body.kvStatus,
// //       body.batteryVoltage,
// //       body.batteryPercentage,
// //       body.battery_percentage_FG,
// //       body.eventTimestamp,
// //       body.Checkpoint,
// //       body.ResetReason,
// //       body.wifiMacs,
// //       body.wifiMacsCount,
// //       body.wifiMacsBytes,
// //       body.wifiSSIDs,
// //       body.wakeupDur,
// //       body.tI,
// //       body.hI,
// //       body.json_prefix,
// //       body.tP1 || null, // ensure this nullable field is accounted for
// //     ];

// //     console.log("Insert payload:", values);

// //     await db.execute(query, values);
// //   } catch (error) {
// //     console.error("Database error:", error.message);
// //     return {
// //       status: "error",
// //       message: error.message,
// //     };
// //   }

// //   return { status: "success" };
// // });

// import { database } from "../utils/db.js";

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);
//   console.log("📥 Incoming data:", body);

//   try {
//     const db = await database();

//     const query = `
//       INSERT INTO alpha (
//         deviceUid, deviceId, fV, pV, configT, configL, timestamp, ldTimestamp,
//         CI, TC, count, kvStatus, batteryVoltage, batteryPercentage, battery_percentage_FG,
//         eventTimestamp, Checkpoint, ResetReason,
//         wifiMacs, wifiMacsCount, wifiMacsBytes,
//         wifiSSIDs, wakeupDur, tI, hI,
//         json_prefix, tP1
//       ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//     `;

//     const values = [
//       body.deviceUid,
//       body.deviceId,
//       body.fV,
//       body.pV,
//       body.configT,
//       body.configL,
//       body.timestamp,
//       body.ldTimestamp,
//       body.CI,
//       body.TC,
//       body.count,
//       body.kvStatus,
//       body.batteryVoltage,
//       body.batteryPercentage,
//       body.battery_percentage_FG,
//       body.eventTimestamp,
//       body.Checkpoint,
//       body.ResetReason,
//       body.wifiMacs,
//       body.wifiMacsCount,
//       body.wifiMacsBytes,
//       body.wifiSSIDs,
//       body.wakeupDur,
//       body.tI,
//       body.hI,
//       body.json_prefix,
//       body.tP1 || null,
//     ];

//     await db.execute(query, values);
//     return { status: "success" };
//   } catch (error) {
//     console.error("❌ Database error:", error.message);
//     return { status: "error", message: error.message };
//   }
// });

import { database } from "../utils/db.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("📥 Incoming data:", body);

  try {
    const db = await database();

    const query = `
      INSERT INTO alpha (
        deviceUid, deviceId, fV, pV, configT, configL, timestamp, ldTimestamp,
        CI, TC, count, kvStatus, batteryVoltage, batteryPercentage, battery_percentage_FG,
        eventTimestamp, Checkpoint, ResetReason,
        wifiMacs, wifiMacsCount, wifiMacsBytes,
        wifiSSIDs, wakeupDur, tI, hI,
        json_prefix, tP1
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      body.deviceUid,
      body.deviceId,
      body.fV,
      body.pV,
      body.configT,
      body.configL,
      body.timestamp,
      body.ldTimestamp,
      body.CI,
      body.TC,
      body.count,
      body.kvStatus,
      body.batteryVoltage,
      body.batteryPercentage,
      body.battery_percentage_FG,
      body.eventTimestamp,
      body.Checkpoint,
      body.ResetReason,
      body.wifiMacs,
      body.wifiMacsCount,
      body.wifiMacsBytes,
      body.wifiSSIDs,
      body.wakeupDur,
      body.tI,
      body.hI,
      body.json_prefix,
      body.tP1,
    ];

    await db.execute(query, values);

    return {
      status: "success",
      timestamp: new Date().toISOString(),
      deviceId: body.deviceId,
    };
  } catch (error) {
    console.error("❌ Database error:", error.message);

    // Return detailed error for debugging
    return {
      status: "error",
      message: error.message,
      timestamp: new Date().toISOString(),
      deviceId: body.deviceId || "unknown",
    };
  }
});
