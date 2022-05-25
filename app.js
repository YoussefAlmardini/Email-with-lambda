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
            subject: "Je activatie code staat klaar!",
            body: "Welkom bij financiallease app: Activeer je account om volledig gebruiken te maken van onze app services!",
            activationCode: "869578"
        });
        break;

    case templates.RESEND_CODE_MESSAGE:
        template = templateGenerator(templates.MAIN, templates.RESEND_CODE_MESSAGE);
        response = mustache.render(template, {
            subject: "Je activatie code staat klaar!",
            body: "Nieuwe activatiecode is aangevraagd, gebruik de code hieronder om je account te actieveren.",
            activationCode: "123434"
        });
        break;

    default: throw new Error(templateName + " is not valid template or not exist");
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'html');
    res.end(response);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
