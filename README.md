# Income Reporting Playbook

## Disclaimer
**_This playbook is \*\*NOT\*\* a source of authoritative, legal, or regulatory guidance and has not been officially endorsed by the Center for Medicaid and CHIP Services (CMCS) or the Food and Nutrition Service (FNS). It is advisory only, and should be adapted appropriately for each state and scenario. Ultimately, it is the responsibility of state Medicaid and Supplemental Nutrition Assistance Program (SNAP) officials to ensure that implementation of any project is compliant with federal Medicaid and SNAP statute and regulations._**

**_Refer to CMCS' [website](https://www.medicaid.gov/medicaid/index.html) and FNS' [website](https://www.fns.usda.gov/snap/supplemental-nutrition-assistance-program) for up-to-date official guidance._**

## About the Project
**This project is being developed by Nava in collaboration with USDS.**

The Income Reporting Playbook will offer guidance and templates to improve the client experience of providing income during benefit applications and renewals.
In this playbook, you’ll find:
* Recommended best practices
* Common terms and plain language definitions
* Example language and visual templates for income
Following this guidance can improve application form accessibility, equity, and usability.

# Development and Software Delivery Lifecycle

The following guide is for members of the project team who have access to the repository. For more information on contribributing, see [the Contributing section](#contributing).

## Local Development

### Installation

``` bash
brew install rbenv
rbenv install
bundle install
```

### Running the development server

Note: This server does not rebuild automatically. After any code changes, you will have to re-run the `make serve` command for it to rebuild.

``` bash
make serve
```

You should now be able to access the site at:
<http://localhost:4000/income-reporting-playbook/?secret=underconstruction>

## Contributing

We’re continuously improving and want to hear from you. Help us by emailing your feedback to [Income-reporting-project@navapbc.com](mailto:Income-reporting-project@navapbc.com).

## Codeowners

The contents of this repository are managed by **Nava**. You can contact Nava using this email address: [Income-reporting-project@navapbc.com](mailto:Income-reporting-project@navapbc.com).

## Policies

### Open Source Policy

We adhere to the [CMS Open Source
Policy](https://github.com/CMSGov/cms-open-source-policy). If you have any
questions, just [shoot us an email](mailto:opensource@cms.hhs.gov).

### Security and Responsible Disclosure Policy

*Submit a vulnerability:* Unfortunately, we cannot accept secure submissions via
email or via GitHub Issues. Please use our website to submit vulnerabilities at
[https://hhs.responsibledisclosure.com](https://hhs.responsibledisclosure.com).
HHS maintains an acknowledgements page to recognize your efforts on behalf of
the American public, but you are also welcome to submit anonymously.

For more information about our Security, Vulnerability, and Responsible Disclosure Policies, see [SECURITY.md](SECURITY.md).

## Public domain

This project is in the public domain within the United States, and copyright
and related rights in the work worldwide are waived through the [CC0 1.0
Universal public domain
dedication](https://creativecommons.org/publicdomain/zero/1.0/) as indicated in [LICENSE](LICENSE).

All contributions to this project will be released under the CC0 dedication. By
submitting a pull request or issue, you are agreeing to comply with this waiver
of copyright interest.
 
 ## Core Team 
An up-to-date list of core team members can be found in [MAINTAINERS.md](MAINTAINERS.md). At this time, the project is still building the core team and defining roles and responsibilities. We are eagerly seeking individuals who would like to join the community and help us define and fill these roles. 
 
 ## Documentation Index 
<!-- TODO: This is a like a 'table of contents' for your documentation. Tier 0/1 projects with simple README.md files without many sections may or may not need this, but it is still extremely helpful to provide 'bookmark' or 'anchor' links to specific sections of your file to be referenced in tickets, docs, or other communication channels. --> 
 **{list of .md at top directory and descriptions}** 
 
 ## Repository Structure 
<!-- TODO: Using the 'tree -d' command can be a helpful way to generate this information, but, be sure to update it as the project evolves and changes over time. --> 
 <!--TREE START--><!--TREE END--> 
 **{list directories and descriptions}** 
 
 ## Coding Style and Linters 
<!-- TODO - Add the repo's linting and code style guidelines --> 
 Each application has its own linting and testing guidelines. Lint and code tests are run on each commit, so linters and tests should be run locally before commiting. 
 
 ## Branching Model 
 <!-- TODO - with example below:
 This project follows [trunk-based development](https://trunkbaseddevelopment.com/), which means:

* Make small changes in [short-lived feature branches](https://trunkbaseddevelopment.com/short-lived-feature-branches/) and merge to `main` frequently.
* Be open to submitting multiple small pull requests for a single ticket (i.e. reference the same ticket across multiple pull requests).
* Treat each change you merge to `main` as immediately deployable to production. Do not merge changes that depend on subsequent changes you plan to make, even if you plan to make those changes shortly.
* Ticket any unfinished or partially finished work.
* Tests should be written for changes introduced, and adhere to the text percentage threshold determined by the project.

This project uses **continuous deployment** using [Github Actions](https://github.com/features/actions) which is configured in the [./github/workflows](.github/workflows) directory.

Pull-requests are merged to `main` and the changes are immediately deployed to the development environment. Releases are created to push changes to production.--> 
 
 ## Community 
The {name_of_project_here} team is taking a community-first and open source approach to the product development of this tool. We believe government software should be made in the open and be built and licensed such that anyone can download the code, run it themselves without paying money to third parties or using proprietary software, and use it as they will.

We know that we can learn from a wide variety of communities, including those who will use or will be impacted by the tool, who are experts in technology, or who have experience with similar technologies deployed in other spaces. We are dedicated to creating forums for continuous conversation and feedback to help shape the design and development of the tool.

We also recognize capacity building as a key part of involving a diverse open source community. We are doing our best to use accessible language, provide technical and process documents, and offer support to community members with a wide variety of backgrounds and skillsets. 
 
 ## Community Guidelines 
Principles and guidelines for participating in our open source community are can be found in [COMMUNITY_GUIDELINES.md](COMMUNITY_GUIDELINES.md). Please read them before joining or starting a conversation in this repo or one of the channels listed below. All community members and participants are expected to adhere to the community guidelines and code of conduct when participating in community spaces including: code repositories, communication channels and venues, and events. 
 
 ### Software Bill of Materials (SBOM) 
A Software Bill of Materials (SBOM) is a formal record containing the details and supply chain relationships of various components used in building software.
In the spirit of [Executive Order 14028 - Improving the Nation's Cyber Security](https://www.gsa.gov/technology/it-contract-vehicles-and-purchasing-programs/information-technology-category/it-security/executive-order-14028), a SBOM for this repository is provided here: https://github.com/{repo_org}/{repo_name}/network/dependencies.
For more information and resources about SBOMs, visit: https://www.cisa.gov/sbom.