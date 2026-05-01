import pobTypescriptConfig from "@pob/eslint-config";

export default [...pobTypescriptConfig(import.meta.url).configs.baseModule];
