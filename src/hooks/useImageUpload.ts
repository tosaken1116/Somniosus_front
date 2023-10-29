'use server';

import { S3Client } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';

export const uploadImage = async (data: FormData | null): Promise<void> => {
  if (data === null) {
    return;
  }
  const file = data.get('fileUpload');
  if (file === null) {
    return;
  }
  const s3client = new S3Client({
    credentials: {
      accessKeyId: process.env['ACCESS_KEY_ID'] || '',
      secretAccessKey: process.env['SECRET_ACCESS_KEY'] || '',
    },
  });
  try {
    const upload = new Upload({
      client: s3client,
      params: {
        Bucket: `${process.env['S3_BUCKET_NAME']}`,
        Key: 'test.png',
        Body: file,
        ContentType: 'image/jpg',
      },
    });

    console.log('Uploading to S3...');
    await upload.done();

    console.log('Upload successful!');
  } catch (e) {
    console.error(e);
  }
};
