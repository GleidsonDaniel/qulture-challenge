import user from '~/assets/icons/user/user.png';

const httpRegex = /^(http|https)/;

export default function collaboratorImageVerify(photoUrl) {
  if (photoUrl) {
    if (photoUrl.includes('data:image/png;base64')) return {uri: photoUrl};
    if (httpRegex.test(photoUrl) && !photoUrl.includes('imgur')) {
      return {
        uri: photoUrl,
      };
    }
  }
  return user;
}
