export enum HTTPHeaders {
  ResponseTime = 'x-response-time',
  ForwardedFor = 'x-forwarded-for',
}
export enum HTTPMethods {
  HEAD = 'HEAD',
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum SuccessMessages {
  CreateSuccess = 'Resource created successfully',
  GetSuccess = 'Resource retrieved successfully',
  UpdateSuccess = 'Resource updated successfully',
  DeleteSuccess = 'Resource deleted successfully',
  GenericSuccess = 'Operation completed successfully',
  UserRemoveSuccess = 'User removed!',
  ProductRemoveSuccess = 'Product removed!',
}
export enum SpecialMessages {
  Redacted = '*****',
  DottedLine = '. . . . . . .',
}
// Define sensitive keys you want to remove from logs
export enum SensitiveKeys {
  Password = 'password',
  NewPassword = 'new_password',
  OldPassword = 'old_password',
  RepeatPassword = 'repeat_password',
}

export enum LogIndentation {
  None = 0,
  SM = 2, // Small
  MD = 4, // Medium
  LG = 6, // Large
  XL = 8, // XLarge
  XXL = 10,
  XXXL = 12,
}
