/** This file was autogenerated. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { assertEquals, assertExists } from "../../../dev_deps.ts";
import { DefineWorkflow } from "../../../dev_deps.ts";
import CreateMeeting from "./create_meeting.ts";

Deno.test("CreateMeeting can be used as a Slack function in a workflow step", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateMeeting_slack_function",
    title: "Test CreateMeeting",
    description: "This is a generated test to test CreateMeeting",
  });
  testWorkflow.addStep(CreateMeeting, {
    topic: "test",
    invitees: "test",
    zoom_access_token: "test",
  });
  const actual = testWorkflow.steps[0].export();

  assertEquals(actual.function_id, "A04S9208DRQ#/functions/create_meeting");
  assertEquals(actual.inputs, {
    topic: "test",
    invitees: "test",
    zoom_access_token: "test",
  });
});

Deno.test("All outputs of Slack function CreateMeeting should exist", () => {
  const testWorkflow = DefineWorkflow({
    callback_id: "test_CreateMeeting_slack_function",
    title: "Test CreateMeeting",
    description: "This is a generated test to test CreateMeeting",
  });
  const step = testWorkflow.addStep(CreateMeeting, {
    topic: "test",
    invitees: "test",
    zoom_access_token: "test",
  });
  assertExists(step.outputs.meeting_id);
  assertExists(step.outputs.topic);
  assertExists(step.outputs.agenda);
  assertExists(step.outputs.host_email);
  assertExists(step.outputs.start_url);
  assertExists(step.outputs.join_url);
  assertExists(step.outputs.invitees);
  assertExists(step.outputs.invitee_emails);
});
