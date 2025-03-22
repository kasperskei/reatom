import { Project } from "ts-morph"

const project = new Project();

const file = project.addSourceFileAtPath("./source.ts");
const typeAlias = file.getTypeAliasOrThrow("HTMLElementTags");
const type = typeAlias.getType();
const fullTypeText = type.getText();

console.log(fullTypeText)