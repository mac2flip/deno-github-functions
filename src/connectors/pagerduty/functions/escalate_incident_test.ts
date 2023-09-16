/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import EscalateIncident from "./escalate_incident.ts";

Deno.test("EscalateIncident can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_EscalateIncident_slack_function",
    title: "Test EscalateIncident",
    description: "This is a generated test to test EscalateIncident",
  });
  testWorkflow.addStep(EscalateIncident, {
    incident_id: "test",
    escalation_level: "test",
    pagerduty_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A04RSGH23L7#/functions/escalate_incident");
  assertEquals(actual.inputs, {
    incident_id: "test",
    escalation_level: "test",
    pagerduty_access_token: "test",
  });
});

Deno.test("All outputs of Slack function EscalateIncident should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_EscalateIncident_slack_function",
    title: "Test EscalateIncident",
    description: "This is a generated test to test EscalateIncident",
  });
  const step = testWorkflow.addStep(EscalateIncident, {
    incident_id: "test",
    escalation_level: "test",
    pagerduty_access_token: "test",
  });
  assertExists(step.outputs.incident_id);
  assertExists(step.outputs.incident_url);
  assertExists(step.outputs.incident_title);
  assertExists(step.outputs.incident_details);
  assertExists(step.outputs.assignments);
  assertExists(step.outputs.escalation_policy);
  assertExists(step.outputs.service);
  assertExists(step.outputs.escalation_level);
});
