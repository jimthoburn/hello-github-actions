const { Octokit } = require("@octokit/core");
const { createActionAuth } = require("@octokit/auth-action");

const auth = createActionAuth();
const octokit = new Octokit({ auth });

async function foo() {
  const response = await octokit.request("GET /repos/:owner/:repo/contents/:path", {
    owner: "jimthoburn",
    repo: "hello-github-actions",
    path: "README.md"
  });

  console.log(response.data);
}

foo();

console.log("Hello world");
