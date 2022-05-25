# Financiallease email templates

Collection of email to manage user's **Autherntication** actions triggerd by financial-lease mobile native app.

## Requirements
* [Aws-cli.](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
* [NPM.](https://nodejs.org/en/download/)
* Run `npm install`.
## Create a template

- Add into the directory `templates` an HTML template you want to manage.
- Change the dynamic data to custom variables with double brackets. example:
  - `<td bgcolor="#ffffff"><p style="margin: 0;">{{email}}</p></td>`
- Add a new case and function into `index.js`.
- Add template name to `templates.js`.

## Test template
- Add your test-case to `app.js`.
- Merge your template with main template using generator:
  - `template = templateGenerator(templates.MAIN, templates.YOUR_NEW_TEMPLATE);`
- Run test command specific template name to test
  - `npm run test foo`
- check local host: http://127.0.0.1:3000/
## Deploy to Lambda

```bash
# 1- remove current zip file (if exist) to avoid conflicts:
rm CustomMessageTrigger.zip

# 2- zip all files locally with as `CustomMessageTrigger` excluding dev files:
zip -r CustomMessageTrigger.zip . -x app.js package.json /gitignore README.md

# 3- update lambda current function, make sure that your file path is correct:
aws lambda update-function-code --function-name CustomMessageTrigger \
--zip-file fileb://your/file/path/customMessageTrigger.zip
```
