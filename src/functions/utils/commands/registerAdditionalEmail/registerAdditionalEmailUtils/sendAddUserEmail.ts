import { DiscordChannelsStr, DiscordId, TempRandToken, UserEmail, Username } from "types/staticTypes";
import { addUserEmailTemplate } from "./addUserEmailTemplate";

export const sendAddUserEmail = async (
  _to: UserEmail,
  discordChannels: DiscordChannelsStr,
  tempRandToken: TempRandToken,
  discordId: DiscordId,
  username: Username
) => {
  const sgMail = require("@sendgrid/mail");
  // @ts-ignore, only undefined in local dev
  const sendGridApiKey = JSON.parse(process.env.SENDGRID_API_KEY)["sendgrid-api-key"];
  sgMail.setApiKey(sendGridApiKey);

  const outboundEmail = {
    to: _to,
    from: "dannygoldsmithmagic@gmail.com",
    subject: "Please Verify Your Email with Danny Goldsmith Magic",
    html: addUserEmailTemplate(_to, discordChannels, tempRandToken, discordId, username)
  };

  await sgMail.send(outboundEmail);
};
