export const responseJWT = {
  success: ({ message = "Success", status = 200, token = undefined, user = undefined }) => ({
    status: status,
    success: true,
    error: false,
    message,
    token,
    user
  }),
  error: ({ message = "Error", status = 500, token = undefined, user = undefined  }) => ({
    status: status,
    success: false,
    error: true,
    message,
    token,
    user
  })
};