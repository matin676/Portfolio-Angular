const fs = require('fs');
const path = require('path');

// Determine if we are in production mode
// const isProduction = process.env.NODE_ENV === 'production';

const targetPath = path.join(__dirname, '../src/environments/environment.ts');
const targetPathProd = path.join(__dirname, '../src/environments/environment.prod.ts');

const envConfigFile = `export const environment = {
  production: true,
  emailjs: {
    publicKey: '${process.env.EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_PLACEHOLDER'}',
    serviceId: '${process.env.EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_PLACEHOLDER'}',
    templateId: '${process.env.EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID_PLACEHOLDER'}',
  },
};
`;

// Ensure the directory exists
const dir = path.dirname(targetPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Output generated at ${targetPath}`);
});

fs.writeFile(targetPathProd, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Output generated at ${targetPathProd}`);
});
