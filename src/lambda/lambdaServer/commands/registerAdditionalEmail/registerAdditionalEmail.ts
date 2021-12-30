import axios from "axios";
import { DiscordId, UserEmail } from "staticTypes";
import { sendValidationEmail } from "../redeemer/redeemerUtils/sendValidationEmail";
import { postAdditionalEmailConfig } from "./registerAdditionalEmailConfigs/postAdditionalEmailConfig";

export const registerAdditionalEmail = async (email: UserEmail, discordId: DiscordId) => {
  try {
    // eslint-disable-next-line no-var
    var { data } = await axios(postAdditionalEmailConfig(email, discordId));
  } catch (err: any) {
    throw new Error(err.response.status + ": " + err.response.data.error);
  }

  // Send Email with random token in hyperlink.
  await sendValidationEmail(email, data.channelsToJoin, data.tempRandToken, discordId);
  return data;
};