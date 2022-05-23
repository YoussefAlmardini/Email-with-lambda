# Financiallease email templates

Collection of email to manage user's actions through the financial-lease mobile native app.

## Requirements
* [Aws-cli.](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
* [NPM.](https://nodejs.org/en/download/)
## Create a template

- Add into the directory `templates` a HTML template you want to manage.
- Change the dynamic data to custom variables with double brackets. example:

```bash
<td bgcolor="#ffffff"><p style="margin: 0;">{{email}}</p></td>
```
- Add a new case and function into `index.js`.

## Deploy changes

```bash
via cli

# 1- zip all files locally with the name `CustomMessageTrigger`
zip -r CustomMessageTrigger.zip .

# 2- update lambda current function, make sure that your file path is correct:
aws lambda update-function-code --function-name CustomMessageTrigger \
--zip-file fileb://your/file/path/customMessageTrigger.zip
```
