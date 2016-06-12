My take on the design of JKAN - lightweight, a backend-free open data portal, powered by Jekyll. Learn more in the original .readme [here](https://github.com/timwis/jkan/blob/gh-pages/README.md).

Read more about the project idea and history [here](https://github.com/open-austin/project-ideas/issues/66)

And check out the [existing design](https://open-austin.org/data-portal)

## Get started

To start the site, run `rake run` in the project directory, and when started go to `http://127.0.0.1:4000/data-portal-new/` in your browser.

## Core Purpose of Site

Enable folks to learn about, discover, and post links to open data.

## User Testing:

Notes on similar platform from [Code for America Regional Data Portal Webinar](https://docs.google.com/presentation/d/1NF_dlY0I9zjSv_ypjEmztj9thqcB-QeTVdmAMp8JwvM/edit#slide=id.g1119e0a0ca_1_62)

1. "It's tough to know where to start as a data user"
    * Overwhelm homepage with newb stuff
    * Trim down categories for data explorer
    * Distinct flows for posting & getting

2. "It's challenging to explain scientific data to non-scientists"
    * State purpose of collection
    * Explain what the metadata means
    * Suggest usage

3. "It's difficult to download an entire dataset and make it useful"
    * Give examples of use
    * Encourage documentation & walkthroughs
    * Encourage guest lectures at meetups

## SWOT
* Strengths
    * Streamlined
    * Simple
    * Lightweight
* Weaknesses
    * Unwelcoming
    * Assumes prior knowledge
    * Doesn't demonstrate value
* Opportunities
    * Welcome users
    * Demonstrate value of open data
    * Help with projects
* Threats
    * Licensing Issues w/ Datasets
    * Complexity
    * Scope Creep

## Design Challenge:

Make the data portal newbie friendly without disrupting the flow of existing users.

Make the design modular so that other cities can fork & replace our content.

## Sitemap

### Before
![](https://github.com/amaliebarras/data-portal-new/blob/gh-pages/Research/Sitemap%20Before.png)

### After
![](https://github.com/amaliebarras/data-portal-new/blob/gh-pages/Research/Sitemap%20New%20v3.png)

## User Stories

As a newbie, I can arrive at the homepage, read about what's going on, see some examples, and feel like I know how to get started.

As a visitor, I can go straight to the portal page to accomplish my task.

As a visitor, I can browse datasets by category and contributor.

As a visitor, I can view projects which correspond to a dataset.

As a visitor, I can figure out how to become a contributor.

As a visitor I can view a resource page to learn how to structure & store data, what tools to use to work with it, & how to get a project off the ground.

As a visitor, I can mark that I've used a dataset.

As a visitor, I can leave an evaluation for a dataset.

As a contributor, I can post a dataset.

As a contributor, I can link to a project I made using a dataset.

## Inspiration

Staying consistent with [Open Austin branding](http://www.open-austin.org/) makes a lot of sense.

[The Opportunity Project](http://opportunity.census.gov/) provides examples of projects to demonstrate the value of open data.

The [City of New York](https://data.cityofnewyork.us/data?cat=public%20safety) data portal is built on socrata but has designed around that. They must be doing something right since they are the #1 place in the US for [open city data](http://us-city.census.okfn.org/).

## Sketches

I decided to build out a homepage and resources page in addition to the portal.

#### Small
![](https://github.com/amaliebarras/data-portal-new/blob/gh-pages/Research/sketches/MobileSketches.png)

#### Medium
![](https://github.com/amaliebarras/data-portal-new/blob/gh-pages/Research/sketches/TabletSketches.png)

#### Large
![](https://github.com/amaliebarras/data-portal-new/blob/gh-pages/Research/sketches/DesktopSketches.png)

## Wireframes

#### Small (Individual files [here](https://github.com/amaliebarras/data-portal-new/tree/gh-pages/Research/Mobile%20Wireframes))

![](https://github.com/amaliebarras/data-portal-new/blob/gh-pages/Research/Mobile%20Wireframes/WireframesSidebySideMobile.png)

#### Medium + (Individual files [here](https://github.com/amaliebarras/data-portal-new/tree/gh-pages/Research/Tablet%20Wireframes))
![](https://github.com/amaliebarras/data-portal-new/blob/gh-pages/Research/Tablet%20Wireframes/WireframesSidebySideLarge.png)

## Mockups

#### Small (Individual files [here](https://github.com/amaliebarras/data-portal-new/tree/gh-pages/Research/Mobile%20Mockups))

![](https://github.com/amaliebarras/data-portal-new/blob/gh-pages/Research/Mobile%20Mockups/MobileMockupsSidebySide.png)

#### Medium + (Individual files [here](https://github.com/amaliebarras/data-portal-new/tree/gh-pages/Research/Large%20Mockups))
![](https://github.com/amaliebarras/data-portal-new/blob/gh-pages/Research/Large%20Mockups/LargeMockupsSidebyside.png)
