export const config = {
  "database": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "name": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "dialect": process.env.DATABASE_DIALECT,
  },
  "aws": {
    "region": process.env.AWS_REGION,
    "profile": process.env.AWS_PROFILE,
    "media_bucket": process.env.MEDIA_BUCKET
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }
}
