import jwt from 'jsonwebtoken';

export function createAccessToken(user) {
  return jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' }
  );
}

export function createRefreshToken(user) {
  return jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' }
  );
}

export function sendAccessToken(res, accessToken, email) {
    res.status(200).json({
      accessToken,
      email,
    });
  }

export function sendRefreshToken(res, refreshToken) {
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    path: '/refresh_token',
  });
}