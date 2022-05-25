const fs = require("fs");

const getTemplate = (template) => fs.readFileSync("./templates/" + template + ".html", "utf8");
const merge = (source, content) => source.replace('{{content}}', content);

function generateTemplate(main, content) {
    main = getTemplate(main);
    content = getTemplate(content);

    return merge(main, content);
}

module.exports = generateTemplate;
