# proxy_backend

Use a proxy in a gitlab job.

Using a proxy in a GitLab CI job can serve multiple purposes. Here's a brief explanation:

1. Accessing external resources: If your CI job needs to access external resources, such as external APIs or package registries, a proxy can be used to route the network traffic through the proxy server.
2. Performance optimization: In some cases, a proxy server can act as a caching layer for frequently accessed resources. This can help improve the performance of CI jobs by reducing the time required to download dependencies or retrieve external assets.
3. Security and privacy: By using a proxy server, you can add an extra layer of security to your CI job. The proxy can act as a gateway between the job and the external resources, filtering and monitoring the network traffic for potential security threats.

!!! note "Note"
    Normally, Set a proxy on gitlab ci runner is more reasonable. Refer to the link [Running GitLab Runner behind a proxy](https://docs.gitlab.com/runner/configuration/proxy.html)

## Usage

Use pre-commit on a proxy

```yaml
include:
  - remote: https://gitlab.com/msclock/gitlab-ci-templates/-/raw/master/templates/Proxy.gitlab-ci.yml

# @Description check codebase with pre-commit
pre-commit:
  extends:
    - .pre-commit
    - .proxy_backend
  variables:
    PRE_COMMIT_DEDUPLICATE_MR_AND_BRANCH: "false"
    PRE_COMMIT_AUTO_FIX_BRANCH_ONLY: "true"
    # Set the proxy subscribe here
    CLASH_PROXY_SUB: "the clash subscribe"
```

## Configuration

The available configuration variables can be set as CI/CD variables:

| Variable Name    | Description                                          | Default                                                             |
|------------------|------------------------------------------------------|---------------------------------------------------------------------|
| CLASH_PROXY_SUB  | Specifies the clash subscribe. This is **Required**. |                                                                     |
| PROXY_WHITE_LIST | The white list of proxy.                             | `10.0.0.0/8,192.168.0.0/16,127.0.0.1,172.16.0.0/16,$CI_SERVER_HOST` |
| ENABLE_PROXY     | Specifies whether to enable the proxy configuration. |                                                                     |
