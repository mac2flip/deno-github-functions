/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineConnector } from "../../../deps.ts";
import { Schema } from "../../../deps.ts";

export default DefineConnector({
  callback_id: "A05570UAVE0#/functions/create_envelope",
  title: "Create an envelope",
  description: "Create a DocuSign envelope using a document template",
  input_parameters: {
    properties: {
      subdomain: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "DocuSign domain",
      },
      account_id: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Account",
      },
      template_id: {
        type: Schema.types.string,
        description: "Please select an option",
        title: "Template",
      },
      docusign_access_token: {
        type: Schema.slack.types.oauth2,
        description: "DocuSign Credential to use",
        title: "DocuSign Access Token",
      },
    },
    required: [
      "subdomain",
      "account_id",
      "template_id",
      "docusign_access_token",
    ],
  },
  output_parameters: {
    properties: {
      envelope_id: {
        type: Schema.types.string,
        description: "New envelope Id",
        title: "Envelope ID",
      },
    },
    required: ["envelope_id"],
  },
});