module.exports = {
  type: 'service_account',
  project_id: 'nose-hht',
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY,
  client_email: 'firebase-adminsdk-l75li@nose-hht.iam.gserviceaccount.com',
  client_id: '113809017825058286637',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-l75li%40nose-hht.iam.gserviceaccount.com',
};
