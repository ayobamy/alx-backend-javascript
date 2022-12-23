import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const userInfo = createUser();
  const photoUpload = uploadPhoto();

  try {
    return { photo: await photoUpload, user: await userInfo };
  } catch (err) {
    return { photo: null, user: null };
  }
}
