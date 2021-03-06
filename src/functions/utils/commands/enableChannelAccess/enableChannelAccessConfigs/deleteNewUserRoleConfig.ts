import { AxiosRequestConfig } from "axios";
import { DiscordId } from "types/staticTypes";

export const deleteNewUserRoleConfig = (discordId: DiscordId) => {
  const {
    discordAuthToken,
    discordGuildID,
    roleIDs: { newUserRoleID }
    // @ts-ignore, undefined only in local env
  } = JSON.parse(process.env.DISCORD_CREDENTIALS);

  const deleteNewUserRoleConfig: AxiosRequestConfig = {
    method: "DELETE",
    url: `https://discord.com/api/v8/guilds/${discordGuildID}/members/${discordId}/roles/${newUserRoleID}`,
    headers: {
      Authorization: discordAuthToken
    }
  };

  return deleteNewUserRoleConfig;
};
