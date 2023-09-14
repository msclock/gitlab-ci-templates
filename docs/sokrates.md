# sokrates

Using sokrates document and analyze software architectures of complex systems.

!!! info "sokrates"
    [Sokrates](https://www.sokrates.dev/) is provides a pragmatic, inexpensive way to extract rich data from any source code repositories. No need for long interviews and workshops. Just show the code.It can help you to understand your code by making visible the size, complexity, and coupling of software, as well all people interactions and team topologies.

## Usage

Here presents a simple usage.

```yaml
include:
  - project: msclock/gitlab-ci-templates
    ref: master
    file:
      - /templates/Stages.gitlab-ci.yml
      - /jobs/Sokrates.gitlab-ci.yml
```
