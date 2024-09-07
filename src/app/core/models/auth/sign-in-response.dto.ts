import {AppSpace} from "@app/core/enums/app.namespace";

export interface SignInResponseDto {
  jwtToken: string;
  email: string;
  userRole: AppSpace.UserRoleEnum;
  userId: number;
  defaultPasswordChanged: boolean;
}
