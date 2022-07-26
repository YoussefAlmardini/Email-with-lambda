const http = require('http');
const mustache = require("mustache");
const templateGenerator = require("./templateGenerator");
const templates = require("./templates");

const hostname = '127.0.0.1';
const port = 3000;
const params = process.argv.slice(2);
const templateName = params[0];

if (templateName === undefined) {
    throw new Error("add a template name parameter to run your test!");
}

let response = null;

switch (templateName) {
    case templates.CONFIRM_SIGN_UP:
        template = templateGenerator(templates.MAIN, templates.CONFIRM_SIGN_UP);
        response = mustache.render(template, {
            title: "Bevestig je account",
            activationCode: "869578"
        });
        break;

    case templates.RESEND_CODE_MESSAGE:
        template = templateGenerator(templates.MAIN, templates.RESEND_CODE_MESSAGE);
        response = mustache.render(template, {
            title: "Bevestig je account",
            activationCode: "123434"
        });
        break;

    case templates.FORGET_PASSWORD:
        template = templateGenerator(templates.MAIN, templates.FORGET_PASSWORD);
        response = mustache.render(template, {
            title: "Wachtwoord vergeten?",
            activationCode: "123434"
        });
        break;

    default: throw new Error(templateName + " is not valid template or not exist");
}

const server = http.createServer(async(req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'html');
    await res.end(response);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
