import {
  AwsAPIKey,
  CodeFromDiscord,
  DiscordChannelsStr,
  DiscordId,
  RouteCommand,
  TempRandToken,
  UserEmail
} from "types/staticTypes";

/**
 * The incoming request, created via API Gateway request templates.
 */
export interface DiscordEventRequest {
  // For Command Lambda and Endpoint Lambda
  // POST Requests.
  json: DiscordJson;
  // Access Code Route (GET Request); (event.code)
  code: CodeFromDiscord;
  // Verification Route (GET Request); (event.tempRandToken, event.email, event.discordId)
  tempRandToken: TempRandToken;
  email: UserEmail;
  discordId: DiscordId;
  attemptedEmail: UserEmail;
  x: string;
  // For CommandLambda only event.routeCommand->
  command: RouteCommand;
}

/**
 * The actual Discord request data.
 */
export interface DiscordJson {
  data?: DiscordRequestData;
}

/**
 * The data in the Discord request. Should be handled for actually parsing commands.
 */
export interface DiscordRequestData {
  command: RouteCommand;
  email: UserEmail;
  discordId: DiscordId;
  apiKey: AwsAPIKey;
  channels: DiscordChannelsStr;
  attemptedEmail: UserEmail;
  username: string;
  errMessage: string;
  errEmail: string;
  errDiscordID: string;
  errChannels: string;
  automationType: string;
}

/**
 * The response to send back for a Discord request.
 */
export type DiscordEventResponse = string;
