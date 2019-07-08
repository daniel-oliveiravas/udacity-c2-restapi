export const config = {
  "username": process.env.DATABASE_USERNAME,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  "host": process.env.DATABASE_HOST,
  "dialect": process.env.DATABASE_DIALECT,
  "aws_region": process.env.AWS_REGION,
  "aws_profile": process.env.AWS_PROFILE,
  "aws_media_bucket": process.env.MEDIA_BUCKET
}
