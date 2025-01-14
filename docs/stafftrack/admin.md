# Staff Track Admin Guide

## Admin Access
In order to get access to the admin panel, you will need to be granted the permission by the site administrator. You can also gain the permission by being assigned a role that has the permission, such as 'Administrator'. Once you have been granted access, you can log in by going to the admin panel at `/admin`.

## Audit Trail
All elements of the site have Audit logs that record all actions taken on the site. This includes changes to staff, sites, roles, tasks and more. You can view the audit logs by viewing the individual models.

## Soft Delete
Several of the models are "soft delete" models. Once deleted, these can still be viewed and restored within the admin area. Using the Filter button on a model, you can choose to view only the deleted items. You can also restore these items if required.

## System Admin

### Manage Rota
Using the page accessible at System Admin > Manage Rota you are able to set key settings for the system.
- FY Start: This where you define the start month and day of your financial year.
- NI / Pension details: These are used for the calculation of estimates of net estimates.
- Day Start Hour: This is the hour that the business day starts. This is used for display purposes.
- Chart Y Size: This is the height of table cells in rem and is used for display purposes.

### Job Role Setup

Job roles are universal, but can be assigned to specific sites. You can add or edit job roles from the System Admin > Job Roles page within the admin area.

#### Adding a new job role

To create a new job role, within the admin area, choose System Admin > Job Role and click the "New Job Role" button. Fill in the required fields and click "Create".

- Colour: This is used to help identify the job role at various points.
- Is Manager: This is used to identify if the job role is a manager role. This will grant user with the role management permissions for the site.
- Back of House: This is used to identify if the job role is a back or front of house role. This is used for reporting purposes.
- Can Undertake: This is used to identify the tasks that the job role can undertake. Generally you would set these as lower level roles. For example a "General Manager" would be able to undertake rota positions as "Bar Staff" but not the the reverse.

Once you have created the job role, you will need to add the job roles that are used at the site.

#### Editing a job role
You can edit a existing site from the System Admin > Sites page within the admin area. With the tabs at the bottom of the page you can update the following.
- Tasks: You can add tasks specific to the job role which will be allocated when staff are invited to the site
- Sites: You can assign the job role to specific sites, with the default pay rate for that site.

### Site Setup
Sites can be added or edited and will need to be set up before you can start tracking staff.

#### Adding a new site
To create a new site, within the admin area, choose System Admin > Sites and click the "New Site" button. Fill in the required fields and click "Create".

- Colour: This is used to help identify the site at various points.
- Labour % Target: This is used for reporting purposes and is the target percentage of sales that should be spent on labour.
- Event Data Feeds: These are used to import data from external sources. Please contact technical support to get these.

Once you have created the site, you will need to add the job roles that are used at the site.

#### Editing a site
You can edit a existing site from the System Admin > Sites page within the admin area. With the tabs at the bottom of the page you can update the following.
- Job Roles: You should add the job roles that are used at the site, with their default pay rates.
- Tasks: You can add tasks specific to the site which will be allocated when staff are invited to the site
- Users: You can view the users that are attached to the site, their roles and pay rates.

### Temp Uploads
This is used to manage temporary uploads. Items within this area are automatically deleted after use or expire after an hour.

## Model Administration
All models are available (within allowed permission) within the admin area. You can view, edit, delete and restore items as required.

**It should be noted that irreversible changes can be made within the admin area and suitable care should be taken**

### Site Events
Site events are the events held a the site. They are synchronised with the site's event data feeds. You can add a Forecast and Sales total to the event. This is used for reporting purposes.

### Adding a new task

To create a new tasks, within the admin area, choose System Admin > Tasks > Tasks and click the "New Task" button. Fill in the required fields and click "Create".

- Type: There are four types of task
    - File Upload: Require a file to be uploaded
        - You must give the task file a unique identifier - this can be done within the "File Upload" box
        - You can require verification but it is not required
    - Verification: A manager of the site is required to verify the task completion, so can be used for offline tasks such as "Completed Induction"
    - Profile Completion: This is used to ensure that the user has completed their profile.
        - You can require verification but it is not required. If "Requires Verification" is not checked, the task will be automatically marked as complete when the user completes their profile.
    - Document Signature: This ties into the signable system - please see the specific area for these details.
- Required For All: This setting will apply this task to all users, irrespective of their job role or site.
- Requires Verification: This setting will require a manager to verify the task completion.
- Required for Rota: This setting will require the task to be completed before the user can be added to the rota.

### Site User Tasks
These models, as named, control the tasks that are assigned to users at a site level. You can add specific tasks to a user at a site level from this model area.

### Other Areas of note
- Roles & Permissions: This is where you can assign ACL roles to users and set the permissions that they have.

## Signable Setup
Signable is used to manage documents that require a signature. Within the admin area under Tasks you can see the Signable Templates. These are your templates as setup directly on [Signable](https://signable.app/). These are assigned to "Document Signature" tasks within the "Document Signing" box.  You can also see Signable Envelopes. These are the envelopes that have been sent to users for signing. You can see the status of these envelopes and "nudge" (resend) them if required.

**Setup of Signable templates is done within [Signable](https://signable.app/) - please see their [documentation](https://help.signable.app/) for more information.**


