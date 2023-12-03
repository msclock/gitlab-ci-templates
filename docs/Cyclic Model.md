# Cyclic Model

The importance of GitLab CI template extensibility lies in its ability to help teams effectively manage and organize their CI/CD workflows. By utilizing extensible templates, teams can create a standardized set of CI/CD configurations to ensure that code is built, tested, and deployed correctly across different environments. This allows for streamlined development processes, improved collaboration, and easier maintenance of the CI/CD pipeline.

Here we will introduce the Cyclic Model it has been used in the repository to enhance the extensibility of templates of jobs.

## Scripts Model

Scripts Model is an implementation applied with the Cyclic Model. It is a model that allows us to define every script steps which may be extended or overrode easily by the user.

A basic script model is issued at [#11](https://gitlab.com/msclock/gitlab-ci-templates/-/issues/11).

The `Scripts Model` is a flexible model that allows users to define script steps. It consists of a base script model called `base.gitlab-ci.yml`, which defines the basic structure of a script model. This includes the `.model_scripts` section, which defines all possible script steps, and the `.model_job_template` section, which defines the script step constraints.

```yaml
# @Description model scripts
.model_scripts:
  step 1: |-
    echo step 1
    echo step 1-1
    echo step 1-2
  step 2: |-
    echo step 2
  step 3: |-
    echo step 3
    echo step 3-1
    echo step 3-2

# @Description job model template
.model_job_template:
  extend: .model_script
  script:
    - !reference [.model_script, step 1]
    - !reference [.model_script, step 2]
    - !reference [.model_script, step 3]

# @Description actual mode job
model_job:
  stage: lint
  script: !reference [.model_job_template, script]
```

Then user can extend the script model with the following script model in another file:

```yaml
# @Description override step 2 using a new echo message
.model_script:
  step 2: |-
    echo "I'm customized here"

# @Description exchange step 2 and step 3 and discard step 1
.model_job_template:
  extend: .model_script
  script:
    - !reference [.model_script, step 3]
    - !reference [.model_script, step 2]
```

Users can extend the script model by creating another file and overriding specific steps. For example, the provided code overrides step 2 with a new echo message and exchanges step 2 and step 3 while discarding step 1. The result of these overrides is a `model_job` with a stage of `lint` and the following script:

```yaml
model_job:
  stage: lint
  script:
  - |-
    echo step 3
    echo step 3.1
  - echo "I'm customized here"
```

In conclusion, the model allows users to easily customize and extend the Scripts Model to fit their specific needs.

## Rules Model

The Cyclic Model can also applying to the rules of a job which could be called `Rules Model`.

The below is an example of Rules Model:

??? info "A Rules Model implementation in the repository"
    ```yaml
    --8<-- "templates/Rules.gitlab-ci.yml"
    ```

??? info "The Rules Model is applied in the workflow"
    ```yaml
    --8<-- "workflows/General.gitlab-ci.yml"
    ```
