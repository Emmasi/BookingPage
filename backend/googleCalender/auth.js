const { Auth } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

async function loadAuthClient() {
  const auth = new Auth.GoogleAuth({
    keyFile: "./service-account.json",
    scopes: SCOPES,
  });

  return await auth.getClient();
}

async function authorize() {
  try {
    const client = await loadAuthClient();
    return client;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports.authorize = authorize;
